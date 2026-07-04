import { Database, FileSpreadsheet, Server, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';

const STEP_COLORS = {
  pipelineRaw: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
  pipelineApi: 'text-blue-400 bg-blue-500/10 border-blue-500/25',
  pipelineDb: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/25',
  pipelineAi: 'text-purple-400 bg-purple-500/10 border-purple-500/25',
} as const;

type PipelineKey = keyof typeof STEP_COLORS;

const STEPS: { key: PipelineKey; icon: LucideIcon }[] = [
  { key: 'pipelineRaw', icon: FileSpreadsheet },
  { key: 'pipelineApi', icon: Server },
  { key: 'pipelineDb', icon: Database },
  { key: 'pipelineAi', icon: Sparkles },
];

function Connector() {
  return (
    <div
      className="hidden sm:flex flex-1 min-w-[1.5rem] max-w-[3rem] h-px relative items-center mx-1"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/30 to-blue-500/20" />
      <div className="pipeline-flow-dot absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] motion-reduce:hidden" />
    </div>
  );
}

export default function DataPipelineVisual() {
  const { t } = useTranslation();

  return (
    <div
      className="w-full max-w-3xl mx-auto py-3"
      role="img"
      aria-label={t.hero.pipelineAria}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 px-2">
        {STEPS.map((step, index) => (
          <div key={step.key} className="flex flex-col sm:flex-row items-center">
            <div
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border backdrop-blur-sm ${STEP_COLORS[step.key]} pipeline-node`}
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              <step.icon className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                {t.hero[step.key]}
              </span>
            </div>
            {index < STEPS.length - 1 && (
              <>
                <span className="sm:hidden text-gray-600 py-0.5" aria-hidden="true">
                  ↓
                </span>
                <Connector />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
