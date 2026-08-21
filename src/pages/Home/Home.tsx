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
      <PipelineFlowSection stages={pipelineStages} />

      {/* [2행] 통계 영역 */}
      <StatCardSection cards={statCards} />
    </div>
  );
};

export default Home;
