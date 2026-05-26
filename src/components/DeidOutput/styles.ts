import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import {
  CHIP_COLOR_PRESETS,
  deidColors,
  deidDarkColors,
} from "constants/DeidPage";

export const DeidOutputSectionRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(3, 2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4, 3),
  },

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8),
    gap: theme.spacing(7),
  },
}));

export const DeidOutputSectionStack = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    gap: theme.spacing(8),
  },
}));

export const DeidOutputSectionCard = styled(Box)(({ theme }) => {
  const colors = theme.palette.mode === "dark" ? deidDarkColors : deidColors;

  return {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",

    minHeight: 308,
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
  padding: theme.spacing(4, 0, 4, 4),
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightSemiBold,
  fontSize: theme.typography.fontSize16,
}));

export const CardSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  color: theme.palette.text.secondary,
}));

export const BaseBadge = styled(Box)(({ theme }) => {
  const style = CHIP_COLOR_PRESETS.blue;

  return {
    display: "inline-flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    gap: theme.spacing(0.5),
    padding: theme.spacing(0.75, 1.5),
    margin: theme.spacing(2, 2, 2, 0),
    color: style.color,
    backgroundColor: style.bg,
    border: `1px solid ${style.border}`,
    borderRadius: theme.spacing(2),
    fontSize: theme.typography.fontSize11,
    fontWeight: theme.typography.fontWeightBold,

    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(4, 4, 4, 0),
    },
  };
});

export const ComplianceBadge = styled(BaseBadge)({});

export const DetectedEntityNumberBadge = styled(BaseBadge)({});

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
  flexShrink: 0,
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

export const BackArrowIconWrapper = styled(IconWrapper)(({ theme }) => ({
  width: 13,
  height: 13,
  marginRight: theme.spacing(1.25),
  transform: "scaleX(-1)",
}));

export const DeidOutputTopActions = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(-2),
  marginBottom: theme.spacing(-2),

  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(-4),
    marginBottom: theme.spacing(-4),
  },

  [theme.breakpoints.up("lg")]: {
    justifyContent: "flex-end",
  },
}));

export const CreateNewDocumentButton = styled(Button)(({ theme }) => ({
  width: "100%",
  flexShrink: 0,
  textTransform: "none",
  fontSize: theme.typography.fontSize14,
  padding: theme.spacing(2.5, 4),
  borderRadius: theme.spacing(3),
  color: theme.palette.common.white,
  backgroundColor: theme.palette.color.blue,
  gap: theme.spacing(1.5),

  "&:hover": {
    backgroundColor: theme.palette.color.darkBlue,
  },

  [theme.breakpoints.up("lg")]: {
    width: "auto",
  },
}));
