import { useState } from "react";
import "react-phone-input-2/lib/style.css";

import { DEFAULT_PHONE_COUNTRY_CODE } from "constants";

import { DialCodeOverlay, PhoneInputWrapper } from "../styles";
import { PhoneInput } from "./PhoneInput";
import type { PhoneFieldProps } from "../types";

export const PhoneField = ({
  value,
  onChange,
  placeholder,
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
      />
      <DialCodeOverlay>{countryCode}</DialCodeOverlay>
    </PhoneInputWrapper>
  );
};
