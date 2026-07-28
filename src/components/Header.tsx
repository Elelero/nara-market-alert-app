import { useState } from 'react'
import { Bell, ChevronDown, Search } from 'lucide-react'

interface HeaderProps {
  userName: string
  notificationCount: number
}

export default function Header({ userName, notificationCount }: HeaderProps) {
  const [realtimeOn, setRealtimeOn] = useState(true)

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
        <a className="text-slate-900" href="#">사업검색</a>
        <a className="hover:text-slate-900" href="#">관심사업</a>
        <a className="hover:text-slate-900" href="#">알림센터</a>
      </nav>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span>실시간 알림</span>
          <button
            type="button"
            role="switch"
            aria-checked={realtimeOn}
            onClick={() => setRealtimeOn((v) => !v)}
            className={`relative h-6 w-11 rounded-full transition-colors ${realtimeOn ? 'bg-blue-500' : 'bg-slate-300'}`}
          >
            <span
              className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                realtimeOn ? 'translate-x-5' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>

        <div className="relative">
          <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="사업명, 키워드, 기관명을 검색하세요"
            className="w-72 rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm outline-none focus:border-blue-400 focus:bg-white"
          />
        </div>

        <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200">
          <Bell size={18} className="text-slate-600" />
          {notificationCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              {notificationCount}
            </span>
          )}
        </button>

        <button className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-slate-300" />
          <span className="text-sm font-medium text-slate-700">{userName} 님</span>
          <ChevronDown size={14} className="text-slate-400" />
        </button>
      </div>
    </header>
  )
}
