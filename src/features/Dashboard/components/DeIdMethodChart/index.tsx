// import { useState } from "react";
// import {
//   Bar,
//   BarChart,
//   CartesianGrid,
//   Cell,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
//   type TooltipProps,
// } from "recharts";
// import { useTranslation } from "react-i18next";

// import { CHART_BORDER_RADIUS, CHART_COLORS } from "constants/dashboard";
// import type { DeIdMethodData } from "features/Dashboard/types";

// import { ChartBody, ChartCard, ChartSubtitle, ChartTitle } from "../ChartCard/styles";

// const tickStyle = { fontSize: 10, fill: "#9ca3af", fontFamily: "Inter, sans-serif" };

// const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
//   if (!active || !payload?.length) return null;
//   return (
//     <div
//       style={{
//         background: "#111827",
//         color: "#fff",
//         borderRadius: 8,
//         padding: "6px 12px",
//         fontSize: 13,
//         fontFamily: "Inter, sans-serif",
//         fontWeight: 600,
//         boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//       }}
//     >
//       {payload[0].value}
//     </div>
//   );
// };

// const defaultHashBarIndex = (rows: DeIdMethodData[]) => {
//   const i = rows.findIndex((d) => d.method === "Hash");
//   return i >= 0 ? i : null;
// };

// type Props = {
//   data: DeIdMethodData[];
// };

// export const DeIdMethodChart = ({ data }: Props) => {
//   const { t } = useTranslation("dashboard");
//   const [activeIndex, setActiveIndex] = useState<number | null>(() =>
//     defaultHashBarIndex(data),
//   );

//   return (
//     <ChartCard>
//       <ChartTitle>{t("charts.deIdMethod.title")}</ChartTitle>
//       <ChartSubtitle>{t("charts.deIdMethod.subtitle")}</ChartSubtitle>

//       <ChartBody>
//         <ResponsiveContainer width="100%" height={200}>
//           <BarChart
//             data={data}
//             margin={{ top: 16, right: 0, left: -24, bottom: 0 }}
//             barCategoryGap="35%"
//             onMouseLeave={() => setActiveIndex(defaultHashBarIndex(data))}
//           >
//             <CartesianGrid vertical={false} stroke="#F3F4F6" strokeDasharray="0" />
//             <XAxis
//               dataKey="method"
//               tick={tickStyle}
//               axisLine={false}
//               tickLine={false}
//             />
//             <YAxis
//               tick={tickStyle}
//               axisLine={false}
//               tickLine={false}
//               tickCount={5}
//             />
//             <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
//             <Bar
//               dataKey="count"
//               radius={[CHART_BORDER_RADIUS, CHART_BORDER_RADIUS, 0, 0]}
//               onMouseEnter={(_, index) => setActiveIndex(index)}
//             >
//               {data.map((entry, index) => (
//                 <Cell
//                   key={`cell-${index}`}
//                   fill={
//                     activeIndex === index ? CHART_COLORS.activeBar : entry.color
//                   }
//                 />
//               ))}
//             </Bar>
//           </BarChart>
//         </ResponsiveContainer>
//       </ChartBody>
//     </ChartCard>
//   );
// };

import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  type TooltipProps,
} from "recharts";
import { useTranslation } from "react-i18next";

import { CHART_BORDER_RADIUS, CHART_COLORS } from "constants/dashboard";

import type { DeIdMethodData } from "features/Dashboard/types";

import {
  ChartBody,
  ChartCard,
  ChartSubtitle,
  ChartTitle,
} from "../ChartCard/styles";

const tickStyle = {
  fontSize: 10,
  fill: "#9ca3af",
  fontFamily: "Inter, sans-serif",
};

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      style={{
        background: "#111827",
        color: "#fff",
        borderRadius: 8,
        padding: "5px 12px",
        fontSize: 13,
        fontFamily: "Inter, sans-serif",
        fontWeight: 700,
        boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
      }}
    >
      {payload[0].value}
    </div>
  );
};

const hashBarIndex = (rows: DeIdMethodData[]) => {
  const i = rows.findIndex((d) => d.method === "Hash");
  return i >= 0 ? i : null;
};

type Props = { data: DeIdMethodData[] };

export const DeIdMethodChart = ({ data }: Props) => {
  const { t } = useTranslation("dashboard");
  const [activeIndex, setActiveIndex] = useState<number | null>(() =>
    hashBarIndex(data),
  );

  return (
    <ChartCard>
      <ChartTitle>{t("charts.deIdMethod.title")}</ChartTitle>
      <ChartSubtitle>{t("charts.deIdMethod.subtitle")}</ChartSubtitle>

      <ChartBody>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 4, left: -20, bottom: 0 }}
            barCategoryGap="38%"
            onMouseLeave={() => setActiveIndex(hashBarIndex(data))}
          >
            <CartesianGrid
              vertical={false}
              stroke="#F3F4F6"
              strokeDasharray="0"
            />
            <XAxis
              dataKey="method"
              tick={tickStyle}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={tickStyle}
              axisLine={false}
              tickLine={false}
              tickCount={5}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />
            <Bar
              dataKey="count"
              radius={[CHART_BORDER_RADIUS, CHART_BORDER_RADIUS, 0, 0]}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              label={{
                content: (props) => {
                  const { x, y, width, value, index } = props as {
                    x: number;
                    y: number;
                    width: number;
                    value: number;
                    index: number;
                  };
                  if (index !== activeIndex) return null;
                  const cx = x + width / 2;
                  return (
                    <g>
                      <rect
                        x={cx - 16}
                        y={y - 28}
                        width={32}
                        height={22}
                        rx={6}
                        fill="#111827"
                      />
                      <text
                        x={cx}
                        y={y - 12}
                        textAnchor="middle"
                        fill="#fff"
                        fontSize={12}
                        fontWeight={400}
                        fontFamily="Inter, sans-serif"
                      >
                        {value}
                      </text>
                    </g>
                  );
                },
              }}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    activeIndex === index
                      ? CHART_COLORS.activeBar
                      : CHART_COLORS.inactiveBar
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartBody>
    </ChartCard>
  );
};
