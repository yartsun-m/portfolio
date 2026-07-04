import { useTranslation } from '@/i18n/useTranslation';

const NODES = ['pipelineRaw', 'pipelineApi', 'pipelineDb', 'pipelineAi'] as const;

export default function DataPipelineVisual() {
  const { t } = useTranslation();

  return (
    <div
      className="w-full max-w-5xl mx-auto py-5 px-2"
      role="img"
      aria-label={t.hero.pipelineAria}
    >
      <svg
        viewBox="0 0 720 100"
        className="w-full h-auto text-cyan-400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6">
            <path d="M0 6 L6 0" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" />
          </pattern>
        </defs>

        {NODES.map((key, i) => {
          const x = 20 + i * 175;
          const label = t.hero[key];
          return (
            <g key={key}>
              <rect
                x={x}
                y="20"
                width="130"
                height="60"
                stroke="currentColor"
                strokeOpacity="0.6"
                strokeWidth="1"
                strokeDasharray="4 3"
                fill="url(#hatch)"
              />
              <line x1={x} y1="20" x2={x + 12} y2="20" stroke="currentColor" strokeOpacity="0.9" />
              <line x1={x} y1="20" x2={x} y2="32" stroke="currentColor" strokeOpacity="0.9" />
              <line
                x1={x + 130}
                y1="80"
                x2={x + 118}
                y2="80"
                stroke="currentColor"
                strokeOpacity="0.9"
              />
              <line
                x1={x + 130}
                y1="80"
                x2={x + 130}
                y2="68"
                stroke="currentColor"
                strokeOpacity="0.9"
              />
              <text
                x={x + 65}
                y="55"
                textAnchor="middle"
                className="fill-cyan-300 text-[11px] font-mono"
                style={{ fontSize: '11px' }}
              >
                {label}
              </text>
              {i < NODES.length - 1 && (
                <>
                  <line
                    x1={x + 130}
                    y1="50"
                    x2={x + 175}
                    y2="50"
                    stroke="currentColor"
                    strokeOpacity="0.4"
                    strokeWidth="1"
                    strokeDasharray="6 4"
                  />
                  <polygon
                    points={`${x + 170},46 ${x + 178},50 ${x + 170},54`}
                    fill="currentColor"
                    fillOpacity="0.5"
                  />
                  <circle
                    cx={x + 152}
                    cy="50"
                    r="2.5"
                    className="pipeline-flow-dot fill-cyan-400"
                    style={{ animationDelay: `${i * 0.6}s` }}
                  />
                </>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
