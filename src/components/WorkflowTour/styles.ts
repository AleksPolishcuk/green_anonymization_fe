import { Box, Button, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { deidColors, deidDarkColors } from "constants/DeidPage";

export const WorkflowTourOverlay = styled(Box)(({ theme }) => ({
  position: "fixed",
  inset: 0,
  zIndex: 10000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(6),
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(2, 6, 23, 0.82)"
      : "rgba(15, 23, 42, 0.72)",

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4),
  },
}));

export const WorkflowTourCard = styled(Paper)(({ theme }) => {
  const colors = theme.palette.mode === "dark" ? deidDarkColors : deidColors;

  return {
    position: "relative",
    width: "100%",
    maxWidth: 520,
    overflow: "hidden",
    padding: theme.spacing(7),
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.default,
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

    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(5),
    },
  };
});

export const WorkflowTourTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize22,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
}));

export const WorkflowTourText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: theme.typography.fontSize14,
  lineHeight: theme.typography.lineHeight150,
  color: theme.palette.text.secondary,
}));

export const WorkflowTourActions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  marginTop: theme.spacing(6),

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const WorkflowTourPrimaryButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  padding: theme.spacing(2.5, 4),
  borderRadius: theme.shape.borderRadius,
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  boxShadow: "0px 4px 14px rgba(59, 130, 246, 0.3)",

  "&:hover": {
    backgroundColor: theme.palette.color.darkBlue,
  },
}));

export const WorkflowTourSecondaryButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  padding: theme.spacing(2.5, 4),
  borderRadius: theme.shape.borderRadius,
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.secondary,
  border: `1px solid ${theme.palette.divider}`,
}));
