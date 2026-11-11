import Link from "next/link";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import {
  FiArrowRight, FiArrowUpRight, FiBookOpen, FiDownload, FiExternalLink,
  FiMail, FiMapPin, FiPhone, FiSend,
} from "react-icons/fi";
import ContactForm from "@/components/ContactForm";
import Shot from "@/components/Shot";
import SkillIcon from "@/components/SkillIcon";
import Socials from "@/components/Socials";
import Typing from "@/components/Typing";
import { about, education, hobbies, me, projects, skills } from "@/data/portfolio";

const wrap = "mx-auto max-w-6xl px-5 py-16 md:py-24";

function Heading({ n, eyebrow, title, sub }: { n: string; eyebrow: string; title: string; sub: string }) {
  return (
    <div className="reveal mb-12 max-w-2xl">
      <p className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        <span className="font-heading text-muted">{n}</span>
        <span className="h-px w-8 bg-accent" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      <p className="mt-4 leading-relaxed text-muted">{sub}</p>
    </div>
  );
}

const techCount = skills.reduce((n, g) => n + g.items.length, 0);
const stats = [
  { value: `${projects.length}`, label: "Featured projects" },
  { value: `${techCount}`, label: "Technologies" },
  { value: education[0].period.slice(-4), label: "BSc in CSE" },
];

const facts = [
  { Icon: FiMapPin, label: "Based in", value: me.address },
  { Icon: FiBookOpen, label: "Studying", value: `${education[0].degree}, ${education[0].institution}` },
  { Icon: FiMail, label: "Email", value: me.email, href: `mailto:${me.email}` },
];

