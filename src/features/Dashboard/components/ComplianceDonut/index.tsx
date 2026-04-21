import { useTranslation } from "react-i18next";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  type TooltipProps,
} from "recharts";

import type { ComplianceFrameworkData } from "features/Dashboard/types";

import { ChartCard, ChartSubtitle, ChartTitle } from "../ChartCard/styles";
import {
  DonutWrapper,
  LegendDot,
  LegendItem,
  LegendLabel,
  LegendList,
  LegendValue,
} from "./styles";

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;
  const entry = payload[0];
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
      }}
    >
      {entry.name}: {entry.value}%
    </div>
  );
};

type Props = {
  data: ComplianceFrameworkData[];
};

export const ComplianceDonut = ({ data }: Props) => {
  const { t } = useTranslation("dashboard");

  return (
    <ChartCard>
      <ChartTitle>{t("charts.compliance.title")}</ChartTitle>
      <ChartSubtitle>{t("charts.compliance.subtitle")}</ChartSubtitle>

      <DonutWrapper>
        <ResponsiveContainer width={180} height={260}>
          <PieChart>
            <Tooltip content={<CustomTooltip />} />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={70}
              paddingAngle={2}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              cornerRadius={4}
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <LegendList>
          {data.map((entry) => (
            <LegendItem key={entry.name}>
              <LegendDot $color={entry.color} />
              <LegendLabel>{entry.name}</LegendLabel>
              <LegendValue>{entry.value}%</LegendValue>
            </LegendItem>
          ))}
        </LegendList>
      </DonutWrapper>
    </ChartCard>
  );
};
