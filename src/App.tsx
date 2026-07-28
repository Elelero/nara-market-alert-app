import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatCard from './components/StatCard'
import PipelineFlow from './components/PipelineFlow'
import RecentAlerts from './components/RecentAlerts'
import ProjectList from './components/ProjectList'
import DDayList from './components/DDayList'
import InterestDonutChart from './components/InterestDonutChart'
import { statCards, pipelineStages, recentAlerts, hotProjects, recentViewed, ddayList, donutSlices } from './mockData'

export default function App() {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header userName="홍길동" notificationCount={3} />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-4 gap-4">
            {statCards.map((card) => (
              <StatCard key={card.id} {...card} />
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="col-span-2 space-y-4">
              <PipelineFlow stages={pipelineStages} />
              <div className="grid grid-cols-2 gap-4">
                <ProjectList title="HOT 관심 사업" items={hotProjects} />
                <ProjectList title="최신 조회 사업" items={recentViewed} />
              </div>
              <InterestDonutChart data={donutSlices} />
            </div>

            <div className="space-y-4">
              <RecentAlerts alerts={recentAlerts} />
              <DDayList items={ddayList} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
