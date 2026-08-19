/***********************************************************************
 * @description: 메인 홈페이지
 **********************************************************************/
import { pipelineStages, statCards } from "../../data/homeData";
import PipelineFlowSection from "./PipelineFlowSection";
import StatCardSection from "./StatCardSection";

const Home = () => {
  return (
    <div>
      {/* [1행] 관심 파이프라인 영역 */}
      <div className="grid grid-cols-1 gap-4">
        <div className="col-span-2 space-y-4">
          <PipelineFlowSection stages={pipelineStages} />
        </div>
      </div>

      {/* [2행] 통계 영역 */}
      <div className="mt-4 grid grid-cols-4 gap-4">
        {statCards.map((card) => <StatCardSection key={card.id} {...card} />)}
      </div>
    </div>
  );
};

export default Home;
