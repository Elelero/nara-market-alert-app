import type { DDayItem } from '../types'

interface DDayListProps {
  items: DDayItem[]
}

export default function DDayList({ items }: DDayListProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-800">D-DAY 마감 임박 사업</h3>
        <button className="text-xs text-slate-400 hover:text-slate-600">더보기 &gt;</button>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            <span className="rounded-md bg-red-50 px-2 py-1 text-xs font-bold text-red-500">{item.ddayLabel}</span>
            <span className="truncate text-sm text-slate-700">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
