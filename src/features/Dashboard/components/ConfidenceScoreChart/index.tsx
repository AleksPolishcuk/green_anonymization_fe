import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  type TooltipProps,
} from "recharts";
import { useTranslation } from "react-i18next";

import {
  ACTIVE_GRADIENT_END,
  ACTIVE_GRADIENT_START,
  CHART_GRID_DASHARRAY,
  CHART_GRID_STROKE,
  CONFIDENCE_GRADIENT_ID,
  tickStyle as tickY,
  tickStyleSm as tickX,
} from "constants/dashboard";
import type { ConfidenceRangeData } from "features/Dashboard/types";

import {
  ChartBody,
  ChartCard,
  ChartSubtitle,
  ChartTitle,
  TooltipDark,
} from "../ChartCard/styles";

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;
  return (
    <TooltipDark>
      {label}: {payload[0].value}
    </TooltipDark>
  );
};

type Props = {
  data: ConfidenceRangeData[];
};

export const ConfidenceScoreChart = ({ data }: Props) => {
  const { t } = useTranslation("dashboard");

  return (
    <ChartCard $tall>
      <ChartTitle>{t("charts.confidence.title")}</ChartTitle>
      <ChartSubtitle>{t("charts.confidence.subtitle")}</ChartSubtitle>

      <ChartBody>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 0, right: 16, left: 0, bottom: 0 }}
            barCategoryGap="25%"
          >
            <defs>
              <linearGradient
                id={CONFIDENCE_GRADIENT_ID}
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor={ACTIVE_GRADIENT_END} />
                <stop offset="100%" stopColor={ACTIVE_GRADIENT_START} />
              </linearGradient>
            </defs>

            <CartesianGrid
              horizontal={false}
              stroke={CHART_GRID_STROKE}
              strokeWidth={1}
              strokeDasharray={CHART_GRID_DASHARRAY}
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
              width={72}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "#F3F4F6" }} />
            <Bar
              dataKey="count"
              barSize={36}
              radius={[10, 10, 10, 10]}
              fill={`url(#${CONFIDENCE_GRADIENT_ID})`}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartBody>
    </ChartCard>
  );
};
