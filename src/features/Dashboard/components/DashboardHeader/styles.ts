import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { TypographyProps } from "@mui/material/Typography";

const transitionButtonSeconds = 0.24;
const easingStandard = "cubic-bezier(0.4, 0, 0.2, 1)";

export const HeaderRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

export const HeaderTextGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3.5),
  maxWidth: 720,
  minWidth: 0,
  flex: "1 1 auto",
}));

export const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  margin: 0,
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.fontSize32,
  lineHeight: theme.typography.lineHeight108,
}));

export const HeaderSubtitle = styled(Typography)(({ theme }) => ({
  margin: 0,
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.fontSize16,
  lineHeight: theme.typography.lineHeight175,
}));

export const StartDeIdButton = styled(Button)(({ theme }) => ({
  boxSizing: "border-box",
  margin: 0,
  flexShrink: 0,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.5),
  minWidth: 237,
  width: 237,
  height: 40,
  padding: "0 20px",
  borderRadius: 12,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize14,
  fontWeight: theme.typography.button.fontWeight,
  textTransform: "none",
  whiteSpace: "nowrap",
  boxShadow: "0 4px 14px 0 rgba(59, 130, 246, 0.3)",
  transition: [
    `background-color ${transitionButtonSeconds}s ${easingStandard}`,
    `box-shadow ${transitionButtonSeconds}s ${easingStandard}`,
  ].join(", "),

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: "0 6px 14px 0 rgba(59, 130, 246, 0.6)",
  },

  "&:active": {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0 4px 14px 0 rgba(59, 130, 246, 0.3)",
  },

  "&:focus-visible": {
    outline: `2px solid ${theme.palette.primary.contrastText}`,
    outlineOffset: "2px",
    boxShadow:
      "0 4px 14px 0 rgba(59, 130, 246, 0.3), 0 0 0 4px rgba(21, 93, 252, 0.45)",
  },

  "&:focus:not(:focus-visible)": {
    outline: "none",
  },
}));

export const ButtonSpriteIcon = styled("svg")({
  display: "block",
  flexShrink: 0,
  width: 18,
  height: 18,
});
