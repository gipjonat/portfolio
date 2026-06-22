// CareerTimeline.jsx
// Fully responsive HTML/CSS career timeline — works from 320px to ultrawide.
// On md+ screens: horizontal rail with alternating above/below cards (matches
// the original SVG design). On mobile (<md): vertical stacked list with a
// left-rail connector, which is the natural reading direction on narrow screens.
// Uses only Tailwind utility classes + inline CSS vars for HMI theme colors.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from "../icons";

const TIMELINE_ENTRIES = [
  {
    id: "ARMY",
    period: "OCT 2019 – OCT 2025",
    role: "91D · Power Gen Mechanic",
    org: "U.S. Army",
    location: "FL National Guard",
    colorClass: "text-status-warn",
    borderClass: "border-status-warn",
    bgClass: "bg-status-warn/10",
    dotClass: "bg-status-warn",
    ringClass: "ring-status-warn",
    current: false,
  },
  {
    id: "AMAZON_1",
    period: "JAN 2022 – JUL 2024",
    role: "Maintenance Tech II",
    org: "Amazon",
    location: "Seffner, FL",
    colorClass: "text-status-info",
    borderClass: "border-status-info",
    bgClass: "bg-status-info/10",
    dotClass: "bg-status-info",
    ringClass: "ring-status-info",
    current: false,
  },
  {
    id: "AMAZON_2",
    period: "JUL 2024 – DEC 2025",
    role: "Maintenance Tech III",
    org: "Amazon",
    location: "Tampa, FL",
    colorClass: "text-status-info",
    borderClass: "border-status-info",
    bgClass: "bg-status-info/10",
    dotClass: "bg-status-info",
    ringClass: "ring-status-info",
    current: false,
  },
  {
    id: "FEDEX",
    period: "DEC 2025 – PRESENT",
    role: "Maintenance Tech III",
    org: "FedEx",
    location: "St. Pete, FL",
    colorClass: "text-status-ok",
    borderClass: "border-status-ok",
    bgClass: "bg-status-ok/10",
    dotClass: "bg-status-ok",
    ringClass: "ring-status-ok",
    current: true,
  },
];

const HIGHLIGHTS = {
  ARMY: ["Field diagnostics", "GSE maintenance", "Hydraulic systems"],
  AMAZON_1: ["Robotics repair", "Conveyor systems", "Controls faults"],
  AMAZON_2: ["Shift lead", "PSC resets", "Cross-team fault resolution"],
  FEDEX: ["PLC / ladder logic", "VFD diagnostics", "OSHA QED"],
};

