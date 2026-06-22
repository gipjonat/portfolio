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
      aria-label="Ring topology network diagram showing the main distribution frame connected to four zone panel switches via redundant Ethernet ring, with VLAN-segmented I/O and enterprise traffic"
    >
      <title>Plant network ring topology (REP)</title>
      <desc>
        Main MDF switch at center connects to four zone panel switches in a
        physical ring using Resilient Ethernet Protocol for redundancy. Each
        zone panel carries segmented VLAN traffic for machine I/O versus
        enterprise data.
      </desc>

      {/* Ring connections - drawn first so nodes layer on top */}
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

      {/* REP ring direction indicators */}
      <g fill="var(--color-status-info)" opacity="0.8">
        <circle cx="500" cy="105" r="3" />
        <circle cx="590" cy="195" r="3" />
        <circle cx="380" cy="260" r="3" />
        <circle cx="170" cy="195" r="3" />
        <circle cx="260" cy="105" r="3" />
      </g>

      {/* MDF - center node */}
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

      {/* Zone panels - four ring nodes */}
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

      {/* VLAN legend */}
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
      aria-label="Category 4 dual-channel safety interlock diagram showing redundant light curtain inputs through a safety relay to dual contactors controlling motor power, with a feedback monitoring loop"
    >
      <title>Dual-channel Category 4 safety interlock circuit</title>
      <desc>
        Two independent light curtain channels feed a safety PLC in a redundant
        dual-channel configuration. The safety PLC drives two series-wired
        contactors (K1, K2) that remove motor power on any fault, with a
        feedback monitoring loop confirming both contactors have actually opened
        before allowing a restart.
      </desc>

      {/* Channel A path */}
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

        {/* Channel B path */}
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

      {/* Wires into Safety PLC */}
      <g fill="none" stroke="var(--color-status-ok)" strokeWidth="2">
        <path d="M 160 62 L 220 62 L 220 130 L 280 130" />
        <path d="M 160 222 L 220 222 L 220 154 L 280 154" />
      </g>

      {/* Safety PLC */}
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

      {/* Output wires to contactors */}
      <g fill="none" stroke="var(--color-status-alarm)" strokeWidth="2">
        <path d="M 420 130 L 480 130 L 480 90 L 540 90" />
        <path d="M 420 154 L 480 154 L 480 194 L 540 194" />
      </g>

      {/* Contactors K1 / K2 */}
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

      {/* Series link to motor power */}
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

      {/* Feedback monitoring loop, dashed, beneath the contactors */}
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

const DIAGRAM_COMPONENTS = {
  NETWORK_TOPOLOGY: NetworkTopologyDiagram,
  SAFETY_INTERLOCK: SafetyInterlockDiagram,
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
        System Schematic
      </h3>
      <div className="p-4 md:p-6 bg-hmi-bg border border-hmi-border rounded-xl overflow-x-auto">
        <Diagram />
      </div>
    </div>
  );
}