const contacts = [
  { Icon: FiMail, label: "Email", value: me.email, href: `mailto:${me.email}` },
  { Icon: FiPhone, label: "Phone", value: me.phone, href: `tel:${me.phone}` },
  { Icon: FaWhatsapp, label: "WhatsApp", value: me.whatsappDisplay, href: `https://wa.me/${me.whatsapp}`, external: true },
  { Icon: FiMapPin, label: "Location", value: me.address },
];

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section id="home" className="relative">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
        <div className={`${wrap} relative grid items-center gap-14 md:grid-cols-[1.25fr_1fr] md:py-28`}>
          <div>
            <p className="chip animate-rise mb-6 text-xs font-medium sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to work and new projects
            </p>
            <h1 className="animate-rise text-4xl font-bold leading-[1.1] [animation-delay:80ms] sm:text-5xl lg:text-7xl">
              Hi, I&apos;m <span className="gradient-text">{me.name}</span>
            </h1>
            <p className="animate-rise mt-4 min-h-8 font-heading text-xl font-semibold [animation-delay:160ms] sm:text-2xl lg:text-3xl">
              <Typing words={me.roles} />
            </p>
            <p className="animate-rise mt-6 max-w-xl leading-relaxed text-muted [animation-delay:240ms] sm:text-lg">
              {me.intro.replace(/^Hi, I'm Dibosh Sarker, a/, "A")}
            </p>
            <div className="animate-rise mt-8 flex flex-wrap gap-3 [animation-delay:320ms]">
              {/* Add public/resume.pdf and this button downloads it. */}
              <a href={me.resume} download className="btn-primary">
                <FiDownload /> Download Resume
              </a>
              <a href="#contact" className="btn-ghost">
                <FiSend /> Contact Me
              </a>
            </div>
            <div className="animate-rise mt-8 flex items-center gap-4 [animation-delay:400ms]">
              <span className="text-sm text-muted">Find me on</span>
              <span className="h-px w-8 bg-line" />
              <Socials />
            </div>
          </div>

          <div className="animate-rise relative mx-auto w-64 [animation-delay:200ms] sm:w-80 md:w-full md:max-w-sm">
            <div aria-hidden className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 blur-3xl" />
            <div className="relative aspect-square">
              <div aria-hidden className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,var(--primary),var(--accent),transparent_60%,var(--primary))]" />
              <div className="absolute inset-1.5 overflow-hidden rounded-full border-4 border-bg bg-card">
                <Shot file={me.photo} label="DS" className="h-full w-full !text-6xl" />
              </div>
            </div>
            <span className="chip absolute -left-3 top-8 animate-float !bg-card shadow-lg sm:-left-8">
              <SkillIcon name="Next.js" /> Next.js
            </span>
            <span className="chip absolute -right-4 bottom-14 animate-float !bg-card shadow-lg [animation-delay:-2s] sm:-right-8">
              <SkillIcon name="TypeScript" /> TypeScript
            </span>
            <span className="chip absolute -bottom-2 left-6 animate-float !bg-card shadow-lg [animation-delay:-4s]">
              <SkillIcon name="MongoDB" /> MongoDB
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5">
          <dl className="card animate-rise grid grid-cols-3 divide-x divide-line !p-0 [animation-delay:480ms]">
            {stats.map((s) => (
              <div key={s.label} className="px-3 py-5 text-center sm:py-6">
                <dd className="gradient-text font-heading text-2xl font-bold sm:text-4xl">{s.value}</dd>
                <dt className="mt-1 text-xs text-muted sm:text-sm">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section id="about" className={wrap}>
        <Heading
          n="01"
          eyebrow="About me"
          title="Curious by nature, a developer by choice"
          sub="How I got here, the kind of work I love, and what I do when the laptop is closed."
        />
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            {about.map((a, i) => (
              <article key={a.title} className="card reveal">
                <h3 className="mb-3 flex items-center gap-3 text-lg font-semibold">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 font-heading text-sm text-accent">
                    {i + 1}
                  </span>
                  {a.title}
                </h3>
                {a.text.map((p) => (
                  <p key={p} className="mb-3 leading-relaxed text-muted last:mb-0">{p}</p>
                ))}
              </article>
            ))}
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="card reveal">
              <h3 className="mb-4 text-lg font-semibold">Quick facts</h3>
              <ul className="space-y-4">
                {facts.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-accent">
                      <Icon />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wider text-muted">{label}</span>
                      {href ? (
                        <a href={href} className="break-words font-medium transition hover:text-accent">{value}</a>
                      ) : (
                        <span className="font-medium">{value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal">
              <h3 className="mb-4 text-lg font-semibold">Away from the keyboard</h3>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((h) => (
                  <div key={h.title} className="card card-hover !p-4">
                    <div className="text-2xl" aria-hidden>{h.emoji}</div>
                    <p className="mt-2 text-sm font-semibold">{h.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section id="skills" className={wrap}>
        <Heading
          n="02"
          eyebrow="Skills"
          title="The tools I build with"
          sub="My everyday stack, from the first line of markup to the database behind it."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {skills.map((g) => {
            const bars = g.items.filter((s) => s.level);
            const chips = g.items.filter((s) => !s.level);
            return (
              <div key={g.category} className={`card reveal ${bars.length ? "lg:col-span-3" : ""}`}>
                <h3 className="mb-5 flex items-center justify-between text-lg font-semibold">
                  {g.category}
                  <span className="text-xs font-normal text-muted">{g.items.length} skills</span>
                </h3>
                {bars.length > 0 && (
                  <div className="mb-6 grid gap-x-10 gap-y-5 md:grid-cols-2">
                    {bars.map((s) => (
                      <div key={s.name}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="flex items-center gap-2 font-medium">
                            <SkillIcon name={s.name} className="text-lg" /> {s.name}
                          </span>
                          <span className="font-heading text-muted">{s.level}%</span>
                        </div>
                        <div
                          className="h-2 overflow-hidden rounded-full bg-line"
                          role="progressbar"
                          aria-label={s.name}
                          aria-valuenow={s.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="bar h-full rounded-full bg-gradient-to-r from-primary to-accent"
                            style={{ width: `${s.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-3">
                  {chips.map((s) => (
                    <span
                      key={s.name}
                      className="chip !rounded-xl !px-4 !py-2.5 font-medium transition hover:-translate-y-0.5 hover:border-primary/60"
                    >
                      <SkillIcon name={s.name} className="text-lg" /> {s.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- Education ---------- */}
      <section id="education" className={wrap}>
        <Heading
          n="03"
          eyebrow="Education"
          title="Where I studied"
          sub="My academic background in computer science."
        />
        <ol className="relative space-y-8 border-l-2 border-line pl-8 sm:ml-3">
          {education.map((e) => (
            <li key={e.degree} className="reveal relative">
              <span aria-hidden className="absolute -left-[41px] top-6 grid h-5 w-5 place-items-center rounded-full bg-primary ring-4 ring-bg">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>
              <div className="card card-hover">
                <span className="chip !border-primary/40 !bg-primary/10 text-xs !text-accent">{e.period}</span>
                <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{e.degree}</h3>
                <p className="mt-1 text-muted">{e.institution}</p>
                {e.result && <p className="mt-2 text-sm text-muted">Result: {e.result}</p>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- Projects ---------- */}
      <section id="projects" className={wrap}>
        <Heading
          n="04"
          eyebrow="Projects"
          title="Things I've built"
          sub="Three projects that taught me the most. Open any of them for the stack, the challenges and what comes next."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.id} className="card card-hover reveal group flex flex-col overflow-hidden !p-0">
              <div className="relative overflow-hidden">
                <Shot
                  file={p.image}
                  label={p.name}
                  className="aspect-video w-full transition duration-500 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3 flex gap-2">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} live site (opens in a new tab)`}
                    title="Live site"
                    className="grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-primary"
                  >
                    <FiExternalLink />
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} source code on GitHub (opens in a new tab)`}
                    title="Source code"
                    className="grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-primary"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.short}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.slice(0, 3).map((s) => (
                    <li key={s} className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-accent">{s}</li>
                  ))}
                  {p.stack.length > 3 && (
                    <li className="rounded-md bg-line/60 px-2 py-1 text-xs text-muted">+{p.stack.length - 3}</li>
                  )}
                </ul>
                <Link href={`/projects/${p.id}`} className="btn-ghost group/btn mt-6 !py-2.5">
                  View Details
                  <FiArrowRight className="transition group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="reveal mt-10 text-center text-sm text-muted">
          More experiments live on{" "}
          <a href={me.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-accent hover:underline">
            my GitHub <FiArrowUpRight />
          </a>
        </p>
      </section>

      {/* ---------- Contact ---------- */}
      <section id="contact" className={wrap}>
        <Heading
          n="05"
          eyebrow="Contact"
          title="Let's build something together"
          sub="Have a project, a role or just a question? Pick whichever way is easiest. I usually reply within a day."
        />
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="reveal grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {contacts.map(({ Icon, label, value, href, external }) => {
              const inner = (
                <>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-xl text-accent">
                    <Icon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-muted">{label}</span>
                    <span className="block break-words font-medium">{value}</span>
                  </span>
                </>
              );
              const cls = "card flex items-center gap-4 !p-4";
              return href ? (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`${cls} card-hover`}
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className={cls}>{inner}</div>
              );
            })}
          </div>
          <div className="reveal lg:col-span-3">
            <ContactForm email={me.email} />
          </div>
        </div>
      </section>
    </>
  );
}
