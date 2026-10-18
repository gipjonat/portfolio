import { PROJECT_REGISTRY } from "../projectRegistry";
import SectionHeading from "./SectionHeading";

const PROFILE = PROJECT_REGISTRY.ABOUT_ME;
const OFF_CLOCK_STACK = ["C++", "C#", "OpenGL", "Vulkan", "Unreal Engine 5", "Godot"];

export default function AboutSection() {
  const service = PROFILE.serviceRecord;

  return (
    <section id="about" className="flex flex-col gap-7">
      <SectionHeading index="04" label="About" title="Root cause, not symptom" />

      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8">
        {/* Left: story */}
        <div className="flex flex-col gap-5">
          <p className="text-lg leading-relaxed text-text-primary/90">
            {PROFILE.description}
          </p>
          <p className="text-base leading-relaxed text-text-muted">
            {PROFILE.careerOrigin}
          </p>

          {PROFILE.targetRole && (
            <div className="mt-2 p-5 rounded-xl border border-brand/30 bg-brand/5 flex flex-col gap-2">
              <h3 className="font-mono text-xs uppercase tracking-[0.1em] text-brand">
                What I'm looking for
              </h3>
              <p className="leading-relaxed text-text-primary/90">{PROFILE.targetRole}</p>
            </div>
          )}
        </div>

        {/* Right: service record + off the clock */}
        <div className="flex flex-col gap-5">
          {service && (
            <div className="rounded-xl border border-hmi-border bg-hmi-panel p-5 flex flex-col gap-3">
              <h3 className="font-mono text-xs uppercase tracking-[0.1em] text-[#f5c86a]">
                Service record
              </h3>
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold">{service.mos}</span>
                <span className="text-sm text-text-muted">
                  {service.branch} · {service.status}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-text-muted">{service.mosDetail}</p>
            </div>
          )}

          {PROFILE.personalInterests && (
            <div className="grid-paper rounded-xl border border-hmi-border bg-[#10151a] p-5 flex flex-col gap-3">
              <h3 className="font-mono text-xs uppercase tracking-[0.1em] text-status-soft">
                Off the clock
              </h3>
              <span className="text-lg font-semibold">
                Engine programming &amp; computer graphics
              </span>
              <p className="text-sm leading-relaxed text-text-muted">
                {PROFILE.personalInterests}
              </p>
              <ul className="flex flex-wrap gap-1.5 pt-1">
                {OFF_CLOCK_STACK.map((s) => (
                  <li
                    key={s}
                    className="font-mono text-[11px] uppercase px-2 py-[3px] rounded bg-status-soft/10 text-status-soft"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
