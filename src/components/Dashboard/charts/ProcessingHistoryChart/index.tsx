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
import { useTheme } from "@mui/material/styles";

import {
  CHART_DOT_DASH_ARRAY,
  CHART_GRID_DASHARRAY,
  CHART_GRID_STROKE,
  CHART_GRID_STROKE_WIDTH,
  CHART_LINE_ACTIVE_DOT_RADIUS,
  CHART_LINE_DASH_ARRAY,
  CHART_LINE_DOT_RADIUS,
  CHART_LINE_STROKE_WIDTH,
  CHART_TICK_COUNT,
  CHART_Y_AXIS_RIGHT_WIDTH,
  PROCESSING_HISTORY_CHART_MARGIN,
  tickStyleSm,
} from "constants/DashboardPage";
import type { ProcessingHistoryPoint } from "store/types/dashboard";

import {
  ChartBody,
  ChartCard,
  ChartSubtitle,
  ChartTitle,
} from "components/Dashboard/charts/ChartCard/styles";
import { ChartEmptyState } from "components/Dashboard/charts/ChartEmptyState";
import {
  ChartBodyInner,
  LegendCircle,
  LegendItem,
  LegendRoot,
  TooltipDate,
  TooltipDot,
  TooltipLight,
  TooltipRow,
} from "components/Dashboard/charts/ProcessingHistoryChart/styles";

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  const theme = useTheme();
  if (!active || !payload?.length) return null;
  return (
    <TooltipLight>
      <TooltipDate>{label}</TooltipDate>
      {payload.map((entry) => (
        <TooltipRow key={String(entry.dataKey)}>
          <TooltipDot $color={entry.color ?? theme.palette.primary.main} />
          {entry.name}: <strong>{entry.value}</strong>
        </TooltipRow>
      ))}
    </TooltipLight>
  );
};

type Props = { data: ProcessingHistoryPoint[] };

export const ProcessingHistoryChart = ({ data }: Props) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <ChartCard>
      <ChartTitle>{t("dashboard.charts.processingHistory.title")}</ChartTitle>
      <ChartSubtitle>
        {t("dashboard.charts.processingHistory.subtitle")}
      </ChartSubtitle>

      <ChartBody>
        {data.length === 0 ? (
          <ChartEmptyState />
        ) : (
          <>
            <ChartBodyInner>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={data}
                  margin={PROCESSING_HISTORY_CHART_MARGIN}
                >
                  <CartesianGrid
                    stroke={CHART_GRID_STROKE}
                    strokeWidth={CHART_GRID_STROKE_WIDTH}
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
                    tickCount={CHART_TICK_COUNT}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tick={tickStyleSm}
                    axisLine={false}
                    tickLine={false}
                    tickCount={CHART_TICK_COUNT}
                    width={CHART_Y_AXIS_RIGHT_WIDTH}
                  />
                  <Tooltip content={<CustomTooltip />} />

                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="documents"
                    name={t("dashboard.charts.processingHistory.documents")}
                    stroke={theme.palette.primary.main}
                    strokeWidth={CHART_LINE_STROKE_WIDTH}
                    dot={{
                      r: CHART_LINE_DOT_RADIUS,
                      fill: theme.palette.color.white,
                      stroke: theme.palette.primary.main,
                      strokeWidth: CHART_LINE_STROKE_WIDTH,
                    }}
                    activeDot={{ r: CHART_LINE_ACTIVE_DOT_RADIUS }}
                  />

                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="entities"
                    name={t("dashboard.charts.processingHistory.entities")}
                    stroke={theme.palette.primary.main}
                    strokeWidth={CHART_LINE_STROKE_WIDTH}
                    strokeDasharray={CHART_LINE_DASH_ARRAY}
                    dot={{
                      r: CHART_LINE_DOT_RADIUS,
                      fill: theme.palette.color.white,
                      stroke: theme.palette.primary.main,
                      strokeWidth: CHART_LINE_STROKE_WIDTH,
                      strokeDasharray: CHART_DOT_DASH_ARRAY,
                    }}
                    activeDot={{ r: CHART_LINE_ACTIVE_DOT_RADIUS }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </ChartBodyInner>

            <LegendRoot>
              <LegendItem>
                <LegendCircle $color={theme.palette.primary.main} />
                {t("dashboard.charts.processingHistory.documents")}
              </LegendItem>
              <LegendItem>
                <LegendCircle $dashed $color={theme.palette.primary.main} />
                {t("dashboard.charts.processingHistory.entities")}
              </LegendItem>
            </LegendRoot>
          </>
        )}
      </ChartBody>
    </ChartCard>
  );
};
