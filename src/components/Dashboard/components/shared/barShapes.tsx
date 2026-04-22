import {
  ACTIVE_GRADIENT_ID,
  BAR_RADIUS,
  BAR_WIDTH,
  INACTIVE_COLOR,
  PILL_BG_COLOR,
  PILL_FONT_SIZE,
  PILL_GRADIENT_END_OPACITY,
  PILL_GRADIENT_ID,
  PILL_GRADIENT_START_OPACITY,
  PILL_HEIGHT,
  PILL_OFFSET_Y,
  PILL_WIDTH,
} from "constants/DashboardPage";
import { theme } from "shared/theme/theme";

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
      <defs>
        <linearGradient id={PILL_GRADIENT_ID} x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            stopColor="white"
            stopOpacity={PILL_GRADIENT_START_OPACITY}
          />
          <stop
            offset="100%"
            stopColor="white"
            stopOpacity={PILL_GRADIENT_END_OPACITY}
          />
        </linearGradient>
      </defs>
      <rect
        x={pillX}
        y={pillY}
        width={PILL_WIDTH}
        height={PILL_HEIGHT}
        rx={BAR_RADIUS}
        ry={BAR_RADIUS}
        fill={PILL_BG_COLOR}
      />
      <rect
        x={pillX}
        y={pillY}
        width={PILL_WIDTH}
        height={PILL_HEIGHT}
        rx={BAR_RADIUS}
        ry={BAR_RADIUS}
        fill={`url(#${PILL_GRADIENT_ID})`}
      />
      <text
        x={cx}
        y={pillY + PILL_HEIGHT / 2 + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={theme.palette.color.white}
        fontSize={PILL_FONT_SIZE}
        fontWeight={theme.typography.fontWeightBold}
        fontFamily={theme.typography.fontFamily}
      >
        {value}
      </text>
    </g>
  );
};
