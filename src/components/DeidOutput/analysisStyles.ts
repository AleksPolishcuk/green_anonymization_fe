import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

import { RECOGNIZER_TYPES } from "constants/MainPages";
import { deidColors, deidDarkColors } from "constants/DeidPage";

export const AnalysisPageWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(10, 6),
  margin: "0 auto",
}));

export const AnalysisWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(7),
}));

export const HeaderCard = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 100,
  padding: "20px",
  borderRadius: theme.shape.borderRadius,
  background:
    "linear-gradient(135deg, rgba(6, 182, 212, 0.07), rgba(37, 99, 235, 0.05))",
  border: "1px solid rgba(6, 182, 212, 0.2)",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    height: "auto",
    gap: theme.spacing(4),
  },
}));

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.h3.fontFamily,
  fontSize: theme.typography.fontSize32,
  fontWeight: 600,
}));

export const HeaderStats = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.color.grayDark,
}));

export const AccuracyBadge = styled("span")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  padding: "6px 16px",
  borderRadius: "20px",
  backgroundColor: "rgba(6, 182, 212, 0.08)",
  border: "1px solid rgba(6, 182, 212, 0.2)",
  color: "#06B6D4",
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightBold,
}));

export const SpriteIconSvg = styled("svg")({
  width: 15,
  height: 15,
  display: "block",
  flexShrink: 0,
});

export const TableCard = styled("div")(({ theme }) => {
  const colors = theme.palette.mode === "dark" ? deidDarkColors : deidColors;

  return {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.background.softGray}`,
    overflow: "hidden",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: colors.topLine,
    },
  };
});

export const TableHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 90,
  padding: theme.spacing(0, 6),
  borderBottom: `1px solid ${theme.palette.background.softGray}`,
  cursor: "pointer",
}));

export const CollapseArrow = styled("div")<{ $expanded: boolean }>(
  ({ theme, $expanded }) => ({
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease",
    transform: $expanded ? "rotate(180deg)" : "rotate(0deg)",
    "&::before": {
      content: '""',
      display: "block",
      width: 8,
      height: 8,
      borderRight: `2px solid ${theme.palette.color.grayDark}`,
      borderBottom: `2px solid ${theme.palette.color.grayDark}`,
      transform: "rotate(45deg)",
      marginTop: -2,
    },
  }),
);

export const TableHeaderLeft = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
}));

export const TableIconWrapper = styled("div")(({ theme }) => ({
  width: 36,
  height: 36,
  borderRadius: theme.shape.borderRadius,
  backgroundColor:
    theme.palette.accent.lightLilac ?? `${theme.palette.accent.lilac}14`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const TableTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeightRegular,
}));

export const TableStats = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.color.grayDark,
}));

export const StyledTable = styled("table")(({ theme }) => ({
  width: "100%",
  borderCollapse: "collapse",
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
}));

export const Th = styled("th")(({ theme }) => ({
  textAlign: "left",
  height: 40,
  padding: theme.spacing(0, 4),
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.color.grayDark,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  borderBottom: `1px solid ${theme.palette.background.softGray}`,
  backgroundColor: `${theme.palette.background.softGray}CC`,
}));

export const Td = styled("td")(({ theme }) => ({
  height: 50,
  padding: theme.spacing(0, 4),
  borderBottom: `1px solid ${theme.palette.background.softGray}`,
  color: theme.palette.color.charcoal,
  verticalAlign: "middle",
}));

export const TdBold = styled(Td)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular,
}));

export const Tr = styled("tr")(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: `${theme.palette.background.softGray}CC`,
  },
  "&:last-child td": {
    borderBottom: "none",
  },
}));

export const TableScrollWrapper = styled("div")({
  overflowX: "auto",
});

export const LoaderRow = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transform: "scale(0.5)",
  padding: theme.spacing(4),
}));

export const ScoreBadge = styled("span")<{ $score: number }>(({ theme }) => ({
  padding: "4px 10px",
  borderRadius: "12px",
  backgroundColor: "rgba(59, 130, 246, 0.1)",
  border: "1px solid rgba(59, 130, 246, 0.2)",
  color: theme.palette.accent.blue,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightBold,
}));

const RECOGNIZER_COLOR_MAP: Record<string, string> = {
  [RECOGNIZER_TYPES.PERSON]: "rgba(99, 102, 241, 1)",
  [RECOGNIZER_TYPES.DATE_TIME]: "rgba(6, 182, 212, 1)",
  [RECOGNIZER_TYPES.AGE]: "rgba(99, 102, 241, 1)",
  [RECOGNIZER_TYPES.PHONE_NUMBER]: "rgba(6, 182, 212, 1)",
  [RECOGNIZER_TYPES.EMAIL_ADDRESS]: "rgba(99, 102, 241, 1)",
  [RECOGNIZER_TYPES.MEDICAL_RECORD_NUMBER]: "rgba(6, 182, 212, 1)",
};

const RECOGNIZER_BG = "rgba(59, 130, 246, 0.09)";

export const RecognizerBadge = styled("span")<{ $type: string }>(({
  theme,
  $type,
}) => {
  const color = RECOGNIZER_COLOR_MAP[$type] ?? theme.palette.color.grayDark;

  return {
    padding: "4px 10px",
    borderRadius: "12px",
    backgroundColor: RECOGNIZER_BG,
    border: "1px solid rgba(59, 130, 246, 0.2)",
    color,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize12,
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "uppercase" as const,
    whiteSpace: "nowrap" as const,
  };
});

export const ToggleButton = styled("button")<{ $selected: boolean }>(
  ({ theme, $selected }) => ({
    minWidth: "120px",
    padding: "8px 16px",
    borderRadius: "8px",
    border: `1px solid ${$selected ? theme.palette.accent.blue : theme.palette.background.mediumGray}`,
    backgroundColor: $selected
      ? theme.palette.accent.lightBlue
      : theme.palette.background.default,
    color: $selected ? theme.palette.accent.blue : theme.palette.color.grayDark,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize14,
    fontWeight: 600,
    cursor: "pointer",
    outline: "none",
    whiteSpace: "nowrap" as const,
  }),
);

export const TextPanelsGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spacing(6),

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const TextPanel = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.background.softGray}`,
  overflow: "hidden",
}));

