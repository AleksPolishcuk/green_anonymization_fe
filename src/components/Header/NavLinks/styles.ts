import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { boxShadow } from "constants/MainPages";

const navUnderlineTransitionSeconds = 0.28;
const easingOut = "cubic-bezier(0.16, 1, 0.3, 1)";
const bgNavIcon = "rgba(37, 99, 255, 0.12)";

export const NavIconBox = styled("span")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 28,
  height: 28,
  borderRadius: 8,
  flexShrink: 0,
  backgroundColor:
    theme.palette.mode === "dark" ? bgNavIcon : theme.palette.accent.lightBlue,
  color: theme.palette.primary.main,
  "& svg": {
    width: 16,
    height: 16,
    display: "block",
  },
}));

export const NavButton = styled(Link)(({ theme }) => ({
  boxSizing: "border-box",
  margin: 0,
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2, 3),
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.h6.fontSize,
  lineHeight: theme.typography.button.lineHeight,
  fontWeight: theme.typography.fontWeightMedium,
  textDecoration: "none",
  borderRadius: theme.shape.borderRadius,

  "&::after": {
    content: '""',
    position: "absolute",
    left: theme.spacing(3),
    right: theme.spacing(3),
    bottom: theme.spacing(0.5),
    height: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.main,
    transform: "scaleX(0)",
    transformOrigin: "left center",
    transition: `transform ${navUnderlineTransitionSeconds}s ${easingOut}`,
  },

  "&:hover::after": {
    transform: "scaleX(1)",
  },

  "&:active::after": {
    transform: "scaleX(1)",
  },

  "&:focus-visible": {
    outline: `1px solid ${theme.palette.primary.main}`,
    outlineOffset: "-2px",
    boxShadow: boxShadow,
  },

  "&:focus:not(:focus-visible)": {
    outline: "none",
    boxShadow: "none",
  },
}));
