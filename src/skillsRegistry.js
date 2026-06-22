// Skills/proficiency data for the SKILLS register-map page. Separate from
// PROJECT_REGISTRY since the shape is fundamentally different (categorized
// skill groups with proficiency levels, not a single project record).
//
// level: 1-5, rendered as signal-strength bars in the UI.
//   5 = expert / daily-driver tool
//   3 = working proficiency / used regularly
//   1 = exposure / basic familiarity
import { ICONS } from "./icons";
export const SKILLS_REGISTRY = {
  meta: {
    id: "SYS-SKL",
    type: "REGISTER_MAP",
    title: "Skills & Capability Register",
    status: "INDEXED",
    statusColor: "text-status-ok bg-status-ok/10 border-status-ok/20",
    location: "Composite — Field & Bench",
    description:
      "Structured inventory of platforms, protocols, and standards used across controls integration, plant networking, and safety system work. Proficiency levels reflect hands-on field/bench experience, not certification alone.",
  },
  groups: [
    {
      id: "PLC_LOGIC",
      label: "PLC / Logic Platforms",
      icon: ICONS.plcLogic,
      skills: [
        { name: "Studio 5000 / RSLogix 5000", level: 5 },
        { name: "RSLogix 500", level: 4 },
        { name: "GuardLogix (Safety)", level: 4 },
        { name: "Siemens TIA Portal", level: 2 },
        { name: "Connected Components Workbench", level: 3 },
      ],
    },
    {
      id: "HMI_SCADA",
      label: "HMI / SCADA Software",
      icon: ICONS.hmiScada,
      skills: [
        { name: "FactoryTalk View SE/ME", level: 5 },
        { name: "Ignition (Inductive Automation)", level: 2 },
        { name: "PanelView Plus", level: 4 },
        { name: "Wonderware / AVEVA", level: 1 },
      ],
    },
    {
      id: "NETWORKING",
      label: "Industrial Networking",
      icon: ICONS.networking,
      skills: [
        { name: "EtherNet/IP", level: 5 },
        { name: "Stratix Managed Switches", level: 4 },
        { name: "VLAN Segmentation", level: 4 },
        { name: "Modbus TCP", level: 3 },
        { name: "Profinet", level: 2 },
        { name: "Cisco IOS Fundamentals", level: 3 },
      ],
    },
    {
      id: "SAFETY",
      label: "Safety Systems & Standards",
      icon: ICONS.safety,
      skills: [
        { name: "ISO 13849 (Cat. 3/4, PLe)", level: 4 },
        { name: "Safety Light Curtains", level: 4 },
        { name: "NFPA 70E", level: 4 },
        { name: "OSHA 1910 Subpart O", level: 4 },
        { name: "Fault-Injection Validation", level: 3 },
      ],
    },
    {
      id: "DOCS_CAD",
      label: "Documentation & CAD",
      icon: ICONS.docsCad,
      skills: [
        { name: "AutoCAD Electrical", level: 4 },
        { name: "Schematic Redlining", level: 5 },
        { name: "Panel Fabrication Layout", level: 4 },
        { name: "Add-On Instruction (AOI) Authoring", level: 4 },
      ],
    },
  ],
};
