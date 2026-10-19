import { Component, Suspense, lazy, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from "../icons";
import { DRIVE_CREDIT } from "../rackModules";

// 3D model block for a project page. `model` comes from the project's
// `model3d` field in projectRegistry.js.
const MODELS = {
  POWERFLEX_525: {
    Viewer: lazy(() => import("./Drive3D")),
    label: "PowerFlex 525 · the drive this bench tests",
    credit: DRIVE_CREDIT,
  },
};

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

class HideOnError extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function Credit({ credit }) {
  return (
    <p className="text-[11px] text-text-dim">
      {credit.url ? (
        <a
          href={credit.url}
          target="_blank"
          rel="noreferrer"
          className="hover:text-text-muted hover:underline underline-offset-2"
        >
          “{credit.title}”
        </a>
      ) : (
        <>“{credit.title}”</>
      )}{" "}
      by {credit.author} ·{" "}
      <a
        href={credit.licenseUrl}
        target="_blank"
        rel="noreferrer"
        className="hover:text-text-muted hover:underline underline-offset-2"
      >
        {credit.license}
      </a>
    </p>
  );
}

export default function ProjectModel({ model }) {
  const [webgl] = useState(hasWebGL);
  const entry = MODELS[model];
  if (!entry || !webgl) return null;
  const { Viewer, label, credit } = entry;
  const reducedMotion =
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

  return (
    <HideOnError>
      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-xs uppercase tracking-[0.1em] flex items-center gap-2 text-text-dim">
          <FontAwesomeIcon icon={ICONS.engineeringScope} aria-hidden="true" />
          {label}
        </h2>
        <div className="grid-paper relative h-[340px] md:h-[420px] rounded-xl border border-hmi-border bg-[#10151a] overflow-hidden">
          <Suspense
            fallback={
              <div className="h-full flex items-center justify-center font-mono text-xs uppercase tracking-[0.08em] text-text-dim">
                Loading 3D model…
              </div>
            }
          >
            <Viewer reducedMotion={reducedMotion} />
          </Suspense>
          <span className="pointer-events-none absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-[0.08em] text-text-dim">
            Drag to rotate
          </span>
        </div>
        <Credit credit={credit} />
      </section>
    </HideOnError>
  );
}