// ── Single card — shared by both layouts ─────────────────────────────────────
function TimelineCard({ entry, above }) {
  const highlights = HIGHLIGHTS[entry.id];
  return (
    <div
      className={`
        relative rounded-lg border font-mono text-xs overflow-hidden min-w-0
        ${entry.borderClass}
        ${entry.current ? entry.bgClass : "bg-hmi-surface"}
        ${entry.current ? "border-2" : "border opacity-90"}
        w-full
      `}
    >
      {/* Period header strip */}
      <div
        className={`
          px-2.5 py-1.5 rounded-t-lg text-[9px] font-black tracking-widest uppercase
          ${entry.current ? entry.colorClass : "text-text-muted"}
          ${entry.current ? entry.bgClass : "bg-hmi-bg/40"}
          border-b ${entry.current ? entry.borderClass : "border-hmi-border"}
        `}
      >
        {entry.period}
        {entry.current && (
          <span className={`ml-2 ${entry.colorClass} animate-pulse`}>
            ◆ ACTIVE
          </span>
        )}
      </div>

      {/* Body */}
      <div className="px-3 py-2.5 space-y-1.5">
        <div
          className={`font-black text-[12px] text-text-primary leading-tight`}
        >
          {entry.role}
        </div>
        <div className={`font-bold text-[10px] ${entry.colorClass}`}>
          {entry.org}
        </div>
        <div className="text-[9px] text-text-muted">{entry.location}</div>

        <div className="border-t border-hmi-border pt-1.5 mt-1.5 space-y-1">
          {highlights.map((hl, i) => (
            <div
              key={i}
              className="text-[9px] text-text-muted flex items-center gap-1.5"
            >
              <span className={`${entry.colorClass} opacity-60`}>·</span>
              {hl}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Desktop: horizontal rail, alternating above/below ────────────────────────
function DesktopTimeline() {
  return (
    <div className="hidden md:block">
      {/* Card rows: above-rail cards on top, below-rail cards on bottom,
          rail + nodes in the middle */}
      <div className="flex items-end" style={{ minHeight: "160px" }}>
        {TIMELINE_ENTRIES.map((entry, i) => {
          const above = i % 2 === 0;
          return (
            <div key={entry.id} className="flex-1 px-2">
              {above ? <TimelineCard entry={entry} above={true} /> : <div />}
            </div>
          );
        })}
      </div>

      {/* Rail row */}
      <div className="relative flex items-center" style={{ height: "40px" }}>
        {/* Full-width background rail */}
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5"
          style={{ background: "var(--color-hmi-divider)" }}
        />

        {/* 2019 label */}
        <span
          className="absolute left-0 text-[9px] font-mono text-text-muted"
          style={{ transform: "translateX(8px) translateY(10px)" }}
        >
          2019
        </span>

        {/* NOW label */}
        <span
          className="absolute right-0 text-[9px] font-mono text-status-ok font-bold"
          style={{ transform: "translateX(-8px) translateY(10px)" }}
        >
          NOW
        </span>

        {/* Nodes — evenly spaced using flex */}
        {TIMELINE_ENTRIES.map((entry, i) => (
          <div
            key={entry.id}
            className="flex-1 flex justify-center relative z-10"
          >
            {/* Connector stub above or below */}
            <div
              className={`absolute w-px ${entry.current ? "" : "opacity-50"}`}
              style={{
                background: `var(--color-${entry.dotClass.replace("bg-", "")})`,
                height: "12px",
                ...(i % 2 === 0
                  ? { bottom: "calc(50% + 10px)" }
                  : { top: "calc(50% + 10px)" }),
              }}
            />
            {/* Node ring */}
            <div
              className={`
                w-5 h-5 rounded-full border-2 flex items-center justify-center
                ${entry.borderClass}
                bg-hmi-bg relative z-10
              `}
            >
              <div
                className={`
                  rounded-full
                  ${entry.dotClass}
                  ${entry.current ? "w-2.5 h-2.5 animate-pulse" : "w-2 h-2 opacity-70"}
                `}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Below-rail cards */}
      <div className="flex items-start" style={{ minHeight: "160px" }}>
        {TIMELINE_ENTRIES.map((entry, i) => {
          const above = i % 2 === 0;
          return (
            <div key={entry.id} className="flex-1 px-2">
              {!above ? <TimelineCard entry={entry} above={false} /> : <div />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Mobile: vertical stacked list with left rail ──────────────────────────────
function MobileTimeline() {
  return (
    <div className="md:hidden space-y-0">
      {TIMELINE_ENTRIES.map((entry, i) => {
        const isLast = i === TIMELINE_ENTRIES.length - 1;
        return (
          <div key={entry.id} className="flex gap-3">
            {/* Left rail + node */}
            <div
              className="flex flex-col items-center shrink-0"
              style={{ width: "20px" }}
            >
              <div
                className={`
                  w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0
                  ${entry.borderClass} bg-hmi-bg z-10
                `}
              >
                <div
                  className={`
                    rounded-full ${entry.dotClass}
                    ${entry.current ? "w-2.5 h-2.5 animate-pulse" : "w-2 h-2 opacity-70"}
                  `}
                />
              </div>
              {!isLast && (
                <div
                  className="flex-1 w-px mt-1"
                  style={{
                    background: "var(--color-hmi-divider)",
                    minHeight: "16px",
                  }}
                />
              )}
            </div>

            {/* Card */}
            <div className={`flex-1 pb-4 ${isLast ? "" : ""}`}>
              <TimelineCard entry={entry} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Legend ────────────────────────────────────────────────────────────────────
function Legend() {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-1.5 pt-3 border-t border-hmi-border text-[10px] font-mono text-text-muted">
      <span className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-status-ok" /> Current Position
      </span>
      <span className="flex items-center gap-1.5">
        <span
          className="w-4 h-px inline-block"
          style={{
            background: "var(--color-text-muted)",
            borderTop: "1px dashed var(--color-text-muted)",
          }}
        />
        Prior Role
      </span>
      <span className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-status-warn" /> Military
        Service
      </span>
    </div>
  );
}

// ── Root export ───────────────────────────────────────────────────────────────
export default function CareerTimeline() {
  return (
    <div className="space-y-3">
      <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
        <FontAwesomeIcon icon={ICONS.registerMap} />
        Service &amp; Employment Register — Chronological
      </h3>
      <div className="p-4 md:p-6 bg-hmi-bg border border-hmi-border rounded-xl">
        <DesktopTimeline />
        <MobileTimeline />
        <Legend />
      </div>
    </div>
  );
}
