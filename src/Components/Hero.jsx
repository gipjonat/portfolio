import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from "../icons";
import { SITE } from "../siteConfig";
import ChassisViewer from "./ChassisViewer";

const STATS = [
  { value: "6+ yrs", label: "Field experience" },
  { value: "5–6% → <1%", label: "Sorter lost tracking" },
  { value: "2 days", label: "Dead extendo → back in service" },
];

function StatusStrip() {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 px-3.5 py-2.5 rounded-lg border border-hmi-border bg-[#0f1317] font-mono text-xs tracking-[0.05em] text-text-dim">
      <span className="flex items-center gap-1.5 text-status-ok">
        <span className="w-[7px] h-[7px] rounded-full bg-status-ok" />
        RUN
      </span>
      <span>CONTROLLER: ONLINE</span>
      <span>I/O: OK</span>
      <span>FAULTS: 0</span>
      <span className="ml-auto hidden sm:inline">REV 2.0</span>
    </div>
  );
}

export default function Hero() {
  return (
    <div id="hero">
      <StatusStrip />
      <section className="flex flex-wrap items-center gap-12 pt-12 md:pt-16">
        <div className="flex-[1_1_420px] flex flex-col gap-6">
          <span className="font-mono text-[13px] tracking-[0.1em] uppercase text-brand">
            {"// Industrial maintenance & controls"}
          </span>
          <h1 className="text-[40px] md:text-5xl lg:text-[64px] leading-[1.05] font-bold tracking-tight">
            I keep automated systems running — and figure out why they stop.
          </h1>
          <p className="text-lg leading-relaxed text-text-muted max-w-[560px]">
            Allen-Bradley PLCs, VFDs, conveyors and sortation, and the networks
            between them. I go online in Studio 5000, trace faults through the
            ladder logic, and fix the root cause — not the symptom.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 min-h-12 px-6 rounded-lg bg-brand text-brand-ink font-semibold text-[15px] hover:brightness-110 transition"
            >
              View projects
              <FontAwesomeIcon icon={ICONS.arrowRight} aria-hidden="true" />
            </a>
            <a
              href={SITE.resumePath}
              download={SITE.resumeDownloadName}
              className="inline-flex items-center gap-2 min-h-12 px-6 rounded-lg border border-hmi-divider/70 text-text-primary font-medium text-[15px] hover:border-text-dim hover:bg-hmi-panel transition-colors"
            >
              <FontAwesomeIcon icon={ICONS.download} aria-hidden="true" />
              Download resume
            </a>
          </div>
          <dl className="flex flex-wrap gap-x-9 gap-y-5 pt-2">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse gap-1">
                <dt className="font-mono text-xs uppercase tracking-[0.04em] text-text-dim">
                  {s.label}
                </dt>
                <dd className="text-2xl md:text-[28px] font-bold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex-[1_1_380px] min-w-0">
          <ChassisViewer />
        </div>
      </section>
    </div>
  );
}
