import { alpha, Box, styled, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export const EmailSentMsg = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(4),
  padding: theme.spacing(3, 4),
  width: "100%",
  borderRadius: theme.spacing(3.5),

  border: `1px solid ${theme.palette.divider}`,

  backgroundColor:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.background.lightGray, 0.72)
      : alpha(theme.palette.background.softGray, 0.5),

  boxShadow:
    theme.palette.mode === "dark"
      ? `0px 8px 28px ${alpha(theme.palette.common.black, 0.18)}`
      : "none",
}));

export const StatusIconWrapper = styled(Box)(({ theme }) => ({
  width: theme.spacing(4.5),
  height: theme.spacing(4.5),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}));

export const SuccessStatusIcon = styled("svg")(({ theme }) => ({
  width: theme.spacing(4.5),
  height: theme.spacing(4.5),
  display: "block",
  fill: "none",
  color: theme.palette.accent.green,
}));

export const ErrorStatusIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
  width: theme.spacing(4.5),
  height: theme.spacing(4.5),
  color: theme.palette.error.main,
}));

export const StatusContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  width: "100%",
  minWidth: 0,
}));

export const StatusTitleText = styled(Typography)(({ theme }) => ({
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightSemiBold,
  fontSize: theme.typography.fontSize14,
  lineHeight: theme.typography.lineHeight150,
  color: theme.palette.text.primary,
}));

export const SuccessStatusDescriptionText = styled(Typography)(({ theme }) => ({
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize16,
  lineHeight: theme.typography.lineHeight158,

  color:
    theme.palette.mode === "dark"
      ? theme.palette.text.secondary
      : theme.palette.background.mediumGray,

  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize14,
  },
}));

export const ErrorStatusDescriptionText = styled(Typography)(({ theme }) => ({
  margin: 0,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize16,
  lineHeight: theme.typography.lineHeight158,
  color: theme.palette.error.main,

  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.fontSize14,
  },
}));
