import { Box, Button, Popover, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers";

import {
  CHIP_TRANSITION,
  DATE_PICKER_BORDER_WIDTH,
  DATE_PICKER_INPUT_HEIGHT,
  DATE_RANGE_CHIP_HEIGHT,
  DATE_RANGE_CHIP_RADIUS,
  DATE_RANGE_FILTER_GAP,
  DATE_RANGE_POPOVER_MIN_WIDTH,
  PRIMARY_HOVER_ALPHA,
} from "constants/DashboardPage";

export const FilterRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: theme.spacing(DATE_RANGE_FILTER_GAP),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.up("lg")]: {
    justifyContent: "flex-end",
  },
}));

export const PeriodChip = styled("button")<{ $active: boolean }>(
  ({ theme, $active }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: DATE_RANGE_CHIP_HEIGHT,
    padding: theme.spacing(0, 2),
    borderRadius: DATE_RANGE_CHIP_RADIUS,
    border: `1px solid ${
      $active ? theme.palette.primary.main : theme.palette.background.softGray
    }`,
    backgroundColor: $active
      ? theme.palette.primary.main
      : theme.palette.background.paper,
    color: $active ? theme.palette.common.white : theme.palette.color.charcoal,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize12,
    fontWeight: theme.typography.fontWeightMedium,
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: CHIP_TRANSITION,

    "&:hover": {
      borderColor: theme.palette.primary.main,
      backgroundColor: $active
        ? theme.palette.primary.dark
        : `${theme.palette.primary.main}${PRIMARY_HOVER_ALPHA}`,
    },
  }),
);

export const DateRangePopover = styled(Popover)(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.background.softGray}`,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    minWidth: DATE_RANGE_POPOVER_MIN_WIDTH,
  },
}));

export const PopoverTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.color.grayDark,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  marginBottom: theme.spacing(0.5),
}));

export const PickerRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const PickerLabel = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  color: theme.palette.color.grayDark,
  marginBottom: theme.spacing(0.5),
}));

export const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-root": {
    height: DATE_PICKER_INPUT_HEIGHT,
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
    fontSize: theme.typography.fontSize12,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.color.charcoal,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.background.softGray,
  },
  "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },
  "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
    borderWidth: DATE_PICKER_BORDER_WIDTH,
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(0, 1.5),
    height: DATE_PICKER_INPUT_HEIGHT,
    boxSizing: "border-box",
    fontSize: theme.typography.fontSize12,
  },
  "& .MuiIconButton-root": {
    color: theme.palette.color.grayDark,
  },
}));

export const ApplyButton = styled(Button)(({ theme }) => ({
  width: "100%",
  height: DATE_RANGE_CHIP_HEIGHT,
  borderRadius: DATE_RANGE_CHIP_RADIUS,
  fontSize: theme.typography.fontSize12,
  fontWeight: theme.typography.fontWeightMedium,
  textTransform: "none",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  marginTop: theme.spacing(1),

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },

  "&:disabled": {
    opacity: 0.4,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));
