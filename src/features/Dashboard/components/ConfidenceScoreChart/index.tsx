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

import { CONFIDENCE_BAR_COLORS } from "constants/dashboard";
import type { ConfidenceRangeData } from "features/Dashboard/types";

import {
  ChartBody,
  ChartCard,
  ChartSubtitle,
  ChartTitle,
} from "../ChartCard/styles";

const tickX = {
  fontSize: 10,
  fill: "#9ca3af",
  fontFamily: "Inter, sans-serif",
};
const tickY = {
  fontSize: 11,
  fill: "#6a7282",
  fontFamily: "Inter, sans-serif",
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      style={{
        background: "#111827",
        color: "#fff",
        borderRadius: 8,
        padding: "6px 12px",
        fontSize: 13,
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      {label}: {payload[0].value}
    </div>
  );
};

type Props = {
  data: ConfidenceRangeData[];
};

export const ConfidenceScoreChart = ({ data }: Props) => {
  const { t } = useTranslation("dashboard");

  return (
    <ChartCard>
      <ChartTitle>{t("charts.confidence.title")}</ChartTitle>
      <ChartSubtitle>{t("charts.confidence.subtitle")}</ChartSubtitle>

      <ChartBody>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 0, right: 16, left: 0, bottom: 0 }}
            barCategoryGap="25%"
          >
            <CartesianGrid
              horizontal={false}
              stroke="#F3F4F6"
              strokeDasharray="0"
            />
            <XAxis
              type="number"
              tick={tickX}
              axisLine={false}
              tickLine={false}
              tickCount={5}
            />
            <YAxis
              type="category"
              dataKey="range"
              tick={tickY}
              axisLine={false}
              tickLine={false}
              width={56}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "#F3F4F6" }} />
            <Bar dataKey="count" radius={[0, 4, 4, 0]}>
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    CONFIDENCE_BAR_COLORS[index] ??
                    CONFIDENCE_BAR_COLORS[CONFIDENCE_BAR_COLORS.length - 1]
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
