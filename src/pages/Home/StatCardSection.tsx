/***********************************************************************
 * @description: 사용자의 관심 사업 통계 수치를 카드로 간략하게 보여주는 영역
 **********************************************************************/

interface StatCards {
  id: string;
  label: string;
  value: number;
  total: number;
}

const StatCardSection = (statCard: StatCards) => {
  return (
    <div key={statCard.id} className="card">
      <p className="mb-2 text-sm text-slate-500">{statCard.label}</p>
      <p className="text-2xl font-bold text-slate-900">
        {statCard.value}
        <span className="text-base font-medium text-slate-400">/ {statCard.total}</span>
      </p>
    </div>
  );
};

export default StatCardSection;
