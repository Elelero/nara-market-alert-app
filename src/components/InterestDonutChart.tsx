import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import type { DonutSlice } from '../types'

interface InterestDonutChartProps {
  data: DonutSlice[]
}

export default function InterestDonutChart({ data }: InterestDonutChartProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-sm font-semibold text-slate-800">관심 사업 현황</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-40 w-40 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="label"
                innerRadius="60%"
                outerRadius="90%"
                paddingAngle={2}
              >
                {data.map((slice) => (
                  <Cell key={slice.id} fill={slice.color} stroke="none" />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="space-y-2 text-sm">
          {data.map((slice) => (
            <li key={slice.id} className="flex items-center gap-2 text-slate-600">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: slice.color }} />
              <span>{slice.label}</span>
              <span className="text-slate-400">{slice.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
