import {
  Bell,
  Bookmark,
  Briefcase,
  Clock,
  FileText,
  HelpCircle,
  LayoutDashboard,
  ListChecks,
  LucideIcon,
  Star,
} from "lucide-react";
import logo from "@images/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 사이드바 메인 메뉴
const mainMenu = [
  { label: "대시보드", icon: LayoutDashboard },
  { label: "사업관리", icon: Briefcase },
  { label: "관심사업", icon: Star },
  { label: "알림센터", icon: Bell },
];

// 사이드바 마이 메뉴
const myMenu = [
  { label: "나의 사업", icon: Briefcase },
  { label: "즐겨찾기", icon: Star },
  { label: "최근 조회", icon: Clock },
  { label: "자주찾는 사업", icon: Bookmark },
];

// 사이드바 퀵 메뉴
const quickMenu = [
  { label: "공지사항", icon: FileText },
  { label: "자료실", icon: ListChecks },
  { label: "도움말", icon: HelpCircle },
];

// 사이드바 타입 선언
interface SidebarSectionProps {
  title?: string;
  items: { label: string; icon: LucideIcon }[];
  activeLabel?: string;
  onSelect: (label: string) => void;
}

// 사이드바 CSS 효과
const SidebarSection = ({
  title,
  items,
  activeLabel,
  onSelect,
}: SidebarSectionProps) => (
  <div className="px-4 mt-6">
    {/* 메뉴 중제목 */}
    {title && (
      <p className="text-[11px] font-semibold tracking-wider text-slate-500 mb-2 px-2">
        {title}
      </p>
    )}

    {/* 메뉴 소제목 */}
    <ul className="space-y-1">
      {items.map(({ label, icon: Icon }) => {
        const bActive = label === activeLabel;

        return (
          <li key={label}>
            <button
              onClick={() => onSelect(label)}
              className={`w-full flex item-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors
                ${
                  bActive
                    ? "bg-blue-500/15 text-blue-300 font-medium"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);

// 사이드바 Component
const Sidebar = () => {
  const [activeLabel, setActiveLabel] = useState("대시보드");
  const navigate = useNavigate();

  return (
    <aside className="w-48 shrink-0 h-screen flex flex-col border-b border-slate-200 bg-white">
      {/* 로고 */}
      <div className="flex items-center">
        <img src={logo} width={70} />
        <span className="text-lg">
          <button onClick={() => navigate("/origin")}>클로드(원본)</button>
        </span>
      </div>

      {/* 메뉴바 */}
      <div className="bg-slate-900 z-40 shadow-[8px_0_6px_-1px_rgba(0,0,0,0.15)] rounded-tr-[25px] flex flex-col justify-between flex-1">
        <div>
          {/* Menu */}
          <SidebarSection
            items={mainMenu}
            activeLabel={activeLabel}
            onSelect={setActiveLabel}
          />
          <div className="mx-4 mt-6 border-t border-slate-700" />
          <SidebarSection
            title="MY 메뉴"
            items={myMenu}
            activeLabel={activeLabel}
            onSelect={setActiveLabel}
          />
          <div className="mx-4 mt-6 border-t border-slate-700" />
          <SidebarSection
            title="QUICK 메뉴"
            items={quickMenu}
            activeLabel={activeLabel}
            onSelect={setActiveLabel}
          />
        </div>

        {/* 하단 프로모션 박스 */}
        <div className="p-4">
          <div className="bg-blue-500/15 rounded-xl p-4 text-center">
            <p className="text-white text-xs font-medium leading-relaxed mb-3">
              입찰 놓치지 말고
              <br />
              알림 받아보세요
            </p>
            <button className="w-full bg-blue-500 hover:bg-blue-700 transition-colors text-white text-xs font-semibold py-2 rounded-lg">
              알림받기
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
