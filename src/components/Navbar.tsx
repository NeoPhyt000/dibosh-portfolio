"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  try {
    localStorage.theme = next;
  } catch {}
}

export default function Navbar({ links, logo }: { links: string[]; logo: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Highlight the link of the section currently in the middle of the screen.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Close the phone menu with Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const item = (l: string, mobile = false) => {
    const id = l.toLowerCase();
    const on = active === id;
    return (
      <a
        key={l}
        href={`/#${id}`}
        onClick={() => setOpen(false)}
        aria-current={on ? "true" : undefined}
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${mobile ? "block" : ""} ${
          on ? "bg-primary/15 text-accent" : "text-muted hover:text-fg"
        }`}
      >
        {l}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="/#home" className="font-heading text-xl font-bold tracking-wide">
          {logo}
          <span className="text-primary">.</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((l) => item(l))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Switch between dark and light theme"
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card/60 text-lg text-muted transition hover:border-primary/70 hover:text-fg"
          >
            <FiSun className="light:hidden" />
            <FiMoon className="hidden light:block" />
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card/60 text-xl md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Phone menu: slides open with a grid-rows transition. */}
      <div className={`grid transition-[grid-template-rows] duration-300 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <nav aria-label="Mobile" className="overflow-hidden" inert={!open}>
          <div className="space-y-1 border-t border-line px-5 py-3">{links.map((l) => item(l, true))}</div>
        </nav>
      </div>

      {/* Reading progress line (CSS only, hidden where unsupported). */}
      <div className="progress absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent" />
    </header>
  );
}
