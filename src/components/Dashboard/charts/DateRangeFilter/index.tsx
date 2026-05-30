import { useTranslation } from "react-i18next";

import type { PresetDays } from "store/types/dashboard";

import {
  ApplyButton,
  DateRangePopover,
  FilterRoot,
  PickerLabel,
  PickerRow,
  PeriodChip,
  PopoverTitle,
  StyledDatePicker,
} from "./styles";
import { useDateRangeFilter } from "../../hooks/useDateRangeFilter";

const PRESET_LABELS: Record<PresetDays, string> = {
  7: "dashboard.filter.days7",
  14: "dashboard.filter.days14",
  30: "dashboard.filter.month",
};

export const DateRangeFilter = () => {
  const { t } = useTranslation();
  const {
    presets,
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
  } = useDateRangeFilter();

  return (
    <FilterRoot>
      {presets.map((days) => (
        <PeriodChip
          key={days}
          $active={isPresetActive(days)}
          onClick={() => handlePreset(days)}
          type="button"
        >
          {t(PRESET_LABELS[days])}
        </PeriodChip>
      ))}

      <PeriodChip
        $active={popoverOpen || isCustomActive}
        onClick={handleSelectDateClick}
        type="button"
      >
        {t("dashboard.filter.selectDate")}
      </PeriodChip>

      <DateRangePopover
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <PopoverTitle>{t("dashboard.filter.dateRange")}</PopoverTitle>

        <PickerRow>
          <div>
            <PickerLabel>{t("dashboard.filter.from")}</PickerLabel>
            <StyledDatePicker
              value={fromDate}
              maxDate={toDate ?? undefined}
              onChange={(val) => setFromDate(val)}
              slotProps={{ textField: { size: "small" } }}
            />
          </div>

          <div>
            <PickerLabel>{t("dashboard.filter.to")}</PickerLabel>
            <StyledDatePicker
              value={toDate}
              minDate={fromDate ?? undefined}
              onChange={(val) => setToDate(val)}
              slotProps={{ textField: { size: "small" } }}
            />
          </div>
        </PickerRow>

        <ApplyButton
          variant="contained"
          disableElevation
          disabled={!canApply}
          onClick={handleApply}
        >
          {t("dashboard.filter.apply")}
        </ApplyButton>
      </DateRangePopover>
    </FilterRoot>
  );
};
