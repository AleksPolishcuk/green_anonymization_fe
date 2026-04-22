import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const ActivityList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 0,
  flex: 1,
  minHeight: 0,
  overflow: "hidden",
});

export const ActivityRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(1.5),
  padding: `${theme.spacing(1.5)} 0`,
}));

export const IconDot = styled(Box)({
  width: 24,
  height: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  marginTop: 1,
  "& svg": {
    display: "block",
    width: 24,
    height: 24,
  },
});

export const FileInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.25),
  flex: 1,
  minWidth: 0,
}));

export const FileName = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.primary,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const FileMeta = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  color: theme.palette.text.secondary,
}));
