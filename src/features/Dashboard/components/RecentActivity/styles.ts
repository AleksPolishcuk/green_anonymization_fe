import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import type { ActivityIconColor } from "features/Dashboard/types";

const iconBg: Record<ActivityIconColor, string> = {
  teal: "#ecfdf5",
  blue: "#eff6ff",
  amber: "#fffbeb",
  lilac: "#F5F3FF",
};

const iconFg: Record<ActivityIconColor, string> = {
  teal: "#10B981",
  blue: "#3B82F6",
  amber: "#F59E0B",
  lilac: "#7F22FE",
};

export const ActivityList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 0,
});

export const ActivityRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(1.5),
  padding: `${theme.spacing(1.5)} 0`,
  borderBottom: `1px solid ${theme.palette.background.softGray}`,
  "&:last-of-type": {
    borderBottom: "none",
  },
}));

export const IconDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$iconColor",
})<{ $iconColor: ActivityIconColor }>(({ $iconColor }) => ({
  width: 28,
  height: 28,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  marginTop: 1,
  backgroundColor: iconBg[$iconColor],
  color: iconFg[$iconColor],
  "& svg": {
    width: 14,
    height: 14,
  },
}));

export const FileInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.25),
  flex: 1,
  minWidth: 0,
}));

export const FileName = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 500,
  color: theme.palette.text.primary,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const FileMeta = styled(Typography)(({ theme }) => ({
  fontSize: "11px",
  color: theme.palette.text.secondary,
}));

export const NewDeIdButton = styled("button")(({ theme }) => ({
  margin: 0,
  marginTop: theme.spacing(2),
  padding: 0,
  border: "none",
  background: "none",
  font: "inherit",
  fontSize: "13px",
  fontWeight: 600,
  color: theme.palette.color.blue,
  fontFamily: theme.typography.fontFamily,
  cursor: "pointer",
  textAlign: "left",
  "&:hover": {
    color: theme.palette.color.darkBlue,
  },
}));
