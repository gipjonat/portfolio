// Shared section header: amber mono index label + big sans heading.
export default function SectionHeading({ index, label, title, children }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs tracking-[0.1em] uppercase text-brand">
          {index} · {label}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
