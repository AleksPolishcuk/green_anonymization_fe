import type { SxProps, Theme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const FooterRoot = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.subtle.bg,
  borderTop: `1px solid ${theme.palette.divider}`,
  paddingTop: theme.spacing(16),
  paddingBottom: theme.spacing(8),
}));

export const FooterContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    paddingLeft: "68px",
    paddingRight: "68px",
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: theme.spacing(36),
    paddingRight: theme.spacing(36),
  },
}));

export const FooterBody = styled(Stack)(() => ({
  flexDirection: "column",
  width: "100%",
  boxSizing: "border-box",
}));

export const FooterTop = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  gap: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    display: "grid",
    gridTemplateColumns: "200px minmax(0, 1fr) auto",
    alignItems: "start",
    columnGap: theme.spacing(8),
    rowGap: 0,
  },
  "@media (min-width: 768px) and (max-width: 1099px)": {
    display: "grid",
    gridTemplateColumns: "400px minmax(0, 1fr)",
    gridTemplateAreas: `
      "logo nav"
      "text nav"
    `,
    alignItems: "start",
    columnGap: theme.spacing(6),
    rowGap: "12px",
  },
}));

export const FooterBrandBlock = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    textAlign: "left",
    width: "200px",
    minWidth: "200px",
    maxWidth: "200px",
  },
  "@media (min-width: 768px) and (max-width: 1099px)": {
    gridArea: "logo",
  },
}));

export const FooterTextBlock = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "min(100%, 520px)",
    minWidth: 0,
    justifySelf: "center",
  },
  "@media (min-width: 768px) and (max-width: 1099px)": {
    gridArea: "text",
    justifySelf: "start",
    width: "400px",
    maxWidth: "400px",
    marginTop: "12px",
  },
}));

export const FooterBrandRow = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2.5),
  maxWidth: "100%",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
    width: "auto",
  },
}));

export const FooterDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.color.grayDark,
  fontSize: theme.typography.body2.fontSize,
  lineHeight: theme.typography.body2.lineHeight,
  fontWeight: theme.typography.body2.fontWeight,
  marginTop: theme.spacing(5),
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    marginTop: 0,
    textAlign: "center",
  },
  "@media (min-width: 768px) and (max-width: 1099px)": {
    textAlign: "start",
  },
}));

export const FooterBottom = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(2.5),
  flexShrink: 0,
  marginTop: "24px",
  paddingTop: theme.spacing(5),
  paddingBottom: 0,
  borderTop: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "24px",
    gap: theme.spacing(2),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

export const footerMainLogoWrapperSx: SxProps<Theme> = {
  display: "block",
  flexShrink: 0,
  width: "36px",
  height: "36px",
  lineHeight: 0,
  overflow: "hidden",
};

export const footerMainLogoInnerSx: SxProps<Theme> = {
  display: "block",
  width: "100%",
  height: "100%",
};

export const footerLogoTextSx: SxProps<Theme> = (theme) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.fontSize16,
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
  lineHeight: 1,
  whiteSpace: "nowrap",
});

export const footerNavGridSx: SxProps<Theme> = (theme) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(1),
  justifyContent: "center",
  "@media (min-width: 768px) and (max-width: 1099px)": {
    gridArea: "nav",
    justifySelf: "end",
    alignSelf: "start",
    marginLeft: "auto",
    width: "auto",
    alignItems: "center",
  },
  [theme.breakpoints.up("md")]: {
    width: "auto",
    marginLeft: "auto",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export const footerNavHeadingSx: SxProps<Theme> = (theme) => ({
  width: "100%",
  margin: 0,
  color: theme.palette.color.charcoal,
  fontSize: theme.typography.fontSize14,
  lineHeight: 1.53,
  textAlign: "center",
});

export const footerNavListSx: SxProps<Theme> = (theme) => ({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  gap: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    alignItems: "center",
    flexWrap: "nowrap",
  },
});

export const footerNavLinkSx: SxProps<Theme> = (theme) => ({
  color: theme.palette.color.grayDark,
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
  color: theme.palette.color.grayDark,
  fontSize: theme.typography.caption.fontSize,
  lineHeight: theme.typography.caption.lineHeight,
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "center",
  },
});
