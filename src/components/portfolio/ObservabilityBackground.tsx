import { useMemo } from 'react';

type LogLevel = 'info' | 'ok' | 'warn' | 'metric';

interface LogLine {
  time: string;
  level: LogLevel;
  source: string;
  message: string;
}

const LOG_LINES: LogLine[] = [
  { time: '02:14:01', level: 'info', source: 'uvicorn.access', message: 'POST /api/analyze 200 142ms' },
  { time: '02:14:02', level: 'info', source: 'sqlalchemy.engine', message: 'SELECT * FROM transactions LIMIT 100' },
  { time: '02:14:03', level: 'ok', source: 'health.check', message: 'postgres:5432 reachable' },
  { time: '02:14:05', level: 'info', source: 'ml.pipeline', message: 'AutoML complete — accuracy: 0.914' },
  { time: '02:14:06', level: 'info', source: 'gemini.client', message: 'RAG context assembled — 2.4k tokens' },
  { time: '02:14:08', level: 'info', source: 'fintrack.api', message: 'GET /api/budgets/summary 200 89ms' },
  { time: '02:14:09', level: 'warn', source: 'cache.layer', message: 'profile cache miss — recomputing stats' },
  { time: '02:14:11', level: 'ok', source: 'ci.github', message: 'build passed — lint, test, deploy' },
  { time: '02:14:12', level: 'info', source: 'docker.health', message: 'container api-server healthy' },
  { time: '02:14:14', level: 'metric', source: 'prometheus', message: 'http_requests_total{route="/api/chat"} 1284' },
  { time: '02:14:16', level: 'info', source: 'fastapi.app', message: 'JWT auth validated — user session active' },
  { time: '02:14:18', level: 'info', source: 'pandas.io', message: 'CSV ingested — 10,000 rows, 14 columns' },
  { time: '02:14:20', level: 'ok', source: 'health.check', message: 'gemini API fallback pool ready (3 keys)' },
  { time: '02:14:22', level: 'info', source: 'sql.assistant', message: 'NL → SQL query generated for PostgreSQL' },
  { time: '02:14:24', level: 'metric', source: 'mlflow', message: 'experiment logged — xgboost_v2 run_id=a3f9' },
  { time: '02:14:26', level: 'info', source: 'sse.stream', message: 'chat tokens streaming to client' },
  { time: '02:14:28', level: 'ok', source: 'playwright', message: 'e2e suite passed — 12 specs' },
  { time: '02:14:30', level: 'info', source: 'export.service', message: 'HTML report generated — 2.1 MB' },
];

const LEVEL_STYLES: Record<LogLevel, string> = {
  info: 'text-blue-400/50',
  ok: 'text-emerald-400/50',
  warn: 'text-amber-400/45',
  metric: 'text-purple-400/45',
};

const COLUMNS = [
  { offset: 0, duration: 55, reverse: false },
  { offset: 5, duration: 68, reverse: true },
  { offset: 11, duration: 62, reverse: false },
  { offset: 3, duration: 74, reverse: true },
] as const;

function LogEntry({ line }: { line: LogLine }) {
  return (
    <div className="whitespace-nowrap py-1.5 text-[11px] leading-relaxed font-mono">
      <span className="text-gray-600/80">{line.time}</span>{' '}
      <span className={LEVEL_STYLES[line.level]}>{line.level.toUpperCase().padEnd(5)}</span>{' '}
      <span className="text-gray-500/70">{line.source}</span>{' '}
      <span className="text-gray-400/60">{line.message}</span>
    </div>
  );
}

function LogColumn({
  lines,
  duration,
  reverse,
}: {
  lines: LogLine[];
  duration: number;
  reverse: boolean;
}) {
  const stream = useMemo(() => [...lines, ...lines], [lines]);

  return (
    <div className="relative h-full overflow-hidden flex-1 min-w-0 hidden md:block">
      <div
        className={`log-stream-column ${reverse ? 'log-stream-reverse' : ''}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {stream.map((line, index) => (
          <LogEntry key={`${line.time}-${line.source}-${index}`} line={line} />
        ))}
      </div>
    </div>
  );
}

export default function ObservabilityBackground() {
  const columns = useMemo(
    () =>
      COLUMNS.map(({ offset, duration, reverse }) => ({
        duration,
        reverse,
        lines: [...LOG_LINES.slice(offset), ...LOG_LINES.slice(0, offset)],
      })),
    []
  );

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none log-stream-root"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10" />

      <div className="flex h-full gap-8 px-6 pt-24 opacity-[0.38]">
        {columns.map((column, index) => (
          <LogColumn
            key={index}
            lines={column.lines}
            duration={column.duration}
            reverse={column.reverse}
          />
        ))}
      </div>

      {/* Mobile: single static column snapshot */}
      <div className="md:hidden absolute inset-x-4 top-28 bottom-0 overflow-hidden opacity-25">
        <div className="log-stream-column-static">
          {LOG_LINES.map((line) => (
            <LogEntry key={`mobile-${line.time}-${line.source}`} line={line} />
          ))}
        </div>
      </div>
    </div>
  );
}
