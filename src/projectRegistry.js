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
  VFD_TEST_BENCH: {
    id: "SYS-06",
    type: "PROJECT",
    title:
      "VFD Test Bench — Cabinet Design, Safety Circuit & Automated Drive Testing",
    slug: "vfd-test-bench",
    cardTitle: "VFD test bench: designed and built from scratch",
    summary:
      "A full test cabinet I designed, wired and programmed. A new PowerFlex 525 plugs in, picks up its configuration automatically through ADC, and gets checked for correct output voltage before it ever goes into service.",
    category: "Panel build",
    cardStack: "PowerFlex 525 · Studio 5000 · ADC",
    status: "OPERATIONAL",
    statusColor: "text-status-ok bg-status-ok/10 border-status-ok/20",
    metric: "New drives proven out before they go into service",
    description:
      "A fully built test cabinet for proving out PowerFlex 525 VFDs before they're installed — the electrical design, wiring, safety circuit and PLC logic are all my own work. Three-phase power feeds the drive side of the panel, and a control transformer steps it down to 120 VAC for the logic side. A new drive connects, receives its configuration automatically through Automatic Device Configuration (ADC), and the logic runs it to confirm it puts out voltage correctly. Built entirely on Allen-Bradley hardware and software, and designed to grow into a bench for testing other PLC components.",
    diagramType: "TEST_BENCH",
    model3d: "POWERFLEX_525",
    build: [
      {
        title: "Power distribution",
        body: "Brought three-phase power into the cabinet for the drive side, then stepped it down through a control transformer to 120 VAC for the logic side — keeping drive power and control power separate.",
        chips: ["Three-phase", "Control transformer", "120 VAC control"],
      },
      {
        title: "Safety circuit",
        body: "Designed and wired my own safety circuit for the PowerFlex 525 under test, so drives can be powered and run on the bench safely.",
        chips: ["Safety circuit design", "Panel wiring"],
      },
      {
        title: "Automatic Device Configuration",
        body: "The controller holds the drive's configuration and, through ADC over EtherNet/IP, downloads it to a fresh unit automatically — a new VFD is ready to test without hand-entering parameters.",
        chips: ["Studio 5000", "ADC", "EtherNet/IP"],
      },
      {
        title: "Output verification",
        body: "Logic runs each drive and checks that it puts out voltage correctly, so a bad unit gets caught on the bench instead of after it's installed.",
        chips: ["Ladder logic", "Drive testing"],
      },
    ],
    roadmap: [
      "Extend the same plug-in-and-test workflow to Logix controllers",
      "Add testing for input and output cards",
      "Grow it into a general-purpose test station for PLC components",
    ],
    tags: [
      "Electrical Design",
      "Panel Build",
      "Safety Circuit",
      "PowerFlex 525",
      "Studio 5000",
      "ADC",
      "EtherNet/IP",
      "Three-Phase Power",
    ],
  },
  CALJAN_REWIRE: {
    id: "SYS-01",
    type: "PROJECT",
    title: "Extendo Conveyor Emergency Rewire & Controls Restoration",
    // Homepage card fields — short versions of the full write-up below.
    slug: "extendo-rewire",
    cardTitle: "Extendo conveyor: dead inside a trailer",
    summary:
      "A failed cable carrier severed the main control harness at full extension, taking out boom controls, safety interlocks and MDR comms at once. Rewired boom-to-panel under LOTO and caught a slipping limit-switch gear on the way.",
    category: "Troubleshooting",
    cardStack: "Schematic tracing · Control wiring · Hydraulics",
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
  // NETWORK_OVERHAUL: {
  //   id: "SYS-02",
  //   type: "PROJECT",
  //   title: "Plant-Wide Managed Network Architecture Overhaul",
  //   status: "OPERATIONAL",
  //   statusColor: "text-status-info bg-status-info/10 border-status-info/20",
  //   metric: "0.2ms Latency / 100% Uptime",
  //   location: "Main MDF to Zone Panels",
  //   description:
  //     "Migrated a legacy unmanaged plant network over to a strictly segmented Layer 2/3 managed architecture. Configured discrete VLANs to split machine I/O traffic from corporate enterprise data, implemented a Ring Topology (REP) for media redundancy.",
  //   tags: ["Stratix Switches", "VLAN Segmentation", "Cisco IOS", "Network+"],
  //   fieldNotes:
  //     "Reduced broadcast traffic overhead by 65%, completely eliminating intermittent 'IO Module Connection Faults' on peripheral Flex I/O drops.",
  //   diagramType: "NETWORK_TOPOLOGY",
  //   beforeAfter: {
  //     label: "Broadcast Traffic Overhead",
  //     before: "~40% of bandwidth",
  //     after: "~14% of bandwidth",
  //   },
  // },
  // SORTER_RETROFIT: {
  //   id: "SYS-03",
  //   type: "PROJECT",
  //   title: "Material Handling Sorting System Retrofit",
  //   status: "OPTIMIZED",
  //   statusColor: "text-status-ok bg-status-ok/10 border-status-ok/20",
  //   metric: "-22% MTTR / Zero Sort Errors",
  //   location: "Distribution Mezzanine",
  //   description:
  //     "Replaced an obsolete, unsupported controller with a modern high-performance processor without schematic source code. Reverse-engineered the physical I/O wiring schematics and rewrote the machine sequence logic.",
  //   tags: [
  //     "PLC Migration",
  //     "HMI Scripting",
  //     "Schematic Redlines",
  //     "Modbus TCP",
  //   ],
  //   fieldNotes:
  //     "Built a customized dynamic fault-queuing stack on the HMI so floor operators can trace precisely which photo-eye or limit switch is blocking an interlock.",
  //   beforeAfter: {
  //     label: "Mean Time To Repair (MTTR)",
  //     before: "41 min avg",
  //     after: "32 min avg",
  //   },
  // },
  // SAFETY_CIRCUIT: {
  //   id: "SYS-04",
  //   type: "PROJECT",
  //   title: "Category 4 Safety Circuit & Interlock Validation",
  //   status: "CERTIFIED",
  //   statusColor: "text-status-info bg-status-info/10 border-status-info/20",
  //   metric: "PL-e SIL 3 Compliant",
  //   location: "Robotic Welding Enclosure",
  //   description:
  //     "Designed, wired, and validated a complete Category 4 safety upgrade for a heavy industrial automation zone. Integrated dual-channel safety light curtains, coded specialized safety logic routines, and performed fault-injection testing.",
  //   tags: ["Safety PLCs", "Light Curtains", "ISO 13849", "Fault Injection"],
  //   fieldNotes:
  //     "Successfully executed full system validation testing under strict corporate and OSHA machine safety compliance mandates.",
  //   diagramType: "SAFETY_INTERLOCK",
  // },
  FEDEX_LOST_TRACKING: {
    id: "SYS-05",
    type: "PROJECT",
    title: "Sorter Belt Speed — Lost Tracking Root Cause & Fix",
    slug: "sorter-lost-tracking",
    cardTitle: "Sorter lost tracking: 5–6% down to under 1%",
    summary:
      "Thousands of packages a shift were losing tracking. Isolated it to one belt running over spec, confirmed with a tachometer, then traced the speed variable through live ladder logic in Studio 5000.",
    category: "PLC / Studio 5000",
    cardStack: "Studio 5000 · Online mode · Ladder logic",
    status: "RESOLVED",
    statusColor: "text-status-ok bg-status-ok/10 border-status-ok/20",
    metric: "Lost Tracking: ~5-6% → <1% / Thousands of Pkgs Recovered Nightly",
    location: "FedEx Fulfillment Center — Sorter Main Panel / SS1_4",
    description:
      "The FedEx sortation system was losing track of thousands of packages per shift — up to 5-6% of all units processed. Lost tracking means the sorter cannot divert a package to its correct destination, causing it to recirculate or stall. The cascading effect forced 10s of employees to work extended shifts nightly just to manually recover sort targets. Diagnosed the fault down to a single belt asset (SS1_4) running above spec speed, traced it through live ladder logic in Studio 5000, corrected the speed variable, and coordinated a permanent CPROM burn with the systems engineer.",
    diagramType: "SORTER_BELT_LAYOUT",
    tags: [
      "Studio 5000",
      "Ladder Logic",
      "Online Mode Tag Hunting",
      "Tachometer",
      "CPROM Burn",
      "Lost Tracking",
    ],
    fieldNotes:
      "The PE misalignment was a real find but a dead end — fixing it changed nothing on the lost tracking numbers. The actual fault only became visible when you stood at the belt and watched it run. A tachometer confirmed what your eyes were telling you. Everything after that was ladder logic and tag cross-referencing.",
    beforeAfter: {
      label: "Nightly Lost Tracking Count",
      before: "Thousands per shift (5–6% of volume)",
      after: "Under 100 per shift (<1%) — consistently",
    },
    faultLog: {
      symptom:
        "Sorter system reporting thousands of lost-tracking events per shift — 5 to 6 percent of all packages processed were not being successfully diverted. Packages were recirculating on the sorter instead of hitting their assigned chutes. Extended employee overtime required nightly to manually recover sort targets and hit delivery commitments. Live sort statistics on the Sorter Main Panel showed every package being accounted for at the first photo eye (PE) on belt SS1_4 entering the scan tunnel — but consistently lost by the second PE on the exit side.",
      diagnosticSteps: [
        "Pulled live sort statistics from the Sorter Main Panel and isolated the dropout zone to belt SS1_4 — first PE confirmed every package, second PE lost them. This narrowed the fault to whatever happened between those two points on that specific belt.",
        "Inspected both photo eyes physically. Found one PE visibly misaligned and corrected it. Monitored lost tracking through the next sort cycle — no improvement. PE alignment was ruled out as root cause.",
        "Observed the belt system visually during a live sort. Noticed SS1_4 appeared to be running slightly fast relative to adjacent belts — packages were being driven forward aggressively onto the next belt segment before the scan window completed.",
        "Grabbed a tachometer and measured belt surface speed on SS1_4 and surrounding belts. Confirmed SS1_4 was running above spec — the speed delta was causing packages to exit the scan tunnel early, past the second PE, before barcode confirmation registered.",
        "Connected the controls laptop and opened Studio 5000 in Online Mode. Searched all global-scoped tags for asset ID 'SS1_4' and located the belt's control logic block.",
        "Cross-referenced the ladder logic and traced the speed control chain to find the active speed variable. Tested by modifying SS1_4.Speed directly in online mode — the belt did not respond, confirming the ladder logic was reading from a different variable and overwriting the change. Reported findings to the systems engineer.",
        "Systems engineer identified the correct persistent speed variable and burned the corrected value to CPROM, making it permanent across power cycles.",
      ],
      rootCause:
        "Belt SS1_4 was running above its commissioned speed. The excess speed caused packages to be physically transported past the second photo eye before the sorter's tracking logic could register a confirmed barcode read — the sorter logged them as lost. The root cause of the speed drift was confirmed at the ladder logic level: a persistent speed variable had been set incorrectly and required a CPROM burn to correct permanently.",
      fix: "Identified SS1_4 as the fault asset via live sort statistics and tachometer measurement. Traced the speed control variable through Studio 5000 ladder logic in Online Mode. Coordinated with the systems engineer to correct and burn the right speed variable to CPROM. Lost tracking dropped from thousands per shift to under 100 consistently — below the 1% threshold considered normal for a high-throughput sortation system.",
    },
  },
  CONTACT: {
    id: "SYS-MSG",
    type: "GATEWAY",
    title: "Establish Communications Interlock (Contact)",
    status: "READY",
    statusColor: "text-status-info bg-status-info/10 border-status-info/20",
    metric: "Response Target < 24 Hours",
    location: "Tampa Bay, FL — Remote Available",
    description:
      "Available for controls engineering roles, systems integration contracts, and automation consulting. Reach out directly via email or LinkedIn — response target is under 24 hours.",
    tags: ["Gipjonat@Gmail.com", "linkedin.com/in/jbgilliam", "Tampa Bay FL"],
    fieldNotes:
      "Open to full-time controls engineering positions, contract integration work, and troubleshooting consultations. Willing to relocate or work remote for the right role.",
  },
};
