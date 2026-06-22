// Inline SVG schematic diagrams for project detail pages. Uses CSS custom
// properties (var(--color-*)) instead of hardcoded hex so diagrams stay in
// sync automatically if the theme palette changes in index.css.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from "../icons";

function NetworkTopologyDiagram() {
  return (
    <svg
      viewBox="0 0 760 320"
      className="w-full h-auto"
      role="img"
      aria-label="Ring topology network diagram"
    >
      <title>Plant network ring topology (REP)</title>
      {/* Ring connections */}
      <g
        fill="none"
        stroke="var(--color-status-info)"
        strokeWidth="2"
        opacity="0.6"
      >
        <path d="M 380 80 L 620 130" />
        <path d="M 620 130 L 560 260" />
        <path d="M 560 260 L 200 260" />
        <path d="M 200 260 L 140 130" />
        <path d="M 140 130 L 380 80" />
      </g>
      <g fill="var(--color-status-info)" opacity="0.8">
        <circle cx="500" cy="105" r="3" />
        <circle cx="590" cy="195" r="3" />
        <circle cx="380" cy="260" r="3" />
        <circle cx="170" cy="195" r="3" />
        <circle cx="260" cy="105" r="3" />
      </g>
      <g>
        <rect
          x="320"
          y="40"
          width="120"
          height="56"
          rx="6"
          fill="var(--color-hmi-surface)"
          stroke="var(--color-accent)"
          strokeWidth="2"
        />
        <text
          x="380"
          y="64"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="13"
          fontWeight="700"
          fill="var(--color-accent)"
        >
          MAIN MDF
        </text>
        <text
          x="380"
          y="80"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="var(--color-text-muted)"
        >
          Core L3 Switch
        </text>
      </g>
      {[
        { x: 560, y: 105, label: "ZONE PANEL 1", sub: "Stratix 5400" },
        { x: 500, y: 235, label: "ZONE PANEL 2", sub: "Stratix 5400" },
        { x: 260, y: 235, label: "ZONE PANEL 3", sub: "Stratix 5400" },
        { x: 200, y: 105, label: "ZONE PANEL 4", sub: "Stratix 5400" },
      ].map((node, i) => (
        <g key={i}>
          <rect
            x={node.x - 60}
            y={node.y - 28}
            width="120"
            height="56"
            rx="6"
            fill="var(--color-hmi-surface)"
            stroke="var(--color-hmi-divider)"
            strokeWidth="1.5"
          />
          <text
            x={node.x}
            y={node.y - 4}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="11"
            fontWeight="700"
            fill="var(--color-text-primary)"
          >
            {node.label}
          </text>
          <text
            x={node.x}
            y={node.y + 12}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="9"
            fill="var(--color-text-muted)"
          >
            {node.sub}
          </text>
        </g>
      ))}
      <g fontFamily="var(--font-mono)" fontSize="10">
        <circle cx="40" cy="300" r="4" fill="var(--color-status-ok)" />
        <text x="52" y="304" fill="var(--color-text-muted)">
          VLAN 10 — Machine I/O
        </text>
        <circle cx="220" cy="300" r="4" fill="var(--color-status-warn)" />
        <text x="232" y="304" fill="var(--color-text-muted)">
          VLAN 20 — Enterprise
        </text>
        <line
          x1="400"
          y1="300"
          x2="424"
          y2="300"
          stroke="var(--color-status-info)"
          strokeWidth="2"
        />
        <text x="432" y="304" fill="var(--color-text-muted)">
          REP Ring Path
        </text>
      </g>
    </svg>
  );
}

