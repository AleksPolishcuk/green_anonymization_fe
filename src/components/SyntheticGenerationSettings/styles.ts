import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  CHIP_COLOR_PRESETS,
  deidColors,
  deidDarkColors,
} from "constants/DeidPage";

import { cardShadows } from "constants/MainPages";

export const SectionRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$fullWidth",
})<{ $fullWidth?: boolean }>(({ theme, $fullWidth }) => ({
  width: "100%",
  minWidth: 0,
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr)",
  gap: theme.spacing(5),

  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: $fullWidth
      ? "minmax(0, 1fr)"
      : "minmax(0, 1.05fr) minmax(0, 0.95fr)",

    alignItems: "stretch",
  },
}));

export const Card = styled(Box)(({ theme }) => ({
  minWidth: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  boxShadow:
    theme.palette.mode === "dark" ? cardShadows.cardDark : cardShadows.card,

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(5),
  },
}));

export const CardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(3),
  marginBottom: theme.spacing(5),
}));

export const CardHeaderIcon = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  borderRadius: theme.spacing(2.5),
  color: theme.palette.color.blue,
  backgroundColor: theme.palette.accent.lightBlue,

  "& svg": {
    fontSize: 22,
  },
}));

export const CardHeaderText = styled(Box)({});

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize18,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
}));

export const CardSubtitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.secondary,
}));

export const SourceDocumentSelect = styled(Box)(({ theme }) => ({
  minWidth: 0,
  width: "100%",
  display: "grid",
  gridTemplateColumns: "40px minmax(0, 1fr)",
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  marginBottom: theme.spacing(5),
  borderRadius: theme.spacing(3),
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.default,
  cursor: "pointer",

  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "40px minmax(0, 1fr) auto",
    alignItems: "center",
    gap: theme.spacing(3),
  },

  "&:hover": {
    border: `1px solid ${CHIP_COLOR_PRESETS.cyan.border}`,
  },
}));

export const DocumentIconBox = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  borderRadius: theme.spacing(2.5),
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.softGray,

  "& svg": {
    fontSize: 22,
  },
}));

export const DocumentName = styled(Typography)(({ theme }) => ({
  width: "100%",
  minWidth: 0,
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",

  [theme.breakpoints.up("sm")]: {
    flex: 1,
    fontSize: theme.typography.fontSize16,
  },
}));

export const StatusBadge = styled(Box)(({ theme }) => ({
  gridColumn: "1 / -1",
  width: "fit-content",
  padding: theme.spacing(0.75, 1.75),
  borderRadius: theme.spacing(2),
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightBold,
  color: CHIP_COLOR_PRESETS.cyan.color,
  backgroundColor: CHIP_COLOR_PRESETS.cyan.bg,

  [theme.breakpoints.up("sm")]: {
    gridColumn: "auto",
  },
}));

export const DocumentSelectArrow = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  display: "flex",
  color: theme.palette.text.secondary,
}));

export const MetaGrid = styled("ul")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(3),
  marginBottom: theme.spacing(5),
  padding: 0,

  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: theme.spacing(4),
  },

  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
}));

export const MetaItem = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(2),
}));

export const MetaIcon = styled(Box)(() => ({
  color: CHIP_COLOR_PRESETS.sky.color,

  "& svg": {
    fontSize: 24,
  },
}));

export const MetaText = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
}));

export const MetaLabel = styled("span")(({ theme }) => ({
  marginTop: theme.spacing(0.5),
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.text.secondary,
}));

export const PreviewBox = styled(Box)(({ theme }) => ({
  marginTop: "auto",
  overflow: "hidden",
  borderRadius: theme.spacing(3),
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.default,
}));

export const PreviewHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: theme.spacing(3),
  padding: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const PreviewHeaderLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(2),

  [theme.breakpoints.up("sm")]: {
    alignItems: "center",
    gap: theme.spacing(3),
  },
}));

export const PreviewIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  color: theme.palette.color.blue,

  "& svg": {
    fontSize: 20,
  },
}));

export const PreviewText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
}));

