import { useState } from "react";
import PhoneInputLib from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { DEFAULT_PHONE_COUNTRY_CODE } from "constants";

import { DialCodeOverlay, PhoneInputWrapper } from "./styles";
import type { PhoneFieldProps } from "./types";

const PhoneInput =
  (PhoneInputLib as unknown as { default: typeof PhoneInputLib }).default ??
  PhoneInputLib;

export const PhoneField = ({
  value,
  onChange,
  placeholder,
  disabled = false,
}: PhoneFieldProps) => {
  const [countryCode, setCountryCode] = useState(DEFAULT_PHONE_COUNTRY_CODE);

  const handleChange = (phone: string, countryData: object) => {
    onChange(phone);
    const data = countryData as { countryCode: string };
    setCountryCode(data.countryCode.toUpperCase());
  };

  return (
    <PhoneInputWrapper>
      <PhoneInput
        country="us"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disableCountryCode={!value}
        disabled={disabled}
      />
      <DialCodeOverlay>{countryCode}</DialCodeOverlay>
    </PhoneInputWrapper>
  );
};
