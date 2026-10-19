// Small decorative sketches for the project cards, one per diagramType.
// The full interactive diagrams live in SchematicDiagram.jsx and show on
// each project's own page.

function ExtendoThumb() {
  return (
    <svg viewBox="0 0 340 170" className="w-full h-full" aria-hidden="true">
      <rect
        x="14"
        y="62"
        width="26"
        height="44"
        rx="3"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
      />
      <rect
        x="44"
        y="76"
        width="56"
        height="20"
        fill="none"
        stroke="var(--color-hmi-divider)"
        strokeWidth="1.5"
      />
      <rect
        x="100"
        y="76"
        width="64"
        height="20"
        fill="none"
        stroke="var(--color-hmi-divider)"
        strokeWidth="1.5"
      />
      <rect
        x="164"
        y="76"
        width="64"
        height="20"
        fill="none"
        stroke="var(--color-hmi-divider)"
        strokeWidth="1.5"
      />
      <rect
        x="228"
        y="76"
        width="54"
        height="20"
        fill="none"
        stroke="var(--color-hmi-divider)"
        strokeWidth="1.5"
      />
      <rect
        x="282"
        y="78"
        width="40"
        height="16"
        fill="none"
        stroke="var(--color-brand)"
        strokeWidth="1.5"
      />
      <circle
        cx="282"
        cy="86"
        r="10"
        fill="none"
        stroke="var(--color-brand)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <line
        x1="44"
        y1="104"
        x2="300"
        y2="104"
        stroke="#2a333c"
        strokeWidth="6"
      />
      <path
        d="M160 98 l10 12 M170 98 l-10 12"
        stroke="var(--color-status-alarm)"
        strokeWidth="2"
      />
      <path
        d="M27 108 V136 H310 V100"
        fill="none"
        stroke="var(--color-status-info)"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
    </svg>
  );
}

function SorterThumb() {
  // Three belts in a row; the middle one (SS1_4) runs fast between two
  // photo eyes — the fault from the lost-tracking write-up.
  return (
    <svg viewBox="0 0 340 170" className="w-full h-full" aria-hidden="true">
      <rect
        x="18"
        y="72"
        width="92"
        height="26"
        rx="3"
        fill="none"
        stroke="var(--color-hmi-divider)"
        strokeWidth="1.5"
      />
      <rect
        x="124"
        y="72"
        width="92"
        height="26"
        rx="3"
        fill="none"
        stroke="var(--color-brand)"
        strokeWidth="1.5"
      />
      <rect
        x="230"
        y="72"
        width="92"
        height="26"
        rx="3"
        fill="none"
        stroke="var(--color-hmi-divider)"
        strokeWidth="1.5"
      />
      <path
        d="M150 85 h28 M170 79 l8 6 -8 6"
        fill="none"
        stroke="var(--color-brand)"
        strokeWidth="1.5"
      />
      <path
        d="M182 85 h18 M194 79 l8 6 -8 6"
        fill="none"
        stroke="var(--color-brand)"
        strokeWidth="1.5"
      />
      <line
        x1="132"
        y1="50"
        x2="132"
        y2="120"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <line
        x1="208"
        y1="50"
        x2="208"
        y2="120"
        stroke="var(--color-status-alarm)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      <text
        x="132"
        y="44"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="10"
        fill="var(--color-accent)"
      >
        PE1
      </text>
      <text
        x="208"
        y="44"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="10"
        fill="var(--color-status-alarm)"
      >
        PE2
      </text>
      <text
        x="170"
        y="136"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="11"
        fill="var(--color-brand)"
      >
        SS1_4 · OVER SPEC
      </text>
    </svg>
  );
}

function TestBenchThumb() {
  // Front of an open cabinet: wire duct, drive under test, transformer,
  // controller and terminal strip.
  return (
    <svg viewBox="0 0 340 170" className="w-full h-full" aria-hidden="true">
      <rect
        x="96"
        y="14"
        width="148"
        height="142"
        rx="4"
        fill="none"
        stroke="var(--color-hmi-divider)"
        strokeWidth="1.5"
      />
      <rect
        x="104"
        y="22"
        width="132"
        height="8"
        fill="none"
        stroke="#2a333c"
        strokeWidth="1.5"
      />
      <rect
        x="104"
        y="140"
        width="132"
        height="8"
        fill="none"
        stroke="#2a333c"
        strokeWidth="1.5"
      />
      <rect
        x="112"
        y="40"
        width="38"
        height="58"
        rx="2"
        fill="none"
        stroke="var(--color-brand)"
        strokeWidth="1.5"
      />
      <rect
        x="118"
        y="46"
        width="26"
        height="9"
        fill="var(--color-brand)"
        opacity="0.35"
      />
      <circle
        cx="131"
        cy="70"
        r="6"
        fill="none"
        stroke="var(--color-brand)"
        strokeWidth="1.2"
      />
      <rect
        x="164"
        y="44"
        width="28"
        height="26"
        rx="2"
        fill="none"
        stroke="var(--color-status-alarm)"
        strokeWidth="1.5"
      />
      <path
        d="M170 52 q4 -5 8 0 t8 0 M170 62 q4 -5 8 0 t8 0"
        fill="none"
        stroke="var(--color-status-alarm)"
        strokeWidth="1.2"
      />
      <rect
        x="200"
        y="40"
        width="10"
        height="42"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.3"
      />
      <rect
        x="212"
        y="40"
        width="10"
        height="42"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.3"
      />
      <rect
        x="224"
        y="40"
        width="8"
        height="42"
        fill="none"
        stroke="var(--color-hmi-divider)"
        strokeWidth="1.3"
      />
      <circle cx="205" cy="46" r="1.6" fill="var(--color-status-ok)" />
      <circle cx="217" cy="46" r="1.6" fill="var(--color-status-ok)" />
      {Array.from({ length: 12 }, (_, i) => (
        <rect
          key={i}
          x={112 + i * 10}
          y="112"
          width="7"
          height="18"
          fill="none"
          stroke="var(--color-hmi-divider)"
          strokeWidth="1"
        />
      ))}
      <path
        d="M131 98 V112 M178 70 V112 M211 82 V112"
        stroke="var(--color-status-info)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
    </svg>
  );
}

const THUMBS = {
  TEST_BENCH: { Thumb: TestBenchThumb, label: "Test cabinet" },
  EXTENDO_CONVEYOR: { Thumb: ExtendoThumb, label: "Field equipment diagram" },
  SORTER_BELT_LAYOUT: { Thumb: SorterThumb, label: "Sorter belt layout" },
};

export default function ProjectThumb({ diagramType, className = "" }) {
  const entry = THUMBS[diagramType];
  return (
    <div
      className={`grid-paper relative h-[170px] bg-[#0f1418] border-b border-hmi-border ${className}`}
    >
      {entry ? <entry.Thumb /> : null}
      <span className="absolute left-3.5 bottom-2.5 font-mono text-[10px] uppercase text-text-dim">
        {entry ? entry.label : "Project"}
      </span>
    </div>
  );
}
