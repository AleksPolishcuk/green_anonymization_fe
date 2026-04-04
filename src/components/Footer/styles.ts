import type { SxProps, Theme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import {
  footerBackground,
  footerBodyColor,
  footerDividerColor,
  footerRootBorderTopColor,
  footerDesktopContainerMaxWidthPx,
  footerDesktopMainBlockMinHeightPx,
  footerHeadingColor,
  footerNavColumnHeadingColor,
  footerNavColumnHeadingFontSizePx,
  footerNavColumnHeadingLineHeight,
  footerMutedColor,
  footerSocialButtonBackground,
  footerSocialButtonHoverBackground,
  footerSocialIconBorderRadiusPx,
  footerSocialIconButtonPx,
  footerSocialIconGapPx,
} from "shared/constants/footer";

export const FooterRoot = styled("footer")(({ theme }) => ({
  backgroundColor: footerBackground,
  borderTop: `1px solid ${footerRootBorderTopColor}`,
  paddingTop: theme.spacing(16),
  paddingBottom: theme.spacing(8),
}));

/** Обмежує ширину до 1152px на десктопі; горизонтальні падінги: 24px до `md`, 12px від `md` (`disableGutters` у `Footer`). */
export const FooterContainer = styled(Container)(({ theme }) => ({
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(6),
  boxSizing: "border-box",
  [theme.breakpoints.up("md")]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  "&&": {
    [theme.breakpoints.up("md")]: {
      maxWidth: footerDesktopContainerMaxWidthPx,
    },
  },
}));

/** Верх футера + ряд copyright/legal; на `md+` загальна висота блоку = 280px. */
export const FooterBody = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  width: "100%",
  boxSizing: "border-box",
  [theme.breakpoints.up("md")]: {
    height: footerDesktopMainBlockMinHeightPx,
    minHeight: footerDesktopMainBlockMinHeightPx,
  },
}));

export const FooterTop = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  gap: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: theme.spacing(6),
    flex: "1 1 0",
    minHeight: 0,
  },
}));

export const FooterBrandBlock = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  [theme.breakpoints.up("md")]: {
    flex: "1 1 36%",
    maxWidth: 360,
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
  fontSize: "14px",
  lineHeight: 1.64,
  fontWeight: 400,
  marginTop: theme.spacing(5),
  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(2),
  },
}));

export const FooterSocialRow = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: `${footerSocialIconGapPx}px`,
  marginTop: theme.spacing(6),
}));

/** Колонка навігації: `<Stack component="section">` у `index.tsx`. Відступ заголовок → перше посилання: 20px (`spacing` у темі = 4px/одиницю). */
export const footerNavColumnStackSx: SxProps<Theme> = (theme) => ({
  gap: theme.spacing(5),
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
  borderTop: `1px solid ${footerDividerColor}`,
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

export const footerMainLogoInnerSx: SxProps<Theme> = {
  display: "block",
  width: "100%",
  height: "100%",
};

export const footerSocialIconButtonSx: SxProps<Theme> = {
  width: footerSocialIconButtonPx,
  height: footerSocialIconButtonPx,
  padding: 0,
  borderRadius: `${footerSocialIconBorderRadiusPx}px`,
  backgroundColor: footerSocialButtonBackground,
  color: footerBodyColor,
  "&:hover": {
    backgroundColor: footerSocialButtonHoverBackground,
  },
};

export const footerNavGridSx: SxProps<Theme> = (theme) => ({
  flexDirection: "column",
  gap: theme.spacing(4),
  width: "100%",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    flex: "1 1 0",
    justifyContent: "space-between",
    gap: theme.spacing(4),
  },
});

/** Підключення `typography.h4` (700, Inter); розмір/line-height футера з макету поверх варіанту. */
export const footerNavHeadingSx: SxProps<Theme> = {
  margin: 0,
  color: footerNavColumnHeadingColor,
  fontSize: `${footerNavColumnHeadingFontSizePx}px`,
  lineHeight: footerNavColumnHeadingLineHeight,
};

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
  fontSize: "14px",
  lineHeight: 1.64,
  fontWeight: 400,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    color: footerHeadingColor,
  },
});

export const footerCopyrightSx: SxProps<Theme> = (theme) => ({
  color: footerMutedColor,
  fontSize: "0.75rem",
  lineHeight: 1.5,
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
});

export const footerLegalLinkSx: SxProps<Theme> = {
  color: footerMutedColor,
  fontSize: "0.75rem",
  lineHeight: 1.5,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    color: footerBodyColor,
  },
};
