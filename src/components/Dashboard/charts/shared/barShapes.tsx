import {
  ACTIVE_GRADIENT_HOVER_ID,
  ACTIVE_GRADIENT_ID,
  BAR_RADIUS,
  BAR_WIDTH,
  CHART_BAR_HOVER_TRANSITION,
  CHART_X_TICK_ANGLE,
  CHART_X_TICK_DESKTOP_FONT_SIZE,
  CHART_X_TICK_DX_MOBILE,
  CHART_X_TICK_DY_DESKTOP,
  CHART_X_TICK_DY_MOBILE,
  CHART_X_TICK_FONT_SIZE,
  CHART_X_TICK_MAX_CHARS,
  CONFIDENCE_GRADIENT_HOVER_ID,
  CONFIDENCE_GRADIENT_ID,
  PILL_BG_COLOR,
  PILL_FONT_SIZE,
  PILL_GRADIENT_END_OPACITY,
  PILL_GRADIENT_ID,
  PILL_GRADIENT_START_OPACITY,
  CONFIDENCE_PILL_WIDTH,
  PILL_HEIGHT,
  PILL_MIN_WIDTH,
  PILL_OFFSET_X,
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
  const bw = Math.min(BAR_WIDTH, width);
  const offsetX = (width - bw) / 2;
  const bx = x + offsetX;
  const bh = height;
  const r = Math.min(BAR_RADIUS, bw / 2, bh);

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

  return (
    <g>
      <path
        d={path}
        fill={`url(#${ACTIVE_GRADIENT_ID})`}
        style={{
          opacity: isActive ? 0 : 1,
          transition: CHART_BAR_HOVER_TRANSITION,
        }}
      />
      <path
        d={path}
        fill={`url(#${ACTIVE_GRADIENT_HOVER_ID})`}
        style={{
          opacity: isActive ? 1 : 0,
          transition: CHART_BAR_HOVER_TRANSITION,
        }}
      />
    </g>
  );
};

export interface ConfidenceBarProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  index?: number;
  activeIndex: number | null;
}

export const ConfidenceRoundedBar = (props: ConfidenceBarProps) => {
  const { x = 0, y = 0, width = 0, height = 0, index, activeIndex } = props;

  if (width <= 0 || height <= 0) return null;

  const isActive = index === activeIndex;
  const r = Math.min(BAR_RADIUS, height / 2, width);

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={r}
        ry={r}
        fill={`url(#${CONFIDENCE_GRADIENT_ID})`}
        style={{
          opacity: isActive ? 0 : 1,
          transition: CHART_BAR_HOVER_TRANSITION,
        }}
      />
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={r}
        ry={r}
        fill={`url(#${CONFIDENCE_GRADIENT_HOVER_ID})`}
        style={{
          opacity: isActive ? 1 : 0,
          transition: CHART_BAR_HOVER_TRANSITION,
        }}
      />
    </g>
  );
};

function renderPill(
  pillX: number,
  pillY: number,
  gradientId: string,
  value: number,
  pillWidth: number = PILL_WIDTH,
) {
  const cx = pillX + pillWidth / 2;
  return (
    <g>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            stopColor={theme.palette.color.white}
            stopOpacity={PILL_GRADIENT_START_OPACITY}
          />
          <stop
            offset="100%"
            stopColor={theme.palette.color.white}
            stopOpacity={PILL_GRADIENT_END_OPACITY}
          />
        </linearGradient>
      </defs>
      <rect
        x={pillX}
        y={pillY}
        width={pillWidth}
        height={PILL_HEIGHT}
        rx={BAR_RADIUS}
        ry={BAR_RADIUS}
        fill={PILL_BG_COLOR}
      />
      <rect
        x={pillX}
        y={pillY}
        width={pillWidth}
        height={PILL_HEIGHT}
        rx={BAR_RADIUS}
        ry={BAR_RADIUS}
        fill={`url(#${gradientId})`}
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
}

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

  const pillW = Math.max(Math.min(width, BAR_WIDTH), PILL_MIN_WIDTH);
  const pillX = x + width / 2 - pillW / 2;
  const pillY = y - PILL_HEIGHT - PILL_OFFSET_Y;

  return renderPill(pillX, pillY, PILL_GRADIENT_ID, value, pillW);
};

interface AngledXTickProps {
  x?: number;
  y?: number;
  payload?: { value: string };
}

export const AngledXTick = ({ x = 0, y = 0, payload }: AngledXTickProps) => {
  const full = payload?.value ?? "";
  const label =
    full.length > CHART_X_TICK_MAX_CHARS
      ? `${full.slice(0, CHART_X_TICK_MAX_CHARS)}…`
      : full;

  return (
    <g transform={`translate(${x},${y})`}>
      {full !== label && <title>{full}</title>}
      <text
        transform={`rotate(${CHART_X_TICK_ANGLE})`}
        textAnchor="end"
        dx={CHART_X_TICK_DX_MOBILE}
        dy={CHART_X_TICK_DY_MOBILE}
        fill={theme.palette.text.secondary}
        fontSize={CHART_X_TICK_FONT_SIZE}
        fontFamily={theme.typography.fontFamily}
      >
        {label}
      </text>
    </g>
  );
};

export interface ConfidenceActiveBarLabelProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  value?: number;
  index?: number;
  activeIndex: number | null;
  confidencePillWidth?: number;
}

export const ConfidenceActiveBarLabel = (
  props: ConfidenceActiveBarLabelProps,
) => {
  const {
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    value,
    index,
    activeIndex,
    confidencePillWidth = CONFIDENCE_PILL_WIDTH,
  } = props;
  if (index !== activeIndex || value === undefined) return null;

  const pillX = x + width + PILL_OFFSET_X;
  const pillY = y + height / 2 - PILL_HEIGHT / 2;

  return renderPill(
    pillX,
    pillY,
    `${PILL_GRADIENT_ID}-h`,
    value,
    confidencePillWidth,
  );
};

export const HorizontalXTick = ({
  x = 0,
  y = 0,
  payload,
}: AngledXTickProps) => (
  <g transform={`translate(${x},${y})`}>
    <text
      textAnchor="middle"
      dy={CHART_X_TICK_DY_DESKTOP}
      fill={theme.palette.text.secondary}
      fontSize={CHART_X_TICK_DESKTOP_FONT_SIZE}
      fontFamily={theme.typography.fontFamily}
    >
      {payload?.value}
    </text>
  </g>
);
