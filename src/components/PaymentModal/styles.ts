import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

import {
  MODAL_PRIMARY_ALPHA,
  MODAL_UPGRADE_BTN_BORDER_RADIUS,
  MODAL_UPGRADE_BTN_HOVER_SHADOW,
  MODAL_UPGRADE_BTN_SHADOW,
} from "constants/ModalStyles";
import {
  PAYMENT_BUTTON_DISABLED_OPACITY,
  PAYMENT_BUTTON_MARGIN_TOP,
  PAYMENT_BUTTON_MARGIN_TOP_MD,
  PAYMENT_CARD_ICON_BG_ALPHA_DARK_ACTIVE,
  PAYMENT_CARD_ICON_BG_ALPHA_DARK_INACTIVE,
  PAYMENT_CARD_ICON_BG_ALPHA_LIGHT_INACTIVE,
  PAYMENT_CARD_ICON_BORDER_ALPHA,
  PAYMENT_CARD_ICON_BORDER_RADIUS,
  PAYMENT_CARD_ICON_HEIGHT,
  PAYMENT_CARD_ICON_HEIGHT_MD,
  PAYMENT_CARD_INACTIVE_OPACITY,
  PAYMENT_CARD_ICON_WIDTH,
  PAYMENT_CARD_ICON_WIDTH_MD,
  PAYMENT_CARD_TRANSITION,
  PAYMENT_ERROR_BORDER_RADIUS,
  PAYMENT_FIELD_BORDER_RADIUS,
  PAYMENT_HEADER_PADDING_TOP,
  PAYMENT_SUCCESS_ICON_SIZE,
  PAYMENT_SUCCESS_ICON_SIZE_MD,
} from "constants/PaymentModal";

export const PaymentHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(0.5),
  padding: theme.spacing(PAYMENT_HEADER_PADDING_TOP, 5, 2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(PAYMENT_HEADER_PADDING_TOP + 1, 7, 2.5),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(PAYMENT_HEADER_PADDING_TOP + 2, 8, 3),
  },
}));

export const PaymentTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.headingFontFamily,
  fontSize: theme.typography.fontSize18,
  fontWeight: theme.typography.fontWeightRegular,
  lineHeight: theme.typography.lineHeight138,
  textAlign: "center",
  color: theme.palette.text.primary,
  [theme.breakpoints.up("sm")]: {
    fontSize: theme.typography.fontSize22,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize28,
  },
}));

export const PaymentSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.secondary,
  lineHeight: theme.typography.lineHeight158,
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize16,
  },
}));

export const CardMethodsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(0, 5, 2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(0, 7, 2.5),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(0, 8, 5),
    gap: theme.spacing(2),
  },
}));

export const CardMethodsLabel = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  color: theme.palette.text.secondary,
  marginRight: theme.spacing(0.5),
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize16,
  },
}));

export const CardIconWrapper = styled(Box)<{ $active?: boolean }>(
  ({ theme, $active }) => ({
    width: PAYMENT_CARD_ICON_WIDTH,
    height: PAYMENT_CARD_ICON_HEIGHT,
    borderRadius: PAYMENT_CARD_ICON_BORDER_RADIUS,
    border: `1px solid ${alpha(theme.palette.divider, $active ? 0.5 : PAYMENT_CARD_ICON_BORDER_ALPHA)}`,
    backgroundColor:
      theme.palette.mode === "dark"
        ? alpha(
            theme.palette.common.white,
            $active
              ? PAYMENT_CARD_ICON_BG_ALPHA_DARK_ACTIVE
              : PAYMENT_CARD_ICON_BG_ALPHA_DARK_INACTIVE,
          )
        : alpha(
            theme.palette.common.white,
            $active ? 1 : PAYMENT_CARD_ICON_BG_ALPHA_LIGHT_INACTIVE,
          ),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: PAYMENT_CARD_TRANSITION,
    opacity: $active ? 1 : PAYMENT_CARD_INACTIVE_OPACITY,
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      width: PAYMENT_CARD_ICON_WIDTH_MD,
      height: PAYMENT_CARD_ICON_HEIGHT_MD,
    },
  }),
);

export const FormBody = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(0, 5, 3),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(0, 7, 4),
    gap: theme.spacing(2.5),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(0, 8, 5),
    gap: theme.spacing(5),
  },
}));

export const FieldRow = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: theme.spacing(4),
  rowGap: 0,
  [theme.breakpoints.up("md")]: {
    columnGap: theme.spacing(5),
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: 0,
  "& .MuiOutlinedInput-root": {
    borderRadius: PAYMENT_FIELD_BORDER_RADIUS,
    fontSize: theme.typography.fontSize14,
    backgroundColor:
      theme.palette.mode === "dark"
        ? alpha(theme.palette.common.white, 0.04)
        : alpha(theme.palette.common.black, 0.02),
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.fontSize16,
    },
    "& fieldset": {
      borderColor:
        theme.palette.mode === "dark"
          ? alpha(theme.palette.common.white, 0.12)
          : theme.palette.divider,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, MODAL_PRIMARY_ALPHA)}`,
    },
    "&.Mui-error fieldset": {
      borderColor: theme.palette.error.main,
    },
  },
  "& .MuiInputLabel-root": {
    fontSize: theme.typography.fontSize14,
    color: theme.palette.text.secondary,
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.fontSize16,
    },
    "&.Mui-focused": { color: theme.palette.primary.main },
    "&.Mui-error": { color: theme.palette.error.main },
  },
  "& .MuiFormHelperText-root": {
    fontSize: theme.typography.fontSize12,
    marginLeft: 0,
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.fontSize14,
    },
  },
}));

export const PayButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(PAYMENT_BUTTON_MARGIN_TOP),
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightMedium,
  textTransform: "none",
  borderRadius: MODAL_UPGRADE_BTN_BORDER_RADIUS,
  width: "100%",
  padding: theme.spacing(2.5, 4),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  boxShadow: MODAL_UPGRADE_BTN_SHADOW,
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize16,
    padding: theme.spacing(3, 4),
    marginTop: theme.spacing(PAYMENT_BUTTON_MARGIN_TOP_MD),
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: MODAL_UPGRADE_BTN_HOVER_SHADOW,
  },
  "&:disabled": {
    opacity: PAYMENT_BUTTON_DISABLED_OPACITY,
  },
}));

export const ErrorBanner = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize12,
  color: theme.palette.error.main,
  textAlign: "center",
  padding: theme.spacing(1, 2),
  borderRadius: PAYMENT_ERROR_BORDER_RADIUS,
  backgroundColor: alpha(theme.palette.error.main, 0.08),
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize14,
  },
}));

export const SuccessContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(6, 5, 7),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(7, 7, 8),
    gap: theme.spacing(2.5),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8, 8, 10),
    gap: theme.spacing(3),
  },
}));

export const SuccessIcon = styled(CheckCircleOutlineRoundedIcon)(
  ({ theme }) => ({
    width: PAYMENT_SUCCESS_ICON_SIZE,
    height: PAYMENT_SUCCESS_ICON_SIZE,
    color: theme.palette.success.main,
    [theme.breakpoints.up("md")]: {
      width: PAYMENT_SUCCESS_ICON_SIZE_MD,
      height: PAYMENT_SUCCESS_ICON_SIZE_MD,
    },
  }),
);

export const SuccessTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.headingFontFamily,
  fontSize: theme.typography.fontSize18,
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.text.primary,
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize22,
  },
}));

export const SuccessMessage = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.fontSize14,
  color: theme.palette.text.secondary,
  lineHeight: theme.typography.lineHeight158,
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize16,
  },
}));