function SafetyInterlockDiagram() {
  return (
    <svg
      viewBox="0 0 760 300"
      className="w-full h-auto"
      role="img"
      aria-label="Category 4 dual-channel safety interlock diagram"
    >
      <title>Dual-channel Category 4 safety interlock circuit</title>
      <g fontFamily="var(--font-mono)">
        <rect
          x="30"
          y="40"
          width="130"
          height="44"
          rx="6"
          fill="var(--color-hmi-surface)"
          stroke="var(--color-status-ok)"
          strokeWidth="1.5"
        />
        <text
          x="95"
          y="58"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="var(--color-text-primary)"
        >
          LIGHT CURTAIN
        </text>
        <text
          x="95"
          y="72"
          textAnchor="middle"
          fontSize="9"
          fill="var(--color-status-ok)"
        >
          Channel A
        </text>
        <rect
          x="30"
          y="200"
          width="130"
          height="44"
          rx="6"
          fill="var(--color-hmi-surface)"
          stroke="var(--color-status-ok)"
          strokeWidth="1.5"
        />
        <text
          x="95"
          y="218"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="var(--color-text-primary)"
        >
          LIGHT CURTAIN
        </text>
        <text
          x="95"
          y="232"
          textAnchor="middle"
          fontSize="9"
          fill="var(--color-status-ok)"
        >
          Channel B
        </text>
      </g>
      <g fill="none" stroke="var(--color-status-ok)" strokeWidth="2">
        <path d="M 160 62 L 220 62 L 220 130 L 280 130" />
        <path d="M 160 222 L 220 222 L 220 154 L 280 154" />
      </g>
      <rect
        x="280"
        y="100"
        width="140"
        height="84"
        rx="6"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-accent)"
        strokeWidth="2"
      />
      <text
        x="350"
        y="136"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="12"
        fontWeight="700"
        fill="var(--color-accent)"
      >
        SAFETY PLC
      </text>
      <text
        x="350"
        y="152"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--color-text-muted)"
      >
        GuardLogix
      </text>
      <text
        x="350"
        y="168"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--color-text-muted)"
      >
        Cat. 4 / PLe
      </text>
      <g fill="none" stroke="var(--color-status-alarm)" strokeWidth="2">
        <path d="M 420 130 L 480 130 L 480 90 L 540 90" />
        <path d="M 420 154 L 480 154 L 480 194 L 540 194" />
      </g>
      <g fontFamily="var(--font-mono)">
        <rect
          x="540"
          y="66"
          width="110"
          height="48"
          rx="6"
          fill="var(--color-hmi-surface)"
          stroke="var(--color-status-alarm)"
          strokeWidth="1.5"
        />
        <text
          x="595"
          y="86"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="var(--color-text-primary)"
        >
          K1
        </text>
        <text
          x="595"
          y="100"
          textAnchor="middle"
          fontSize="9"
          fill="var(--color-text-muted)"
        >
          Contactor
        </text>
        <rect
          x="540"
          y="170"
          width="110"
          height="48"
          rx="6"
          fill="var(--color-hmi-surface)"
          stroke="var(--color-status-alarm)"
          strokeWidth="1.5"
        />
        <text
          x="595"
          y="190"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="var(--color-text-primary)"
        >
          K2
        </text>
        <text
          x="595"
          y="204"
          textAnchor="middle"
          fontSize="9"
          fill="var(--color-text-muted)"
        >
          Contactor
        </text>
      </g>
      <g fill="none" stroke="var(--color-status-alarm)" strokeWidth="2">
        <path d="M 650 90 L 690 90 L 690 142 L 650 142" />
        <path d="M 650 194 L 690 194 L 690 142" />
      </g>
      <circle cx="700" cy="142" r="3" fill="var(--color-status-alarm)" />
      <text
        x="700"
        y="125"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--color-text-muted)"
      >
        Motor
      </text>
      <text
        x="700"
        y="115"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--color-text-muted)"
      >
        Power
      </text>
      <path
        d="M 595 114 L 595 250 L 350 250 L 350 184"
        fill="none"
        stroke="var(--color-status-info)"
        strokeWidth="1.5"
        strokeDasharray="5,4"
      />
      <path
        d="M 595 218 L 595 264 L 350 264 L 350 184"
        fill="none"
        stroke="var(--color-status-info)"
        strokeWidth="1.5"
        strokeDasharray="5,4"
      />
      <text
        x="472"
        y="280"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--color-status-info)"
      >
        FEEDBACK MONITOR — confirms both contactors open before restart
        permissive
      </text>
    </svg>
  );
}

