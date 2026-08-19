import { ChevronRight } from 'lucide-react'
import type { ProjectItem } from '../../types/types'

interface ProjectListProps {
  title: string
  items: ProjectItem[]
}

export default function ProjectList({ title, items }: ProjectListProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
        <button className="text-xs text-slate-400 hover:text-slate-600">더보기 &gt;</button>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-slate-300" />
              <span className="truncate text-sm text-slate-700">{item.title}</span>
            </div>
            <div className="flex flex-shrink-0 items-center gap-2 text-xs text-slate-400">
              {item.org && <span>{item.org}</span>}
              {item.meta && <span>· {item.meta}</span>}
              <ChevronRight size={14} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
