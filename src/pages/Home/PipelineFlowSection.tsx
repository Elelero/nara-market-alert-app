/***********************************************************************
 * @description: 사용자의 관심 사업을 파이프라인으로 보여주는 영역
 **********************************************************************/

import { Fragment } from "react/jsx-runtime";
import { PipelineStage } from "../../types/types";

type PipelineFlowProps = { stages: PipelineStage[] };

const PipelineFlowSection = ({ stages }: PipelineFlowProps) => {
  return (
      <div className="card">
        <div className="flex items-center">
          {stages.map((stage, idx) => (
            <Fragment key={stage.id}>
              <div className="flex size-24 flex-1 flex-col items-center justify-center rounded-lg border">
                <p className="text-sm text-slate-500">{stage.label}</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{stage.value}</p>
              </div>
              {idx < stages.length - 1 && (
                <div className="mx-2 h-px w-6 flex-shrink-0 border-t border-dashed border-slate-300"></div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
  );
};

export default PipelineFlowSection;
