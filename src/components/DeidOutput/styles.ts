import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import {
  CHIP_COLOR_PRESETS,
  deidColors,
  deidDarkColors,
} from "constants/DeidPage";

export const DeidOutputSectionRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  margin: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(7),
}));

export const DeidOutputSectionStack = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(8),
}));

export const DeidOutputSectionCard = styled(Box)(({ theme }) => {
  const colors = theme.palette.mode === "dark" ? deidDarkColors : deidColors;

  return {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",

    minHeight: 308,
    minWidth: 308,
    width: "100%",

    backgroundColor: theme.palette.background.lightGray,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,

    boxShadow: colors.boxShadow,

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: 3,
      background: colors.topLine,
    },
  };
});

export const CardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.default,
}));

export const CardHeaderTextSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(4),
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightSemiBold,
  fontSize: theme.typography.fontSize16,
}));

export const CardSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  color: theme.palette.text.secondary,
}));

export const ComplianceBadge = styled(Box)(({ theme }) => {
  const style = CHIP_COLOR_PRESETS.blue;

  return {
    display: "inline-flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
    padding: theme.spacing(0.75, 1.5),
    margin: theme.spacing(4),
    color: style.color,
    backgroundColor: style.bg,
    border: `1px solid ${style.border}`,
    borderRadius: theme.spacing(2),
    fontSize: theme.typography.fontSize11,
    fontWeight: theme.typography.fontWeightBold,
  };
});

export const DetectedEntityNumberBadge = styled(Box)(({ theme }) => {
  const style = CHIP_COLOR_PRESETS.blue;

  return {
    display: "inline-flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
    padding: theme.spacing(0.75, 1.5),
    margin: theme.spacing(4),
    color: style.color,
    backgroundColor: style.bg,
    border: `1px solid ${style.border}`,
    borderRadius: theme.spacing(2),
    fontSize: theme.typography.fontSize11,
    fontWeight: theme.typography.fontWeightBold,
  };
});

export const ActionButtonsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  marginTop: "auto",
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  width: "100%",
  backgroundColor: theme.palette.background.default,
}));

export const ActionButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightMedium,
  padding: theme.spacing(1, 1.5),
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderRadius: theme.spacing(2),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const CardContent = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(4),
  overflowY: "auto",
}));

export const TextContent = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  fontFamily: theme.typography.monospace.fontFamily,
}));

export const EntityHighlight = styled("span")(({ theme }) => {
  const style = CHIP_COLOR_PRESETS.blue;

  return {
    color: style.color,
    backgroundColor: style.bg,
    border: `1px solid ${style.border}`,
    padding: theme.spacing(0.25, 0.75),
    borderRadius: theme.spacing(1),
    fontSize: "inherit",
    fontWeight: theme.typography.fontWeightMedium,
    cursor: "default",
  };
});

export const RedactedContent = styled("span")(({ theme }) => {
  const style = CHIP_COLOR_PRESETS.gray;

  return {
    backgroundColor: style.bg,
    color: style.color,
    padding: theme.spacing(0.25, 0.75),
    borderRadius: theme.spacing(1),
    fontSize: "inherit",
    fontWeight: theme.typography.fontWeightMedium,
    border: `1px solid ${style.border}`,
    cursor: "default",
  };
});

export const IconWrapper = styled("svg")({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "currentColor",
});

export const ExclamationMarkIconWrapper = styled(IconWrapper)(({ theme }) => ({
  width: 11,
  height: 11,
  marginRight: theme.spacing(0.5),
}));

export const ComplianceSafeIconWrapper = styled(IconWrapper)(({ theme }) => ({
  width: 11,
  height: 11,
  marginRight: theme.spacing(0.5),
}));

export const CopyIconWrapper = styled(IconWrapper)(({ theme }) => ({
  width: 13,
  height: 13,
  marginRight: theme.spacing(1.25),
}));

export const DownloadIconWrapper = styled(IconWrapper)(({ theme }) => ({
  width: 13,
  height: 13,
  marginRight: theme.spacing(1.25),
}));

export const SyntheticCtaCard = styled(Box)(({ theme }) => {
  const blue = CHIP_COLOR_PRESETS.blue;

  return {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(4),
    padding: theme.spacing(4, 5),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: blue.bg,
    border: `1px solid ${blue.border}`,

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: theme.spacing(3),
    },
  };
});

export const SyntheticCtaIconBox = styled(Box)(({ theme }) => {
  const blue = CHIP_COLOR_PRESETS.blue;

  return {
    width: 40,
    height: 40,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.spacing(2),
    backgroundColor: blue.color,
    color: theme.palette.common.white,
  };
});

export const SyntheticCtaText = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

export const SyntheticCtaTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightSemiBold,
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.primary,
}));

export const SyntheticCtaSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  color: theme.palette.text.secondary,
}));

export const SyntheticCtaButton = styled(Button)(({ theme }) => {
  const blue = CHIP_COLOR_PRESETS.blue;

  return {
    flexShrink: 0,
    textTransform: "none",
    fontSize: theme.typography.fontSize12,
    fontWeight: theme.typography.fontWeightSemiBold,
    padding: theme.spacing(1.5, 3),
    borderRadius: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: blue.color,
    "&:hover": {
      backgroundColor: blue.color,
      filter: "brightness(0.95)",
    },
  };
});

export const SyntheticCtaIconSvg = styled("svg")({
  width: 20,
  height: 20,
});
