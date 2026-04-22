import {
  ACTIVE_GRADIENT_ID,
  BAR_RADIUS,
  BAR_WIDTH,
  CHART_FONT_FAMILY,
  INACTIVE_COLOR,
  PILL_FILL,
  PILL_FONT_SIZE,
  PILL_FONT_WEIGHT,
  PILL_HEIGHT,
  PILL_OFFSET_Y,
  PILL_RADIUS,
  PILL_TEXT_COLOR,
  PILL_WIDTH,
} from "constants/dashboard";

export interface RoundedBarProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  index?: number;
  activeIndex: number | null;
}

export const RoundedBar = (props: RoundedBarProps) => {
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

export interface ActiveBarLabelProps {
  x?: number;
  y?: number;
  width?: number;
  value?: number;
  index?: number;
  activeIndex: number | null;
}

export const ActiveBarLabel = (props: ActiveBarLabelProps) => {
  const { x = 0, y = 0, width = 0, value, index, activeIndex } = props;
  if (index !== activeIndex || value === undefined) return null;

  const offsetX = (width - BAR_WIDTH) / 2;
  const cx = x + offsetX + BAR_WIDTH / 2;
  const pillX = cx - PILL_WIDTH / 2;
  const pillY = y - PILL_HEIGHT - PILL_OFFSET_Y;

  return (
    <g>
      <rect
        x={pillX}
        y={pillY}
        width={PILL_WIDTH}
        height={PILL_HEIGHT}
        rx={PILL_RADIUS}
        ry={PILL_RADIUS}
        fill={PILL_FILL}
      />
      <text
        x={cx}
        y={pillY + PILL_HEIGHT / 2 + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={PILL_TEXT_COLOR}
        fontSize={PILL_FONT_SIZE}
        fontWeight={PILL_FONT_WEIGHT}
        fontFamily={CHART_FONT_FAMILY}
      >
        {value}
      </text>
    </g>
  );
};
