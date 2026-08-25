/***********************************************************************
 * @description: 최근 알림들을 일괄 보여주는 영역
 **********************************************************************/

import { AlertItem, BadgeType } from "../../types/types";

// 뱃지 스타일
const badgeStyles: Record<BadgeType, string> = {
  입찰공고: "bg-blue-100 text-blue-600",
  사전규격: "bg-cyan-100 text-cyan-600",
  발주계획: "bg-slate-200 text-slate-600",
  개찰결과: "bg-red-100 text-red-600",
};

// 알림(점) 스타일
const dotStyles: Record<BadgeType, string> = {
  입찰공고: "bg-blue-500",
  사전규격: "bg-cyan-500",
  발주계획: "bg-slate-400",
  개찰결과: "bg-red-500",
};

// ==> 추후 제거 예정 (백단에서 데이터 받아와서 처리해야함) <==
const recentAlerts: AlertItem[] = [
  {
    id: "1",
    badge: "입찰공고",
    title: '"청년 고용 올케어 플랫폼 사업"이 입찰공고로 전환됨',
    timeAgo: "3분전",
    dday: "D-7",
  },
  {
    id: "2",
    badge: "사전규격",
    title: '"청년 고용 올케어 플랫폼 사업" 마감임박!',
    timeAgo: "30분전",
    dday: "D-0",
  },
  {
    id: "3",
    badge: "발주계획",
    title: '"중장년내일센터 사업" 내용이 정정됨',
    timeAgo: "40분전",
    dday: "D-7",
  },
  {
    id: "4",
    badge: "발주계획",
    title: '"중장년내일센터 사업"이 발주계획에 등록됨',
    timeAgo: "1시간전",
    dday: "D-7",
  },
  {
    id: "5",
    badge: "개찰결과",
    title: '"일모아시스템 사업" 개찰 결과가 등록됨',
    timeAgo: "2시간전",
    dday: "",
  },
];

const RecentAlertSection = () => (
  <div className="card">
    <div className="mb-3 flex items-center justify-between">
      <h3 className="sub_title">최근 알림</h3>
      <button className="more_btn">더보기 &gt;</button>
    </div>
    <ul className="space-y-4">
      {recentAlerts.map((item) => (
        <li key={item.id} className="flex gap-2">
          <span
            className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${dotStyles[item.badge]}`}
          />
          <div className="min-w-0">
            <span
              className={`mr-2 inline-block rounded px-1.5 py-0.5 text-[11px] font-medium ${badgeStyles[item.badge]}`}
            >
              {item.badge}
            </span>
            <p className="mt-1 truncate text-sm text-slate-700">{item.title}</p>
            <p className="mt-0.5 text-xs text-slate-400">
              {item.timeAgo}
              {item.dday && <> · 마감{item.dday}</>}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default RecentAlertSection;
