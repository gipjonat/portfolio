import { useState } from "react";

// ControlLogix-style chassis for the hero.
//
// This is the CSS stand-in for the planned 3D model. When the React Three
// Fiber version is ready, it replaces the <Rack /> below — the MODULES list,
// the hover/focus info panel and the click-through links can stay as-is so
// the 3D modules behave the same way.
const MODULES = [
  {
    id: "PS",
    name: "Power supply",
    blurb: "Where every troubleshoot starts: verify power before anything else.",
    href: "#experience",
    leds: ["ok"],
  },
  {
    id: "CPU",
    name: "Controller",
    blurb: "Studio 5000 ladder logic, online edits and tag hunting.",
    href: "#/projects/sorter-lost-tracking",
    leds: ["ok", "ok"],
  },
  {
    id: "ENET",
    name: "EtherNet/IP",
    blurb: "Comms through RSLinx, managed switches, VLANs.",
    href: "#skills",
    leds: ["ok"],
  },
  {
    id: "DI",
    name: "Digital inputs",
    blurb: "Photo eyes, limit switches, safety interlocks.",
    href: "#/projects/extendo-rewire",
    leds: ["brand"],
  },
  {
    id: "DO",
    name: "Digital outputs",
    blurb: "Motor starters, MDR, solenoids, stack lights.",
    href: "#/projects/extendo-rewire",
    leds: ["brand"],
  },
  {
    id: "AI",
    name: "Analog inputs",
    blurb: "Speeds, pressures and the numbers behind the symptom.",
    href: "#skills",
    leds: [],
  },
  {
    id: "AO",
    name: "Analog outputs",
    blurb: "VFD speed references and process control.",
    href: "#skills",
    leds: [],
  },
];

const LED = {
  ok: "bg-status-ok",
  brand: "bg-brand",
};

export default function ChassisViewer() {
  const [hovered, setHovered] = useState("CPU");
  const current = MODULES.find((m) => m.id === hovered);

  return (
    <div className="grid-paper relative flex flex-col items-center justify-center gap-6 min-h-[420px] p-8 pt-14 rounded-2xl border border-hmi-border bg-[#10151a]">
      <span className="absolute top-3.5 left-4 font-mono text-[11px] tracking-[0.08em] text-text-dim uppercase">
        Rack 0 · ControlLogix
      </span>
      <span className="absolute top-3.5 right-4 flex items-center gap-1.5 font-mono text-[11px] tracking-[0.08em] text-status-ok uppercase">
        <span className="w-[7px] h-[7px] rounded-full bg-status-ok animate-pulse" />
        Run
      </span>

      <div
        className="flex gap-1.5 p-3.5 rounded-lg border border-hmi-divider/70 bg-hmi-surface"
        style={{ transform: "perspective(900px) rotateY(-14deg) rotateX(6deg)" }}
      >
        {MODULES.map((m) => {
          const on = m.id === hovered;
          return (
            <a
              key={m.id}
              href={m.href}
              onMouseEnter={() => setHovered(m.id)}
              onFocus={() => setHovered(m.id)}
              aria-label={`${m.name}: ${m.blurb}`}
              className={`w-9 sm:w-10 h-40 sm:h-[170px] rounded border flex flex-col items-center gap-1.5 py-2 transition-colors ${
                on
                  ? "border-accent bg-[#1a2a2c]"
                  : "border-hmi-divider/70 bg-[#1a2129] hover:border-accent"
              }`}
            >
              <span
                className={`font-mono text-[9px] ${on ? "text-accent-soft" : "text-text-dim"}`}
              >
                {m.id}
              </span>
              {m.leds.map((led, i) => (
                <span key={i} className={`w-1.5 h-1.5 rounded-full ${LED[led]}`} />
              ))}
            </a>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-1 text-center max-w-xs min-h-[64px]" aria-live="polite">
        <span className="text-sm font-semibold text-text-primary">
          <span className="font-mono text-accent-soft mr-2">{current.id}</span>
          {current.name}
        </span>
        <span className="text-[13px] leading-relaxed text-text-dim">
          {current.blurb}
        </span>
      </div>
    </div>
  );
}
