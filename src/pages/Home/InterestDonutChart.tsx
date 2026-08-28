import {
  CartesianGrid,
  Cell,
  Legend,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { DonutSlice } from "../../types/types";

/***********************************************************************
 * @description: 통계 차트를 보여주는 영역
 **********************************************************************/
interface InterestDonutChartProps {
  data: DonutSlice[];
}

const InterestDonutChart = ({ data }: InterestDonutChartProps) => {
  const AUTO_PALETTE = [
    "#FFC349",
    "#525EA7",
    "#5FACD3",
    "#97DDE9",
    "#7DDE92",
    "#FF9A5A",
    "#5A9CFF",
    "#E85D75",
  ];

  return (
    <div className="card">
      <div className="mb-3 flex items-center gap-2">
        <h3 className="sub_title">관심 사업 현황</h3>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-40 w-40 flex-shrink-0">
          {/* 도넛 차트 & 그래프 차트 */}
          <ResponsiveContainer width="150%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="label"
                cx="50%"
                innerRadius="60%"
                outerRadius="90%"
                paddingAngle={2}
              >
                {data.map((slice, index) => (
                  <Cell
                    key={slice.id}
                    fill={AUTO_PALETTE[index % AUTO_PALETTE.length]}
                    stroke="none"
                  />
                ))}
              </Pie>
              <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: 13, lineHeight: "24px" }}
                formatter={(value, entry: any) => (
                  <span className="text-slate-500">
                    {value}
                    <span className="text-slate-950">
                      {entry.payload.value}%
                    </span>
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="h-40 w-40 flex-shrink-0">
            <ResponsiveContainer>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis
                  hide
                  domain={[0, (max: number) => Math.ceil(max * 1.2)]}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestDonutChart;
