import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

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
  width: 52,
  height: 52,
  borderRadius: 14,
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(21, 93, 252, 0.18)"
      : theme.palette.accent.lightBlue,
  color: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}));

export const ModalIcon = styled(AccessTimeRoundedIcon)({
  width: 26,
  height: 26,
});

export const ModalTextGroup = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 4,
  minWidth: 0,
});

export const ModalTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.headingFontFamily,
  fontSize: theme.typography.fontSize18,
  fontWeight: 400,
  lineHeight: 1.25,
  textAlign: "center",
  color: theme.palette.text.primary,
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.fontSize22,
  },
}));

export const ModalMessage = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
  textAlign: "center",
}));

export const ResetInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(2, 4),
  borderRadius: 10,
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(21, 93, 252, 0.10)"
      : theme.palette.accent.lightBlue,
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(59, 130, 246, 0.18)"
      : "rgba(37, 99, 235, 0.18)"
  }`,
  margin: theme.spacing(0, 5, 1),
}));

export const ResetInfoText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  color: theme.palette.primary.main,
  textAlign: "center",
  lineHeight: 1.5,
}));

export const ModalActions = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(2, 5, 5),
  flexDirection: "column",
  alignItems: "stretch",
}));

export const UpgradeButton = styled(Button)(({ theme }) => ({
  marginLeft: "0 !important",
  fontFamily: "inherit",
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightMedium,
  textTransform: "none",
  borderRadius: 12,
  width: "100%",
  padding: theme.spacing(2.5, 4),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  boxShadow: "0px 4px 14px 0px rgba(59, 130, 246, 0.3)",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: "0px 6px 18px 0px rgba(59, 130, 246, 0.4)",
  },
}));
