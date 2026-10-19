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

function SorterBeltLayoutDiagram() {
  // Linear left-to-right package flow — two parallel sorter sides (SS1, SS2).
  // Each side: Singulator System → Scan Tunnel Belt → Exit Belt
  // SS1_4 is the fault asset on Side 1. SS2_4 is the healthy equivalent on Side 2.
  // Package flow runs left → right through each row.

  const ROW = {
    ss2: 90, // y-center of SS2 row (top)
    gap: 155, // divider line between sides
    ss1: 210, // y-center of SS1 row (bottom — fault side, closer to SS2)
  };
  const H = 60; // box height
  const COLS = { sing: 130, scan: 390, exit: 650 }; // x-centers of 3 columns
  const W = { sing: 190, scan: 200, exit: 160 }; // box widths

  // GAP = space between arrowhead tip and box edge
  const GAP = 18;
  const arrow = (x1, y1, x2, y2) => {
    // line starts GAP away from source, ends GAP+10 away from target
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / len;
    const uy = dy / len;
    const sx = x1 + ux * GAP;
    const sy = y1 + uy * GAP;
    const tx = x2 - ux * (GAP + 10);
    const ty = y2 - uy * (GAP + 10);
    return { path: `M ${sx} ${sy} L ${tx} ${ty}`, tipX: tx, tipY: ty, ux, uy };
  };

  return (
    <svg
      viewBox="0 0 760 400"
      className="w-full h-auto"
      role="img"
      aria-label="Sorter system belt layout showing two parallel sides, each with singulator belts feeding into scan tunnel belt then exit belt. SS1_4 on side 1 is the fault asset."
    >
      <title>Sorter belt layout — SS1 / SS2 parallel sides</title>

      {/* ── SIDE LABELS ── */}
      <text
        x="18"
        y={ROW.ss2 + 5}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="8"
        fontWeight="700"
        fill="var(--color-text-muted)"
        transform={`rotate(-90, 18, ${ROW.ss2 + 5})`}
      >
        SIDE 2
      </text>
      <text
        x="18"
        y={ROW.ss1 + 5}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="8"
        fontWeight="700"
        fill="var(--color-status-alarm)"
        transform={`rotate(-90, 18, ${ROW.ss1 + 5})`}
      >
        SIDE 1
      </text>

      {/* ── COLUMN HEADERS ── */}
      {[
        { x: COLS.sing, label: "SINGULATOR BELTS / SYSTEM" },
        { x: COLS.scan, label: "SCAN TUNNEL BELT" },
        { x: COLS.exit, label: "EXIT BELT" },
      ].map((h, i) => (
        <text
          key={i}
          x={h.x}
          y="28"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="8"
          fontWeight="700"
          fill="var(--color-text-muted)"
          letterSpacing="1"
        >
          {h.label}
        </text>
      ))}

      {/* ── DIVIDER LINE between sides ── */}
      <line
        x1="30"
        y1={ROW.gap}
        x2="730"
        y2={ROW.gap}
        stroke="var(--color-hmi-border)"
        strokeWidth="1"
        strokeDasharray="6,4"
        opacity="0.5"
      />
      <text
        x="380"
        y={ROW.gap - 4}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="7"
        fill="var(--color-hmi-divider)"
      >
        — SORTER SIDE BOUNDARY —
      </text>

      {/* ── SS2 ROW (top, healthy) ── */}
      {/* SS2 Singulator */}
      <rect
        x={COLS.sing - W.sing / 2}
        y={ROW.ss2 - H / 2}
        width={W.sing}
        height={H}
        rx="6"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-hmi-divider)"
        strokeWidth="1.5"
      />
      <text
        x={COLS.sing}
        y={ROW.ss2 - 6}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="11"
        fontWeight="700"
        fill="var(--color-text-primary)"
      >
        SINGULATOR
      </text>
      <text
        x={COLS.sing}
        y={ROW.ss2 + 10}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--color-text-muted)"
      >
        Side 2 Feed
      </text>

      {/* SS2_4 scan tunnel */}
      <rect
        x={COLS.scan - W.scan / 2}
        y={ROW.ss2 - H / 2}
        width={W.scan}
        height={H}
        rx="6"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-hmi-divider)"
        strokeWidth="1.5"
      />
      <text
        x={COLS.scan}
        y={ROW.ss2 - 6}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="11"
        fontWeight="700"
        fill="var(--color-text-primary)"
      >
        SS2_4
      </text>
      <text
        x={COLS.scan}
        y={ROW.ss2 + 10}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--color-text-muted)"
      >
        Scan Tunnel Belt
      </text>

      {/* SS2_5 exit */}
      <rect
        x={COLS.exit - W.exit / 2}
        y={ROW.ss2 - H / 2}
        width={W.exit}
        height={H}
        rx="6"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-hmi-divider)"
        strokeWidth="1.5"
      />
      <text
        x={COLS.exit}
        y={ROW.ss2 - 6}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="11"
        fontWeight="700"
        fill="var(--color-text-primary)"
      >
        SS2_5
      </text>
      <text
        x={COLS.exit}
        y={ROW.ss2 + 10}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--color-text-muted)"
      >
        Exit Belt
      </text>

      {/* SS2 flow arrows */}
      {(() => {
        const a = arrow(
          COLS.sing + W.sing / 2,
          ROW.ss2,
          COLS.scan - W.scan / 2,
          ROW.ss2,
        );
        return (
          <g>
            <path
              d={a.path}
              fill="none"
              stroke="var(--color-hmi-divider)"
              strokeWidth="1.5"
            />
            <polygon
              points={`${a.tipX},${a.tipY - 4} ${a.tipX + 10},${a.tipY} ${a.tipX},${a.tipY + 4}`}
              fill="var(--color-hmi-divider)"
            />
          </g>
        );
      })()}
      {(() => {
        const a = arrow(
          COLS.scan + W.scan / 2,
          ROW.ss2,
          COLS.exit - W.exit / 2,
          ROW.ss2,
        );
        return (
          <g>
            <path
              d={a.path}
              fill="none"
              stroke="var(--color-hmi-divider)"
              strokeWidth="1.5"
            />
            <polygon
              points={`${a.tipX},${a.tipY - 4} ${a.tipX + 10},${a.tipY} ${a.tipX},${a.tipY + 4}`}
              fill="var(--color-hmi-divider)"
            />
          </g>
        );
      })()}

      {/* ── SS1 ROW (bottom, FAULT SIDE) ── */}
      {/* SS1 Singulator */}
      <rect
        x={COLS.sing - W.sing / 2}
        y={ROW.ss1 - H / 2}
        width={W.sing}
        height={H}
        rx="6"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-hmi-divider)"
        strokeWidth="1.5"
      />
      <text
        x={COLS.sing}
        y={ROW.ss1 - 6}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="11"
        fontWeight="700"
        fill="var(--color-text-primary)"
      >
        SINGULATOR
      </text>
      <text
        x={COLS.sing}
        y={ROW.ss1 + 10}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--color-text-muted)"
      >
        Side 1 Feed
      </text>

      {/* SS1_4 — FAULT ASSET */}
      <rect
        x={COLS.scan - W.scan / 2}
        y={ROW.ss1 - H / 2}
        width={W.scan}
        height={H}
        rx="6"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-status-alarm)"
        strokeWidth="2.5"
      />
      {/* Belt ribs */}
      {Array.from({ length: 10 }).map((_, i) => (
        <line
          key={i}
          x1={COLS.scan - W.scan / 2 + 14 + i * 20}
          y1={ROW.ss1 - H / 2 + 4}
          x2={COLS.scan - W.scan / 2 + 14 + i * 20}
          y2={ROW.ss1 + H / 2 - 4}
          stroke="var(--color-status-alarm)"
          strokeWidth="0.5"
          opacity="0.25"
        />
      ))}
      <text
        x={COLS.scan}
        y={ROW.ss1 - 10}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="13"
        fontWeight="700"
        fill="var(--color-status-alarm)"
      >
        SS1_4
      </text>
      <text
        x={COLS.scan}
        y={ROW.ss1 + 6}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--color-text-muted)"
      >
        Scan Tunnel Belt
      </text>
      <text
        x={COLS.scan}
        y={ROW.ss1 + 20}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="7.5"
        fontWeight="700"
        fill="var(--color-status-alarm)"
      >
        ⚠ FAULT ASSET — Speed above spec
      </text>

      {/* SS1_5 exit */}
      <rect
        x={COLS.exit - W.exit / 2}
        y={ROW.ss1 - H / 2}
        width={W.exit}
        height={H}
        rx="6"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-hmi-divider)"
        strokeWidth="1.5"
      />
      <text
        x={COLS.exit}
        y={ROW.ss1 - 6}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="11"
        fontWeight="700"
        fill="var(--color-text-primary)"
      >
        SS1_5
      </text>
      <text
        x={COLS.exit}
        y={ROW.ss1 + 10}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--color-text-muted)"
      >
        Exit Belt
      </text>

      {/* SS1 flow arrows */}
      {(() => {
        const a = arrow(
          COLS.sing + W.sing / 2,
          ROW.ss1,
          COLS.scan - W.scan / 2,
          ROW.ss1,
        );
        return (
          <g>
            <path
              d={a.path}
              fill="none"
              stroke="var(--color-status-alarm)"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <polygon
              points={`${a.tipX},${a.tipY - 4} ${a.tipX + 10},${a.tipY} ${a.tipX},${a.tipY + 4}`}
              fill="var(--color-status-alarm)"
              opacity="0.6"
            />
          </g>
        );
      })()}
      {(() => {
        const a = arrow(
          COLS.scan + W.scan / 2,
          ROW.ss1,
          COLS.exit - W.exit / 2,
          ROW.ss1,
        );
        return (
          <g>
            <path
              d={a.path}
              fill="none"
              stroke="var(--color-status-alarm)"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <polygon
              points={`${a.tipX},${a.tipY - 4} ${a.tipX + 10},${a.tipY} ${a.tipX},${a.tipY + 4}`}
              fill="var(--color-status-alarm)"
              opacity="0.6"
            />
          </g>
        );
      })()}

      {/* ── PE CALLOUTS on SS1_4 ── */}
      {/* PE1 — entry, packages confirmed */}
      <circle
        cx={COLS.scan - W.scan / 2 + 36}
        cy={ROW.ss1 - H / 2 - 18}
        r="12"
        fill="var(--color-hmi-bg)"
        stroke="var(--color-status-ok)"
        strokeWidth="2"
      />
      <circle
        cx={COLS.scan - W.scan / 2 + 36}
        cy={ROW.ss1 - H / 2 - 18}
        r="4"
        fill="var(--color-status-ok)"
      />
      <text
        x={COLS.scan - W.scan / 2 + 36}
        y={ROW.ss1 - H / 2 - 36}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="7.5"
        fontWeight="700"
        fill="var(--color-status-ok)"
      >
        PE1 ✓
      </text>

      {/* PE2 — exit, packages lost */}
      <circle
        cx={COLS.scan + W.scan / 2 - 36}
        cy={ROW.ss1 - H / 2 - 18}
        r="12"
        fill="var(--color-hmi-bg)"
        stroke="var(--color-status-alarm)"
        strokeWidth="2"
      />
      <circle
        cx={COLS.scan + W.scan / 2 - 36}
        cy={ROW.ss1 - H / 2 - 18}
        r="4"
        fill="var(--color-status-alarm)"
      />
      <text
        x={COLS.scan + W.scan / 2 - 36}
        y={ROW.ss1 - H / 2 - 36}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="7.5"
        fontWeight="700"
        fill="var(--color-status-alarm)"
      >
        PE2 ✕
      </text>

      {/* ── CALLOUT BOXES below SS1_4 ── */}
      {/* Tachometer */}
      <rect
        x={COLS.scan - 100}
        y={ROW.ss1 + H / 2 + 14}
        width="200"
        height="34"
        rx="4"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-status-warn)"
        strokeWidth="1.5"
      />
      <text
        x={COLS.scan}
        y={ROW.ss1 + H / 2 + 28}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="8"
        fontWeight="700"
        fill="var(--color-status-warn)"
      >
        ⊙ TACHOMETER
      </text>
      <text
        x={COLS.scan}
        y={ROW.ss1 + H / 2 + 41}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="7.5"
        fill="var(--color-text-muted)"
      >
        SS1_4 above spec — confirmed
      </text>

      {/* Studio 5000 */}
      <rect
        x={COLS.scan - 110}
        y={ROW.ss1 + H / 2 + 56}
        width="220"
        height="34"
        rx="4"
        fill="var(--color-hmi-surface)"
        stroke="var(--color-status-info)"
        strokeWidth="1.5"
      />
      <text
        x={COLS.scan}
        y={ROW.ss1 + H / 2 + 70}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="8"
        fontWeight="700"
        fill="var(--color-status-info)"
      >
        STUDIO 5000 — ONLINE MODE
      </text>
      <text
        x={COLS.scan}
        y={ROW.ss1 + H / 2 + 83}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="7.5"
        fill="var(--color-text-muted)"
      >
        SS1_4.Speed corrected → CPROM burn
      </text>

      {/* ── LEGEND ── */}
      <g fontFamily="var(--font-mono)" fontSize="8.5">
        <circle cx="40" cy="352" r="5" fill="var(--color-status-ok)" />
        <text x="52" y="356" fill="var(--color-text-muted)">
          PE confirmed
        </text>
        <circle cx="160" cy="352" r="5" fill="var(--color-status-alarm)" />
        <text x="172" y="356" fill="var(--color-status-alarm)">
          PE lost / fault
        </text>
        <rect
          x="278"
          y="347"
          width="14"
          height="10"
          rx="2"
          fill="var(--color-hmi-surface)"
          stroke="var(--color-hmi-divider)"
          strokeWidth="1"
        />
        <text x="298" y="356" fill="var(--color-text-muted)">
          Healthy belt
        </text>
        <line
          x1="400"
          y1="352"
          x2="424"
          y2="352"
          stroke="var(--color-status-alarm)"
          strokeWidth="2"
        />
        <polygon
          points="424,348 434,352 424,356"
          fill="var(--color-status-alarm)"
        />
        <text x="440" y="356" fill="var(--color-status-alarm)">
          Fault side flow
        </text>
        <line
          x1="570"
          y1="352"
          x2="594"
          y2="352"
          stroke="var(--color-hmi-divider)"
          strokeWidth="2"
        />
        <polygon
          points="594,348 604,352 594,356"
          fill="var(--color-hmi-divider)"
        />
        <text x="610" y="356" fill="var(--color-text-muted)">
          Normal flow
        </text>
      </g>
    </svg>
  );
}

