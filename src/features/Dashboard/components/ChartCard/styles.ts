import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const ChartCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0 2px 24px 0 rgba(16, 24, 40, 0.05)",
  borderRadius: "12px",
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
}));

export const ChartTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize22,
  fontWeight: theme.typography.fontWeightSemiBold,
  color: theme.palette.text.primary,
}));

export const ChartSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

export const ChartBody = styled(Box)({
  width: "100%",
});
