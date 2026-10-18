import { CAREER_REGISTRY } from "../careerRegistry";
import SectionHeading from "./SectionHeading";

// Static class sets per tone so Tailwind can see every class.
const TONES = {
  current: {
    node: "border-status-ok",
    card: "border-status-ok/30 bg-status-ok/5",
    period: "text-status-ok",
    chip: "border-hmi-divider/70",
    suffix: " · Current",
  },
  civilian: {
    node: "border-status-info",
    card: "border-hmi-border bg-hmi-panel",
    period: "text-text-dim",
    chip: "border-hmi-divider/70",
    suffix: "",
  },
  military: {
    node: "border-brand",
    card: "border-brand/25 bg-brand/5",
    period: "text-[#f5c86a]",
    chip: "border-brand/25",
    suffix: " · Military",
  },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="flex flex-col gap-7">
      <SectionHeading index="02" label="Experience" title="From generators to PLCs" />

      <ol className="flex flex-col gap-6 border-l-2 border-hmi-border ml-[7px]">
        {CAREER_REGISTRY.map((job) => {
          const t = TONES[job.tone];
          return (
            <li key={job.id} className="flex gap-5">
              <span
                className={`shrink-0 w-3.5 h-3.5 rounded-full border-2 bg-hmi-bg -ml-2 mt-6 ${t.node}`}
                aria-hidden="true"
              />
              <div
                className={`flex-1 min-w-0 rounded-xl border px-5 py-4 flex flex-wrap gap-x-6 gap-y-3 items-start ${t.card}`}
              >
                <div className="flex-[1_1_260px] flex flex-col gap-1">
                  <span className={`font-mono text-[11px] uppercase tracking-[0.08em] ${t.period}`}>
                    {job.period}
                    {t.suffix}
                  </span>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <span className="text-sm text-text-muted">
                    {job.org} · {job.location}
                  </span>
                </div>
                <ul className="flex-[1_1_260px] flex flex-wrap gap-1.5 md:pt-5">
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      className={`text-[13px] px-2.5 py-1 rounded-full border text-[#c5ccd3] ${t.chip}`}
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
