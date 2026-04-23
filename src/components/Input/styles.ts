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
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(5),

  padding: theme.spacing(6),

  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: BOX_SHADOW,

  minHeight: 550,
  maxHeight: 570,
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
  alignItems: "center",
  gap: theme.spacing(3),
}));

export const InputSectionIconBox = styled(Box)(({ theme }) => ({
  width: theme.spacing(9),
  height: theme.spacing(9),
  borderRadius: 12,
  backgroundColor: "#0EA5E9",
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
  color: "#344054",
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
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(7),

  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,

  animation: `${fadeSlideIn} 0.6s ease 0.2s forwards`,

  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(7),
  },

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

export const TextInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: theme.palette.background.lightGray,

    boxShadow: "4px 0px 32px 0px rgba(16, 24, 40, 0.06)",
    borderRadius: theme.shape.borderRadius,

    alignItems: "flex-start",
    padding: 0,

    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSize12,
    lineHeight: theme.typography.lineHeight175,

    color: theme.palette.text.primary,
  },

  "& textarea": {
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

  background: theme.palette.primary.main + "14",
  border: `1px solid ${theme.palette.primary.main}26`,

  flexShrink: 0,
}));

export const FileWrapper = styled("div")(({ theme }) => ({
  height: theme.spacing(19),

  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),

  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),

  borderRadius: theme.shape.borderRadius,

  background: "rgba(249, 250, 251, 0.5)",
  border: "2px dashed rgba(208, 213, 221, 0.8)",

  cursor: "pointer",
  transition: "all 0.2s ease",

  "&:hover": {
    background: "rgba(249, 250, 251, 0.8)",
    borderColor: theme.palette.primary.main,
  },
}));

export const FileTextBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: 41,
}));

export const FileDropHeading = styled("span")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.fontSize14,
  lineHeight: theme.typography.lineHeight150,
  color: "#344054",
}));

export const FileDropSubtitle = styled("span")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightSemiBold,
  fontSize: theme.typography.fontSize11,
  lineHeight: theme.typography.lineHeight150,
  color: theme.palette.text.secondary,
}));

export const FileRemoveButton = styled("button")(({ theme }) => ({
  width: 24,
  height: 24,
  borderRadius: 6,
  border: "none",
  cursor: "pointer",

  background: theme.palette.accent.red + "1A",
  color: theme.palette.accent.red,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: 14,
  fontWeight: theme.typography.fontWeightBold,

  transition: "0.2s ease",

  "&:hover": {
    background: theme.palette.accent.red + "33",
  },
}));

export const InputSubmitButton = styled(Button)(({ theme }) => ({
  width: 250,
  height: 45,
  padding: "0 24px",

  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #1D4ED8 100%)`,
  color: theme.palette.common.white,

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
  stroke: theme.palette.common.white,
}));

export const InputArrowIcon = styled("svg")(({ theme }) => ({
  width: 14,
  height: 14,
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
}));
