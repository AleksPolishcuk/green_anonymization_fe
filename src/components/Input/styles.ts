import {
  Box,
  Chip,
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { alpha, keyframes, styled } from "@mui/material/styles";
import { BOX_SHADOW, CHIP_COLOR_PRESETS } from "constants/DeidPage";

const INPUT_SECTION_STYLES = {
  topLineBackground:
    "linear-gradient(90deg, #0EA5E9 0%, #06B6D4 50%, rgba(6, 182, 212, 0.2) 100%)",
  textInput: {
    boxShadow: "4px 0px 32px 0px rgba(16, 24, 40, 0.06)",
  },
  fileWrapper: {
    border: "2px dashed rgba(208, 213, 221, 0.8)",
    background: "rgba(249, 250, 251, 0.5)",
    hoverBackground: "rgba(249, 250, 251, 0.8)",
  },
  submitButton: {
    width: 250,
    height: 45,
    background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
    disabledBtnBorder: "2px solid rgba(37, 99, 235, 0.22)",
    disabledBtnBg: "rgba(37, 99, 235, 0.12)",
    insetBoxShadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.15)",
    boxShadowSize: "0px 4px 16px 0px",
    clickTransform: "translateY(0) scale(0.95)",
  },
  fadeSlideIn: keyframes`
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
      0.6s ease 0.2s forwards
    `,
  transition: "0.2s ease",
};

export const InputSectionRoot = styled(Paper)(({ theme }) => ({
  position: "relative",
  marginLeft: theme.spacing(8),
  marginRight: theme.spacing(8),
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(5),

  padding: theme.spacing(6),

  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: BOX_SHADOW,

  minHeight: 550,

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 3,
    background: INPUT_SECTION_STYLES.topLineBackground,
  },
}));

export const InputSectionStack = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(7),
}));

export const InputSectionHeaderRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
}));

export const InputSectionIconBox = styled(Box)(({ theme }) => ({
  width: theme.spacing(9),
  height: theme.spacing(9),
  borderRadius: 12,
  backgroundColor: CHIP_COLOR_PRESETS.cyan.color,
  color: theme.palette.common.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}));

export const InputLogoIcon = styled("svg")(({ theme }) => ({
  width: 16,
  height: 16,
  display: "block",
  fill: "none",
  stroke: theme.palette.color.white,
}));

export const InputSectionTitleRow = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const InputSectionSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export const StepChip = styled(Chip)(({ theme }) => {
  const style = CHIP_COLOR_PRESETS.cyan;

  return {
    color: style.color,
    backgroundColor: style.bg,
    border: `1px solid ${style.border}`,
    borderRadius: 8,

    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.fontSize11,
  };
});

export const InputForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(7),

  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,

  animation: INPUT_SECTION_STYLES.fadeSlideIn,

  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(7),
  },

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

export const TextInput = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "$fileMode",
})<{ $fileMode?: boolean }>(({ theme, $fileMode }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: theme.palette.background.lightGray,
    boxShadow: INPUT_SECTION_STYLES.textInput.boxShadow,
    borderRadius: theme.shape.borderRadius,
  },

  "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.error.main,
  },

  "& .MuiOutlinedInput-root.Mui-error:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.error.main,
  },

  "& .MuiOutlinedInput-root.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline":
    {
      borderColor: theme.palette.error.main,
    },

  "& textarea": {
    overflow: $fileMode ? "hidden" : "auto",
    resize: "none",
    padding: theme.spacing(0, 8),
    cursor: $fileMode ? "not-allowed" : "text",
  },
}));

export const FileUploadIcon = styled("svg")(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 8,
  background: theme.palette.accent.lightLilac,
  border: `1px solid ${theme.palette.primary.main}`,
  flexShrink: 0,
}));

export const FileWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "$hasError",
})<{ $hasError?: boolean }>(({ theme, $hasError }) => ({
  height: theme.spacing(19),

  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),

  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),

  borderRadius: theme.shape.borderRadius,

  background: INPUT_SECTION_STYLES.fileWrapper.background,
  border: INPUT_SECTION_STYLES.fileWrapper.border,

  cursor: "pointer",
  transition: INPUT_SECTION_STYLES.transition,

  borderColor: $hasError ? theme.palette.error.main : undefined,

  "&:hover": {
    background: INPUT_SECTION_STYLES.fileWrapper.hoverBackground,
    borderColor: $hasError
      ? theme.palette.error.main
      : theme.palette.primary.main,
  },
}));

export const FileTextBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: 41,
}));

export const FileTextWrapper = styled("div")(() => ({
  marginLeft: "auto",
  display: "flex",
  gap: 8,
  alignItems: "center",
}));

export const FileDropHeading = styled("span")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.fontSize14,
  lineHeight: theme.typography.lineHeight150,
}));

