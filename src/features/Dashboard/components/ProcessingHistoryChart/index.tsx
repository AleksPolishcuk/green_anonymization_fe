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

import { CHART_COLORS } from "constants/dashboard";
import type { ProcessingHistoryPoint } from "features/Dashboard/types";

import {
  ChartBody,
  ChartCard,
  ChartSubtitle,
  ChartTitle,
} from "../ChartCard/styles";
import { LegendItem, LegendRoot } from "./styles";

const tickStyle = {
  fontSize: 10,
  fill: "#9ca3af",
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
        background: "#fff",
        border: "1px solid #e9edf2",
        borderRadius: 10,
        padding: "10px 14px",
        fontFamily: "Inter, sans-serif",
        fontSize: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ color: "#6a7282", marginBottom: 6, fontSize: 11 }}>
        {label}
      </div>
      {payload.map((entry) => (
        <div
          key={String(entry.dataKey)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            color: "#101828",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: entry.color ?? CHART_COLORS.primary,
              flexShrink: 0,
            }}
          />
          {entry.name}: <strong>{entry.value}</strong>
        </div>
      ))}
    </div>
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
        <ResponsiveContainer width="100%" height={220}>
          <ComposedChart
            data={data}
            margin={{ top: 8, right: 36, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#F3F4F6" />
            <XAxis
              dataKey="date"
              tick={tickStyle}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="left"
              tick={tickStyle}
              axisLine={false}
              tickLine={false}
              tickCount={5}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={tickStyle}
              axisLine={false}
              tickLine={false}
              tickCount={5}
            />
            <Tooltip content={<CustomTooltip />} />

            <Line
              yAxisId="left"
              type="monotone"
              dataKey="documents"
              name={t("charts.processingHistory.documents")}
              stroke={CHART_COLORS.primary}
              strokeWidth={2}
              dot={{ r: 3, fill: CHART_COLORS.primary, strokeWidth: 0 }}
              activeDot={{ r: 5 }}
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
                r: 3,
                fill: "#fff",
                stroke: CHART_COLORS.primary,
                strokeWidth: 2,
              }}
              activeDot={{ r: 5 }}
            />
          </ComposedChart>
        </ResponsiveContainer>

        <LegendRoot>
          <LegendItem $color={CHART_COLORS.primary}>
            {t("charts.processingHistory.documents")}
          </LegendItem>
          <LegendItem $dashed $color={CHART_COLORS.primary}>
            {t("charts.processingHistory.entities")}
          </LegendItem>
        </LegendRoot>
      </ChartBody>
    </ChartCard>
  );
};
