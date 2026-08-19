import type { PipelineStage } from '../../types/types'

interface PipelineFlowProps {
  stages: PipelineStage[]
}

export default function PipelineFlow({ stages }: PipelineFlowProps) {
  return (
    <div className="rounded-xl border-2 border-blue-400 bg-white p-5">
      <p className="mb-4 text-sm font-medium text-slate-500">관심 사업 파이프라인</p>
      <div className="flex items-center">
        {stages.map((stage, idx) => (
          <div key={stage.id} className="flex flex-1 items-center">
            <div
              className={`flex h-16 flex-1 items-center justify-center rounded-lg border text-sm font-medium ${
                stage.active
                  ? 'border-blue-300 bg-blue-50 text-blue-700'
                  : 'border-slate-200 bg-slate-50 text-slate-400'
              }`}
            >
              {stage.label}
            </div>
            {idx < stages.length - 1 && (
              <div className="mx-2 h-px w-6 flex-shrink-0 border-t border-dashed border-slate-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
