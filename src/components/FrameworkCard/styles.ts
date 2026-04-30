import { Chip, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  deidColors,
  deidDarkColors,
  CHIP_COLOR_PRESETS,
} from "constants/DeidPage";
import { theme } from "shared/theme/theme";

export type ChipColorPreset = keyof typeof CHIP_COLOR_PRESETS;

type CardProps = {
  $selected: boolean;
};

type ChipProps = {
  $tone: ChipColorPreset;
};

export const CardRoot = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "$selected",
})<CardProps>(({ theme, $selected }) => {
  const colors = theme.palette.mode === "dark" ? deidDarkColors : deidColors;

  return {
    padding: theme.spacing(4.5),
    borderRadius: theme.shape.borderRadius,
    border: `2px solid ${$selected ? colors.borderOn : colors.borderOff}`,
    backgroundColor: $selected ? colors.bgOn : colors.bgOff,
    cursor: "pointer",
    transition:
      "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
    boxShadow: $selected ? colors.boxShadowOn : colors.boxShadow,

    "&:hover": {
      borderColor: theme.palette.primary.main,
      transform: "translateY(-1px)",
    },
    [theme.breakpoints.between("md", "lg")]: {
      minHeight: 114,
    },
    [theme.breakpoints.up("lg")]: {
      minHeight: "auto",
    },
  };
});

export const CardStack = styled(Stack)({
  gap: theme.spacing(4),
});

export const CardHeader = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const FrameworkChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "$tone",
})<ChipProps>(({ theme, $tone }) => {
  const style = CHIP_COLOR_PRESETS[$tone];

  return {
    color: style.color,
    backgroundColor: style.bg,
    border: `1px solid ${style.border}`,
    borderRadius: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize11,
    [theme.breakpoints.up("lg")]: {
      fontSize: theme.typography.fontSize14,
    },
  };
});

export const SecondaryText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: theme.typography.fontSize12,
  [theme.breakpoints.up("lg")]: {
    fontSize: theme.typography.fontSize14,
  },
}));
