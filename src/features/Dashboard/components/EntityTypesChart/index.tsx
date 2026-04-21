import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { useTranslation } from "react-i18next";

import type { EntityTypeDatum } from "features/Dashboard/types";

import {
  ChartBody,
  ChartCard,
  ChartSubtitle,
  ChartTitle,
} from "../ChartCard/styles";

import {
  BAR_WIDTH,
  BAR_RADIUS,
  INACTIVE_COLOR,
  ACTIVE_GRADIENT_ID,
  CHART_HEIGHT,
  tickStyle,
} from "constants/dashboard";

interface BarShapeProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
  index?: number;
  activeIndex: number | null;
}

const RoundedBar = (props: BarShapeProps) => {
  const { x = 0, y = 0, width = 0, height = 0, index, activeIndex } = props;

  if (height <= 0 || width <= 0) return null;

  const isActive = index === activeIndex;
  const r = Math.min(BAR_RADIUS, width / 2, height);
  const fill = isActive ? `url(#${ACTIVE_GRADIENT_ID})` : INACTIVE_COLOR;

  const offsetX = (width - BAR_WIDTH) / 2;
  const bx = x + offsetX;
  const bw = BAR_WIDTH;

  const bh = height;

  const path = [
    `M ${bx + r} ${y}`,
    `L ${bx + bw - r} ${y}`,
    `Q ${bx + bw} ${y} ${bx + bw} ${y + r}`,
    `L ${bx + bw} ${y + bh - r}`,
    `Q ${bx + bw} ${y + bh} ${bx + bw - r} ${y + bh}`,
    `L ${bx + r} ${y + bh}`,
    `Q ${bx} ${y + bh} ${bx} ${y + bh - r}`,
    `L ${bx} ${y + r}`,
    `Q ${bx} ${y} ${bx + r} ${y}`,
    "Z",
  ].join(" ");

  return <path d={path} fill={fill} />;
};

interface LabelProps {
  x?: number;
  y?: number;
  width?: number;
  value?: number;
  index?: number;
  activeIndex: number | null;
}

const ActiveBarLabel = (props: LabelProps) => {
  const { x = 0, y = 0, width = 0, value, index, activeIndex } = props;
  if (index !== activeIndex || value === undefined) return null;

  const offsetX = (width - BAR_WIDTH) / 2;
  const cx = x + offsetX + BAR_WIDTH / 2;
  const pillW = 44;
  const pillH = 24;
  const pillX = cx - pillW / 2;
  const pillY = y - pillH - 8;

  return (
    <g>
      <rect
        x={pillX}
        y={pillY}
        width={pillW}
        height={pillH}
        rx={8}
        ry={8}
        fill="#111827"
      />
      <text
        x={cx}
        y={pillY + pillH / 2 + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#fff"
        fontSize={12}
        fontWeight={700}
        fontFamily="Inter, sans-serif"
      >
        {value}
      </text>
    </g>
  );
};

type Props = { data: EntityTypeDatum[] };

export const EntityTypesChart = ({ data }: Props) => {
  const { t } = useTranslation("dashboard");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ChartCard>
      <ChartTitle>{t("charts.entityTypes.title")}</ChartTitle>
      <ChartSubtitle>{t("charts.entityTypes.subtitle")}</ChartSubtitle>

      <ChartBody>
        <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
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
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#7099f3" />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="rgba(208, 213, 221, 0.6)"
              strokeWidth={1}
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="name"
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
              shape={(shapeProps: object) => (
                <RoundedBar
                  {...(shapeProps as BarShapeProps)}
                  activeIndex={activeIndex}
                />
              )}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              label={(labelProps: object) => (
                <ActiveBarLabel
                  {...(labelProps as LabelProps)}
                  activeIndex={activeIndex}
                />
              )}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    index === activeIndex
                      ? `url(#${ACTIVE_GRADIENT_ID})`
                      : INACTIVE_COLOR
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
