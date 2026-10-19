import { Component, Suspense, lazy, useEffect, useState } from "react";
import {
  RACK_MODULES,
  DEFAULT_MODULE,
  RACK_CREDIT,
  DRIVE_INFO,
  DRIVE_CREDIT,
} from "../rackModules";

// Hero rack: a real 3D ControlLogix chassis (React Three Fiber), loaded
// lazily. While it loads — or if the device has no WebGL — a flat CSS
// version of the same rack is shown instead. Both share the module list,
// the info panel and the module buttons below, which also make the rack
// usable by keyboard and touch.
const Rack3D = lazy(() => import("./Rack3D"));
const Drive3D = lazy(() => import("./Drive3D"));

const VIEWS = [
  { id: "rack", label: "ControlLogix" },
  { id: "drive", label: "PowerFlex 525" },
];

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false,
  );
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

class FallbackOnError extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

// Flat stand-in: same modules, same hover behaviour.
function FlatRack({ active, setActive }) {
  return (
    <div className="h-full flex items-center justify-center">
      <div
        className="flex gap-1.5 p-3.5 rounded-lg border border-hmi-divider/70 bg-hmi-surface"
        style={{
          transform: "perspective(900px) rotateY(-14deg) rotateX(6deg)",
        }}
        aria-hidden="true"
      >
        {RACK_MODULES.map((m) => {
          const on = m.id === active;
          return (
            <div
              key={m.id}
              onMouseEnter={() => setActive(m.id)}
              className={`${m.id === "PA" ? "w-16 sm:w-20" : "w-8 sm:w-10"} h-40 sm:h-[170px] rounded border flex flex-col items-center gap-1.5 py-2 transition-colors ${
                on
                  ? "border-accent bg-[#1a2a2c]"
                  : "border-hmi-divider/70 bg-[#1a2129]"
              }`}
            >
              <span
                className={`font-mono text-[9px] ${on ? "text-accent-soft" : "text-text-dim"}`}
              >
                {m.id}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-status-ok" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ChassisViewer() {
  const [active, setActive] = useState(DEFAULT_MODULE);
  const [view, setView] = useState("rack");
  const [webgl] = useState(hasWebGL);
  const reducedMotion = usePrefersReducedMotion();
  const isDrive = view === "drive";
  const current = isDrive
    ? DRIVE_INFO
    : RACK_MODULES.find((m) => m.id === active);

  const go = (id) => {
    const m = RACK_MODULES.find((x) => x.id === id);
    if (m) window.location.hash = m.href;
  };

  const flat = <FlatRack active={active} setActive={setActive} />;

  return (
    <div className="grid-paper relative flex flex-col rounded-2xl border border-hmi-border bg-[#10151a] overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-3 pt-3 font-mono text-[11px] tracking-[0.08em] uppercase">
        {webgl ? (
          <div
            role="tablist"
            aria-label="3D model"
            className="flex gap-1 p-1 rounded-lg bg-hmi-bg/80 border border-hmi-border"
          >
            {VIEWS.map((v) => (
              <button
                key={v.id}
                type="button"
                role="tab"
                aria-selected={view === v.id}
                onClick={() => setView(v.id)}
                className={`min-h-8 px-2.5 rounded-md uppercase tracking-[0.06em] transition-colors ${
                  view === v.id
                    ? "bg-hmi-surface text-accent-soft"
                    : "text-text-dim hover:text-text-primary"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        ) : (
          <span className="px-1 text-text-dim">Rack 0 · ControlLogix</span>
        )}
        <span className="flex items-center gap-1.5 text-status-ok">
          <span className="w-[7px] h-[7px] rounded-full bg-status-ok animate-pulse" />
          Run
        </span>
      </div>

      <div className="relative h-[300px] sm:h-[340px]">
        {webgl ? (
          <FallbackOnError fallback={flat}>
            <Suspense
              fallback={
                <div className="h-full flex items-center justify-center font-mono text-xs uppercase tracking-[0.08em] text-text-dim">
                  Loading 3D model…
                </div>
              }
            >
              {isDrive ? (
                <Drive3D reducedMotion={reducedMotion} />
              ) : (
                <Rack3D
                  active={active}
                  onHover={setActive}
                  onSelect={go}
                  reducedMotion={reducedMotion}
                />
              )}
            </Suspense>
          </FallbackOnError>
        ) : (
          flat
        )}
        {webgl && (
          <span className="pointer-events-none absolute bottom-2 right-4 font-mono text-[10px] uppercase tracking-[0.08em] text-text-dim">
            Drag to rotate
          </span>
        )}
      </div>

      {/* Info panel */}
      <div
        className="px-5 pt-1 pb-4 flex flex-col items-center gap-1 text-center min-h-[68px]"
        aria-live="polite"
      >
        <span className="text-sm font-semibold text-text-primary">
          <span className="font-mono text-accent-soft mr-2">
            {current.part}
          </span>
          {current.name}
        </span>
        <span className="text-[13px] leading-relaxed text-text-dim max-w-xs">
          {current.blurb}
        </span>
      </div>

      {/* Module buttons — keyboard / touch access to the same links */}
      {isDrive ? (
        <div className="flex justify-center px-4 pb-4">
          <a
            href={DRIVE_INFO.href}
            className="font-mono text-[11px] uppercase px-2.5 py-1.5 rounded border border-hmi-border text-text-dim hover:text-text-primary"
          >
            {DRIVE_INFO.linkLabel} →
          </a>
        </div>
      ) : (
        <nav
          aria-label="Rack modules"
          className="flex flex-wrap justify-center gap-1.5 px-4 pb-4"
        >
          {RACK_MODULES.map((m) => (
            <a
              key={m.id}
              href={m.href}
              onMouseEnter={() => setActive(m.id)}
              onFocus={() => setActive(m.id)}
              aria-label={`${m.part} ${m.name}: ${m.blurb}`}
              className={`font-mono text-[11px] px-2.5 py-1.5 rounded border transition-colors ${
                m.id === active
                  ? "border-accent text-accent-soft bg-accent/10"
                  : "border-hmi-border text-text-dim hover:text-text-primary"
              }`}
            >
              {m.id}
            </a>
          ))}
        </nav>
      )}

      {isDrive ? (
        <p className="px-4 pb-3 text-center text-[10px] text-text-dim">
          {DRIVE_CREDIT.url ? (
            <a
              href={DRIVE_CREDIT.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-text-muted underline-offset-2 hover:underline"
            >
              “{DRIVE_CREDIT.title}”
            </a>
          ) : (
            <>“{DRIVE_CREDIT.title}”</>
          )}{" "}
          by {DRIVE_CREDIT.author} ·{" "}
          <a
            href={DRIVE_CREDIT.licenseUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-text-muted underline-offset-2 hover:underline"
          >
            {DRIVE_CREDIT.license}
          </a>{" "}
          · compressed for the web
        </p>
      ) : (
        <a
          href={RACK_CREDIT.url}
          target="_blank"
          rel="noreferrer"
          className="px-4 pb-3 text-center text-[10px] text-text-dim hover:text-text-muted"
        >
          {RACK_CREDIT.text}
        </a>
      )}
    </div>
  );
}
