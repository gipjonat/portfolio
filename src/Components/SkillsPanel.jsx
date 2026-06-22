import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SignalBars({ level }) {
  // 5-bar signal-strength indicator, styled like a telemetry/signal
  // strength readout rather than a generic progress bar.
  const bars = [1, 2, 3, 4, 5];
  return (
    <div
      className="flex items-end gap-0.5"
      aria-label={`Proficiency ${level} of 5`}
    >
      {bars.map((bar) => (
        <span
          key={bar}
          className={`w-1.5 rounded-sm ${
            bar <= level ? "bg-accent" : "bg-hmi-border"
          }`}
          style={{ height: `${6 + bar * 3}px` }}
        ></span>
      ))}
    </div>
  );
}

export default function SkillsPanel({ activeKey, data }) {
  return (
    <section className="bg-hmi-panel border border-hmi-border rounded-xl overflow-hidden shadow-xl transition-all">
      {/* Expanded Ribbon Bar — matches ProjectPanel for visual consistency */}
      <div className="px-6 py-4 bg-hmi-surface border-b border-hmi-border flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-xs md:text-sm font-bold text-text-muted uppercase tracking-wider">
            Inspect Node:
          </span>
          <span className="text-sm px-3 py-1 font-bold bg-hmi-bg border border-hmi-border rounded-md text-text-primary">
            {activeKey}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-text-muted">
            LOC: [{data.meta.location}]
          </span>
        </div>
        <span
          className={`text-xs font-black tracking-widest px-3 py-1 rounded-md border ${data.meta.statusColor}`}
        >
          {data.meta.status}
        </span>
      </div>

      {/* Main Body */}
      <div className="p-6 md:p-8 space-y-8">
        <div>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-text-primary mb-3 leading-tight">
            {data.meta.title}
          </h2>
          <p className="text-base md:text-lg text-text-muted leading-relaxed max-w-5xl font-sans">
            {data.meta.description}
          </p>
        </div>

        <hr className="border-hmi-border" />

        {/* Legend */}
        <div className="flex items-center gap-3 text-xs text-text-muted font-mono">
          <span>SIGNAL_STRENGTH:</span>
          <div className="flex items-center gap-1.5">
            <SignalBars level={2} />
            <span>EXPOSURE</span>
          </div>
          <div className="flex items-center gap-1.5">
            <SignalBars level={5} />
            <span>EXPERT</span>
          </div>
        </div>

        {/* Skill Groups */}
        <div className="space-y-6">
          {data.groups.map((group) => (
            <div key={group.id} className="space-y-3">
              <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                <span className="w-4 text-center">
                  <FontAwesomeIcon icon={group.icon} />
                </span>{" "}
                {group.label}
              </h3>
              <div className="border border-hmi-border rounded-lg overflow-hidden divide-y divide-hmi-border">
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-4 px-4 py-2.5 bg-hmi-bg hover:bg-hmi-surface transition-colors"
                  >
                    <span className="text-sm text-text-primary font-mono truncate">
                      {skill.name}
                    </span>
                    <SignalBars level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
