import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FiAlertTriangle, FiArrowLeft, FiArrowRight, FiChevronRight, FiExternalLink, FiTrendingUp } from "react-icons/fi";
import Shot from "@/components/Shot";
import SkillIcon from "@/components/SkillIcon";
import { projects } from "@/data/portfolio";

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false; // unknown project ids get the 404 page
export const generateStaticParams = () => projects.map((p) => ({ id: p.id }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const p = projects.find((x) => x.id === id);
  return p ? { title: p.name, description: p.short } : { title: "Project not found" };
}

function List({ title, items, Icon }: { title: string; items: string[]; Icon: typeof FiAlertTriangle }) {
  return (
    <div className="card">
      <h2 className="mb-5 flex items-center gap-3 text-xl font-semibold">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-accent">
          <Icon />
        </span>
        {title}
      </h2>
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i} className="flex gap-3 leading-relaxed text-muted">
            <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const index = projects.findIndex((x) => x.id === id);
  if (index < 0) notFound();
  const p = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const links = (
    <>
      <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
        <FiExternalLink /> Live Site
      </a>
      <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
        <FaGithub /> GitHub (Client)
      </a>
    </>
  );

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
      <nav aria-label="Breadcrumb" className="animate-rise flex flex-wrap items-center gap-2 text-sm text-muted">
        <Link href="/" className="transition hover:text-accent">Home</Link>
        <FiChevronRight aria-hidden />
        <Link href="/#projects" className="transition hover:text-accent">Projects</Link>
        <FiChevronRight aria-hidden />
        <span className="text-fg" aria-current="page">{p.name}</span>
      </nav>

      <header className="animate-rise mt-8 flex flex-col gap-6 [animation-delay:80ms] md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Project {String(index + 1).padStart(2, "0")}
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span className="gradient-text">{p.name}</span>
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted">{p.short}</p>
        </div>
        <div className="flex flex-wrap gap-3">{links}</div>
      </header>

      <div className="animate-rise mt-10 overflow-hidden rounded-3xl border border-line shadow-2xl shadow-primary/20 [animation-delay:160ms]">
        <Shot file={p.image} label={p.name} className="aspect-video w-full !text-4xl" />
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="card">
            <h2 className="mb-4 text-xl font-semibold">About the project</h2>
            <p className="leading-relaxed text-muted">{p.description}</p>
          </div>
          <List title="Challenges faced" items={p.challenges} Icon={FiAlertTriangle} />
          <List title="Improvements and future plans" items={p.improvements} Icon={FiTrendingUp} />
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="card">
            <h2 className="mb-4 text-xl font-semibold">Technology stack</h2>
            <ul className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li key={s} className="chip">
                  <SkillIcon name={s.replace(" (App Router)", "")} /> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2 className="mb-4 text-xl font-semibold">Links</h2>
            <div className="flex flex-col gap-3">{links}</div>
          </div>
        </aside>
      </div>

      <nav aria-label="More projects" className="mt-12 grid gap-4 sm:grid-cols-2">
        <Link href={`/projects/${prev.id}`} className="card card-hover group flex items-center gap-4">
          <FiArrowLeft className="text-xl text-accent transition group-hover:-translate-x-1" />
          <span>
            <span className="block text-xs uppercase tracking-wider text-muted">Previous project</span>
            <span className="font-heading text-lg font-semibold">{prev.name}</span>
          </span>
        </Link>
        <Link href={`/projects/${next.id}`} className="card card-hover group flex items-center justify-end gap-4 text-right">
          <span>
            <span className="block text-xs uppercase tracking-wider text-muted">Next project</span>
            <span className="font-heading text-lg font-semibold">{next.name}</span>
          </span>
          <FiArrowRight className="text-xl text-accent transition group-hover:translate-x-1" />
        </Link>
      </nav>
    </div>
  );
}
