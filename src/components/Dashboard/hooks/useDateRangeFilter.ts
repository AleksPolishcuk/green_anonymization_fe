import { useState } from "react";
import type { Dayjs } from "dayjs";

import { DATE_FORMAT_ISO, PERIOD_PRESETS } from "constants/DashboardPage";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setPeriod } from "store/slices/dashboardSlice";
import type { PresetDays } from "store/types/dashboard";

export const useDateRangeFilter = () => {
  const dispatch = useAppDispatch();
  const period = useAppSelector((s) => s.dashboard.period);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [fromDate, setFromDate] = useState<Dayjs | null>(null);
  const [toDate, setToDate] = useState<Dayjs | null>(null);

  const popoverOpen = Boolean(anchorEl);
  const isCustomActive = period.type === "custom";

  const canApply =
    fromDate !== null &&
    toDate !== null &&
    fromDate.isValid() &&
    toDate.isValid() &&
    !fromDate.isAfter(toDate);

  const handlePreset = (days: PresetDays) => {
    setAnchorEl(null);
    dispatch(setPeriod({ type: "preset", days }));
  };

  const handleSelectDateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(popoverOpen ? null : e.currentTarget);
  };

  const handleApply = () => {
    if (!canApply) return;
    dispatch(
      setPeriod({
        type: "custom",
        from: fromDate!.format(DATE_FORMAT_ISO),
        to: toDate!.format(DATE_FORMAT_ISO),
      }),
    );
    setAnchorEl(null);
  };

  const handleClosePopover = () => setAnchorEl(null);

  const isPresetActive = (days: PresetDays) =>
    period.type === "preset" && period.days === days;

  return {
    period,
    presets: PERIOD_PRESETS,
    anchorEl,
    popoverOpen,
    isCustomActive,
    fromDate,
    toDate,
    canApply,
    setFromDate,
    setToDate,
    handlePreset,
    handleSelectDateClick,
    handleApply,
    handleClosePopover,
    isPresetActive,
  };
};
