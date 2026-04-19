import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BOX_SHADOW, CHIP_COLOR_PRESETS, TOP_LINE } from "constants/DeidPage";

export const FrameworkSectionRoot = styled(Paper)(({ theme }) => ({
  position: "relative",

  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: BOX_SHADOW,
  minHeight: 308,
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(5),

  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 3,
    background: TOP_LINE,
  },
}));

export const FrameworkSectionStack = styled(Stack)({
  gap: 20,
});

export const FrameworkSectionHeaderRow = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  alignItems: "center",
}));

export const FrameworkSectionIconBox = styled(Box)(({ theme }) => ({
  width: 36,
  height: 36,
  borderRadius: "12px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.color.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}));

export const FrameworksLogoIcon = styled("svg")(({ theme }) => ({
  width: 16,
  height: 16,
  display: "block",
  fill: theme.palette.primary.main,
  stroke: theme.palette.color.white,
}));

export const FrameworkSectionTitleRow = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(2),
  alignItems: "center",
}));

export const FrameworkSectionSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export const FrameworkSectionGrid = styled("ul")(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(3),
  gridTemplateColumns: "1fr",
  listStyle: "none",
  margin: 0,
  padding: 0,

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr",
  },
}));

export const FrameworkSectionItem = styled("li")({
  listStyle: "none",
});

export const FrameworkSectionLoader = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

export const StepChip = styled(Chip)(({ theme }) => {
  const style = CHIP_COLOR_PRESETS.blue;

  return {
    color: style.color,
    backgroundColor: style.bg,
    border: `1px solid ${style.border}`,
    borderRadius: 8,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize11,
  };
});
