import type { AlertItem, BadgeType } from '../types'

const badgeStyles: Record<BadgeType, string> = {
  임찰공고: 'bg-blue-100 text-blue-600',
  사전규격: 'bg-cyan-100 text-cyan-600',
  발주계획: 'bg-slate-200 text-slate-600',
  개찰결과: 'bg-red-100 text-red-600',
}

const dotStyles: Record<BadgeType, string> = {
  임찰공고: 'bg-blue-500',
  사전규격: 'bg-cyan-500',
  발주계획: 'bg-slate-400',
  개찰결과: 'bg-red-500',
}

interface RecentAlertsProps {
  alerts: AlertItem[]
}

export default function RecentAlerts({ alerts }: RecentAlertsProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-800">최근 알림</h3>
        <button className="text-xs text-slate-400 hover:text-slate-600">더보기 &gt;</button>
      </div>
      <ul className="space-y-4">
        {alerts.map((item) => (
          <li key={item.id} className="flex gap-2">
            <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${dotStyles[item.badge]}`} />
            <div className="min-w-0">
              <span className={`mr-2 inline-block rounded px-1.5 py-0.5 text-[11px] font-medium ${badgeStyles[item.badge]}`}>
                {item.badge}
              </span>
              <p className="mt-1 truncate text-sm text-slate-700">{item.title}</p>
              <p className="mt-0.5 text-xs text-slate-400">
                {item.timeAgo}
                {item.dday && <> · 마감 {item.dday}</>}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