export const FileDropSubtitle = styled("span")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightSemiBold,
  fontSize: theme.typography.fontSize11,
  lineHeight: theme.typography.lineHeight150,
  color: theme.palette.color.grayDark,
}));

export const FileDropHelperText = styled("span")(({ theme }) => ({
  marginTop: theme.spacing(1),

  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.fontSize11,
  lineHeight: theme.typography.lineHeight150,

  color: theme.palette.error.main,
}));

export const FileRemoveButton = styled("button")(({ theme }) => ({
  width: 24,
  height: 24,
  borderRadius: 6,
  border: "none",
  cursor: "pointer",

  background: theme.palette.accent.red,
  color: theme.palette.common.white,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: 14,
  fontWeight: theme.typography.fontWeightBold,

  transition: INPUT_SECTION_STYLES.transition,

  "&:hover": {
    background: theme.palette.accent.lightRed,
    color: theme.palette.accent.red,
    border: INPUT_SECTION_STYLES.fileWrapper.border,
  },
}));

export const SubmitMetaRow = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(3),
  flexWrap: "wrap",
}));

export const FormStatusInline = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  flex: 1,
  minWidth: 0,
  justifyContent: "flex-end",
}));

export const InputSubmitButton = styled(Button)(({ theme }) => ({
  width: INPUT_SECTION_STYLES.submitButton.width,
  height: INPUT_SECTION_STYLES.submitButton.height,
  padding: "0 24px",

  background: INPUT_SECTION_STYLES.submitButton.background,

  color: theme.palette.common.white,
  border: "2px solid transparent",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,

  textTransform: "none",

  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSize14,
  lineHeight: theme.typography.lineHeight150,

  borderRadius: theme.shape.borderRadius,

  boxShadow: `
    ${INPUT_SECTION_STYLES.submitButton.insetBoxShadow},
    ${INPUT_SECTION_STYLES.submitButton.boxShadowSize} ${alpha(theme.palette.primary.main, 0.35)}
  `,

  transition: theme.transitions.create(
    ["transform", "box-shadow", "background", "color", "border", "opacity"],
    {
      duration: 300,
      easing: theme.transitions.easing.easeInOut,
    },
  ),

  "&.MuiButton-root": {
    color: theme.palette.common.white,
  },

  "&:hover": {
    background: `linear-gradient(135deg, ${theme.palette.color.darkBlue} 0%, ${theme.palette.primary.main} 100%)`,
    transform: "translateY(-2px)",
    boxShadow: `
    ${INPUT_SECTION_STYLES.submitButton.insetBoxShadow},
    ${INPUT_SECTION_STYLES.submitButton.boxShadowSize}  ${alpha(theme.palette.primary.main, 0.4)}
    `,
  },

  "&.Mui-disabled": {
    cursor: "not-allowed",
    pointerEvents: "auto",

    background: INPUT_SECTION_STYLES.submitButton.disabledBtnBg,
    color: theme.palette.color.grayDark,
    border: INPUT_SECTION_STYLES.submitButton.disabledBtnBorder,
    fontWeight: theme.typography.fontWeightLight,
    boxShadow: "none",
  },

  "&:active": {
    transform: INPUT_SECTION_STYLES.submitButton.clickTransform,
  },

  "&:focus-visible": {
    outline: `${theme.spacing(0.75)} solid ${alpha(
      theme.palette.primary.main,
      0.4,
    )}`,
    outlineOffset: theme.spacing(0.5),
  },
}));

export const InputPlayIcon = styled("svg")(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
  display: "block",
  fill: "none",
  stroke: theme.palette.common.white,
}));

export const InputArrowIcon = styled("svg")(({ theme }) => ({
  width: theme.spacing(3.5),
  height: theme.spacing(3.5),
  display: "block",
  fill: "none",
  color: theme.palette.common.white,
}));

export const Estimate = styled("span")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize12,
  lineHeight: theme.typography.lineHeight150,
  color: theme.palette.text.secondary,
  whiteSpace: "nowrap",
}));

export const SubmitWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
}));

export const FormStatusAlert = styled(Box)<{ $type: "error" | "success" }>(
  ({ theme, $type }) => ({
    width: "100%",
    padding: theme.spacing(3.5),
    borderRadius: theme.shape.borderRadius,

    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),

    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize14,
    lineHeight: theme.typography.lineHeight150,

    backgroundColor:
      $type === "error"
        ? alpha(theme.palette.error.main, 0.08)
        : alpha(theme.palette.success.main, 0.08),

    border:
      $type === "error"
        ? `1px solid ${alpha(theme.palette.error.main, 0.3)}`
        : `1px solid ${alpha(theme.palette.success.main, 0.3)}`,

    color:
      $type === "error" ? theme.palette.error.main : theme.palette.success.main,
  }),
);

export const FormStatusIcon = styled(Box)(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}));

export const FormStatusText = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.fontWeightMedium,
}));
