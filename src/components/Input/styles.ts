import {
  Box,
  Chip,
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { keyframes, styled } from "@mui/material/styles";
import { BOX_SHADOW, CHIP_COLOR_PRESETS } from "constants/DeidPage";

export const InputSectionRoot = styled(Paper)(({ theme }) => ({
  position: "relative",
  marginLeft: theme.spacing(8),
  marginRight: theme.spacing(8),
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: BOX_SHADOW,
  minHeight: 550,
  maxHeight: 570,
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(5),

  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 3,
    background:
      "linear-gradient(90deg, #0EA5E9 0%, #06B6D4 50%, rgba(6, 182, 212, 0.2) 100%)",
  },
}));

export const InputSectionStack = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(7),
}));

export const InputSectionHeaderRow = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  alignItems: "center",
}));

export const InputSectionIconBox = styled(Box)(({ theme }) => ({
  width: 36,
  height: 36,
  borderRadius: "12px",
  backgroundColor: "#0EA5E9",
  color: theme.palette.color.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
}));

export const InputLogoIcon = styled("svg")(({ theme }) => ({
  width: 16,
  height: 16,
  display: "block",
  fill: "#0EA5E9",
  stroke: theme.palette.color.white,
}));

export const InputSectionTitleRow = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(2),
  alignItems: "center",
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

const fadeSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const InputForm = styled("form")(({ theme }) => ({
  border: `1px solid ${theme.palette.background.softGray}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  opacity: 0,
  animation: `${fadeSlideIn} 0.6s ease 0.2s forwards`,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(7),

  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(7),
  },

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

export const TextInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRight: "1px solid rgba(208, 213, 221, 0.8)",
    border: "rgba(208, 213, 221, 0.8)",
    boxShadow: "4px 0px 32px 0px rgba(16, 24, 40, 0.06)",
    alignItems: "flex-start",
    padding: 0,
    fontFamily: "Courier New",
    fontWeight: 400,
    fontStyle: "Regular",
    fontSize: "12px",
    leadingTrim: "NONE",
    lineHeight: "25px",
    letterSpacing: "0px",
    background: "rgba(249, 250, 251, 0.8)",

    // height: 278,
    borderRadius: theme.spacing(2),
    gap: 10,
    angle: "0 deg",
    opacity: 1,
    borderWidth: 1,
    // minHeight: 278,
    resize: "none",
    scrollBehavior: "smooth",
    color: "rgba(0, 0, 0, 1)",
  },

  "& textarea": {
    // height: 278,

    padding: theme.spacing(0, 8),
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

  background: "rgba(37, 99, 235, 0.08)",
  border: "1px solid rgba(37, 99, 235, 0.15)",

  flexShrink: 0,
}));

export const FileWrapper = styled("div")(({ theme }) => ({
  height: theme.spacing(19),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),

  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),

  borderRadius: theme.spacing(2),

  background: "rgba(249, 250, 251, 0.5)",

  border: "2px dashed rgba(208, 213, 221, 0.8)",

  cursor: "pointer",
  transition: "all 0.2s ease",

  "&:hover": {
    background: "rgba(249, 250, 251, 0.8)",
    borderColor: "rgba(37, 99, 235, 0.4)",
  },
}));

export const FileTextBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  height: 41,
}));

export const FileDropHeading = styled("span")(() => ({
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: 13,
  lineHeight: "19px",
  letterSpacing: 0,

  color: "rgba(52, 64, 84, 1)",
}));

export const FileDropSubtitle = styled("span")(() => ({
  fontFamily: "Inter",
  fontWeight: 400,
  fontSize: 11,
  lineHeight: "16px",
  letterSpacing: 0,

  color: "rgba(102, 112, 133, 1)",
}));

export const FileInput = styled("input")(({ theme }) => ({
  border: `2px dashed ${theme.palette.primary.main}`,
  borderRadius: 12,
  padding: theme.spacing(3),
  textAlign: "center",
  cursor: "pointer",
  backgroundColor: theme.palette.background.default,
  transition: "all 0.2s ease",

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    borderColor: theme.palette.primary.dark,
  },
}));

export const InputSubmitButton = styled(Button)(({ theme }) => ({
  width: 250,
  height: 45,
  padding: "0 24px",

  background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
  color: theme.palette.color.white,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: 10,

  textTransform: "none",

  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: 14,
  lineHeight: "21px",
  letterSpacing: 0,

  borderRadius: 12,
  boxShadow: `
      inset 0px 1px 0px 0px rgba(255, 255, 255, 0.15),
      0px 4px 16px 0px rgba(37, 99, 235, 0.35)
    `,

  minWidth: "unset",
  minHeight: "unset",
}));

export const InputPlayIcon = styled("svg")(({ theme }) => ({
  width: 15,
  height: 15,
  display: "block",
  fill: "none",
  stroke: theme.palette.color.white,
}));

export const InputArrowIcon = styled("svg")(({ theme }) => ({
  width: 14,
  height: 14,
  display: "block",
  fill: "none",
  stroke: theme.palette.color.white,
}));

export const Estimate = styled("span")(() => ({
  fontFamily: "Inter",
  fontWeight: 400,
  fontSize: 12,
  lineHeight: "18px",
  letterSpacing: 0,

  color: "rgba(102, 112, 133, 1)",

  whiteSpace: "nowrap",
}));

export const SubmitWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: 12,
}));
