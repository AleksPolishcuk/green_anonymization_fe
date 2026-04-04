import { type ComponentProps } from "react";
import PhoneInputLib from "react-phone-input-2";

const ResolvedPhoneInput =
  (PhoneInputLib as unknown as { default: typeof PhoneInputLib }).default ??
  PhoneInputLib;

type PhoneInputProps = ComponentProps<typeof ResolvedPhoneInput>;

export const PhoneInput = (props: PhoneInputProps) => (
  <ResolvedPhoneInput {...props} />
);
