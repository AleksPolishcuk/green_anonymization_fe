import { Chip, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  BG_OFF,
  BG_ON,
  BORDER_OFF,
  BORDER_ON,
  BOX_SHADOW_ON,
  CHIP_COLOR_PRESETS,
} from "constants/DeidPage";

export type ChipColorPreset = keyof typeof CHIP_COLOR_PRESETS;

type CardProps = {
  $selected: boolean;
};

type ChipProps = {
  $tone: ChipColorPreset;
};

export const FrameworkCardItem = styled("li")({
  listStyle: "none",
});

export const CardRoot = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "$selected",
})<CardProps>(({ theme, $selected }) => ({
  padding: theme.spacing(4.5),
  borderRadius: 8,
  border: `2px solid ${$selected ? BORDER_ON : BORDER_OFF}`,
  backgroundColor: $selected ? BG_ON : BG_OFF,
  cursor: "pointer",
  transition: "all 0.2s ease",
  boxShadow: $selected ? BOX_SHADOW_ON : "none",

  "&:hover": {
    borderColor: theme.palette.primary.main,
  },
}));

export const CardStack = styled(Stack)({
  gap: 16,
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
    borderRadius: 8,
    fontWeight: theme.typography.fontWeightBold,
  };
});

export const SecondaryText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