export const PreviewContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$expanded",
})<{ $expanded: boolean }>(({ theme, $expanded }) => {
  const colors = theme.palette.mode === "dark" ? deidDarkColors : deidColors;

  return {
    position: "relative",
    maxHeight: $expanded ? 360 : 160,
    overflowY: $expanded ? "auto" : "hidden",
    padding: theme.spacing(3),
    fontFamily: theme.typography.monospace.fontFamily,
    fontSize: theme.typography.fontSize12,
    lineHeight: 1.7,
    whiteSpace: "pre-wrap",
    color: theme.palette.text.primary,

    scrollbarWidth: "thin",
    scrollbarColor:
      theme.palette.mode === "dark"
        ? `${colors.borderOn} ${colors.bgOff}`
        : `${colors.borderOff} transparent`,

    "&::-webkit-scrollbar": {
      width: 8,
    },

    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },

    "&::-webkit-scrollbar-thumb": {
      borderRadius: 999,
      background:
        theme.palette.mode === "dark"
          ? `linear-gradient(180deg, ${colors.borderOn}, ${colors.bgOn})`
          : colors.borderOff,
      border: `2px solid ${
        theme.palette.mode === "dark"
          ? colors.bgOff
          : theme.palette.background.default
      }`,
    },

    "&::-webkit-scrollbar-thumb:hover": {
      background:
        theme.palette.mode === "dark"
          ? `linear-gradient(180deg, ${theme.palette.primary.main}, ${colors.borderOn})`
          : theme.palette.background.mediumGray,
    },

    ...(!$expanded && {
      maskImage: "linear-gradient(to bottom, #000 70%, transparent 100%)",
    }),

    [theme.breakpoints.up("md")]: {
      maxHeight: $expanded ? 420 : 180,
      padding: theme.spacing(4),
      fontSize: theme.typography.fontSize14,
    },
  };
});

export const PreviewToggleButton = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  margin: theme.spacing(0, "auto", 4),
  padding: theme.spacing(2, 4),
  borderRadius: theme.spacing(3),
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize12,
  cursor: "pointer",

  "& svg": {
    fontSize: 20,
  },

  "&:hover": {
    backgroundColor: theme.palette.background.softGray,
  },
}));

export const CounterBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "48px 1fr 48px",
  alignItems: "center",
  marginTop: theme.spacing(5),
  borderRadius: theme.spacing(3),
  border: `1px solid ${theme.palette.divider}`,
  overflow: "hidden",
  backgroundColor: theme.palette.background.default,

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "56px 1fr 56px",
  },
}));

export const CounterButton = styled("button")(({ theme }) => ({
  height: 56,
  border: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.softGray,
  color: theme.palette.text.secondary,
  cursor: "pointer",

  "& svg": {
    fontSize: 22,
  },

  "&:hover": {
    color: theme.palette.color.blue,
  },

  [theme.breakpoints.up("md")]: {
    height: 64,
  },
}));

export const CounterValue = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: theme.typography.fontSize28,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
}));

export const CounterHelper = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  textAlign: "center",
  fontSize: theme.typography.fontSize12,
  color: theme.palette.text.secondary,
}));

export const PreservedBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  background:
    "linear-gradient(135deg, rgba(37, 99, 235, 0.06) 0%, rgba(37, 99, 235, 0.02) 100%)",
}));

export const PreservedTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
}));

export const PreservedList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const PreservedItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.secondary,

  "& svg": {
    fontSize: 18,
    color: theme.palette.color.blue,
  },
}));

export const GenerateButton = styled(Button)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(6),
  padding: theme.spacing(3, 4),
  borderRadius: theme.spacing(3),
  textTransform: "none",
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.common.white,
  backgroundColor: theme.palette.color.blue,

  "& svg": {
    marginRight: theme.spacing(1),
    fontSize: 20,
  },

  "&:hover": {
    backgroundColor: theme.palette.color.darkBlue,
  },

  [theme.breakpoints.up("md")]: {
    maxWidth: 280,
    marginTop: theme.spacing(8),
    padding: theme.spacing(3.5, 4),
    fontSize: theme.typography.fontSize16,
  },
}));

export const SecureText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  textAlign: "center",
  fontSize: theme.typography.fontSize12,
  color: theme.palette.text.secondary,
}));

export const EmptyState = styled(Box)(({ theme }) => ({
  minHeight: 260,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2),
  textAlign: "center",
  padding: theme.spacing(6),
}));
