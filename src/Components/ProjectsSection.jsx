import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from "../icons";
import { PROJECT_REGISTRY } from "../projectRegistry";
import { IN_PROGRESS } from "../siteConfig";
import SectionHeading from "./SectionHeading";
import ProjectThumb from "./ProjectThumb";

// Every PROJECT entry with a slug becomes a card, in registry order.
const PROJECTS = Object.values(PROJECT_REGISTRY).filter(
  (p) => p.type === "PROJECT" && p.slug,
);

function Tag({ children, tone = "neutral" }) {
  const tones = {
    alarm: "bg-status-alarm/10 text-[#f7a29d]",
    info: "bg-status-info/10 text-[#9cc6f5]",
    accent: "bg-accent/10 text-accent-soft",
    brand: "bg-brand/10 text-[#f5c86a]",
    neutral: "bg-hmi-surface text-text-muted",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase px-2 py-[3px] rounded ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

// Tag color per project category.
const CATEGORY_TONE = {
  "PLC / Studio 5000": "accent",
  "Panel build": "brand",
  Troubleshooting: "alarm",
};

function ProjectCard({ project, featured = false }) {
  const categoryTone = CATEGORY_TONE[project.category] ?? "neutral";
  return (
    <a
      href={`#/projects/${project.slug}`}
      className={`group flex flex-col rounded-xl border border-hmi-border bg-hmi-panel overflow-hidden text-text-primary transition hover:border-hmi-divider hover:-translate-y-0.5 ${
        featured ? "lg:col-span-2 lg:flex-row" : ""
      }`}
    >
      <ProjectThumb
        diagramType={project.diagramType}
        className={
          featured
            ? "lg:w-1/2 lg:h-auto lg:min-h-[260px] lg:border-b-0 lg:border-r"
            : ""
        }
      />
      <div
        className={`flex flex-col gap-2.5 flex-1 p-5 ${featured ? "lg:p-8 lg:justify-center" : ""}`}
      >
        <div className="flex flex-wrap gap-1.5">
          <Tag tone={categoryTone}>{project.category}</Tag>
          <Tag tone="info">{project.faultLog ? "Case study" : "Build log"}</Tag>
          <Tag tone="neutral">{project.status}</Tag>
        </div>
        <h3
          className={`font-semibold leading-snug ${featured ? "text-[19px] lg:text-2xl" : "text-[19px]"}`}
        >
          {project.cardTitle}
        </h3>
        <p className="text-sm leading-relaxed text-text-muted">
          {project.summary}
        </p>
        <div className="mt-auto pt-3 flex items-center justify-between gap-3">
          <span className="font-mono text-xs uppercase text-text-dim">
            {project.cardStack}
          </span>
          <span className="shrink-0 text-sm text-accent group-hover:text-accent-soft">
            Read
            <FontAwesomeIcon
              icon={ICONS.arrowRight}
              className="ml-1.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </a>
  );
}

function InProgressCard({ item }) {
  return (
    <div className="flex flex-col gap-2.5 rounded-xl border border-dashed border-hmi-divider bg-hmi-panel p-5">
      <div className="flex flex-wrap gap-1.5">
        <Tag tone="brand">
          <span className="w-1.5 h-1.5 rounded-full bg-brand" />
          In progress
        </Tag>
      </div>
      <h3 className="text-[19px] font-semibold">{item.title}</h3>
      <p className="text-sm leading-relaxed text-text-muted">{item.summary}</p>
      <span className="mt-auto pt-3 font-mono text-xs uppercase text-text-dim">
        {item.stack}
        {item.updated ? ` · Updated ${item.updated}` : ""}
      </span>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col gap-7">
      <SectionHeading index="01" label="Projects" title="Featured work" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.slug} project={p} featured={i === 0} />
        ))}
      </div>

      {IN_PROGRESS.length > 0 && (
        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-xs uppercase tracking-[0.1em] text-text-dim">
            Currently building
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {IN_PROGRESS.map((item) => (
              <InProgressCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
