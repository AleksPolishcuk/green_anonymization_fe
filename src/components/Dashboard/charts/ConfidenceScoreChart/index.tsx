import { useState } from "react";
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
  CHART_GRID_STROKE_WIDTH,
  CHART_TICK_COUNT,
  CONFIDENCE_BAR_CATEGORY_GAP,
  CONFIDENCE_BAR_SIZE,
  CONFIDENCE_CHART_MARGIN,
  CONFIDENCE_GRADIENT_HOVER_ID,
  CONFIDENCE_GRADIENT_ID,
  CONFIDENCE_Y_AXIS_WIDTH,
  tickStyle as tickY,
  tickStyleSm as tickX,
} from "constants/DashboardPage";
import type { ConfidenceRangeData } from "store/types/dashboard";

import {
  ChartBody,
  ChartCard,
  ChartSubtitle,
  ChartTitle,
  TooltipDark,
} from "components/Dashboard/charts/ChartCard/styles";
import { ChartEmptyState } from "components/Dashboard/charts/ChartEmptyState";
import {
  ConfidenceRoundedBar,
  type ConfidenceBarProps,
} from "components/Dashboard/charts/shared/barShapes";

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
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ChartCard $tall>
      <ChartTitle>{t("dashboard.charts.confidence.title")}</ChartTitle>
      <ChartSubtitle>{t("dashboard.charts.confidence.subtitle")}</ChartSubtitle>

      <ChartBody>
        {data.length === 0 ? (
          <ChartEmptyState />
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={data}
              margin={CONFIDENCE_CHART_MARGIN}
              barCategoryGap={CONFIDENCE_BAR_CATEGORY_GAP}
              onMouseLeave={() => setActiveIndex(null)}
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
                <linearGradient
                  id={CONFIDENCE_GRADIENT_HOVER_ID}
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop offset="0%" stopColor={ACTIVE_GRADIENT_START} />
                  <stop offset="100%" stopColor={ACTIVE_GRADIENT_END} />
                </linearGradient>
              </defs>

              <CartesianGrid
                horizontal={false}
                stroke={CHART_GRID_STROKE}
                strokeWidth={CHART_GRID_STROKE_WIDTH}
                strokeDasharray={CHART_GRID_DASHARRAY}
              />
              <XAxis
                type="number"
                tick={tickX}
                axisLine={false}
                tickLine={false}
                tickCount={CHART_TICK_COUNT}
              />
              <YAxis
                type="category"
                dataKey="range"
                tick={tickY}
                axisLine={false}
                tickLine={false}
                width={CONFIDENCE_Y_AXIS_WIDTH}
              />
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Bar
                dataKey="count"
                barSize={CONFIDENCE_BAR_SIZE}
                shape={(shapeProps: unknown) => (
                  <ConfidenceRoundedBar
                    {...(shapeProps as ConfidenceBarProps)}
                    activeIndex={activeIndex}
                  />
                )}
                onMouseEnter={(_, index) => setActiveIndex(index)}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </ChartBody>
    </ChartCard>
  );
};
