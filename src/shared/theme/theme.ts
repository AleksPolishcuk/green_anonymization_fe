import { createTheme } from "@mui/material/styles";

const mainFontFamily = "'Inter', sans-serif";
const headingFontFamily = "'DM Serif Display', serif";

const regular = 400;
const semiBold = 600;
const bold = 700;

const size64 = "64px";
const size56 = "56px";
const size44 = "44px";
const size35 = "35px";
const size32 = "32px";
const size28 = "28px";
const size18 = "18px";
const size16 = "16px";
const size14 = "14px";

const lh108 = 1.08;
const lh109 = 1.09;
const lh116 = 1.16;
const lh118 = 1.18;
const lh150 = 1.5;
const lh138 = 1.38;
const lh140 = 1.4;
const lh175 = 1.75;

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

    fontSize14: size14,
    fontSize16: size16,
    fontSize18: size18,
    fontWeightSemiBold: semiBold,

    h1: {
      fontFamily: headingFontFamily,
      fontWeight: regular,
      fontSize: size32,
      lineHeight: lh108,
      [`@media (min-width:${md}px)`]: {
        fontSize: size64,
      },
    },

    h2: {
      fontFamily: headingFontFamily,
      fontWeight: regular,
      fontSize: size35,
      lineHeight: lh109,
      [`@media (min-width:${md}px)`]: {
        fontSize: size56,
      },
    },

    h3: {
      fontFamily: headingFontFamily,
      fontWeight: regular,
      fontSize: size28,
      lineHeight: lh118,
      [`@media (min-width:${md}px)`]: {
        fontSize: size44,
        lineHeight: lh116,
      },
    },

    h4: {
      fontFamily: mainFontFamily,
      fontWeight: bold,
      fontSize: size18,
      lineHeight: lh150,
    },

    h5: {
      fontFamily: mainFontFamily,
      fontWeight: semiBold,
      fontSize: size16,
      lineHeight: lh138,
    },

    h6: {
      fontFamily: headingFontFamily,
      fontWeight: semiBold,
      fontSize: size14,
      lineHeight: lh140,
    },

    body1: {
      fontFamily: mainFontFamily,
      fontWeight: regular,
      fontSize: size16,
      lineHeight: lh175,
    },

    button: {
      fontFamily: mainFontFamily,
      fontWeight: semiBold,
      fontSize: size16,
      lineHeight: lh150,
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
