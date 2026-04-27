import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { useTranslation } from "react-i18next";

import {
  ACTIVE_GRADIENT_END,
  ACTIVE_GRADIENT_HOVER_ID,
  ACTIVE_GRADIENT_ID,
  ACTIVE_GRADIENT_START,
  CHART_GRID_DASHARRAY,
  CHART_GRID_STROKE,
  tickStyle,
} from "constants/DashboardPage";
import type { DeIdMethodData } from "components/Dashboard/types";

import {
  ChartBody,
  ChartCard,
  ChartSubtitle,
  ChartTitle,
} from "components/Dashboard/charts/ChartCard/styles";
import {
  ActiveBarLabel,
  RoundedBar,
  type ActiveBarLabelProps,
  type RoundedBarProps,
} from "components/Dashboard/charts/shared/barShapes";

type Props = { data: DeIdMethodData[] };

export const DeIdMethodChart = ({ data }: Props) => {
  const { t } = useTranslation("dashboard");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ChartCard>
      <ChartTitle>{t("charts.deIdMethod.title")}</ChartTitle>
      <ChartSubtitle>{t("charts.deIdMethod.subtitle")}</ChartSubtitle>

      <ChartBody>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 36, right: 8, left: -16, bottom: 0 }}
            barCategoryGap="20%"
            onMouseLeave={() => setActiveIndex(null)}
          >
            <defs>
              <linearGradient
                id={ACTIVE_GRADIENT_ID}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={ACTIVE_GRADIENT_START} />
                <stop offset="100%" stopColor={ACTIVE_GRADIENT_END} />
              </linearGradient>
              <linearGradient
                id={ACTIVE_GRADIENT_HOVER_ID}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={ACTIVE_GRADIENT_END} />
                <stop offset="100%" stopColor={ACTIVE_GRADIENT_START} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke={CHART_GRID_STROKE}
              strokeWidth={1}
              strokeDasharray={CHART_GRID_DASHARRAY}
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

            <Bar
              dataKey="count"
              shape={(shapeProps: unknown) => (
                <RoundedBar
                  {...(shapeProps as RoundedBarProps)}
                  activeIndex={activeIndex}
                />
              )}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              label={(labelProps: unknown) => (
                <ActiveBarLabel
                  {...(labelProps as ActiveBarLabelProps)}
                  activeIndex={activeIndex}
                />
              )}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartBody>
    </ChartCard>
  );
};
