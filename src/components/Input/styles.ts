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
import {
  CHIP_COLOR_PRESETS,
  deidColors,
  deidDarkColors,
} from "constants/DeidPage";

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
    maxWidth: 250,
    height: 45,
    background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
    disabledBtnBorder: "2px solid rgba(37, 99, 235, 0.22)",
    disabledBtnBg: "rgba(37, 99, 235, 0.12)",
    insetBoxShadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.15)",
    boxShadowSize: "0px 4px 16px 0px",
    clickTransform: "translateY(0) scale(0.95)",
    hoverShadow: "0 6px 14px 0 rgba(59, 130, 246, 0.6)",
    shadow: "0 4px 14px 0 rgba(59, 130, 246, 0.3)",
    transitionDuration: 0.24,
    easingStadard: "cubic-bezier(0.4, 0, 0.2, 1)",
    focusShadow:
      "0 4px 14px 0 rgba(59, 130, 246, 0.3), 0 0 0 4px rgba(21, 93, 252, 0.45)",
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

export const InputSectionRoot = styled(Paper)(({ theme }) => {
  const colors = theme.palette.mode === "dark" ? deidDarkColors : deidColors;

  return {
    position: "relative",

    padding: theme.spacing(3, 2),

    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4, 3),
    },

    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6, 8),
    },

    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,

    boxShadow: colors.boxShadow,

    minHeight: 550,
    overflow: "hidden",

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: 3,
      background: INPUT_SECTION_STYLES.topLineBackground,
    },
  };
});

export const InputSectionStack = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(5),
}));

export const InputSectionHeaderRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
}));

export const InputSectionIconBox = styled(Box)(({ theme }) => ({
  width: theme.spacing(9),
  height: theme.spacing(9),
  borderRadius: "12px",
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
  minWidth: 0,
  borderRadius: theme.shape.borderRadius,

  animation: INPUT_SECTION_STYLES.fadeSlideIn,
  padding: "0px",

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(4),
  },
}));

export const TextInput = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "$fileMode",
})<{ $fileMode?: boolean }>(({ theme, $fileMode }) => {
  const colors = theme.palette.mode === "dark" ? deidDarkColors : deidColors;
  return {
    "& .MuiInputBase-root": {
      backgroundColor: colors.bgOff,
      boxShadow: INPUT_SECTION_STYLES.textInput.boxShadow,
      borderRadius: theme.shape.borderRadius,
    },

    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.error.main,
    },

    "& .MuiOutlinedInput-root.Mui-error:hover .MuiOutlinedInput-notchedOutline":
      {
        borderColor: theme.palette.error.main,
      },

    "& .MuiOutlinedInput-root.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline":
      {
        borderColor: theme.palette.error.main,
      },

    scrollbarColor:
      theme.palette.mode === "dark"
        ? `${colors.borderOn} ${colors.bgOff}`
        : `${colors.borderOff}`,

    "&::-webkit-scrollbar-thumb": {
      background:
        theme.palette.mode === "dark"
          ? `linear-gradient(180deg, ${colors.borderOn}, ${colors.bgOn})`
          : colors.borderOff,

      border: `1px solid ${
        theme.palette.mode === "dark"
          ? colors.borderOn
          : theme.palette.background.default
      }`,

      transition: "background 0.2s ease",
    },

    "&::-webkit-scrollbar-thumb:hover": {
      background:
        theme.palette.mode === "dark"
          ? `linear-gradient(180deg, ${theme.palette.primary.light || colors.bgOn}, ${colors.borderOn})`
          : theme.palette.background.mediumGray,
    },

    "& textarea": {
      overflow: $fileMode ? "hidden" : "auto",
      resize: "none",
      cursor: $fileMode ? "not-allowed" : "text",
      fontFamily: "Courier New",
      fontWeight: 400,

      fontSize: theme.spacing(3),
      lineHeight: theme.spacing(6),

      padding: theme.spacing(2, 8),

      paddingRight: theme.spacing(12),

      [theme.breakpoints.down("sm")]: {
        fontSize: theme.spacing(2.5),
        lineHeight: theme.spacing(5),

        padding: theme.spacing(2, 4),
        paddingRight: theme.spacing(6),
      },
    },
  };
});

