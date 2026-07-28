import { LayoutDashboard, Search, Star, BellRing, FileText, Tag, History, Sparkles, Megaphone, BookOpen, HelpCircle } from 'lucide-react'

interface NavItemProps {
  icon: React.ReactNode
  label: string
  active?: boolean
}

function NavItem({ icon, label, active }: NavItemProps) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm transition-colors ${
        active
          ? 'bg-blue-500/15 text-blue-300 font-medium'
          : 'text-slate-300 hover:bg-white/5 hover:text-white'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="px-4 pb-2 pt-5 text-[11px] font-semibold tracking-wider text-slate-500">{children}</p>
}

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-60 flex-shrink-0 flex-col bg-navy-950 text-white">
      <div className="flex items-center gap-2 px-5 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600">
          <Sparkles size={16} className="text-white" />
        </div>
        <span className="text-lg font-bold">나라장터 알리미</span>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-6">
        <NavItem icon={<LayoutDashboard size={18} />} label="대시보드" active />
        <NavItem icon={<Search size={18} />} label="사업검색" />
        <NavItem icon={<Star size={18} />} label="관심사업" />
        <NavItem icon={<BellRing size={18} />} label="알림센터" />

        <SectionLabel>MY MENU</SectionLabel>
        <NavItem icon={<FileText size={18} />} label="나의 사업" />
        <NavItem icon={<Tag size={18} />} label="등록 키워드" />
        <NavItem icon={<History size={18} />} label="최근 조회" />
        <NavItem icon={<Sparkles size={18} />} label="AI 추천 사업" />

        <SectionLabel>QUICK MENU</SectionLabel>
        <NavItem icon={<Megaphone size={18} />} label="공지사항" />
        <NavItem icon={<BookOpen size={18} />} label="자료실" />
        <NavItem icon={<HelpCircle size={18} />} label="도움말" />
      </nav>

      <div className="m-3 rounded-xl bg-white/5 p-4 text-center">
        <p className="mb-3 text-sm text-slate-300">맞춤형 사업 알림을 설정해보세요!</p>
        <button className="w-full rounded-lg bg-blue-500 py-2 text-sm font-semibold text-white hover:bg-blue-400 transition-colors">
          설정하기
        </button>
      </div>
    </aside>
  )
}
