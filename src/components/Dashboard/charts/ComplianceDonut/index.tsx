import { useState } from "react";
import { keyframes } from "@mui/material/styles";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
  type TooltipProps,
} from "recharts";
import type { SectorProps } from "recharts";
import { useTranslation } from "react-i18next";

import {
  COMPLIANCE_COLORS,
  DONUT_ACTIVE_OUTER_RADIUS,
  DONUT_CHART_WIDTH,
  DONUT_CORNER_RADIUS,
  DONUT_END_ANGLE,
  DONUT_INNER_RADIUS,
  DONUT_OUTER_RADIUS,
  DONUT_PADDING_ANGLE,
  DONUT_SECTOR_ANIMATION_DURATION,
  DONUT_START_ANGLE,
  HIPAA_FRAMEWORK_KEY,
  HIPAA_GRADIENT_END,
  HIPAA_GRADIENT_END_OPACITY,
  HIPAA_GRADIENT_ID,
} from "constants/DashboardPage";
import type { ComplianceFrameworkData } from "store/types/dashboard";

import {
  ChartCard,
  ChartSubtitle,
  ChartTitle,
  TooltipDark,
} from "components/Dashboard/charts/ChartCard/styles";
import { ChartEmptyState } from "components/Dashboard/charts/ChartEmptyState";
import {
  DonutWrapper,
  LegendDot,
  LegendItem,
  LegendLabel,
  LegendList,
  LegendValue,
} from "components/Dashboard/charts/ComplianceDonut/styles";

const scaleFrom = DONUT_OUTER_RADIUS / DONUT_ACTIVE_OUTER_RADIUS;

const sectorGrow = keyframes`
  from { transform: scale(${scaleFrom}); }
  to   { transform: scale(1); }
`;

const ActiveSector = ({ cx = 0, cy = 0, ...props }: SectorProps) => (
  <g
    style={{
      transformOrigin: `${cx}px ${cy}px`,
      animation: `${sectorGrow} ${DONUT_SECTOR_ANIMATION_DURATION}s ease forwards`,
    }}
  >
    <Sector
      cx={cx}
      cy={cy}
      {...props}
      outerRadius={DONUT_ACTIVE_OUTER_RADIUS}
    />
  </g>
);

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;
  const entry = payload[0];
  return <TooltipDark>{entry.value}%</TooltipDark>;
};

type Props = {
  data: ComplianceFrameworkData[];
};

export const ComplianceDonut = ({ data }: Props) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ChartCard>
      <ChartTitle>{t("dashboard.charts.compliance.title")}</ChartTitle>
      <ChartSubtitle>{t("dashboard.charts.compliance.subtitle")}</ChartSubtitle>

      {data.length === 0 ? (
        <ChartEmptyState />
      ) : (
        <DonutWrapper>
          <ResponsiveContainer width={DONUT_CHART_WIDTH} height="100%">
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
                    stopOpacity={HIPAA_GRADIENT_END_OPACITY}
                  />
                </linearGradient>
              </defs>

              <Tooltip content={<CustomTooltip />} />
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={DONUT_INNER_RADIUS}
                outerRadius={DONUT_OUTER_RADIUS}
                paddingAngle={DONUT_PADDING_ANGLE}
                dataKey="value"
                startAngle={DONUT_START_ANGLE}
                endAngle={DONUT_END_ANGLE}
                cornerRadius={DONUT_CORNER_RADIUS}
                activeIndex={activeIndex ?? undefined}
                activeShape={ActiveSector}
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {data.map((entry) => (
                  <Cell
                    key={entry.name}
                    fill={
                      entry.name === HIPAA_FRAMEWORK_KEY
                        ? `url(#${HIPAA_GRADIENT_ID})`
                        : entry.color
                    }
                    stroke={entry.color}
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
      )}
    </ChartCard>
  );
};
