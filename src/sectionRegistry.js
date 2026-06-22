// Defines each sidebar "module" (accordion enclosure).
// To add a new page category later: add an entry here, then tag entries
// in projectRegistry.js with a matching `type`. No Sidebar.jsx changes needed.
import { ICONS } from "./icons";

export const SECTION_REGISTRY = [
  {
    id: "SYSTEM_PROFILE",
    label: "SYSTEM CONFIG",
    icon: ICONS.systemConfig,
    accent: "brand", // dedicated identity color, distinct from status semantics
  },
  {
    id: "REGISTER_MAP",
    label: "CAPABILITY REGISTER",
    icon: ICONS.registerMap,
    accent: "info", // matches status-info token
  },
  {
    id: "PROJECT",
    label: "FIELD OPERATIONS",
    icon: ICONS.fieldOps,
    accent: "ok", // matches status-ok token
  },
  {
    id: "GATEWAY",
    label: "REMOTE INTERLOCK",
    icon: ICONS.remoteInterlock,
    accent: "warn", // matches status-warn token
  },
];

// Tailwind class lookups per accent — kept static (not template-built) so
// Tailwind's compiler can see and generate every class.
export const ACCENT_STYLES = {
  brand: {
    dot: "bg-accent",
    headerActive: "text-accent",
    itemActive:
      "bg-accent/10 text-accent border-accent/30 font-bold shadow-inner",
    badge: "bg-accent/10 text-accent border-accent/30",
  },
  info: {
    dot: "bg-status-info",
    headerActive: "text-status-info",
    itemActive:
      "bg-status-info/10 text-status-info border-status-info/30 font-bold shadow-inner",
    badge: "bg-status-info/10 text-status-info border-status-info/30",
  },
  ok: {
    dot: "bg-status-ok",
    headerActive: "text-status-ok",
    itemActive:
      "bg-status-ok/10 text-status-ok border-status-ok/30 font-bold shadow-inner",
    badge: "bg-status-ok/10 text-status-ok border-status-ok/30",
  },
  warn: {
    dot: "bg-status-warn",
    headerActive: "text-status-warn",
    itemActive:
      "bg-status-warn/10 text-status-warn border-status-warn/30 font-bold shadow-inner",
    badge: "bg-status-warn/10 text-status-warn border-status-warn/30",
  },
};
