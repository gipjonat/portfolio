import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from "../icons";
import { PROJECT_REGISTRY } from "../projectRegistry";
import SchematicDiagram from "./SchematicDiagram";

const PROJECTS = Object.values(PROJECT_REGISTRY).filter(
  (p) => p.type === "PROJECT" && p.slug,
);

function Label({ icon, children, className = "text-text-dim" }) {
  return (
    <h2 className={`font-mono text-xs uppercase tracking-[0.1em] flex items-center gap-2 ${className}`}>
      {icon && <FontAwesomeIcon icon={icon} aria-hidden="true" />}
      {children}
    </h2>
  );
}

function FaultLog({ log }) {
  return (
    <section className="flex flex-col gap-4">
      <Label icon={ICONS.diagnosticTrace}>Diagnostic trace</Label>
      <div className="rounded-xl border border-hmi-border overflow-hidden">
        <div className="p-5 bg-status-alarm/5 border-b border-hmi-border">
          <div className="font-mono text-[11px] uppercase tracking-wider text-status-alarm mb-2">
            Symptom
          </div>
          <p className="leading-relaxed text-text-primary/90">{log.symptom}</p>
        </div>

        <div className="p-5 bg-hmi-panel border-b border-hmi-border">
          <div className="font-mono text-[11px] uppercase tracking-wider text-text-dim mb-4">
            Steps taken
          </div>
          <ol className="flex flex-col gap-4">
            {log.diagnosticSteps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full border border-status-info/40 bg-status-info/10 text-status-info font-mono text-xs flex items-center justify-center">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed text-text-primary/90 pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="p-5 bg-status-warn/5 border-b border-hmi-border">
          <div className="font-mono text-[11px] uppercase tracking-wider text-status-warn mb-2">
            Root cause
          </div>
          <p className="leading-relaxed text-text-primary/90">{log.rootCause}</p>
        </div>

        <div className="p-5 bg-status-ok/5">
          <div className="font-mono text-[11px] uppercase tracking-wider text-status-ok mb-2">
            Fix applied
          </div>
          <p className="leading-relaxed text-text-primary/90">{log.fix}</p>
        </div>
      </div>
    </section>
  );
}

export default function ProjectDetail({ projectKey, data }) {
  const index = PROJECTS.findIndex((p) => p === data);
  const next = PROJECTS.length > 1 ? PROJECTS[(index + 1) % PROJECTS.length] : null;

  return (
    <article className="flex flex-col gap-12 pt-8" aria-labelledby={`${projectKey}-title`}>
      <a
        href="#projects"
        className="self-start inline-flex items-center gap-2 min-h-11 text-sm text-text-muted hover:text-text-primary"
      >
        <FontAwesomeIcon icon={ICONS.arrowLeft} aria-hidden="true" />
        All projects
      </a>

      {/* Header */}
      <header className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.08em]">
          <span className="text-brand">
            {data.id} · {data.category}
          </span>
          <span className="flex items-center gap-1.5 text-status-ok">
            <span className="w-[7px] h-[7px] rounded-full bg-status-ok" />
            {data.status}
          </span>
        </div>
        <h1 id={`${projectKey}-title`} className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] max-w-4xl">
          {data.title}
        </h1>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-muted">
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={ICONS.location} className="text-text-dim" aria-hidden="true" />
            {data.location}
          </span>
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={ICONS.registerDelta} className="text-text-dim" aria-hidden="true" />
            {data.metric}
          </span>
        </div>
      </header>

      {/* Overview */}
      <section className="flex flex-col gap-4">
        <Label icon={ICONS.engineeringScope}>Overview</Label>
        <p className="text-lg leading-relaxed text-text-muted max-w-4xl">
          {data.description}
        </p>
      </section>

      {/* Before / after */}
      {data.beforeAfter && (
        <section className="flex flex-col gap-4">
          <Label icon={ICONS.registerDelta}>Result · {data.beforeAfter.label}</Label>
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <div className="flex-1 p-5 rounded-xl border border-hmi-border bg-hmi-panel">
              <div className="font-mono text-[11px] uppercase tracking-wider text-text-dim mb-1.5">Before</div>
              <div className="text-lg md:text-xl font-semibold text-status-alarm">
                {data.beforeAfter.before}
              </div>
            </div>
            <div className="flex items-center justify-center text-text-dim px-1" aria-hidden="true">
              <FontAwesomeIcon icon={ICONS.arrowRight} className="rotate-90 sm:rotate-0" />
            </div>
            <div className="flex-1 p-5 rounded-xl border border-status-ok/30 bg-hmi-panel">
              <div className="font-mono text-[11px] uppercase tracking-wider text-text-dim mb-1.5">After</div>
              <div className="text-lg md:text-xl font-semibold text-status-ok">
                {data.beforeAfter.after}
              </div>
            </div>
          </div>
        </section>
      )}

      {data.diagramType && <SchematicDiagram diagramType={data.diagramType} />}

      {data.faultLog && <FaultLog log={data.faultLog} />}

      {/* Field notes */}
      {data.fieldNotes && (
        <section className="grid-paper p-6 rounded-xl border border-hmi-border bg-[#10151a] flex flex-col gap-3">
          <Label icon={ICONS.fieldLog} className="text-brand">Field notes</Label>
          <p className="text-base md:text-lg leading-relaxed text-text-primary/90">
            {data.fieldNotes}
          </p>
        </section>
      )}

      {/* Tags */}
      <section className="flex flex-col gap-4">
        <Label icon={ICONS.tag}>Skills used</Label>
        <ul className="flex flex-wrap gap-2">
          {data.tags.map((tag) => (
            <li
              key={tag}
              className="px-3 py-1.5 rounded-full border border-hmi-divider/70 text-sm text-text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </section>

      {next && (
        <a
          href={`#/projects/${next.slug}`}
          className="group flex items-center justify-between gap-4 p-6 rounded-xl border border-hmi-border bg-hmi-panel hover:border-hmi-divider transition-colors"
        >
          <span className="flex flex-col gap-1">
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-text-dim">Next project</span>
            <span className="text-lg font-semibold text-text-primary">{next.cardTitle}</span>
          </span>
          <FontAwesomeIcon
            icon={ICONS.arrowRight}
            className="text-accent transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      )}
    </article>
  );
}
