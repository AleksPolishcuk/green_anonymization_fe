import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageHeaderRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(6, 8),
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.default,
}));

export const PageHeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightSemiBold,
  fontSize: theme.typography.fontSize32,
  marginBottom: theme.spacing(2.5),
}));

export const PageHeaderSubtitle = styled(Typography)(() => ({}));
