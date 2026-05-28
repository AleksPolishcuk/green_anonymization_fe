import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const PageRoot = styled(Box)(({ theme }) => ({
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  padding: theme.spacing(3),

  [theme.breakpoints.up("sm")]: {
    gap: theme.spacing(6),
    padding: theme.spacing(4),
  },

  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(8),
    padding: theme.spacing(8),
  },
}));

export const PageHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.fontSize22,

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize32,
  },
}));

export const ProfileCard = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
  padding: theme.spacing(4),
  paddingTop: theme.spacing(9),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: theme.spacing(6),
    padding: theme.spacing(6),
  },
}));

export const EditCornerSlot = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(3),
  right: theme.spacing(3),
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  zIndex: 1,
  flexWrap: "wrap",
  justifyContent: "flex-end",

  [theme.breakpoints.up("md")]: {
    top: theme.spacing(4),
    right: theme.spacing(4),
    gap: theme.spacing(1.5),
  },
}));

export const AvatarSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  flexShrink: 0,
}));

export const AvatarWrapper = styled(Box)(() => ({
  position: "relative",
  cursor: "pointer",
}));

export const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  fontSize: theme.typography.fontSize22,
  fontWeight: theme.typography.fontWeightBold,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  border: `3px solid ${theme.palette.divider}`,

  [theme.breakpoints.up("md")]: {
    width: 96,
    height: 96,
    fontSize: theme.typography.fontSize28,
  },
}));

export const AvatarEditBadge = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: 0,
  bottom: 0,
  width: 28,
  height: 28,
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `2px solid ${theme.palette.background.paper}`,
  boxShadow: `0 2px 6px ${alpha(theme.palette.common.black, 0.18)}`,
  pointerEvents: "none",
}));

export const AvatarOverlay = styled(Box)<{ $loading?: boolean }>(
  ({ theme, $loading }) => ({
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    backgroundColor: alpha(theme.palette.common.black, 0.45),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: $loading ? 1 : 0,
    transition: "opacity 0.2s",
    color: theme.palette.common.white,
    fontSize: theme.typography.fontSize12,
    fontWeight: theme.typography.fontWeightMedium,
    textAlign: "center",
    letterSpacing: "0.02em",

    ".avatar-wrapper:hover &": {
      opacity: 1,
    },
  }),
);

export const InfoSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  flex: 1,
}));

export const EditTextButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.primary.main,
  padding: theme.spacing(0.5, 1.5),
  minWidth: 0,

  "&:hover": {
    backgroundColor: theme.palette.accent.lightBlue,
  },

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize14,
  },
}));

export const EditActions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),

  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(1.5),
  },
}));

export const EditCancelButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.secondary,
  padding: theme.spacing(0.5, 1.5),
  minWidth: 0,

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize14,
    padding: theme.spacing(0.75, 2),
  },
}));

export const EditSaveButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightMedium,
  padding: theme.spacing(0.5, 2),
  minWidth: 64,
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,

  "&:hover": {
    backgroundColor: theme.palette.color.darkBlue,
  },

  "&.Mui-disabled": {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.action.disabled,
  },

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize14,
    padding: theme.spacing(0.75, 2.5),
    minWidth: 88,
  },
}));

export const FieldRow = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(4),

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr",
  },
}));

export const FieldGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const FieldLabel = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.secondary,
  textTransform: "uppercase",
}));

export const FieldValue = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  color: theme.palette.text.primary,
}));

export const ErrorText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  color: theme.palette.accent.red,
  textAlign: "center",
}));

export const TourAccordion = styled(Accordion)(({ theme }) => ({
  borderRadius: `${theme.shape.borderRadius}px`,
  backgroundColor: theme.palette.background.paper,
  backgroundImage: "none",
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: "none",
  overflow: "hidden",

  "&:before": {
    display: "none",
  },

  "&.Mui-expanded": {
    margin: 0,
  },
}));

export const TourAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: theme.spacing(3, 4),
  minHeight: 64,
  backgroundColor: theme.palette.background.paper,

  "& .MuiAccordionSummary-content": {
    margin: 0,

    "&.Mui-expanded": {
      margin: 0,
    },
  },

  "&.Mui-expanded": {
    minHeight: 64,
  },

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4, 6),
    minHeight: 72,

    "&.Mui-expanded": {
      minHeight: 72,
    },
  },
}));

export const TourAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0, 4, 3, 4),
  backgroundColor: theme.palette.background.paper,

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(0, 6, 4, 6),
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.fontSize16,

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize18,
  },
}));

export const TourRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  padding: theme.spacing(2.5, 0),
  borderBottom: `1px solid ${theme.palette.divider}`,

  "&:last-of-type": {
    borderBottom: "none",
  },

  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(4),
    padding: theme.spacing(3, 0),
  },
}));

export const TourStepName = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.primary,

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize16,
  },
}));

export const SectionCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(3, 4),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4, 6),
    gap: theme.spacing(2),
  },
}));

export const SubscriptionHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: theme.spacing(3),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),

  "& > div:first-of-type": {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
  },
}));

export const SubscriptionUsageWrapper = styled(Box)(() => ({
  "& > *": {
    border: "none !important",
    backgroundColor: "transparent !important",
    padding: "0 !important",
    margin: "0 !important",
  },
}));

export const SubscriptionPlanName = styled(Typography)<{ $isPro?: boolean }>(
  ({ theme, $isPro }) => ({
    fontFamily: theme.typography.headingFontFamily,
    fontSize: theme.typography.fontSize28,
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 1.1,
    color: $isPro ? theme.palette.accent.lilac : theme.palette.primary.main,

    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.fontSize32,
    },
  }),
);

export const SubscriptionPlanTagline = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.secondary,
}));

export const PreferenceRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  padding: theme.spacing(2, 0),
}));

export const PreferenceControl = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  color: theme.palette.text.secondary,
}));

export const SettingsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(4),
  paddingTop: theme.spacing(2),

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing(6),
  },
}));

export const SettingsItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  minWidth: 0,
}));

export const TakeTourButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.primary.main,
  padding: theme.spacing(0.75, 2),
  whiteSpace: "nowrap",
  minWidth: 0,
  flexShrink: 0,

  "&:hover": {
    backgroundColor: theme.palette.accent.lightBlue,
  },

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize14,
    padding: theme.spacing(1, 3),
  },
}));
