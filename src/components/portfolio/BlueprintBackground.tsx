import BlueprintGridWarp from '@/components/portfolio/BlueprintGridWarp';

type LogLine = {
  time: string;
  source: string;
  message: string;
};

const LOG_LINES: LogLine[] = [
  { time: '02:14:01', source: 'fastapi.node', message: 'POST /api/analyze 200 142ms' },
  { time: '02:14:02', source: 'postgres.node', message: 'SELECT * FROM transactions LIMIT 100' },
  { time: '02:14:03', source: 'health.check', message: 'postgres:5432 — NOMINAL' },
  { time: '02:14:05', source: 'ml.pipeline', message: 'AutoML complete — accuracy: 0.914' },
  { time: '02:14:08', source: 'fintrack.api', message: 'GET /api/budgets/summary 200 89ms' },
  { time: '02:14:11', source: 'ci.pipeline', message: 'build PASSED — lint, test, deploy' },
  { time: '02:14:12', source: 'telemetry', message: 'requests_total{route="/api/chat"} 1284' },
  { time: '02:14:16', source: 'sql.assistant', message: 'NL → SQL query generated' },
  { time: '02:14:18', source: 'gemini.fallback', message: 'API pool ready — 3 keys online' },
  { time: '02:14:22', source: 'sse.stream', message: 'tokens streaming to client' },
];

const ANNOTATIONS = [
  { top: '10%', left: '2%', text: 'REF: MY-PORTFOLIO-2026' },
  { top: '22%', right: '2%', text: 'SHEET A · HERO' },
  { top: '38%', left: '2%', text: '§4.2 · PROJECTS' },
  { top: '52%', right: '2%', text: 'SCALE: 1:1' },
  { bottom: '28%', left: '2%', text: 'HAW HAMBURG · DE' },
  { bottom: '16%', right: '2%', text: 'REV 3.0 · STATUS: NOMINAL' },
  { bottom: '8%', left: '50%', text: 'DIM: 1440×900', center: true },
];

const LOG_COLUMNS = [
  { side: 'left' as const, duration: 58, reverse: false, offset: 0 },
  { side: 'right' as const, duration: 68, reverse: true, offset: 4 },
];

function LogEntry({ line }: { line: LogLine }) {
  return (
    <div className="whitespace-nowrap py-1.5 text-[9px] font-mono leading-none text-cyan-400/20">
      <span className="text-cyan-400/12">{line.time}</span>
      {'  '}
      <span className="text-cyan-400/16">{line.source}</span>
      {'  '}
      <span>{line.message}</span>
    </div>
  );
}

function CornerMark({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`absolute w-10 h-10 text-cyan-400/25 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path d="M20 6 V34 M6 20 H34" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.6" />
      <circle cx="20" cy="20" r="1.5" fill="currentColor" fillOpacity="0.5" />
    </svg>
  );
}

function CornerTick({ className }: { className: string }) {
  return <div className={`absolute w-5 h-5 border-cyan-400/30 pointer-events-none ${className}`} aria-hidden="true" />;
}

export default function BlueprintBackground() {
  const doubledLogs = [...LOG_LINES, ...LOG_LINES];

  return (
    <div className="absolute inset-0 blueprint-grid-bg overflow-hidden" aria-hidden="true">
      <BlueprintGridWarp />

      {/* Center axis guides */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-cyan-400/[0.07]" />
      <div className="absolute inset-x-0 top-1/2 h-px bg-cyan-400/[0.07]" />

      {/* Corner registration marks */}
      <CornerMark className="top-3 left-3" />
      <CornerMark className="top-3 right-3" />
      <CornerMark className="bottom-14 left-3" />
      <CornerMark className="bottom-14 right-3" />

      <CornerTick className="top-6 left-6 border-t border-l" />
      <CornerTick className="top-6 right-6 border-t border-r" />
      <CornerTick className="bottom-[4.5rem] left-6 border-b border-l" />
      <CornerTick className="bottom-[4.5rem] right-6 border-b border-r" />

      {/* Margin telemetry log streams */}
      <div className="log-stream-root absolute inset-0 pointer-events-none hidden md:block">
        {LOG_COLUMNS.map((col) => (
          <div
            key={col.side}
            className={`absolute top-0 bottom-0 w-44 overflow-hidden ${
              col.side === 'left' ? 'left-0 pl-2' : 'right-0 pr-2'
            }`}
            style={{ paddingTop: `${col.offset * 12}px` }}
          >
            <div
              className={`log-stream-column ${col.reverse ? 'log-stream-reverse' : ''}`}
              style={{ animationDuration: `${col.duration}s` }}
            >
              {doubledLogs.map((line, i) => (
                <LogEntry key={`${col.side}-${i}`} line={line} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Drafting annotations */}
      {ANNOTATIONS.map((note) => (
        <span
          key={note.text}
          className={`absolute hidden lg:block text-[10px] font-mono text-cyan-400/20 tracking-widest uppercase pointer-events-none ${
            note.center ? '-translate-x-1/2' : ''
          }`}
          style={{
            top: note.top,
            left: note.center ? '50%' : note.left,
            right: note.right,
            bottom: note.bottom,
          }}
        >
          {note.text}
        </span>
      ))}

      {/* Edge vignette — lighter than before so grid reads through */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/50 via-transparent to-[#0a1628]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/30 via-transparent to-[#0a1628]/30" />
    </div>
  );
}
