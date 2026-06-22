export const PROJECT_REGISTRY = {
  ABOUT_ME: {
    id: "SYS-CFG",
    type: "SYSTEM_PROFILE",
    title: "System Engineer Profile: Jonathon Gilliam",
    status: "ONLINE",
    statusColor: "text-status-ok bg-status-ok/10 border-status-ok/20",
    metric: "6+ Years Field Experience",
    location: "Tampa Bay, FL",
    description:
      "Senior Industrial Maintenance & Controls Technician with a proven track record of optimizing high-speed automated lines, deploying robust industrial networks, and troubleshooting complex electrical/mechanical faults under high-pressure downtime constraints.",
    tags: [
      "Controls Engineering",
      "System Diagnostics",
      "Preventive Maintenance",
      "Team Leadership",
    ],
    fieldNotes:
      "Veteran-led background prioritizing safety compliance, clear system documentation, and cross-functional team execution.",
  },
  PROJECT_A: {
    id: "SYS-01",
    type: "PROJECT",
    title: "Palletizer Cell Integration & OEE Optimization",
    status: "COMMISSIONED",
    statusColor: "text-status-ok bg-status-ok/10 border-status-ok/20",
    metric: "98.4% OEE / +12% Throughput",
    location: "Packaging Line 4",
    description:
      "Full turnkey integration of a high-speed robotic palletizing cell. Responsible for panel fabrication layout, interlocking logic via Producer/Consumer networking tags, and writing structured Add-On Instructions (AOIs) for VFD conveyor control.",
    tags: ["Studio 5000", "EtherNet/IP", "PowerFlex 525", "GuardLogix"],
    fieldNotes:
      "Isolated a cyclic communication timeout issue during testing by configuring a managed switch to block broadcast storms on the I/O subnet.",
    beforeAfter: {
      label: "Line Throughput",
      before: "68 cases/min",
      after: "76 cases/min",
    },
    faultLog: {
      symptom:
        "[PLACEHOLDER] Intermittent E-stop faults and dropped I/O connections during peak conveyor cycling, no consistent pattern.",
      diagnosticSteps: [
        "[PLACEHOLDER] Pulled Logix5000 controller fault log and cross-referenced timestamps against PLC scan time spikes.",
        "[PLACEHOLDER] Mirrored switch port to a laptop running Wireshark to capture I/O subnet traffic during a reproduced fault.",
        "[PLACEHOLDER] Identified a burst of broadcast traffic coinciding with each dropped connection event.",
      ],
      rootCause:
        "[PLACEHOLDER] Unmanaged switch was flooding the I/O subnet with broadcast traffic during VFD status polling, starving cyclic EtherNet/IP connections.",
      fix: "[PLACEHOLDER] Replaced unmanaged switch with a managed switch, segmented broadcast domains, and set explicit RPI values on affected I/O connections.",
    },
  },
  PROJECT_B: {
    id: "SYS-02",
    type: "PROJECT",
    title: "Plant-Wide Managed Network Architecture Overhaul",
    status: "OPERATIONAL",
    statusColor: "text-status-info bg-status-info/10 border-status-info/20",
    metric: "0.2ms Latency / 100% Uptime",
    location: "Main MDF to Zone Panels",
    description:
      "Migrated a legacy unmanaged plant network over to a strictly segmented Layer 2/3 managed architecture. Configured discrete VLANs to split machine I/O traffic from corporate enterprise data, implemented a Ring Topology (REP) for media redundancy.",
    tags: ["Stratix Switches", "VLAN Segmentation", "Cisco IOS", "Network+"],
    fieldNotes:
      "Reduced broadcast traffic overhead by 65%, completely eliminating intermittent 'IO Module Connection Faults' on peripheral Flex I/O drops.",
    diagramType: "NETWORK_TOPOLOGY",
    beforeAfter: {
      label: "Broadcast Traffic Overhead",
      before: "~40% of bandwidth",
      after: "~14% of bandwidth",
    },
  },
  PROJECT_C: {
    id: "SYS-03",
    type: "PROJECT",
    title: "Material Handling Sorting System Retrofit",
    status: "OPTIMIZED",
    statusColor: "text-status-ok bg-status-ok/10 border-status-ok/20",
    metric: "-22% MTTR / Zero Sort Errors",
    location: "Distribution Mezzanine",
    description:
      "Replaced an obsolete, unsupported controller with a modern high-performance processor without schematic source code. Reverse-engineered the physical I/O wiring schematics and rewrote the machine sequence logic.",
    tags: [
      "PLC Migration",
      "HMI Scripting",
      "Schematic Redlines",
      "Modbus TCP",
    ],
    fieldNotes:
      "Built a customized dynamic fault-queuing stack on the HMI so floor operators can trace precisely which photo-eye or limit switch is blocking an interlock.",
    beforeAfter: {
      label: "Mean Time To Repair (MTTR)",
      before: "41 min avg",
      after: "32 min avg",
    },
  },
  PROJECT_D: {
    id: "SYS-04",
    type: "PROJECT",
    title: "Category 4 Safety Circuit & Interlock Validation",
    status: "CERTIFIED",
    statusColor: "text-status-info bg-status-info/10 border-status-info/20",
    metric: "PL-e SIL 3 Compliant",
    location: "Robotic Welding Enclosure",
    description:
      "Designed, wired, and validated a complete Category 4 safety upgrade for a heavy industrial automation zone. Integrated dual-channel safety light curtains, coded specialized safety logic routines, and performed fault-injection testing.",
    tags: ["Safety PLCs", "Light Curtains", "ISO 13849", "Fault Injection"],
    fieldNotes:
      "Successfully executed full system validation testing under strict corporate and OSHA machine safety compliance mandates.",
    diagramType: "SAFETY_INTERLOCK",
  },
  CONTACT: {
    id: "SYS-MSG",
    type: "GATEWAY",
    title: "Establish Communications Interlock (Contact)",
    status: "READY",
    statusColor: "text-status-info bg-status-info/10 border-status-info/20",
    metric: "Response Target < 24 Hours",
    location: "Remote Node Gateway",
    description:
      "To discuss employment opportunities, contract integration work, or scheduling professional consultations, initiate an explicit outbound ping below.",
    tags: ["Email Link", "LinkedIn Network", "Secure Routing"],
    fieldNotes:
      "Currently accepting engineering inquiries for controls testing, troubleshooting, and automation architectural infrastructure layout optimizations.",
  },
};
