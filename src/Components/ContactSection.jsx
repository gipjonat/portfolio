import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from "../icons";
import { SITE } from "../siteConfig";
import SectionHeading from "./SectionHeading";

function CopyButton({ text, label }) {
  const [copied, setCopied] = useState(false);
  const copy = () =>
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });

  return (
    <button
      type="button"
      onClick={copy}
      className="w-11 h-11 shrink-0 flex items-center justify-center rounded-lg border border-hmi-border text-text-muted hover:text-text-primary hover:bg-hmi-surface transition-colors"
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
    >
      <FontAwesomeIcon icon={copied ? ICONS.check : ICONS.copy} className={copied ? "text-status-ok" : ""} />
    </button>
  );
}

function ContactRow({ icon, label, value, href, external, copyText }) {
  return (
    <div className="flex items-center gap-3 p-3 pl-4 rounded-xl border border-hmi-border bg-hmi-bg">
      <FontAwesomeIcon icon={icon} className="text-lg text-text-dim w-5" aria-hidden="true" />
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        className="flex-1 min-w-0 flex flex-col"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-text-dim">{label}</span>
        <span className="text-[15px] text-text-primary truncate">{value}</span>
      </a>
      <CopyButton text={copyText} label={label.toLowerCase()} />
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="flex flex-col gap-7">
      <SectionHeading index="05" label="Contact" title="Hiring for controls or automation?" />

      <div className="rounded-2xl border border-hmi-border bg-hmi-panel p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-4">
          <p className="text-lg leading-relaxed text-text-primary/90">
            Open to full-time controls engineering and systems integration roles,
            contract work, and troubleshooting consults. Based in {SITE.location} —
            willing to relocate or work remote for the right role.
          </p>
          <p className="text-sm text-text-muted">I aim to reply within 24 hours.</p>
          <a
            href={SITE.resumePath}
            download={SITE.resumeDownloadName}
            className="self-start inline-flex items-center gap-2 min-h-12 px-6 rounded-lg bg-brand text-brand-ink font-semibold text-[15px] hover:brightness-110 transition"
          >
            <FontAwesomeIcon icon={ICONS.download} aria-hidden="true" />
            Download resume
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <ContactRow
            icon={ICONS.email}
            label="Email"
            value={SITE.email}
            href={`mailto:${SITE.email}`}
            copyText={SITE.email}
          />
          <ContactRow
            icon={ICONS.linkedin}
            label="LinkedIn"
            value={SITE.linkedinLabel}
            href={SITE.linkedinUrl}
            external
            copyText={SITE.linkedinUrl}
          />
        </div>
      </div>
    </section>
  );
}
