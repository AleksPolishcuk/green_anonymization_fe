import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const ScrollWrapper = styled(Box)({
  position: "relative",
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
});

export const ActivityList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 0,
  flex: 1,
  minHeight: 0,
  overflowY: "auto",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const ScrollIndicator = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$visible",
})<{ $visible: boolean }>(({ theme, $visible }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 56,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  paddingBottom: theme.spacing(0.5),
  background: `linear-gradient(to bottom, transparent, ${theme.palette.background.paper})`,
  color: theme.palette.text.secondary,
  opacity: $visible ? 1 : 0,
  pointerEvents: "none",
  transition: "opacity 0.2s ease",
}));

export const ActivityRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5, 1),
  borderRadius: 8,
  cursor: "pointer",
  transition: "background-color 0.15s ease",
  "&:hover": {
    backgroundColor: theme.palette.background.softGray,
  },
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
