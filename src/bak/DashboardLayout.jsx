import { useState } from "react";
import {
  LayoutDashboard,
  Briefcase,
  Star,
  Bell,
  FileText,
  HelpCircle,
  Search,
  ChevronDown,
  Clock,
  Bookmark,
  ListChecks,
} from "lucide-react";

// 사이드바 메인 메뉴
const mainMenu = [
  { label: "대시보드", icon: LayoutDashboard },
  { label: "사업관리", icon: Briefcase },
  { label: "관심사업", icon: Star },
  { label: "알림센터", icon: Bell },
];

// 사이드바 MY 메뉴
const myMenu = [
  { label: "나의 사업", icon: Briefcase },
  { label: "즐겨찾기", icon: Star },
  { label: "최근 조회", icon: Clock },
  { label: "자주찾는 사업", icon: Bookmark },
];

// 사이드바 QUICK 메뉴
const quickMenu = [
  { label: "공지사항", icon: FileText },
  { label: "자료실", icon: ListChecks },
  { label: "도움말", icon: HelpCircle },
];

const SidebarSection = ({ title, items, activeLabel, onSelect }) => (
  <div className="px-4 mt-6">
    {title && (
      <p className="text-[11px] font-semibold tracking-wider text-slate-500 mb-2 px-2">
        {title}
      </p>
    )}
    <ul className="space-y-1">
      {items.map(({ label, icon: Icon }) => {
        const active = label === activeLabel;
        return (
          <li key={label}>
            <button
              onClick={() => onSelect(label)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors
                ${
                  active
                    ? "bg-indigo-500 text-white font-medium shadow-sm"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);

const Sidebar = ({ activeLabel, onSelect }) => (
  <aside className="w-64 shrink-0 bg-slate-900 h-screen flex flex-col justify-between">
    <div>
      {/* 로고 */}
      <div className="flex items-center gap-2 px-5 h-16 border-b border-slate-800">
        <div className="w-7 h-7 rounded-md bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">
          N
        </div>
        <span className="text-white font-semibold text-sm tracking-tight">
          나라장터 알리미
        </span>
      </div>

      <SidebarSection
        items={mainMenu}
        activeLabel={activeLabel}
        onSelect={onSelect}
      />
      <div className="mx-4 mt-6 border-t border-slate-800" />
      <SidebarSection
        title="MY 메뉴"
        items={myMenu}
        activeLabel={activeLabel}
        onSelect={onSelect}
      />
      <div className="mx-4 mt-6 border-t border-slate-800" />
      <SidebarSection
        title="QUICK 메뉴"
        items={quickMenu}
        activeLabel={activeLabel}
        onSelect={onSelect}
      />
    </div>

    {/* 하단 프로모션 박스 */}
    <div className="p-4">
      <div className="bg-slate-800 rounded-xl p-4 text-center">
        <p className="text-white text-xs font-medium leading-relaxed mb-3">
          입찰 놓치지 않고
          <br />
          알림 받아보세요
        </p>
        <button className="w-full bg-indigo-500 hover:bg-indigo-400 transition-colors text-white text-xs font-semibold py-2 rounded-lg">
          알림받기
        </button>
      </div>
    </div>
  </aside>
);

const Header = ({ activeLabel }) => {
  const [alertOn, setAlertOn] = useState(true);

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-4">
        <h1 className="text-sm font-semibold text-slate-800">{activeLabel}</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* 실시간 알림 토글 */}
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <span>실시간 알림</span>
          <button
            onClick={() => setAlertOn((v) => !v)}
            className={`w-9 h-5 rounded-full relative transition-colors ${
              alertOn ? "bg-indigo-500" : "bg-slate-300"
            }`}
          >
            <span
              className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                alertOn ? "translate-x-4" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>

        {/* 검색 */}
        <div className="relative">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="사업명, 지역, 발주처명 검색"
            className="w-64 bg-slate-100 rounded-lg pl-8 pr-3 py-2 text-xs text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>

        {/* 알림 벨 */}
        <button className="relative w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
          <Bell size={16} className="text-slate-600" />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* 프로필 */}
        <button className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full hover:bg-slate-100 transition-colors">
          <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-semibold">
            홍
          </div>
          <span className="text-xs text-slate-700">홍길동 님</span>
          <ChevronDown size={14} className="text-slate-400" />
        </button>
      </div>
    </header>
  );
};

const DashboardLayout = () => {
  const [activeLabel, setActiveLabel] = useState("대시보드");

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      <Sidebar activeLabel={activeLabel} onSelect={setActiveLabel} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header activeLabel={activeLabel} />
        <main className="flex-1 overflow-auto p-6">
          <div className="bg-white rounded-xl border border-dashed border-slate-300 h-full flex items-center justify-center text-slate-400 text-sm">
            콘텐츠 영역 ({activeLabel})
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
