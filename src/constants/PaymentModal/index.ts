export const PAYMENT_CARD_NUMBER_LENGTH = 16;
export const PAYMENT_CARD_NUMBER_MAX_INPUT = 19; // 16 digits + 3 spaces
export const PAYMENT_CVV_MIN_LENGTH = 3;
export const PAYMENT_CVV_MAX_LENGTH = 4;
export const PAYMENT_EXPIRY_MAX_LENGTH = 5;
export const PAYMENT_SUCCESS_REDIRECT_DELAY = 2000;

export const PAYMENT_FIELD_BORDER_RADIUS = 10;
export const PAYMENT_HEADER_PADDING_TOP = 5;
export const PAYMENT_SUCCESS_ICON_SIZE = 56;
export const PAYMENT_CARD_ICON_WIDTH = 52;
export const PAYMENT_CARD_ICON_HEIGHT = 34;
export const PAYMENT_CARD_ICON_BORDER_RADIUS = 6;
export const PAYMENT_CARD_ICON_BORDER_ALPHA = 0.15;

export const CARD_NUMBER_REGEX = /^\d{16}$/;
export const EXPIRY_REGEX = /^(0[1-9]|1[0-2])\/\d{2}$/;
export const CVV_REGEX = /^\d{3,4}$/;

export const VISA_PREFIX_REGEX = /^4/;
export const MASTERCARD_PREFIX_REGEX = /^5[1-5]|^2[2-7]/;