export const TextPanelHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(4, 6),
  borderBottom: `1px solid ${theme.palette.background.softGray}`,
}));

export const TextPanelTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeightBold,
}));

export const TextPanelBadge = styled("span")<{ $variant: "blue" | "green" }>(({
  theme,
  $variant,
}) => {
  const color =
    $variant === "blue"
      ? theme.palette.accent.blue
      : theme.palette.accent.green;
  return {
    padding: "3px 10px",
    borderRadius: "12px",
    backgroundColor: `${color}14`,
    color,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize12,
    fontWeight: theme.typography.fontWeightBold,
    display: "flex",
    alignItems: "center",
    gap: "4px",
  };
});

export const TextContent = styled("pre")(({ theme }) => ({
  padding: theme.spacing(6),
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  lineHeight: 1.8,
  color: theme.palette.color.charcoal,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
}));

export const HighlightedEntity = styled("mark")(({ theme }) => ({
  backgroundColor: `${theme.palette.accent.blue}20`,
  color: theme.palette.accent.blue,
  padding: "1px 4px",
  borderRadius: "4px",
  fontWeight: theme.typography.fontWeightBold,
}));

export const RedactedTag = styled("span")(({ theme }) => ({
  backgroundColor: `${theme.palette.accent.blue}14`,
  color: theme.palette.accent.blue,
  padding: "2px 8px",
  borderRadius: "4px",
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSize12,
}));

export const ActionsBar = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(4),
  padding: theme.spacing(4, 6),
  borderTop: `1px solid ${theme.palette.background.softGray}`,
}));

export const ActionButton = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(2, 4),
  borderRadius: "10px",
  border: `1px solid ${theme.palette.background.softGray}`,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.color.charcoal,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightBold,
  cursor: "pointer",
  transition: "background-color 0.2s ease",

  "&:hover": {
    backgroundColor: theme.palette.background.softGray,
  },
}));
