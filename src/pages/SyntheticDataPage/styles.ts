import { Box, Chip, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageRoot = styled(Box)(({ theme }) => ({
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
  padding: theme.spacing(4),

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

export const HeaderTopRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center ",
  gap: theme.spacing(2),

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
  },
}));

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.fontSize22,

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize32,
  },
}));

export const HeaderDescription = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,

  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize16,
  },
}));

export const AIPoweredBadge = styled(Chip)(({ theme }) => ({
  height: 32,
  fontWeight: theme.typography.fontWeightBold,
  borderRadius: theme.spacing(2),
  color: theme.palette.color.blue,
  gap: theme.spacing(1),
  backgroundColor: "transparent",

  "& .MuiChip-label": {
    paddingInline: theme.spacing(1.5),
  },

  "& .MuiChip-icon": {
    fontSize: theme.typography.fontSize16,
    color: theme.palette.color.blue,
  },
}));