const BENCH = {
  power: "var(--color-status-alarm)",
  control: "var(--color-brand)",
  comms: "var(--color-status-info)",
  safety: "var(--color-status-ok)",
  box: "var(--color-hmi-surface)",
  edge: "var(--color-hmi-divider)",
  text: "var(--color-text-primary)",
  muted: "var(--color-text-muted)",
};

function BenchBlock({
  x,
  y,
  w,
  h,
  title,
  sub,
  stroke = BENCH.edge,
  dashed = false,
  titleColor = BENCH.text,
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="6"
        fill={dashed ? "none" : BENCH.box}
        stroke={stroke}
        strokeWidth="1.5"
        strokeDasharray={dashed ? "5 4" : undefined}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 4 : y + h / 2 + 4}
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill={titleColor}
      >
        {title}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 12}
          textAnchor="middle"
          fontSize="9"
          fill={BENCH.muted}
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function BenchArrow({ x, y, dir = "right", color }) {
  const d = {
    right: `M ${x - 7} ${y - 4} L ${x} ${y} L ${x - 7} ${y + 4} Z`,
    down: `M ${x - 4} ${y - 7} L ${x} ${y} L ${x + 4} ${y - 7} Z`,
    up: `M ${x - 4} ${y + 7} L ${x} ${y} L ${x + 4} ${y + 7} Z`,
    left: `M ${x + 7} ${y - 4} L ${x} ${y} L ${x + 7} ${y + 4} Z`,
  }[dir];
  return <path d={d} fill={color} />;
}

