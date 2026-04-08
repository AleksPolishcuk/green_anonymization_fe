import type { SxProps, Theme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const footerSocialIconSizePx = 36;

export const FooterRoot = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.subtle.bg,
  borderTop: `1px solid ${theme.palette.divider}`,
  paddingTop: theme.spacing(16),
  paddingBottom: theme.spacing(8),
}));

export const FooterContainer = styled(Container)({});

export const FooterBody = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  width: "100%",
  boxSizing: "border-box",
  [theme.breakpoints.up("md")]: {
    minHeight: theme.spacing(70),
  },
}));

export const FooterTop = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  gap: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flex: "1 1 0",
    minHeight: 0,
  },
}));

export const FooterBrandBlock = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  [theme.breakpoints.up("md")]: {
    flex: "1 1 36%",
    maxWidth: theme.spacing(90),
  },
}));

export const FooterBrandRow = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(1.5),
  maxWidth: "100%",
}));

export const FooterDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: theme.typography.body2.fontSize,
  lineHeight: theme.typography.body2.lineHeight,
  fontWeight: theme.typography.body2.fontWeight,
  marginTop: theme.spacing(5),
  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(2),
  },
}));

export const FooterSocialRow = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(2),
  marginTop: theme.spacing(6),
}));

export const footerNavColumnStackSx: SxProps<Theme> = (theme) => ({
  gap: theme.spacing(5),
  [theme.breakpoints.up("md")]: {
    width: "188px",
    minWidth: "188px",
    maxWidth: "188px",
    flex: "0 0 188px",
  },
});

export const FooterBottom = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2.5),
  flexShrink: 0,
  marginTop: theme.spacing(12),
  paddingTop: theme.spacing(5),
  paddingBottom: 0,
  borderTop: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 0,
    gap: theme.spacing(2),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

export const FooterLegalRow = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: theme.spacing(6),
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-end",
    flexWrap: "nowrap",
    gap: theme.spacing(2),
  },
}));

export const footerMainLogoWrapperSx: SxProps<Theme> = {
  display: "block",
  flexShrink: 0,
  alignSelf: "flex-start",
  width: "100%",
  maxWidth: "200px",
  height: "36px",
  lineHeight: 0,
  overflow: "hidden",
};

export const footerMainLogoInnerSx: SxProps<Theme> = {
  display: "block",
  width: "100%",
  height: "100%",
};

export const footerSocialIconButtonSx: SxProps<Theme> = (theme) => ({
  width: `${footerSocialIconSizePx}px`,
  height: `${footerSocialIconSizePx}px`,
  padding: 0,
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.secondary,
  transition: "transform 180ms ease, background-color 180ms ease",
  "&:hover": {
    transform: "scale(1.05)",
    backgroundColor: theme.palette.divider,
  },
});

export const footerNavGridSx: SxProps<Theme> = (theme) => ({
  flexDirection: "column",
  gap: theme.spacing(4),
  width: "100%",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    flex: "1 1 0",
    justifyContent: "flex-start",
    gap: theme.spacing(10),
  },
});

export const footerNavHeadingSx: SxProps<Theme> = (theme) => ({
  margin: 0,
  color: theme.palette.text.primary,
  fontSize: theme.typography.fontSize14,
  lineHeight: 1.53,
});

export const footerNavListSx: SxProps<Theme> = (theme) => ({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
});

export const footerNavLinkSx: SxProps<Theme> = (theme) => ({
  color: theme.palette.text.secondary,
  fontSize: theme.typography.fontSize14,
  lineHeight: 1.64,
  fontWeight: theme.typography.fontWeightRegular,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    color: theme.palette.action.active,
  },
});

export const footerCopyrightSx: SxProps<Theme> = (theme) => ({
  color: theme.palette.text.secondary,
  fontSize: theme.typography.caption.fontSize,
  lineHeight: theme.typography.caption.lineHeight,
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
});

export const footerLegalLinkSx: SxProps<Theme> = (theme) => ({
  color: theme.palette.text.secondary,
  fontSize: theme.typography.caption.fontSize,
  lineHeight: theme.typography.caption.lineHeight,
  fontFamily: theme.typography.caption.fontFamily,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    color: theme.palette.action.active,
  },
});
