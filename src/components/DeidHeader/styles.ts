import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageHeaderRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(3, 2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.default,

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4, 3),
  },

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6, 8),
  },
}));

export const PageHeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.fontSize22,
  marginBottom: theme.spacing(2),

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize32,
    marginBottom: theme.spacing(2.5),
  },
}));

export const PageHeaderSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize16,
  },
}));