function TestBenchDiagram() {
  // Power & control one-line for the VFD test bench.
  // 480 V three-phase -> knife switch box. One branch goes through the main
  // breaker to the drives under test; the other goes through the step-down
  // transformer to the 120 VAC branch breakers, which feed the logic side
  // (transformer 2 for clean PLC power, the E-stop safety contactor, and the
  // neutral / small-power terminal strip).
  return (
    <svg
      viewBox="0 0 760 470"
      className="w-full h-auto min-w-[560px]"
      role="img"
      aria-label="VFD test bench power and control diagram: 480 V three-phase into a knife switch box, through the main breaker to the PowerFlex 525 drives under test, and through a step-down transformer to 120 VAC branch breakers feeding a clean-power transformer for the ControlLogix, the E-stop safety contactor and a neutral terminal strip. The ControlLogix runs the drives over EtherNet/IP with ADC, and the safety contactor breaks the drives' 24 VDC stop loop."
      fontFamily="var(--font-mono)"
    >
      <title>VFD test bench — power and control</title>

      {/* Legend */}
      <g fontSize="9" fill={BENCH.muted}>
        <line
          x1="24"
          y1="18"
          x2="48"
          y2="18"
          stroke={BENCH.power}
          strokeWidth="3"
        />
        <text x="54" y="21">
          480 V three-phase
        </text>
        <line
          x1="180"
          y1="18"
          x2="204"
          y2="18"
          stroke={BENCH.control}
          strokeWidth="2"
        />
        <text x="210" y="21">
          120 VAC control
        </text>
        <line
          x1="322"
          y1="18"
          x2="346"
          y2="18"
          stroke={BENCH.comms}
          strokeWidth="2"
          strokeDasharray="5 4"
        />
        <text x="352" y="21">
          EtherNet/IP
        </text>
        <line
          x1="444"
          y1="18"
          x2="468"
          y2="18"
          stroke={BENCH.safety}
          strokeWidth="2"
        />
        <text x="474" y="21">
          E-stop loop
        </text>
      </g>

      {/* ── Power side ── */}
      <BenchBlock
        x={16}
        y={60}
        w={110}
        h={50}
        title="3Ø 480 V"
        sub="Supply"
        stroke={BENCH.power}
      />
      <line
        x1="126"
        y1="85"
        x2="152"
        y2="85"
        stroke={BENCH.power}
        strokeWidth="3"
      />
      <BenchArrow x={160} y={85} color={BENCH.power} />
      <BenchBlock
        x={160}
        y={60}
        w={120}
        h={50}
        title="KNIFE SWITCH"
        sub="Disconnect box"
        stroke={BENCH.power}
      />
      <line
        x1="280"
        y1="85"
        x2="306"
        y2="85"
        stroke={BENCH.power}
        strokeWidth="3"
      />
      <BenchArrow x={314} y={85} color={BENCH.power} />
      <BenchBlock
        x={314}
        y={60}
        w={116}
        h={50}
        title="MAIN BREAKER"
        sub="Drive feed"
        stroke={BENCH.power}
      />
      <line
        x1="430"
        y1="85"
        x2="450"
        y2="85"
        stroke={BENCH.power}
        strokeWidth="3"
      />
      <BenchArrow x={458} y={85} color={BENCH.power} />
      <BenchBlock
        x={458}
        y={56}
        w={156}
        h={58}
        title="POWERFLEX 525s"
        sub="Drives under test"
        stroke={BENCH.power}
        titleColor="var(--color-brand)"
      />
      <line
        x1="614"
        y1="85"
        x2="630"
        y2="85"
        stroke={BENCH.power}
        strokeWidth="3"
      />
      <BenchArrow x={638} y={85} color={BENCH.power} />
      <BenchBlock
        x={638}
        y={60}
        w={110}
        h={50}
        title="OUTPUT"
        sub="Voltage checked"
        stroke={BENCH.safety}
      />

      {/* Step-down branch */}
      <line
        x1="220"
        y1="110"
        x2="220"
        y2="142"
        stroke={BENCH.power}
        strokeWidth="3"
      />
      <BenchArrow x={220} y={150} dir="down" color={BENCH.power} />
      <BenchBlock
        x={160}
        y={150}
        w={120}
        h={50}
        title="STEP-DOWN"
        sub="480 V → 120 VAC"
        stroke={BENCH.control}
      />
      <line
        x1="220"
        y1="200"
        x2="220"
        y2="226"
        stroke={BENCH.control}
        strokeWidth="2"
      />
      <BenchArrow x={220} y={234} dir="down" color={BENCH.control} />
      <BenchBlock
        x={160}
        y={234}
        w={120}
        h={50}
        title="BREAKERS"
        sub="120 VAC branches"
        stroke={BENCH.control}
      />
      <line
        x1="220"
        y1="284"
        x2="220"
        y2="318"
        stroke={BENCH.control}
        strokeWidth="2"
      />

      {/* ── Logic side ── */}
      <rect
        x="16"
        y="300"
        width="732"
        height="160"
        rx="10"
        fill="none"
        stroke={BENCH.control}
        strokeOpacity="0.45"
        strokeDasharray="6 5"
      />
      <text
        x="30"
        y="450"
        fontSize="9"
        fontWeight="700"
        letterSpacing="1.5"
        fill={BENCH.control}
      >
        LOGIC SIDE · 120 VAC
      </text>

      {/* 120 VAC bus and drops */}
      <line
        x1="95"
        y1="318"
        x2="610"
        y2="318"
        stroke={BENCH.control}
        strokeWidth="2"
      />
      <line
        x1="95"
        y1="318"
        x2="95"
        y2="334"
        stroke={BENCH.control}
        strokeWidth="2"
      />
      <BenchArrow x={95} y={342} dir="down" color={BENCH.control} />
      <line
        x1="430"
        y1="318"
        x2="430"
        y2="334"
        stroke={BENCH.control}
        strokeWidth="2"
      />
      <BenchArrow x={430} y={342} dir="down" color={BENCH.control} />
      <line
        x1="610"
        y1="318"
        x2="610"
        y2="334"
        stroke={BENCH.control}
        strokeWidth="2"
      />
      <BenchArrow x={610} y={342} dir="down" color={BENCH.control} />

      <BenchBlock
        x={30}
        y={342}
        w={130}
        h={56}
        title="XFMR 2"
        sub="Clean PLC power"
        stroke={BENCH.control}
      />
      <line
        x1="160"
        y1="370"
        x2="182"
        y2="370"
        stroke={BENCH.control}
        strokeWidth="2"
      />
      <BenchArrow x={190} y={370} color={BENCH.control} />
      <BenchBlock
        x={190}
        y={342}
        w={146}
        h={56}
        title="CONTROLLOGIX"
        sub="Studio 5000 logic"
        stroke={BENCH.comms}
      />
      <BenchBlock
        x={356}
        y={342}
        w={150}
        h={56}
        title="E-STOP CIRCUIT"
        sub="Safety contactor"
        stroke={BENCH.safety}
      />
      <BenchBlock
        x={536}
        y={342}
        w={148}
        h={56}
        title="TERMINAL STRIP"
        sub="Neutrals · small loads"
        stroke={BENCH.control}
      />

      {/* EtherNet/IP + ADC: ControlLogix -> drives */}
      <path
        d="M 300 342 L 300 236 L 470 236 L 470 121"
        fill="none"
        stroke={BENCH.comms}
        strokeWidth="2"
        strokeDasharray="6 4"
      />
      <BenchArrow x={470} y={114} dir="up" color={BENCH.comms} />
      <rect
        x="306"
        y="216"
        width="128"
        height="16"
        rx="3"
        fill="var(--color-hmi-bg)"
      />
      <text x="370" y="228" textAnchor="middle" fontSize="9" fill={BENCH.comms}>
        EtherNet/IP · ADC + run
      </text>

      {/* E-stop loop: drive's 24 VDC out through the contactor's N.O.
          contact and back into the drive */}
      <line
        x1="488"
        y1="121"
        x2="488"
        y2="335"
        stroke={BENCH.safety}
        strokeWidth="2"
      />
      <BenchArrow x={488} y={342} dir="down" color={BENCH.safety} />
      <line
        x1="500"
        y1="342"
        x2="500"
        y2="121"
        stroke={BENCH.safety}
        strokeWidth="2"
      />
      <BenchArrow x={500} y={114} dir="up" color={BENCH.safety} />
      <rect
        x="508"
        y="188"
        width="70"
        height="30"
        rx="3"
        fill="var(--color-hmi-bg)"
      />
      <text x="512" y="200" fontSize="9" fill={BENCH.safety}>
        24 VDC
      </text>
      <text x="512" y="212" fontSize="9" fill={BENCH.safety}>
        stop loop
      </text>
    </svg>
  );
}

