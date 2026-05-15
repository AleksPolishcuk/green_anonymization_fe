import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

export const StyledDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    borderRadius: 16,
  },
});

export const ModalTitle = styled(DialogTitle)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(6),
  fontSize: theme.typography.fontSize18,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
}));

export const ModalContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(0, 6, 3),
}));

export const ModalMessage = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize16,
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
}));

export const ModalActions = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(2, 6, 5),
  gap: theme.spacing(2),
  flexDirection: "column",
  alignItems: "stretch",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
}));

export const UpgradeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightMedium,
  textTransform: "none",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2, 4),
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const WaitButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightMedium,
  textTransform: "none",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2, 4),
  border: `1px solid ${theme.palette.divider}`,
}));
