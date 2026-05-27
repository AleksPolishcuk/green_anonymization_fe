import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import {
  CHIP_COLOR_PRESETS,
  deidColors,
  deidDarkColors,
  findingBadgeColors,
  recognizerColors,
} from "constants/DeidPage";
import { RECOGNIZER_TYPES } from "constants/MainPages";

export const AnalysisPageWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(10, 6),
  margin: "0 auto",
}));

export const AnalysisWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(7),
}));

export const HeaderCard = styled("div")(({ theme }) => {
  const colors = theme.palette.mode === "dark" ? deidDarkColors : deidColors;

  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: "auto",
    gap: theme.spacing(3),
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    background: colors.analysisHeaderBg,
    border: `1px solid ${colors.analysisHeaderBorder}`,

    "@media (min-width: 1024px)": {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: 100,
      padding: theme.spacing(5),
      gap: 0,
    },
  };
});

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize18,
  fontWeight: theme.typography.fontWeightBold,

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize22,
  },

  "@media (min-width: 1024px)": {
    fontSize: theme.typography.fontSize28,
  },
}));

export const HeaderStats = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.color.grayDark,
}));

export const AccuracyBadge = styled("span")(({ theme }) => {
  const cyan = CHIP_COLOR_PRESETS.cyan;

  return {
    display: "flex",
    alignItems: "center",
    alignSelf: "flex-start",
    whiteSpace: "nowrap",
    gap: theme.spacing(1.5),
    padding: theme.spacing(1.5, 3),
    borderRadius: theme.spacing(5),
    backgroundColor: cyan.bg,
    border: `1px solid ${cyan.border}`,
    color: cyan.color,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize12,
    fontWeight: theme.typography.fontWeightBold,

    [theme.breakpoints.up("md")]: {
      alignSelf: "center",
      padding: theme.spacing(1.5, 4),
      fontSize: theme.typography.fontSize14,
    },
  };
});

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
  minHeight: 64,
  padding: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.background.softGray}`,
  cursor: "pointer",

  [theme.breakpoints.up("md")]: {
    minHeight: 90,
    padding: theme.spacing(0, 6),
  },
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
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightRegular,

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize16,
  },
}));

export const TableStats = styled(Typography)(({ theme }) => ({
  display: "none",
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.color.grayDark,

  [theme.breakpoints.up("md")]: {
    display: "block",
  },
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
  padding: theme.spacing(1, 2.5),
  borderRadius: theme.spacing(3),
  backgroundColor: findingBadgeColors.scoreBg,
  border: `1px solid ${findingBadgeColors.scoreBorder}`,
  color: theme.palette.accent.blue,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightBold,
}));

const RECOGNIZER_COLOR_MAP: Record<string, string> = {
  [RECOGNIZER_TYPES.PERSON]: recognizerColors.indigo,
  [RECOGNIZER_TYPES.DATE_TIME]: recognizerColors.cyan,
  [RECOGNIZER_TYPES.AGE]: recognizerColors.indigo,
  [RECOGNIZER_TYPES.PHONE_NUMBER]: recognizerColors.cyan,
  [RECOGNIZER_TYPES.EMAIL_ADDRESS]: recognizerColors.indigo,
  [RECOGNIZER_TYPES.MEDICAL_RECORD_NUMBER]: recognizerColors.cyan,
};

export const RecognizerBadge = styled("span")<{ $type: string }>(({
  theme,
  $type,
}) => {
  const color = RECOGNIZER_COLOR_MAP[$type] ?? theme.palette.color.grayDark;

  return {
    padding: theme.spacing(1, 2.5),
    borderRadius: theme.spacing(3),
    backgroundColor: findingBadgeColors.recognizerBg,
    border: `1px solid ${findingBadgeColors.recognizerBorder}`,
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
    minWidth: 120,
    padding: theme.spacing(2, 4),
    borderRadius: theme.spacing(2),
    border: `1px solid ${$selected ? theme.palette.accent.blue : theme.palette.background.mediumGray}`,
    backgroundColor: $selected
      ? theme.palette.accent.lightBlue
      : theme.palette.background.default,
    color: $selected ? theme.palette.accent.blue : theme.palette.color.grayDark,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize14,
    fontWeight: theme.typography.fontWeightMedium,
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
    padding: theme.spacing(0.75, 2.5),
    borderRadius: theme.spacing(3),
    backgroundColor: `${color}14`,
    color,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize12,
    fontWeight: theme.typography.fontWeightBold,
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
  };
});

export const TextContent = styled("pre")(({ theme }) => ({
  padding: theme.spacing(6),
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  lineHeight: theme.typography.lineHeight175,
  color: theme.palette.color.charcoal,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
}));

export const HighlightedEntity = styled("mark")(({ theme }) => ({
  backgroundColor: `${theme.palette.accent.blue}20`,
  color: theme.palette.accent.blue,
  padding: theme.spacing(0.25, 1),
  borderRadius: theme.spacing(1),
  fontWeight: theme.typography.fontWeightBold,
}));

export const RedactedTag = styled("span")(({ theme }) => ({
  backgroundColor: `${theme.palette.accent.blue}14`,
  color: theme.palette.accent.blue,
  padding: theme.spacing(0.5, 2),
  borderRadius: theme.spacing(1),
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

export const PaginationBar = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(3, 4),
  borderTop: `1px solid ${theme.palette.background.softGray}`,
}));

export const PaginationButton = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.palette.background.softGray}`,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.color.charcoal,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightMedium,
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  "& svg": {
    fontSize: theme.typography.fontSize16,
    flexShrink: 0,
  },
  "&:hover:not(:disabled)": {
    backgroundColor: theme.palette.background.softGray,
  },
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.4,
  },
}));

export const PaginationInfo = styled("span")(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  color: theme.palette.color.grayDark,
  userSelect: "none",
}));

export const ActionButton = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(2, 4),
  borderRadius: theme.spacing(2.5),
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
