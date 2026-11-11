import fs from "fs";
import path from "path";

// Shows public/<file> if it exists, otherwise a tidy placeholder with the label.
// Checked at build time, so adding the file needs a rebuild (or just a refresh in dev).
export default function Shot({ file, label, className = "" }: { file: string; label: string; className?: string }) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", file));
  return exists ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`/${file}`} alt={label} loading="lazy" decoding="async" className={`object-cover object-top ${className}`} />
  ) : (
    <div
      role="img"
      aria-label={label}
      className={`grid place-items-center bg-gradient-to-br from-primary to-accent font-heading text-2xl font-semibold text-white ${className}`}
    >
      {label}
    </div>
  );
}
