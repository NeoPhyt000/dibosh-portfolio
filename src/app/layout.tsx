import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { FiArrowUp } from "react-icons/fi";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import { me } from "@/data/portfolio";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: { default: `${me.name} | ${me.designation}`, template: `%s | ${me.name}` },
  description: me.tagline,
  authors: [{ name: me.name, url: me.github }],
  keywords: [me.name, "Full Stack Developer", "Next.js", "React", "TypeScript", "MongoDB", "Dhaka"],
  openGraph: { title: `${me.name} | ${me.designation}`, description: me.tagline, type: "website" },
};

export const viewport: Viewport = { themeColor: "#070b16" };

const links = ["Home", "About", "Skills", "Education", "Projects", "Contact"];

// Runs before paint so a saved light theme never flashes dark.
const themeScript = `try{if(localStorage.theme==="light")document.documentElement.dataset.theme="light"}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar links={links} logo={me.logo} />
        <main id="main">{children}</main>

        <footer className="mt-24 border-t border-line bg-card/40">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <a href="/#home" className="font-heading text-2xl font-bold tracking-wide">
                {me.logo}
                <span className="text-primary">.</span>
              </a>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{me.tagline}</p>
            </div>
            <nav aria-label="Footer">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-fg">Quick links</p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted">
                {links.map((l) => (
                  <li key={l}>
                    <a href={`/#${l.toLowerCase()}`} className="transition hover:text-accent">{l}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-fg">Connect</p>
              <Socials />
              <a href={`mailto:${me.email}`} className="mt-4 block break-all text-sm text-muted transition hover:text-accent">
                {me.email}
              </a>
            </div>
          </div>
          <div className="border-t border-line">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-5 text-sm text-muted sm:flex-row">
              <p>© 2026 Dibosh Sarker. All rights reserved.</p>
              <a href="#top" className="inline-flex items-center gap-1.5 transition hover:text-accent">
                Back to top <FiArrowUp />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
