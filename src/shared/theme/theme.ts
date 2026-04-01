import { createTheme } from "@mui/material/styles";

const mainFontFamily = "'Inter', sans-serif";
const headingFontFamily = "'DM Serif Display', serif";

const regular = 400;
const semiBold = 600;
const bold = 700;

const h1SizeDesktop = "64px";
const h1SizeMobile = "32px";
const h2SizeDesktop = "56px";
const h2SizeMobile = "35px";
const h3SizeDesktop = "44px";
const h3SizeMobile = "28px";
const h4Size = "18px";
const h5Size = "16px";
const h6Size = "14px";
const bodySize = "16px";

const h1Line = 1.08;
const h2Line = 1.09;
const h3LineDesktop = 1.16;
const h3LineMobile = 1.18;
const bodyLine = 1.75;

const primaryColor = "#155dfc";
const primaryDark = "#1447e6";
const primaryContrast = "#ffffff";
const secondaryColor = "#eff6ff";
const subtleBg = "#f8fafc";
const bgDefault = "#ffffff";
const textPrimary = "#101828";
const textSecondary = "#6a7282";

const mainRadius = 16;
const buttonRadius = 14;

const md = 787;
const lg = 1440;

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md,
      lg,
      xl: 1920,
    },
  },

  palette: {
    primary: {
      main: primaryColor,
      dark: primaryDark,
      contrastText: primaryContrast,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: bgDefault,
      paper: bgDefault,
    },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
    },
    subtle: {
      bg: subtleBg,
    },
  },

  typography: {
    fontFamily: mainFontFamily,

    h1: {
      fontFamily: headingFontFamily,
      fontWeight: regular,
      fontSize: h1SizeMobile,
      lineHeight: h1Line,
      [`@media (min-width:${md}px)`]: {
        fontSize: h1SizeDesktop,
      },
    },

    h2: {
      fontFamily: headingFontFamily,
      fontWeight: regular,
      fontSize: h2SizeMobile,
      lineHeight: h2Line,
      [`@media (min-width:${md}px)`]: {
        fontSize: h2SizeDesktop,
      },
    },

    h3: {
      fontFamily: headingFontFamily,
      fontWeight: regular,
      fontSize: h3SizeMobile,
      lineHeight: h3LineMobile,
      [`@media (min-width:${md}px)`]: {
        fontSize: h3SizeDesktop,
        lineHeight: h3LineDesktop,
      },
    },

    h4: {
      fontFamily: mainFontFamily,
      fontWeight: bold,
      fontSize: h4Size,
      lineHeight: 1.5,
    },

    h5: {
      fontFamily: mainFontFamily,
      fontWeight: semiBold,
      fontSize: h5Size,
      lineHeight: 1.38,
    },

    h6: {
      fontFamily: headingFontFamily,
      fontWeight: semiBold,
      fontSize: h6Size,
      lineHeight: 1.4,
    },

    body1: {
      fontFamily: mainFontFamily,
      fontWeight: regular,
      fontSize: bodySize,
      lineHeight: bodyLine,
    },

    button: {
      fontFamily: mainFontFamily,
      fontWeight: semiBold,
      fontSize: bodySize,
      lineHeight: 1.5,
      textTransform: "none",
    },
  },

  spacing: 4,

  shape: {
    borderRadius: mainRadius,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { width: "100%", height: "100%" },
        body: { width: "100%", minHeight: "100%", margin: 0 },
        "#root": { width: "100%", minHeight: "100vh" },
        "*": { boxSizing: "border-box" },
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
      styleOverrides: {
        root: {
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          [`@media (min-width:${lg}px)`]: {
            paddingLeft: "32px",
            paddingRight: "32px",
          },
        },
      },
    },

    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          body1: "p",
          body2: "p",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: buttonRadius,
        },
      },
    },
  },
});