// Maps a point from Jonathon's hand sketch of the cabinet (paint canvas
// pixels) onto this diagram, so the layout keeps his proportions.
const SK = { ox: 60, oy: 40, s: 0.378, x0: 93, y0: 95 };
const skX = (x) => SK.ox + (x - SK.x0) * SK.s;
const skY = (y) => SK.oy + (y - SK.y0) * SK.s;

function LayoutPart({
  x1,
  y1,
  x2,
  y2,
  stroke,
  fill = BENCH.box,
  dashed,
  children,
}) {
  const x = skX(x1);
  const y = skY(y1);
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={skX(x2) - x}
        height={skY(y2) - y}
        rx="3"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
        strokeDasharray={dashed ? "4 3" : undefined}
      />
      {children}
    </g>
  );
}

function LayoutLabel({
  x,
  y,
  lines,
  color = BENCH.text,
  size = 9,
  anchor = "middle",
  rotate,
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontSize={size}
      fontWeight="700"
      fill={color}
      transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}
    >
      {lines.map((l, i) => (
        <tspan key={l} x={x} dy={i === 0 ? 0 : size + 3}>
          {l}
        </tspan>
      ))}
    </text>
  );
}

function TestBenchLayoutDiagram() {
  // Front view of the cabinet, redrawn from the builder's own sketch.
  // Simplified: positions and sizes are approximate.
  const duct = "#1b2127";
  const cx = (a, b) => (skX(a) + skX(b)) / 2;
  const cy = (a, b) => (skY(a) + skY(b)) / 2;

  return (
    <svg
      viewBox="0 0 760 425"
      className="w-full h-auto min-w-[560px]"
      role="img"
      aria-label="Simplified panel layout of the VFD test bench: PLC modules, safety contactor, branch breakers and a neutral terminal strip on the left; wire duct around them; VFDs and the main breaker on the right; the knife switch box and step-down transformer outside the cabinet on the right; a second transformer for clean PLC power above the cabinet."
      fontFamily="var(--font-mono)"
    >
      <title>VFD test bench — panel layout (simplified)</title>

      {/* Transformer 2, above the cabinet */}
      <LayoutPart x1={165} y1={20} x2={487} y2={85} stroke={BENCH.control}>
        <LayoutLabel
          x={cx(165, 487)}
          y={cy(20, 85) + 3}
          lines={["XFMR 2"]}
          color={BENCH.control}
        />
      </LayoutPart>
      <LayoutLabel
        x={skX(487) + 8}
        y={cy(20, 85) + 3}
        lines={["Clean power to the PLC"]}
        anchor="start"
        size={8}
        color={BENCH.muted}
      />

      {/* Cabinet */}
      <rect
        x={skX(93)}
        y={skY(95)}
        width={skX(1467) - skX(93)}
        height={skY(962) - skY(95)}
        rx="6"
        fill="none"
        stroke={BENCH.edge}
        strokeWidth="2.5"
      />
      <text
        x={skX(93) + 4}
        y={skY(962) + 16}
        fontSize="9"
        fontWeight="700"
        letterSpacing="1.5"
        fill={BENCH.muted}
      >
        TEST CABINET
      </text>

      {/* Wire duct */}
      <LayoutPart
        x1={103}
        y1={152}
        x2={133}
        y2={776}
        stroke={BENCH.edge}
        fill={duct}
      >
        <LayoutLabel
          x={cx(103, 133) + 3}
          y={cy(152, 776)}
          lines={["WIRE DUCT"]}
          color={BENCH.muted}
          size={8}
          rotate={-90}
        />
      </LayoutPart>
      <LayoutPart
        x1={110}
        y1={786}
        x2={950}
        y2={886}
        stroke={BENCH.edge}
        fill={duct}
      >
        <LayoutLabel
          x={cx(110, 950)}
          y={cy(786, 886) + 3}
          lines={["WIRE DUCT"]}
          color={BENCH.muted}
          size={8}
        />
      </LayoutPart>
      <LayoutPart
        x1={970}
        y1={148}
        x2={1100}
        y2={891}
        stroke={BENCH.edge}
        fill={duct}
      >
        <LayoutLabel
          x={cx(970, 1100) + 3}
          y={cy(148, 891)}
          lines={["WIRE DUCT"]}
          color={BENCH.muted}
          size={8}
          rotate={-90}
        />
      </LayoutPart>

      {/* Neutral / small-power terminal strip */}
      <LayoutPart x1={150} y1={168} x2={196} y2={551} stroke={BENCH.control}>
        {Array.from({ length: 12 }, (_, i) => (
          <line
            key={i}
            x1={skX(150) + 2}
            x2={skX(196) - 2}
            y1={skY(168) + 8 + i * 11}
            y2={skY(168) + 8 + i * 11}
            stroke={BENCH.control}
            strokeOpacity="0.5"
          />
        ))}
      </LayoutPart>
      <LayoutLabel
        x={skX(196) + 6}
        y={skY(420)}
        lines={["NEUTRALS /", "SMALL POWER"]}
        anchor="start"
        size={8}
        color={BENCH.control}
      />

      {/* PLC modules */}
      <LayoutPart x1={277} y1={177} x2={585} y2={267} stroke={BENCH.comms}>
        {Array.from({ length: 7 }, (_, i) => (
          <rect
            key={i}
            x={skX(285) + i * 16}
            y={skY(185)}
            width="12"
            height={skY(259) - skY(185)}
            rx="1"
            fill="none"
            stroke={BENCH.comms}
            strokeOpacity="0.55"
          />
        ))}
      </LayoutPart>
      <LayoutLabel
        x={skX(585) + 8}
        y={cy(177, 267) + 3}
        lines={["CONTROLLOGIX"]}
        anchor="start"
        color={BENCH.comms}
      />

      {/* Safety contactor */}
      <LayoutPart x1={303} y1={520} x2={505} y2={603} stroke={BENCH.safety}>
        <LayoutLabel
          x={cx(303, 505)}
          y={cy(520, 603) - 2}
          lines={["SAFETY", "CONTACTOR"]}
          color={BENCH.safety}
          size={8}
        />
      </LayoutPart>

      {/* Branch breakers */}
      <LayoutLabel
        x={cx(277, 485)}
        y={skY(727) - 6}
        lines={["BREAKERS · 120 VAC"]}
        color={BENCH.control}
        size={8}
      />
      <LayoutPart x1={277} y1={727} x2={485} y2={755} stroke={BENCH.control}>
        {Array.from({ length: 8 }, (_, i) => (
          <line
            key={i}
            x1={skX(277) + 9 + i * 9.5}
            x2={skX(277) + 9 + i * 9.5}
            y1={skY(727) + 2}
            y2={skY(755) - 2}
            stroke={BENCH.control}
            strokeOpacity="0.6"
          />
        ))}
      </LayoutPart>

      {/* Unlabeled component above the drives */}
      <LayoutPart
        x1={1130}
        y1={348}
        x2={1380}
        y2={461}
        stroke={BENCH.edge}
        dashed
      />

      {/* VFDs */}
      <LayoutPart x1={1132} y1={487} x2={1380} y2={734} stroke={BENCH.power}>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect
              x={skX(1145) + i * 30}
              y={skY(500)}
              width="24"
              height={skY(680) - skY(500)}
              rx="2"
              fill="none"
              stroke="var(--color-brand)"
              strokeOpacity="0.8"
            />
            <rect
              x={skX(1145) + i * 30 + 5}
              y={skY(512)}
              width="14"
              height="5"
              fill="var(--color-status-ok)"
              opacity="0.7"
            />
          </g>
        ))}
      </LayoutPart>
      <LayoutLabel
        x={cx(1132, 1380)}
        y={skY(722)}
        lines={["POWERFLEX 525s"]}
        size={8}
        color="var(--color-brand)"
      />

      {/* Main breaker */}
      <LayoutPart x1={1270} y1={753} x2={1362} y2={901} stroke={BENCH.power} />
      <LayoutLabel
        x={cx(1270, 1362)}
        y={skY(901) + 12}
        lines={["MAIN BREAKER"]}
        color={BENCH.power}
        size={8}
      />

      {/* Knife switch box + step-down transformer, outside the cabinet */}
      <LayoutPart x1={1488} y1={280} x2={1722} y2={963} stroke={BENCH.power}>
        <LayoutLabel
          x={cx(1488, 1722)}
          y={skY(520)}
          lines={["KNIFE", "SWITCH", "BOX", "", "3Ø 480 V IN"]}
          color={BENCH.power}
        />
      </LayoutPart>
      <LayoutPart x1={1495} y1={979} x2={1720} y2={1070} stroke={BENCH.control}>
        <LayoutLabel
          x={cx(1495, 1720)}
          y={cy(979, 1070) - 3}
          lines={["STEP-DOWN", "480 → 120 VAC"]}
          color={BENCH.control}
          size={8}
        />
      </LayoutPart>

      {/* Feeds into the cabinet */}
      <line
        x1={skX(1488)}
        y1={skY(830)}
        x2={skX(1362) + 10}
        y2={skY(830)}
        stroke={BENCH.power}
        strokeWidth="3"
      />
      <BenchArrow
        x={skX(1362) + 2}
        y={skY(830)}
        dir="left"
        color={BENCH.power}
      />
    </svg>
  );
}

const DIAGRAM_COMPONENTS = {
  NETWORK_TOPOLOGY: NetworkTopologyDiagram,
  SAFETY_INTERLOCK: SafetyInterlockDiagram,
  EXTENDO_CONVEYOR: ExtendoConveyorDiagram,
  SORTER_BELT_LAYOUT: SorterBeltLayoutDiagram,
  TEST_BENCH: TestBenchDiagram,
  TEST_BENCH_LAYOUT: TestBenchLayoutDiagram,
};

// Section heading per diagram; anything not listed uses the default.
const DIAGRAM_TITLES = {
  TEST_BENCH: "Power & Control",
  TEST_BENCH_LAYOUT: "Panel Layout (simplified)",
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
        {DIAGRAM_TITLES[diagramType] ?? "Field Equipment Diagram"}
      </h3>
      <div className="p-4 md:p-6 bg-hmi-bg border border-hmi-border rounded-xl overflow-x-auto">
        <Diagram />
      </div>
    </div>
  );
}
