import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from "../icons";
import { SITE, NAV_ITEMS } from "../siteConfig";

// Highlights whichever homepage section is currently on screen.
function useActiveSection(enabled) {
  const [active, setActive] = useState("top");

  useEffect(() => {
    if (!enabled) return;
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id === "top" ? "hero" : item.id),
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          const id = visible[0].target.id;
          setActive(id === "hero" ? "top" : id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [enabled]);

  return active;
}

function Monogram() {
  return (
    <a href="#top" className="flex items-center gap-3 min-w-0">
      <span className="w-11 h-11 shrink-0 rounded-[10px] border border-brand text-brand font-mono font-semibold text-base flex items-center justify-center">
        {SITE.initials}
      </span>
      <span className="flex flex-col gap-0.5 min-w-0">
        <span className="font-semibold text-[15px] text-text-primary truncate">
          {SITE.name}
        </span>
        <span className="font-mono text-[11px] tracking-[0.06em] uppercase text-text-dim truncate">
          {SITE.tagline}
        </span>
      </span>
    </a>
  );
}

export function ResumeButton({ className = "" }) {
  return (
    <a
      href={SITE.resumePath}
      download={SITE.resumeDownloadName}
      className={`flex items-center justify-center gap-2 min-h-11 px-4 rounded-lg border border-accent-dim bg-accent/10 text-accent-soft font-mono text-[13px] font-medium tracking-[0.06em] uppercase hover:bg-accent/20 hover:border-accent transition-colors ${className}`}
    >
      <FontAwesomeIcon icon={ICONS.download} aria-hidden="true" />
      Download resume
    </a>
  );
}

export default function Sidebar({ view, isOpen, setIsOpen }) {
  const active = useActiveSection(view === "home");

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden sticky top-0 z-30 h-16 px-4 flex items-center justify-between bg-hmi-rail/95 backdrop-blur border-b border-hmi-border">
        <Monogram />
        <button
          onClick={() => setIsOpen(true)}
          className="w-11 h-11 flex items-center justify-center rounded-lg border border-hmi-border bg-hmi-panel text-text-muted hover:text-text-primary"
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          <FontAwesomeIcon icon={ICONS.menu} />
        </button>
      </div>

      {/* Sidebar — drawer on mobile, sticky column on desktop */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-hmi-rail border-r border-hmi-border flex flex-col gap-7 px-5 py-7 transition-transform duration-300 ease-in-out
          md:sticky md:top-0 md:h-screen md:translate-x-0 md:shrink-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-start justify-between gap-2">
          <Monogram />
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden w-9 h-9 -mr-2 flex items-center justify-center text-text-muted hover:text-text-primary"
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={ICONS.close} />
          </button>
        </div>

        <nav aria-label="Main" className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = view === "home" && active === item.id;
            const isProjectsOnDetail = view === "project" && item.id === "projects";
            const on = isActive || isProjectsOnDetail;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                aria-current={on ? "true" : undefined}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[15px] transition-colors ${
                  on
                    ? "bg-hmi-surface text-text-primary"
                    : "text-text-muted hover:bg-hmi-surface hover:text-text-primary"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    on ? "bg-brand" : "bg-hmi-divider"
                  }`}
                />
                {item.label}
              </a>
            );
          })}
        </nav>

        <ResumeButton />

        <div className="mt-auto pt-4 border-t border-hmi-border font-mono text-[11px] tracking-[0.05em] text-text-dim flex flex-col gap-1.5">
          <span>LOC: TAMPA_BAY_FL</span>
          <span className="flex items-center gap-1.5">
            <span className="w-[7px] h-[7px] rounded-full bg-status-ok" />
            STATUS: ONLINE
          </span>
        </div>
      </aside>
    </>
  );
}
