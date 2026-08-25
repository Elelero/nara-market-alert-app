import { ChevronRight } from "lucide-react";
import { ProjectItem } from "../../types/types";

// ==> 추후 제거 예정 (백단에서 데이터 받아와서 처리해야함) <==
const hotProjects: ProjectItem[] = [
  { id: "1", title: "청년 고용 올케어 플랫폼 사업" },
  { id: "2", title: "공공 AI 인사시스템 고도화" },
  { id: "3", title: "일모아시스템 사업" },
  { id: "4", title: "중장년내일센터 사업" },
];
// ==> 추후 제거 예정 (백단에서 데이터 받아와서 처리해야함) <==
const recentViewed: ProjectItem[] = [
  {
    id: "1",
    title: "청년 고용 올케어 플랫폼 사업",
    org: "한국고용정보원",
    meta: "오늘 09:25",
  },
  {
    id: "2",
    title: "직업훈련 AI 시스템 사업",
    org: "한국기술대학교",
    meta: "어제",
  },
  {
    id: "3",
    title: "일모아시스템 사업",
    org: "한국고용정보원",
    meta: "1주일전",
  },
  {
    id: "4",
    title: "중장년내일센터 사업",
    org: "한국고용정보원",
    meta: "방금",
  },
];

const BizListSection = ({ title }: { title: string }) => {
  {
    /* 일단 임의로 하드코딩함 ==> 나중에 백단 연동 후 다시 개발 */
  }
  const items = title.indexOf("HOT") > -1 ? hotProjects : recentViewed;

  return (
    <div className="card">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="sub_title">{title}</h3>
        <button className="more_btn">더보기 &gt;</button>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between gap-3"
          >
            <div className="flex min-w-0 item-center gap-2">
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-slate-300" />
                <span className="truncate text-sm text-slate-700">{item.title}</span>
            </div>
            <div className="flex flex-shrink-0 items-center gap-2 text-xs text-slate-400">
                {item.org && <span>{item.org}</span>}
                {item.org && <span>{item.meta}</span>}
                <ChevronRight size={14} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BizListSection;
