interface SectionHeadingProps {
  id: string;
  title: string;
  accent?: string;
  subtitle?: string;
}

export default function SectionHeading({ id, title, accent, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <p className="text-[10px] font-mono text-cyan-400/50 tracking-[0.3em] uppercase mb-3">
        — {id.replace(/-/g, ' ')} —
      </p>
      <h2 id={id} className="blueprint-heading mb-4">
        {accent ? (
          <>
            <span className="text-cyan-400">{accent}</span>{' '}
            {title.replace(accent, '').trim()}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
  );
}
