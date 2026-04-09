import { styled } from "@mui/material/styles";

const navLinkPadY = 6;
const navLinkPadX = 10;
const navLinkRadiusPx = 8;
const navUnderlineBottomPx = 3;
const navUnderlineHeightPx = 2;
const transitionFastSeconds = 0.22;
const navUnderlineTransitionSeconds = 0.28;
const easingStandard = "cubic-bezier(0.4, 0, 0.2, 1)";
const easingOut = "cubic-bezier(0.16, 1, 0.3, 1)";

export const NavButton = styled("a")(({ theme }) => ({
  boxSizing: "border-box",
  margin: 0,
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: `${navLinkPadY}px ${navLinkPadX}px`,
  color: theme.palette.text.secondary,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.h6.fontSize,
  lineHeight: theme.typography.button.lineHeight,
  fontWeight: theme.typography.fontWeightMedium,
  textDecoration: "none",
  borderRadius: `${navLinkRadiusPx}px`,
  transition: `color ${transitionFastSeconds}s ${easingStandard}`,

  "&::after": {
    content: '""',
    position: "absolute",
    left: `${navLinkPadX}px`,
    right: `${navLinkPadX}px`,
    bottom: `${navUnderlineBottomPx}px`,
    height: `${navUnderlineHeightPx}px`,
    backgroundColor: theme.palette.primary.main,
    transform: "scaleX(0)",
    transformOrigin: "left center",
    transition: `transform ${navUnderlineTransitionSeconds}s ${easingOut}`,
  },

  "&:hover": {
    color: theme.palette.text.primary,
  },

  "&:hover::after": {
    transform: "scaleX(1)",
  },

  "&:active": {
    color: theme.palette.text.primary,
  },

  "&:active::after": {
    transform: "scaleX(1)",
  },

  "&:focus-visible": {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: "3px",
    boxShadow: "0 0 0 4px rgba(21, 93, 252, 0.22)",
  },

  "&:focus:not(:focus-visible)": {
    outline: "none",
    boxShadow: "none",
  },
}));
