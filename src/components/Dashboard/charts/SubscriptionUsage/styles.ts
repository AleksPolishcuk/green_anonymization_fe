import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

export const UsageRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(4),
  padding: theme.spacing(3, 4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: 12,
  border: `1px solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(4),
  flexWrap: "wrap",
  [theme.breakpoints.up("sm")]: {
    flexWrap: "nowrap",
  },
}));

export const UsageLabel = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.secondary,
  whiteSpace: "nowrap",
  flexShrink: 0,
}));

export const UsageCount = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.primary,
  whiteSpace: "nowrap",
  flexShrink: 0,
}));

export const UsageBarWrapper = styled(Box)({
  flex: 1,
  minWidth: 120,
});

export const UsageBar = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== "$warn",
})<{ $warn: boolean }>(({ theme, $warn }) => ({
  height: 6,
  borderRadius: 4,
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.1)"
      : theme.palette.action.hover,
  "& .MuiLinearProgress-bar": {
    borderRadius: 4,
    backgroundColor: $warn
      ? theme.palette.warning.main
      : theme.palette.primary.main,
  },
}));

export const UpgradeLink = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.primary.main,
  cursor: "pointer",
  whiteSpace: "nowrap",
  flexShrink: 0,
  "&:hover": {
    textDecoration: "underline",
  },
}));