function ExtendoConveyorDiagram() {
  // All Y positions derived from these constants so layout stays coherent
  const BELT_TOP = 160; // top edge of all belt sections
  const BELT_H = 28; // belt section height
  const FRAME_H = 6; // undercarriage rail
  const CARRIER_Y = BELT_TOP + BELT_H + FRAME_H + 6; // 200
  const CARRIER_H = 10;
  const CALLOUT_Y = CARRIER_Y + CARRIER_H + 10; // carrier failure box top
  const CALLOUT_H = 30;
  const FLOOR_Y = CALLOUT_Y + CALLOUT_H + 60; // floor line — extra space for harness route

  const sections = [
    { x: 122, w: 148, stroke: "var(--color-hmi-divider)", label: "SECTION 1" },
    { x: 270, w: 148, stroke: "var(--color-hmi-border)", label: "SECTION 2" },
    { x: 418, w: 148, stroke: "var(--color-hmi-border)", label: "SECTION 3" },
  ];
  const ribCount = (w) => Math.floor((w - 10) / 11);

  return (
    <svg
      viewBox="0 0 760 400"
      className="w-full h-auto min-w-[560px]"
      role="img"
      aria-label="Caljan Performer telescopic conveyor side-elevation"
    >
      <title>Caljan Performer — Extendo conveyor component layout</title>

      {/* ── LEGEND ── */}
      <rect
        x="30"
        y="8"
        width="700"
        height="20"
        rx="3"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-hmi-border)"
        strokeWidth="1"
        opacity="0.8"
      />
      <g fontFamily="var(--font-mono)" fontSize="8">
        <rect
          x="40"
          y="13"
          width="10"
          height="8"
          rx="1"
          fill="var(--color-hmi-bg)"
          stroke="var(--color-hmi-divider)"
          strokeWidth="1"
        />
        <text x="56" y="21" fill="var(--color-text-muted)">
          Belt
        </text>
        <line
          x1="96"
          y1="17"
          x2="116"
          y2="17"
          stroke="var(--color-status-alarm)"
          strokeWidth="1.5"
          strokeDasharray="3,2"
        />
        <circle
          cx="126"
          cy="17"
          r="5"
          fill="none"
          stroke="var(--color-status-alarm)"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="136" y="21" fill="var(--color-status-alarm)">
          Carrier Failure
        </text>
        <circle
          cx="248"
          cy="17"
          r="5"
          fill="none"
          stroke="var(--color-status-warn)"
          strokeWidth="1"
          strokeDasharray="2,2"
        />
        <text x="258" y="21" fill="var(--color-status-warn)">
          Limit Switch
        </text>
        <line
          x1="344"
          y1="17"
          x2="364"
          y2="17"
          stroke="var(--color-status-info)"
          strokeWidth="1.5"
          strokeDasharray="4,2"
        />
        <text x="370" y="21" fill="var(--color-status-info)">
          Harness Route
        </text>
        <rect
          x="458"
          y="12"
          width="10"
          height="9"
          rx="1"
          fill="var(--color-hmi-surface)"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
        />
        <text x="474" y="21" fill="var(--color-text-muted)">
          Control Panel
        </text>
        <rect
          x="554"
          y="12"
          width="10"
          height="9"
          rx="1"
          fill="var(--color-hmi-surface)"
          stroke="var(--color-status-warn)"
          strokeWidth="1.5"
        />
        <text x="570" y="21" fill="var(--color-status-warn)">
          Snoot / Boom
        </text>
      </g>

      {/* ── FLOOR LINE ── paint early, everything sits on top ── */}
      <line
        x1="30"
        y1={FLOOR_Y}
        x2="730"
        y2={FLOOR_Y}
        stroke="var(--color-hmi-border)"
        strokeWidth="1"
        strokeDasharray="4,4"
      />
      <text
        x="650"
        y={FLOOR_Y + 12}
        fontFamily="var(--font-mono)"
        fontSize="8"
        fill="var(--color-text-muted)"
      >
        FLOOR LEVEL
      </text>

      {/* ── BASE UNIT — hydraulic column ── */}
      {/* 1. Main column body */}
      <rect
        x="30"
        y={BELT_TOP - 30}
        width="36"
        height={BELT_H + 30 + FRAME_H}
        rx="3"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-accent)"
        strokeWidth="2"
      />
      {/* 2. Divider line */}
      <line
        x1="30"
        y1={BELT_TOP - 12}
        x2="66"
        y2={BELT_TOP - 12}
        stroke="var(--color-accent)"
        strokeWidth="1"
        opacity="0.4"
      />
      {/* 3. Top panel header box */}
      <rect
        x="31"
        y={BELT_TOP - 29}
        width="34"
        height="17"
        rx="2"
        fill="var(--color-hmi-bg)"
        stroke="none"
      />
      {/* 4. HYD label and status dot — painted on top of boxes */}
      <text
        x="48"
        y={BELT_TOP - 22}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="6"
        fontWeight="700"
        fill="var(--color-accent)"
      >
        CONTROL
      </text>
      <text
        x="48"
        y={BELT_TOP - 13}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="6"
        fontWeight="700"
        fill="var(--color-accent)"
      >
        PANEL
      </text>
      <circle
        cx="48"
        cy={BELT_TOP - 9}
        r="3"
        fill="var(--color-status-ok)"
        opacity="0.9"
      />
      {/* 5. Wheels */}
      <circle
        cx="40"
        cy={FLOOR_Y}
        r="7"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-hmi-divider)"
        strokeWidth="1.5"
      />
      <circle
        cx="58"
        cy={FLOOR_Y}
        r="7"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-hmi-divider)"
        strokeWidth="1.5"
      />

      {/* ── FIXED BASE BELT ── */}
      <rect
        x="66"
        y={BELT_TOP}
        width="56"
        height={BELT_H}
        rx="2"
        fill="var(--color-hmi-bg)"
        stroke="var(--color-hmi-divider)"
        strokeWidth="2"
      />
      {Array.from({ length: 4 }).map((_, i) => (
        <line
          key={i}
          x1={72 + i * 12}
          y1={BELT_TOP}
          x2={72 + i * 12}
          y2={BELT_TOP + BELT_H}
          stroke="var(--color-hmi-border)"
          strokeWidth="0.5"
          opacity="0.5"
        />
      ))}
      <ellipse
        cx="70"
        cy={BELT_TOP + BELT_H / 2}
        rx="5"
        ry={BELT_H / 2}
        fill="var(--color-hmi-surface)"
        stroke="var(--color-hmi-divider)"
        strokeWidth="1.5"
      />
      <rect
        x="66"
        y={BELT_TOP + BELT_H}
        width="56"
        height={FRAME_H}
        rx="1"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-hmi-border)"
        strokeWidth="1"
      />
      <rect
        x="74"
        y={BELT_TOP + BELT_H + FRAME_H}
        width="7"
        height="20"
        rx="1"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-hmi-border)"
        strokeWidth="1"
      />
      <rect
        x="107"
        y={BELT_TOP + BELT_H + FRAME_H}
        width="7"
        height="20"
        rx="1"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-hmi-border)"
        strokeWidth="1"
      />

      {/* ── TELESCOPING SECTIONS ── */}
      {sections.map((s, si) => (
        <g key={si}>
          <rect
            x={s.x}
            y={BELT_TOP}
            width={s.w}
            height={BELT_H}
            rx="2"
            fill="var(--color-hmi-bg)"
            stroke={s.stroke}
            strokeWidth="1.5"
          />
          {Array.from({ length: ribCount(s.w) }).map((_, i) => (
            <line
              key={i}
              x1={s.x + 6 + i * 11}
              y1={BELT_TOP}
              x2={s.x + 6 + i * 11}
              y2={BELT_TOP + BELT_H}
              stroke="var(--color-hmi-border)"
              strokeWidth="0.5"
              opacity="0.4"
            />
          ))}
          <rect
            x={s.x}
            y={BELT_TOP + BELT_H}
            width={s.w}
            height={FRAME_H}
            rx="1"
            fill="var(--color-hmi-surface)"
            stroke="var(--color-hmi-border)"
            strokeWidth="1"
          />
          <ellipse
            cx={s.x + s.w - 2}
            cy={BELT_TOP + BELT_H / 2}
            rx="4"
            ry={BELT_H / 2 - 2}
            fill="var(--color-hmi-surface)"
            stroke={s.stroke}
            strokeWidth="1.5"
          />
          {si < 2 && (
            <rect
              x={s.x + s.w / 2 - 3}
              y={BELT_TOP + BELT_H + FRAME_H}
              width="6"
              height="18"
              rx="1"
              fill="var(--color-hmi-surface)"
              stroke="var(--color-hmi-border)"
              strokeWidth="1"
            />
          )}
        </g>
      ))}

      {/* ── CABLE CARRIER ── paint before snoot so snoot overlaps it ── */}
      <rect
        x="66"
        y={CARRIER_Y}
        width="600"
        height={CARRIER_H}
        rx="2"
        fill="var(--color-hmi-bg)"
        stroke="var(--color-hmi-border)"
        strokeWidth="1"
      />
      {Array.from({ length: 29 }).map((_, i) => (
        <rect
          key={i}
          x={70 + i * 20}
          y={CARRIER_Y + 1}
          width="16"
          height={CARRIER_H - 2}
          rx="1"
          fill="var(--color-hmi-surface)"
          stroke="var(--color-hmi-divider)"
          strokeWidth="0.8"
          opacity="0.8"
        />
      ))}
      {/* Failure marker */}
      <circle
        cx="370"
        cy={CARRIER_Y + CARRIER_H / 2}
        r="10"
        fill="var(--color-status-alarm)"
        opacity="0.15"
        stroke="var(--color-status-alarm)"
        strokeWidth="1.5"
        strokeDasharray="2,2"
      />
      <text
        x="370"
        y={CARRIER_Y + CARRIER_H / 2 + 4}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fontWeight="700"
        fill="var(--color-status-alarm)"
      >
        ✕
      </text>
      {/* Callout stem — straight down to box */}
      <line
        x1="370"
        y1={CARRIER_Y + CARRIER_H + 2}
        x2="370"
        y2={CALLOUT_Y}
        stroke="var(--color-status-alarm)"
        strokeWidth="1"
        opacity="0.8"
      />
      {/* Callout box — wide enough for both lines of text */}
      <rect
        x="272"
        y={CALLOUT_Y}
        width="196"
        height={CALLOUT_H}
        rx="3"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-status-alarm)"
        strokeWidth="1.5"
      />
      <text
        x="370"
        y={CALLOUT_Y + 12}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="8"
        fontWeight="700"
        fill="var(--color-status-alarm)"
      >
        CARRIER FAILURE
      </text>
      <text
        x="370"
        y={CALLOUT_Y + 23}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="7.5"
        fill="var(--color-text-muted)"
      >
        Cable pulled free under tension
      </text>

      {/* ── SNOOT / BOOM TIP ── paint after carrier ── */}
      <circle
        cx="566"
        cy={BELT_TOP + BELT_H / 2}
        r="7"
        fill="var(--color-hmi-bg)"
        stroke="var(--color-status-warn)"
        strokeWidth="2"
      />
      <circle
        cx="566"
        cy={BELT_TOP + BELT_H / 2}
        r="3"
        fill="var(--color-status-warn)"
        opacity="0.7"
      />
      <rect
        x="566"
        y={BELT_TOP + 4}
        width="100"
        height={BELT_H - 8}
        rx="2"
        fill="var(--color-hmi-bg)"
        stroke="var(--color-status-warn)"
        strokeWidth="1.5"
      />
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={572 + i * 28}
          y={BELT_TOP + 4}
          width="14"
          height={BELT_H - 8}
          fill="var(--color-status-warn)"
          opacity="0.18"
        />
      ))}
      <ellipse
        cx="664"
        cy={BELT_TOP + BELT_H / 2}
        rx="4"
        ry={BELT_H / 2 - 4}
        fill="var(--color-hmi-surface)"
        stroke="var(--color-status-warn)"
        strokeWidth="1.5"
      />

      {/* ── LIMIT SWITCH CALLOUT — hinge is at x=566, circle painted last so on top ── */}
      {/* Filled bg circle punches through the snoot visually */}
      <circle
        cx="566"
        cy={BELT_TOP + BELT_H / 2}
        r="18"
        fill="var(--color-hmi-bg)"
        stroke="var(--color-status-warn)"
        strokeWidth="2"
        strokeDasharray="4,3"
      />
      {/* Inner dot to mark the hinge */}
      <circle
        cx="566"
        cy={BELT_TOP + BELT_H / 2}
        r="4"
        fill="var(--color-status-warn)"
        opacity="0.8"
      />
      {/* Leader line up to callout box */}
      <line
        x1="566"
        y1={BELT_TOP + BELT_H / 2 - 19}
        x2="566"
        y2={BELT_TOP - 18}
        stroke="var(--color-status-warn)"
        strokeWidth="1.2"
        opacity="0.8"
      />
      {/* Callout box */}
      <rect
        x="456"
        y={BELT_TOP - 54}
        width="220"
        height="36"
        rx="3"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-status-warn)"
        strokeWidth="1.5"
      />
      <text
        x="566"
        y={BELT_TOP - 36}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="8.5"
        fontWeight="700"
        fill="var(--color-status-warn)"
      >
        BOOM LIMIT SWITCH
      </text>
      <text
        x="566"
        y={BELT_TOP - 23}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="7.5"
        fill="var(--color-text-muted)"
      >
        Plastic gear slip — adjusted on-site
      </text>

      {/* ── HARNESS ROUTE ── */}
      {/* Path: down from panel base → along floor below everything → up into boom controls */}
      {/* Harness sits midway between bottom of carrier failure box and floor line */}
      <path
        d={`M 48 ${BELT_TOP + BELT_H + FRAME_H} L 48 ${CALLOUT_Y + CALLOUT_H + 20} L 666 ${CALLOUT_Y + CALLOUT_H + 20} L 666 ${BELT_TOP + BELT_H + 12}`}
        fill="none"
        stroke="var(--color-status-info)"
        strokeWidth="1.5"
        strokeDasharray="5,3"
        opacity="0.8"
      />
      <rect
        x="220"
        y={CALLOUT_Y + CALLOUT_H + 7}
        width="284"
        height="13"
        rx="2"
        fill="var(--color-hmi-bg)"
        stroke="none"
        opacity="0.85"
      />
      <text
        x="362"
        y={CALLOUT_Y + CALLOUT_H + 17}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="7.5"
        fontWeight="700"
        fill="var(--color-status-info)"
      >
        ◀ CONTROL HARNESS — Boom tip → MDR → Panel
      </text>

      {/* ── BOOM CONTROLS — painted last, always on top ── */}
      <line
        x1="666"
        y1={BELT_TOP + BELT_H + 2}
        x2="666"
        y2={BELT_TOP + BELT_H + 12}
        stroke="var(--color-status-info)"
        strokeWidth="1"
      />
      <rect
        x="636"
        y={BELT_TOP + BELT_H + 12}
        width="64"
        height="50"
        rx="3"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-status-info)"
        strokeWidth="1.5"
      />
      <text
        x="668"
        y={BELT_TOP + BELT_H + 26}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="8"
        fontWeight="700"
        fill="var(--color-status-info)"
      >
        BOOM
      </text>
      <text
        x="668"
        y={BELT_TOP + BELT_H + 38}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="8"
        fontWeight="700"
        fill="var(--color-status-info)"
      >
        CONTROLS
      </text>
      <circle
        cx="649"
        cy={BELT_TOP + BELT_H + 52}
        r="4"
        fill="var(--color-status-ok)"
        opacity="0.9"
      />
      <circle
        cx="668"
        cy={BELT_TOP + BELT_H + 52}
        r="4"
        fill="var(--color-status-alarm)"
        opacity="0.9"
      />
      <circle
        cx="687"
        cy={BELT_TOP + BELT_H + 52}
        r="4"
        fill="var(--color-status-warn)"
        opacity="0.9"
      />

      {/* ── SECTION LABELS — sit just above belt top ── */}
      <text
        x="89"
        y={BELT_TOP - 6}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="7"
        fill="var(--color-text-muted)"
      >
        BASE
      </text>
      {sections.map((s, si) => (
        <text
          key={si}
          x={s.x + s.w / 2}
          y={BELT_TOP - 6}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="7"
          fill="var(--color-text-muted)"
        >
          {s.label}
        </text>
      ))}
      <text
        x="616"
        y={BELT_TOP - 6}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="7"
        fill="var(--color-status-warn)"
      >
        SNOOT
      </text>
    </svg>
  );
}

const DIAGRAM_COMPONENTS = {
  NETWORK_TOPOLOGY: NetworkTopologyDiagram,
  SAFETY_INTERLOCK: SafetyInterlockDiagram,
  EXTENDO_CONVEYOR: ExtendoConveyorDiagram,
};

export default function SchematicDiagram({ diagramType }) {
  const Diagram = DIAGRAM_COMPONENTS[diagramType];
  if (!Diagram) return null;

  return (
    <div className="space-y-3">
      <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
        <span>
          <FontAwesomeIcon icon={ICONS.schematic} />
        </span>{" "}
        Field Equipment Diagram
      </h3>
      <div className="p-4 md:p-6 bg-hmi-bg border border-hmi-border rounded-xl overflow-x-auto">
        <Diagram />
      </div>
    </div>
  );
}
