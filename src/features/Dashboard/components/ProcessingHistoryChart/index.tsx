import {
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  type TooltipProps,
} from "recharts";
import { useTranslation } from "react-i18next";

import {
  CHART_COLORS,
  CHART_GRID_DASHARRAY,
  CHART_GRID_STROKE,
  tickStyleSm,
} from "constants/dashboard";
import type { ProcessingHistoryPoint } from "features/Dashboard/types";

import {
  ChartBody,
  ChartCard,
  ChartSubtitle,
  ChartTitle,
} from "../ChartCard/styles";
import {
  ChartBodyInner,
  LegendCircle,
  LegendItem,
  LegendRoot,
  TooltipDate,
  TooltipDot,
  TooltipLight,
  TooltipRow,
} from "./styles";

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;
  return (
    <TooltipLight>
      <TooltipDate>{label}</TooltipDate>
      {payload.map((entry) => (
        <TooltipRow key={String(entry.dataKey)}>
          <TooltipDot $color={entry.color ?? CHART_COLORS.primary} />
          {entry.name}: <strong>{entry.value}</strong>
        </TooltipRow>
      ))}
    </TooltipLight>
  );
};

type Props = { data: ProcessingHistoryPoint[] };

export const ProcessingHistoryChart = ({ data }: Props) => {
  const { t } = useTranslation("dashboard");

  return (
    <ChartCard>
      <ChartTitle>{t("charts.processingHistory.title")}</ChartTitle>
      <ChartSubtitle>{t("charts.processingHistory.subtitle")}</ChartSubtitle>

      <ChartBody>
        <ChartBodyInner>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{ top: 8, right: 4, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                stroke={CHART_GRID_STROKE}
                strokeWidth={1}
                strokeDasharray={CHART_GRID_DASHARRAY}
              />
              <XAxis
                dataKey="date"
                tick={tickStyleSm}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                yAxisId="left"
                tick={tickStyleSm}
                axisLine={false}
                tickLine={false}
                tickCount={5}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={tickStyleSm}
                axisLine={false}
                tickLine={false}
                tickCount={5}
                width={36}
              />
              <Tooltip content={<CustomTooltip />} />

              <Line
                yAxisId="left"
                type="monotone"
                dataKey="documents"
                name={t("charts.processingHistory.documents")}
                stroke={CHART_COLORS.primary}
                strokeWidth={2}
                dot={{
                  r: 5,
                  fill: "#fff",
                  stroke: CHART_COLORS.primary,
                  strokeWidth: 2,
                }}
                activeDot={{ r: 6 }}
              />

              <Line
                yAxisId="right"
                type="monotone"
                dataKey="entities"
                name={t("charts.processingHistory.entities")}
                stroke={CHART_COLORS.primary}
                strokeWidth={2}
                strokeDasharray="5 4"
                dot={{
                  r: 5,
                  fill: "#fff",
                  stroke: CHART_COLORS.primary,
                  strokeWidth: 2,
                  strokeDasharray: "3 2",
                }}
                activeDot={{ r: 6 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartBodyInner>

        <LegendRoot>
          <LegendItem>
            <LegendCircle $color={CHART_COLORS.primary} />
            {t("charts.processingHistory.documents")}
          </LegendItem>
          <LegendItem>
            <LegendCircle $dashed $color={CHART_COLORS.primary} />
            {t("charts.processingHistory.entities")}
          </LegendItem>
        </LegendRoot>
      </ChartBody>
    </ChartCard>
  );
};
