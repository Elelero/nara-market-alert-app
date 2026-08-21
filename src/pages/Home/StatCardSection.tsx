/***********************************************************************
 * @description: 사용자의 관심 사업 통계 수치를 카드로 간략하게 보여주는 영역
 **********************************************************************/

import { StatCards } from "../../types/types";

type StatCardProp = { cards: StatCards[] };

const StatCardSection = ({ cards }: StatCardProp) => {
  return (
    <div className="mt-4 grid grid-cols-4 gap-4">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <p className="mb-2 text-sm text-slate-500">{card.label}</p>
          <p className="text-2xl font-bold text-slate-900">
            {card.value}
            <span className="text-base font-medium text-slate-400">
              / {card.total}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatCardSection;
