import { SITE } from "../siteConfig";

export default function Footer() {
  return (
    <footer className="mt-20 pt-6 border-t border-hmi-border flex flex-wrap justify-between gap-3 font-mono text-xs uppercase text-text-dim">
      <span>
        © {new Date().getFullYear()} {SITE.name} · jgilliam.me
      </span>
      <span>Built with React + Tailwind</span>
    </footer>
  );
}
