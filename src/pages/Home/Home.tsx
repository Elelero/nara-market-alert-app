/***********************************************************************
 * @description: 메인 홈페이지
 **********************************************************************/
import { pipelineStages, statCards } from "../../data/homeData";
import BizListSection from "./BizListSection";
import PipelineFlowSection from "./PipelineFlowSection";
import RecentAlertSection from "./RecentAlertSection";
import StatCardSection from "./StatCardSection";

const Home = () => {
  return (
    <div>
      {/* [1행] 관심 파이프라인 영역 */}
      <PipelineFlowSection stages={pipelineStages} />
      {/* [좌측] */}
      <div className="mt-4 grid grid-cols-[2fr_1fr] gap-4">
        <div className="flex flex-col gap-4">
          {/* [2행] 통계 영역 */}
          <StatCardSection cards={statCards} />

          {/* [3행] HOT 관심 사업 & 최근 조회 사업 */}
          <div className="grid grid-cols-2 gap-4">
            <BizListSection title="HOT 관심 사업" />
            <BizListSection title="최근 조회 사업" />
          </div>
        </div>

        {/* [우측] 최근알림 */}
        <div className="grid grid-cols-1 gap-4">
          <RecentAlertSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
