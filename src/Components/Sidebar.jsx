import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SECTION_REGISTRY, ACCENT_STYLES } from "../sectionRegistry";
import { ICONS } from "../icons";

export default function Sidebar({
  projects,
  activeProject,
  setActiveProject,
  isOpen,
  setIsOpen,
}) {
  // Shared helper function to cleanly format internal keys to human names
  const formatLabel = (key) => key.replace(/_/g, " ");

  // Track which section ids are expanded. Initialize with whichever
  // section currently contains the active item.
  const getActiveSectionId = (key) => projects[key]?.type;

  const [expandedSections, setExpandedSections] = useState(() => {
    const initial = {};
    const activeType = getActiveSectionId(activeProject);
    SECTION_REGISTRY.forEach((section) => {
      initial[section.id] = section.id === activeType;
    });
    return initial;
  });

  // Keep the active item's section expanded if activeProject changes
  // from somewhere else (e.g. future deep-linking).
  useEffect(() => {
    const activeType = getActiveSectionId(activeProject);
    if (activeType && !expandedSections[activeType]) {
      setExpandedSections((prev) => ({ ...prev, [activeType]: true }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeProject]);

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <aside
      className={`
      fixed inset-y-0 left-0 z-50 w-64 bg-hmi-bg border-r border-hmi-border flex flex-col transition-transform duration-300 ease-in-out
      md:relative md:translate-x-0
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
    `}
    >
      {/* Panel Master Banner */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-hmi-border bg-hmi-bg shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-status-ok animate-pulse"></span>
          <span className="font-display font-bold tracking-wider text-sm text-text-primary">
            HMI_CONTROL_v4.0
          </span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 text-text-muted hover:text-text-primary md:hidden"
        >
          <FontAwesomeIcon icon={ICONS.close} />
        </button>
      </div>

      {/* Main SCADA Node Hierarchy Tree */}
      <nav className="flex-1 p-3 space-y-3 overflow-y-auto select-none">
        {SECTION_REGISTRY.map((section) => {
          const keysInSection = Object.keys(projects).filter(
            (key) => projects[key].type === section.id,
          );
          if (keysInSection.length === 0) return null;

          const styles = ACCENT_STYLES[section.accent];
          const isExpanded = expandedSections[section.id];
          const containsActive = keysInSection.includes(activeProject);

          return (
            <div
              key={section.id}
              className={`rounded-lg border bg-hmi-panel overflow-hidden transition-colors ${
                containsActive ? "border-hmi-divider" : "border-hmi-border"
              }`}
            >
              {/* Module Header — clickable accordion trigger */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-3 py-2.5 flex items-center justify-between gap-2 bg-hmi-surface hover:bg-hmi-surface/70 transition-colors"
                aria-expanded={isExpanded}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      containsActive ? styles.dot : "bg-text-muted/40"
                    }`}
                  ></span>
                  <span className="text-sm leading-none shrink-0 w-4 text-center">
                    <FontAwesomeIcon icon={section.icon} />
                  </span>
                  <span
                    className={`text-[10px] font-black tracking-widest uppercase truncate ${
                      containsActive ? styles.headerActive : "text-text-muted"
                    }`}
                  >
                    {section.label}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${
                      containsActive
                        ? styles.badge
                        : "bg-hmi-bg text-text-muted border-hmi-border"
                    }`}
                  >
                    {keysInSection.length}
                  </span>
                  <span
                    className={`text-[10px] text-text-muted transition-transform duration-200 ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  >
                    ▶
                  </span>
                </div>
              </button>

              {/* Module Body — collapsible item list */}
              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  isExpanded
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-1.5 space-y-1 border-t border-hmi-border">
                    {keysInSection.map((key) => (
                      <button
                        key={key}
                        onClick={() => {
                          setActiveProject(key);
                          setIsOpen(false);
                        }}
                        className={`w-full text-left px-2.5 py-2 rounded-md text-xs transition-all flex justify-between items-center border ${
                          activeProject === key
                            ? styles.itemActive
                            : "bg-transparent text-text-muted border-transparent hover:bg-hmi-bg hover:text-text-primary"
                        }`}
                      >
                        <span className="truncate pr-1">
                          {formatLabel(key)}
                        </span>
                        <span className="text-[9px] opacity-40 font-mono tracking-tighter shrink-0">
                          {projects[key].id}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      {/* Resume Download — standalone CTA, visible from every page since
          some visitors just want the resume, not the full tour. Uses the
          brand accent so it genuinely stands out against the rest of the
          nav rather than blending in as just another register row.
          TODO: drop the real resume PDF into the public/ folder as
          resume.pdf (or update href below to match a different filename).
          The download="" attribute controls the saved filename on the
          visitor's machine — kept separate from the source path so the
          server-side file can stay simply named. */}
      <div className="px-3 pb-3 shrink-0">
        <a
          href="/resume.pdf"
          download="jonathon-gilliam-resume.pdf"
          className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-accent/40 bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase hover:bg-accent/20 hover:border-accent/60 transition-colors"
        >
          <FontAwesomeIcon icon={ICONS.download} aria-hidden="true" />
          Download Resume
        </a>
      </div>

      {/* Frame Environmental Logs */}
      <div className="p-4 border-t border-hmi-border bg-hmi-bg text-[11px] text-text-muted space-y-1 font-mono shrink-0">
        <div>LOC: TAMPA_BAY_FL</div>
        <div>STATUS: LOCAL_HOST</div>
      </div>
    </aside>
  );
}
