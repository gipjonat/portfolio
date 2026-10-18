import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SKILLS_REGISTRY } from "../skillsRegistry";
import SectionHeading from "./SectionHeading";

const LEVEL_WORDS = ["", "Exposure", "Familiar", "Working", "Strong", "Expert"];

// 5-bar signal-strength readout for proficiency.
function SignalBars({ level }) {
  return (
    <span
      className="flex items-end gap-0.5 shrink-0"
      role="img"
      aria-label={`${LEVEL_WORDS[level]}: ${level} of 5`}
    >
      {[1, 2, 3, 4, 5].map((bar) => (
        <span
          key={bar}
          className={`w-1.5 rounded-sm ${bar <= level ? "bg-accent" : "bg-hmi-border"}`}
          style={{ height: `${6 + bar * 3}px` }}
        />
      ))}
    </span>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="flex flex-col gap-7">
      <SectionHeading index="03" label="Skills" title="What I work with">
        <div className="flex items-center gap-4 font-mono text-[11px] uppercase text-text-dim">
          <span className="flex items-center gap-2">
            <SignalBars level={2} /> Exposure
          </span>
          <span className="flex items-center gap-2">
            <SignalBars level={5} /> Expert
          </span>
        </div>
      </SectionHeading>

      <p className="text-base leading-relaxed text-text-muted max-w-3xl">
        {SKILLS_REGISTRY.meta.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SKILLS_REGISTRY.groups.map((group) => (
          <div
            key={group.id}
            className="rounded-xl border border-hmi-border bg-hmi-panel overflow-hidden"
          >
            <h3 className="flex items-center gap-2.5 px-5 py-3.5 border-b border-hmi-border font-mono text-xs uppercase tracking-[0.08em] text-accent-soft">
              <FontAwesomeIcon icon={group.icon} className="w-4" aria-hidden="true" />
              {group.label}
            </h3>
            <ul className="divide-y divide-hmi-border">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center justify-between gap-4 px-5 py-2.5 hover:bg-hmi-surface transition-colors"
                >
                  <span className="text-[15px] text-text-primary">{skill.name}</span>
                  <SignalBars level={skill.level} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
