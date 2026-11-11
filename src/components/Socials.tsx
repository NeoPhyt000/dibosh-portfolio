import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { me } from "@/data/portfolio";

const items = [
  { label: "GitHub", href: me.github, Icon: FaGithub },
  { label: "LinkedIn", href: me.linkedin, Icon: FaLinkedinIn },
  { label: "Facebook", href: me.facebook, Icon: FaFacebookF },
];

export default function Socials() {
  return (
    <div className="flex gap-3">
      {items.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} profile (opens in a new tab)`}
          title={label}
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card/70 text-lg text-muted transition duration-200 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
