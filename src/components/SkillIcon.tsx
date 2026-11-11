import type { IconType } from "react-icons";
import { FiCode, FiShield } from "react-icons/fi";
import {
  SiCss, SiDaisyui, SiEslint, SiExpress, SiFigma, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiMysql,
  SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript, SiVercel, SiJsonwebtokens,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Skill name -> [icon, brand colour]. Unknown names fall back to a code icon.
const map: Record<string, [IconType, string]> = {
  HTML: [SiHtml5, "#e34f26"],
  CSS: [SiCss, "#8b5cf6"],
  daisyUI: [SiDaisyui, "#1ad1a5"],
  JWT: [SiJsonwebtokens, "#d63aff"],
  Vercel: [SiVercel, "currentColor"],
  ESLint: [SiEslint, "#4b32c3"],
  "Tailwind CSS": [SiTailwindcss, "#38bdf8"],
  JavaScript: [SiJavascript, "#eab308"],
  React: [SiReact, "#38bdf8"],
  "Next.js": [SiNextdotjs, "currentColor"],
  TypeScript: [SiTypescript, "#3178c6"],
  "Better Auth": [FiShield, "currentColor"],
  "Node.js": [SiNodedotjs, "#5fa04e"],
  Express: [SiExpress, "currentColor"],
  MongoDB: [SiMongodb, "#47a248"],
  MySQL: [SiMysql, "#4479a1"],
  Git: [SiGit, "#f05032"],
  GitHub: [SiGithub, "currentColor"],
  "VS Code": [VscVscode, "#0ea5e9"],
  Figma: [SiFigma, "#f24e1e"],
};

export default function SkillIcon({ name, className = "" }: { name: string; className?: string }) {
  const [Icon, color] = map[name] ?? [FiCode, "currentColor"];
  return <Icon aria-hidden className={className} style={{ color }} />;
}
