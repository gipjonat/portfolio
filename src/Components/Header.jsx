import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from "../icons";

export default function Header({ onMenuToggle }) {
  return (
    <header className="h-16 border-b border-hmi-border bg-hmi-bg px-4 md:px-6 flex items-center justify-between shrink-0 font-mono">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="p-2 -ml-2 rounded border border-hmi-border bg-hmi-panel text-text-muted md:hidden hover:bg-hmi-surface"
        >
          <FontAwesomeIcon icon={ICONS.menu} />
        </button>
        <h1 className="font-display text-sm md:text-base font-bold tracking-tight text-text-primary truncate">
          SYSTEM_MAIN_DASHBOARD
        </h1>
      </div>

      <div className="flex items-center gap-4 text-[11px]">
        <div className="hidden sm:block text-text-muted">
          ALARMS: <span className="text-status-ok font-bold">00_CLEAR</span>
        </div>
        <div className="px-2 py-0.5 rounded bg-hmi-surface border border-hmi-border text-text-muted font-mono text-[10px]">
          COMMS: OK
        </div>
      </div>
    </header>
  );
}
