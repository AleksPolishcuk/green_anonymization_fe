import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

import {
  MODAL_ICON_BADGE_BORDER_RADIUS,
  MODAL_ICON_BADGE_SIZE,
  MODAL_ICON_SIZE,
  MODAL_PRIMARY_ALPHA,
  MODAL_PRIMARY_INFO_ALPHA,
  MODAL_RESET_INFO_BORDER_RADIUS,
  MODAL_UPGRADE_BTN_BORDER_RADIUS,
  MODAL_UPGRADE_BTN_HOVER_SHADOW,
  MODAL_UPGRADE_BTN_SHADOW,
  MODAL_ACCENT_BORDER_ALPHA,
} from "constants/ModalStyles";

export const ModalHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  padding: theme.spacing(7, 5, 2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(8, 7, 3),
  },
}));

export const ModalIconBadge = styled(Box)(({ theme }) => ({
  width: MODAL_ICON_BADGE_SIZE,
  height: MODAL_ICON_BADGE_SIZE,
  borderRadius: MODAL_ICON_BADGE_BORDER_RADIUS,
  backgroundColor:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.primary.main, MODAL_PRIMARY_ALPHA)
      : theme.palette.accent.lightBlue,
  color: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}));

export const ModalIcon = styled(AccessTimeRoundedIcon)({
  width: MODAL_ICON_SIZE,
  height: MODAL_ICON_SIZE,
});

export const ModalTextGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  minWidth: 0,
}));

export const ModalTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.headingFontFamily,
  fontSize: theme.typography.fontSize18,
  fontWeight: theme.typography.fontWeightRegular,
  lineHeight: theme.typography.lineHeight138,
  textAlign: "center",
  color: theme.palette.text.primary,
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.fontSize22,
  },
}));

export const ModalMessage = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.secondary,
  lineHeight: theme.typography.lineHeight158,
  textAlign: "center",
}));

export const ResetInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(2, 4),
  borderRadius: MODAL_RESET_INFO_BORDER_RADIUS,
  backgroundColor:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.primary.main, MODAL_PRIMARY_INFO_ALPHA)
      : theme.palette.accent.lightBlue,
  border: `1px solid ${alpha(
    theme.palette.accent.blue,
    MODAL_ACCENT_BORDER_ALPHA,
  )}`,
  margin: theme.spacing(0, 5, 1),
}));

export const ResetInfoText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  color: theme.palette.primary.main,
  textAlign: "center",
  lineHeight: theme.typography.lineHeight150,
}));

export const ModalActions = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(2, 5, 5),
  flexDirection: "column",
  alignItems: "stretch",
}));

export const UpgradeButton = styled(Button)(({ theme }) => ({
  marginLeft: "0 !important",
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightMedium,
  textTransform: "none",
  borderRadius: MODAL_UPGRADE_BTN_BORDER_RADIUS,
  width: "100%",
  padding: theme.spacing(2.5, 4),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  boxShadow: MODAL_UPGRADE_BTN_SHADOW,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: MODAL_UPGRADE_BTN_HOVER_SHADOW,
  },
}));
