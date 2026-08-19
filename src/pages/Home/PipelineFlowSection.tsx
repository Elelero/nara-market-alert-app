/***********************************************************************
 * @description: 사용자의 관심 사업을 파이프라인으로 보여주는 영역
 **********************************************************************/

import { PipelineStage } from "../../types/types";

type PipelineFlowProps = { stages: PipelineStage[] };

const PipelineFlowSection = ({ stages }: PipelineFlowProps) => {
  return (
    <div className="card">
      <div className="flex items-center">
        {stages.map((stage, idx) => (
          <div key={stage.id} className="flex flex-1 items-center">
            <div>{stage.label}</div>
            {idx < stages.length - 1 && (
              <div className="mx-2 h-px w-6 flex-shrink-0 border-t border-dashed border-slate-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PipelineFlowSection;