export const FileUploadIcon = styled("svg")(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 8,
  background: theme.palette.accent.lightBlue,
  border: `1px solid ${theme.palette.primary.main}`,
  flexShrink: 0,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const FileWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "$hasError",
})<{ $hasError?: boolean }>(({ theme, $hasError }) => {
  const colors = theme.palette.mode === "dark" ? deidDarkColors : deidColors;
  return {
    minHeight: theme.spacing(19),
    height: "auto",

    flexWrap: "wrap",
    alignItems: "center",

    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),

    display: "flex",
    gap: theme.spacing(3),

    borderRadius: theme.shape.borderRadius,

    background: colors.bgOff,
    border: `2px dashed ${theme.palette.background.lightGray}`,
    cursor: "pointer",
    transition: INPUT_SECTION_STYLES.transition,
    boxShadow: colors.boxShadow,
    borderColor: $hasError
      ? theme.palette.error.main
      : theme.palette.background.mediumGray,

    "&:hover": {
      background:
        theme.palette.mode == "dark"
          ? theme.palette.background.lightGray
          : INPUT_SECTION_STYLES.fileWrapper.hoverBackground,
      borderColor: $hasError
        ? theme.palette.error.main
        : theme.palette.primary.main,

      transform: "translateY(-1px)",
    },

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",

      gap: theme.spacing(2),

      padding: theme.spacing(3),
    },
  };
});

export const FileTextBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minWidth: 0,
}));

export const FileTextWrapper = styled("div")(({ theme }) => ({
  marginLeft: "auto",

  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    width: "100%",
    justifyContent: "space-between",
  },
  display: "flex",
  gap: 8,
  alignItems: "center",
  flexWrap: "wrap",

  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    width: "100%",
    justifyContent: "space-between",
  },
}));

export const FileDropHeading = styled("span")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.fontSize14,
  lineHeight: theme.typography.lineHeight150,

  wordBreak: "break-word",
  overflowWrap: "anywhere",
  maxWidth: "100%",

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize12,
  },

  [theme.breakpoints.down("xs")]: {
    fontSize: theme.typography.fontSize11,
  },
}));

export const FileDropSubtitle = styled("span")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightSemiBold,
  fontSize: theme.typography.fontSize11,
  lineHeight: theme.typography.lineHeight150,
  color: theme.palette.color.grayDark,
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.fontSize11,
  },
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
    background: theme.palette.background.lightGray,
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
  boxSizing: "border-box",
  margin: 0,
  flexShrink: 0,
  cursor: "pointer",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.5),

  width: "100%",
  maxWidth: INPUT_SECTION_STYLES.submitButton.maxWidth,

  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    width: "100%",
  },
  height: INPUT_SECTION_STYLES.submitButton.height,
  padding: "0 24px",

  borderRadius: theme.shape.borderRadius,

  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,

  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.button.fontWeight,

  textTransform: "none",
  whiteSpace: "nowrap",

  boxShadow: INPUT_SECTION_STYLES.submitButton.shadow,

  transition: [
    `background-color ${INPUT_SECTION_STYLES.submitButton.transitionDuration}s ${INPUT_SECTION_STYLES.submitButton.easingStadard}`,
    `box-shadow ${INPUT_SECTION_STYLES.submitButton.transitionDuration}s ${INPUT_SECTION_STYLES.submitButton.easingStadard}`,
  ].join(","),

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: INPUT_SECTION_STYLES.submitButton.hoverShadow,
  },

  "&:active": {
    backgroundColor: theme.palette.primary.main,
    boxShadow: INPUT_SECTION_STYLES.submitButton.shadow,
  },

  "&:focus-visible": {
    outline: `2px solid ${theme.palette.primary.contrastText}`,
    outlineOffset: "2px",
    boxShadow: INPUT_SECTION_STYLES.submitButton.focusShadow,
  },

  "&:focus:not(:focus-visible)": {
    outline: "none",
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
}));

export const InputPlayIcon = styled("svg")(({ theme }) => ({
  width: theme.spacing(3.75),
  height: theme.spacing(3.75),
  display: "block",
  fill: "none",
  stroke: theme.palette.common.white,
}));

export const InputArrowIcon = styled("svg")(({ theme }) => ({
  width: theme.spacing(3.5),
  height: theme.spacing(3.5),
  display: "block",
  fill: "none",
  stroke: theme.palette.common.white,
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

  flexWrap: "wrap",
  width: "100%",
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
