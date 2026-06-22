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
      "Senior Industrial Maintenance & Controls Technician specializing in high-speed distribution and warehousing automation. Proven track record of diagnosing complex faults at the logic level — not just the hardware — and delivering permanent fixes under real production pressure.",
    tags: [
      "Controls Engineering",
      "System Diagnostics",
      "Preventive Maintenance",
      "Team Leadership",
    ],
    fieldNotes:
      "Veteran-led background. Discipline, clear documentation, and ownership under pressure aren't soft skills here — they're the defaults.",

    serviceRecord: {
      branch: "U.S. Army — Florida National Guard",
      mos: "91D · Power Generation Equipment Repairer",
      mosDetail:
        "Maintained, diagnosed, and repaired military-grade generator systems in high-stakes field conditions. Fault isolation without manuals, under time pressure, with real consequences for failure — the same fundamentals that drive every industrial troubleshoot today.",
      status: "Honorably Separated (ETS'd)",
    },

    careerOrigin:
      "Started in industrial maintenance in 2021 while still serving in the Guard. The crossover was natural: generator diagnostics and PLC fault-tracing require the same disciplined methodology — isolate the variable, verify the assumption, fix the root cause, not the symptom.",

    personalInterests:
      "Outside of work, most of my time goes toward low-level engine programming and computer graphics. I have a genuine obsession with understanding how computers actually work at the hardware and software boundary — the kind of knowledge most people skip. That means digging into the rendering pipeline (vertex shaders, rasterization, fragment processing), writing C++ and C# from scratch, and experimenting with graphics APIs like OpenGL and Vulkan. I also work with game engines like Unreal Engine 5 and Godot, mostly as a sandbox for testing graphics and systems concepts rather than making games. The throughline is the same as the controls work: I want to understand the system well enough to know exactly why it behaves the way it does — not just make it run.",

    targetRole:
      "Actively pursuing full-time Controls Engineering and Systems Integration roles. The goal is permanent ownership of automation architecture: designing it, commissioning it, and being the person who actually understands why it works.",
  },
  CALJAN_REWIRE: {
    id: "SYS-01",
    type: "PROJECT",
    title: "Extendo Conveyor Emergency Rewire & Controls Restoration",
    status: "RESOLVED",
    statusColor: "text-status-ok bg-status-ok/10 border-status-ok/20",
    metric: "Full Controls Restoration / 2-Day Turnaround",
    location: "FedEx Fulfillment Center — Trailer Dock",
    description:
      "A main control cable was severed and pulled free from a failed cable carrier on a fully-extended extendo conveyor during a package handling event. The break took out boom controls, all safety interlocks, and MDR communication simultaneously — rendering the unit dead in the fully-extended position inside a trailer. Full rewire of the control harness from boom tip to panel, cable carrier replacement, hydraulic bleed-down under LOTO, and a secondary limit switch adjustment discovered and corrected during the repair.",
    diagramType: "EXTENDO_CONVEYOR",
    tags: [
      "LOTO / OSHA 1910",
      "Schematic Tracing",
      "Control Wiring",
      "Limit Switch Calibration",
      "Hydraulic Bleed-Down",
    ],
    fieldNotes:
      "While routing the new harness we caught that the boom's primary limit switch — two plastic gears on a rotating bolt — had shifted and was allowing the boom to travel past 90 degrees toward a last-resort hardstop. Adjusted and locked the gears to the correct stop angle before closing up. Would have been the next failure if we hadn't been in there.",
    beforeAfter: {
      label: "Extendo Operational Status",
      before: "Dead — fully extended, zero controls",
      after: "100% restored — controls, safety, MDR",
    },
    faultLog: {
      symptom:
        "Extendo conveyor became completely unresponsive mid-extension inside a trailer. Boom controls, MDR drive, and all safety functions offline simultaneously. Unit stranded in the fully-extended position with no powered retract available. Hundreds of packages per hour backing up with no alternate sort path.",
      diagnosticSteps: [
        "Traced the failure to a snapped cable carrier segment — the carrier had broken free during extension, pulling the main control harness out of its routing path and severing it under tension.",
        "Retrieved OEM schematics for the extendo model and mapped the full harness path: boom tip controls → MDR → safety interlock chain → main controls panel.",
        "Isolated and locked out the panel under full LOTO procedure. With the hydraulic system tied to the same controls, manually bled the hydraulic circuit and lowered the boom onto support stands before any wiring work began.",
        "Stripped, routed, and terminated the full replacement harness from boom tip through the new cable carrier into the panel, following the schematic wire-for-wire.",
        "During routing, identified a secondary fault: the boom's rotation limit switch (two plastic gears on a rotating bolt actuator) had slipped, allowing the boom to travel past 90 degrees toward a hardstop — the last mechanical protection before belt pinch damage.",
      ],
      rootCause:
        "Cable carrier segment failed structurally during an extension cycle, releasing the control harness from its guided path. The unsupported cable was then caught under tension and severed completely, taking out every function that ran through that harness. The limit switch gear slip was a separate pre-existing condition that would have caused its own failure event had the rewire not put eyes on it.",
      fix: "Replaced the failed cable carrier section, re-routed and terminated the full control harness per schematic, restored all safety interlock continuity, and verified MDR and boom control function under power. Adjusted and re-locked the boom rotation limit switch gears to the correct stop position. Full functional test completed before returning the unit to service. Total job time: 2 days.",
    },
  },
  NETWORK_OVERHAUL: {
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
  SORTER_RETROFIT: {
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
  SAFETY_CIRCUIT: {
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
  FEDEX_LOST_TRACKING: {
    id: "SYS-05",
    type: "PROJECT",
    title: "FedEx Sortation Lost-Tracking Fault Resolution",
    status: "RESOLVED",
    statusColor: "text-status-ok bg-status-ok/10 border-status-ok/20",
    metric: "Lost-Tracking Rate: ~5% → 0%",
    location: "FedEx Fulfillment Center — Sortation Floor",
    description:
      "Emergency fault diagnosis on a high-throughput package sortation system losing track of thousands of inbound units per shift. Packages bound for next-morning van routes were falling out of the tracking window before barcode confirmation, creating downstream delivery failures with no hardware alarm to follow. Traced the fault to a logic-level belt speed mismatch and resolved it permanently via Studio 5000 parameter correction and EEPROM flash.",
    tags: ["Studio 5000", "VFD Diagnostics", "Ladder Logic", "EEPROM Flash"],
    fieldNotes:
      "No hardware alarm fired. No sensor was tripped. The fault lived entirely in the gap between what the VFD was commanded to do and what the tracking logic expected — the kind of fault that only surfaces when you read the ladder logic and the drive parameters together.",
    beforeAfter: {
      label: "Package Lost-Tracking Rate",
      before: "~5% per shift",
      after: "0% — resolved permanently",
    },
    faultLog: {
      symptom:
        "Sortation system losing track of packages at approximately 5% of total volume per shift — thousands of units per night unconfirmed, misrouted, or pulled from van loads. No consistent hardware fault. No sensor alarm. Issue had been escalating and was directly impacting next-morning FedEx delivery commitments.",
      diagnosticSteps: [
        "Reviewed sortation HMI for lost-track event timestamps and correlated against specific belt zones — narrowed the dropout zone to the two belts feeding the main scan tunnel.",
        "Pulled VFD parameter readouts on both drives and compared commanded output frequency against actual running speed.",
        "Cross-referenced observed belt speeds against the tracking window tolerances defined in the ladder logic — confirmed the logic assumed both belts were synchronized.",
        "Identified a parameter drift on one VFD: the drive was running faster than its commissioned value, causing packages to arrive at the scan window ahead of schedule and exit before barcode confirmation completed.",
      ],
      rootCause:
        "A VFD frequency parameter had drifted from its commissioned value on one of the two belts feeding the scan tunnel. The resulting speed delta between the paired belts caused packages to surge forward faster than the tracking logic's position window expected — the barcode passed the scanner before the read cycle completed, and the sorter logged the package as lost.",
      fix: "Corrected the VFD frequency parameter in Studio 5000 to match the commissioned synchronization value, verified belt speed parity against the tracking window tolerances in the ladder logic, compiled and downloaded the updated program to the PLC, and burned the corrected parameters to EEPROM to survive a power cycle. Lost-tracking rate dropped to zero on the following shift and has remained at zero.",
    },
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
