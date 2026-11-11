"use client";

import { useEffect, useState } from "react";

// Types and deletes each word in turn. Server render shows the first word in full.
export default function Typing({ words }: { words: string[] }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let w = 0;
    let i = words[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      i += deleting ? -1 : 1;
      setText(words[w].slice(0, i));
      let delay = deleting ? 40 : 85;
      if (!deleting && i === words[w].length) {
        deleting = true;
        delay = 1800; // hold the finished word
      } else if (deleting && i === 0) {
        deleting = false;
        w = (w + 1) % words.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 1800);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <span aria-label={words[0]}>
      <span aria-hidden className="gradient-text">{text}</span>
      <span aria-hidden className="ml-0.5 inline-block h-[1em] w-0.5 translate-y-0.5 animate-blink bg-accent" />
    </span>
  );
}
