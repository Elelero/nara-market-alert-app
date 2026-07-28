import type { StatCardData } from '../types'

export default function StatCard({ label, value, total }: StatCardData) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="mb-2 text-sm text-slate-500">{label}</p>
      <p className="text-2xl font-bold text-slate-900">
        {value}
        {total && <span className="text-base font-medium text-slate-400"> / {total}</span>}
      </p>
    </div>
  )
}
