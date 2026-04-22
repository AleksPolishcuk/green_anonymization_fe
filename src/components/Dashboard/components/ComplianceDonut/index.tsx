import { useTranslation } from "react-i18next";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  type TooltipProps,
} from "recharts";

import {
  COMPLIANCE_COLORS,
  HIPAA_GRADIENT_END,
  HIPAA_GRADIENT_ID,
} from "constants/DashboardPage";
import type { ComplianceFrameworkData } from "components/Dashboard/types";

import {
  ChartCard,
  ChartSubtitle,
  ChartTitle,
  TooltipDark,
} from "../ChartCard/styles";
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
    <TooltipDark>
      {entry.name}: {entry.value}%
    </TooltipDark>
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
        <ResponsiveContainer width={180} height="100%">
          <PieChart>
            <defs>
              <linearGradient
                id={HIPAA_GRADIENT_ID}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={COMPLIANCE_COLORS.HIPAA}
                  stopOpacity={1}
                />
                <stop
                  offset="100%"
                  stopColor={HIPAA_GRADIENT_END}
                  stopOpacity={0.6}
                />
              </linearGradient>
            </defs>

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
                <Cell
                  key={entry.name}
                  fill={
                    entry.name === "HIPAA"
                      ? `url(#${HIPAA_GRADIENT_ID})`
                      : entry.color
                  }
                />
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
