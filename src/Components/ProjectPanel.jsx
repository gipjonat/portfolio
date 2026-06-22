import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from "../icons";
import SchematicDiagram from "./SchematicDiagram";

export default function ProjectPanel({ activeKey, data }) {
  return (
    <section className="bg-hmi-panel border border-hmi-border rounded-xl overflow-hidden shadow-xl transition-all">
      {/* Expanded Ribbon Bar */}
      <div className="px-6 py-4 bg-hmi-surface border-b border-hmi-border flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-xs md:text-sm font-bold text-text-muted uppercase tracking-wider">
            Inspect Node:
          </span>
          <span className="text-sm px-3 py-1 font-bold bg-hmi-bg border border-hmi-border rounded-md text-text-primary">
            {activeKey}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-text-muted">
            LOC: [{data.location}]
          </span>
        </div>
        <span
          className={`text-xs font-black tracking-widest px-3 py-1 rounded-md border ${data.statusColor}`}
        >
          {data.status}
        </span>
      </div>

      {/* Main Body */}
      <div className="p-6 md:p-8 space-y-8">
        <div>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-text-primary mb-3 leading-tight">
            {data.title}
          </h2>
          <div className="inline-flex items-center gap-2 text-sm md:text-base font-bold text-status-ok bg-status-ok/5 px-3 py-1.5 rounded-lg border border-status-ok/10">
            <span className="inline-block w-2 h-2 rounded-full bg-status-ok animate-pulse"></span>
            METRIC_KPI: {data.metric}
          </div>
        </div>

        <hr className="border-hmi-border" />

        {/* Engineering Scope */}
        <div className="space-y-3">
          <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
            <span>
              <FontAwesomeIcon icon={ICONS.engineeringScope} />
            </span>{" "}
            Engineering Scope & Implementation
          </h3>
          <p className="text-base md:text-lg text-text-muted leading-relaxed max-w-5xl">
            {data.description}
          </p>
        </div>

        {/* Inline Schematic Diagram - only renders when a project defines one */}
        {data.diagramType && (
          <SchematicDiagram diagramType={data.diagramType} />
        )}

        {/* Fault Log Diagnostic Narrative - only renders when defined */}
        {data.faultLog && (
          <div className="space-y-3">
            <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
              <span>
                <FontAwesomeIcon icon={ICONS.diagnosticTrace} />
              </span>{" "}
              Diagnostic Trace (Fault Log)
            </h3>
            <div className="border border-hmi-border rounded-lg overflow-hidden font-mono text-sm">
              <div className="px-4 py-3 bg-status-alarm/5 border-b border-hmi-border">
                <div className="text-[10px] uppercase tracking-wider text-status-alarm font-bold mb-1">
                  Symptom
                </div>
                <div className="text-text-primary/90">
                  {data.faultLog.symptom}
                </div>
              </div>
              <div className="px-4 py-3 bg-hmi-bg border-b border-hmi-border">
                <div className="text-[10px] uppercase tracking-wider text-text-muted font-bold mb-2">
                  Diagnostic Steps
                </div>
                <ol className="space-y-1.5">
                  {data.faultLog.diagnosticSteps.map((step, i) => (
                    <li key={i} className="flex gap-2 text-text-primary/90">
                      <span className="text-status-info shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="px-4 py-3 bg-status-warn/5 border-b border-hmi-border">
                <div className="text-[10px] uppercase tracking-wider text-status-warn font-bold mb-1">
                  Root Cause
                </div>
                <div className="text-text-primary/90">
                  {data.faultLog.rootCause}
                </div>
              </div>
              <div className="px-4 py-3 bg-status-ok/5">
                <div className="text-[10px] uppercase tracking-wider text-status-ok font-bold mb-1">
                  Fix Applied
                </div>
                <div className="text-text-primary/90">{data.faultLog.fix}</div>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Field Note Box */}
        <div className="p-5 bg-status-warn/5 border-l-4 border-status-warn rounded-r-xl space-y-2">
          <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-status-warn flex items-center gap-2">
            <span>
              <FontAwesomeIcon icon={ICONS.fieldLog} />
            </span>{" "}
            Root-Cause & Commissioning Notes (Field Log)
          </h4>
          <p className="text-sm md:text-base text-text-primary/90 italic font-sans">
            "{data.fieldNotes}"
          </p>
        </div>

        {/* Before/After Register Comparison - only renders when defined */}
        {data.beforeAfter && (
          <div className="space-y-3">
            <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
              <span>
                <FontAwesomeIcon icon={ICONS.registerDelta} />
              </span>{" "}
              Register Delta — {data.beforeAfter.label}
            </h3>
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <div className="flex-1 p-4 bg-hmi-bg border border-hmi-border rounded-lg">
                <div className="text-[10px] uppercase tracking-wider text-text-muted font-bold mb-1">
                  Before
                </div>
                <div className="font-mono text-lg md:text-xl font-bold text-status-alarm">
                  {data.beforeAfter.before}
                </div>
              </div>
              <div className="flex items-center justify-center text-text-muted text-xl shrink-0 px-1">
                →
              </div>
              <div className="flex-1 p-4 bg-hmi-bg border border-status-ok/30 rounded-lg">
                <div className="text-[10px] uppercase tracking-wider text-text-muted font-bold mb-1">
                  After
                </div>
                <div className="font-mono text-lg md:text-xl font-bold text-status-ok">
                  {data.beforeAfter.after}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Header & Tag System Blocks */}
        <div className="space-y-3">
          <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-text-muted">
            {data.type === "PROJECT"
              ? "Hardware & Protocol Registers"
              : "System Environment Capabilities"}
          </h3>
          <div className="flex flex-wrap gap-3">
            {data.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3.5 py-2 text-xs md:text-sm font-bold rounded-lg bg-hmi-bg border border-hmi-border text-text-primary shadow-sm font-mono tracking-wide"
              >
                <FontAwesomeIcon icon={ICONS.tag} className="mr-1.5" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* DYNAMIC FUNCTIONAL INTERLOCK - RENDERS ONLY ON CONTACT NODE */}
        {activeKey === "CONTACT" && (
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:your.email@example.com"
              className="p-5 bg-hmi-surface border border-hmi-border rounded-xl text-center hover:border-status-info group transition-all"
            >
              <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={ICONS.email} />
              </div>
              <div className="text-sm font-black text-text-primary">
                INITIATE_EMAIL_PING
              </div>
              <div className="text-xs text-text-muted mt-1 font-sans">
                Open default mail transport protocol
              </div>
            </a>

            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noreferrer"
              className="p-5 bg-hmi-surface border border-hmi-border rounded-xl text-center hover:border-status-ok group transition-all"
            >
              <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={ICONS.linkedin} />
              </div>
              <div className="text-sm font-black text-text-primary">
                LINKEDIN_COMMS_HANDSHAKE
              </div>
              <div className="text-xs text-text-muted mt-1 font-sans">
                Establish secure professional network node sync
              </div>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
