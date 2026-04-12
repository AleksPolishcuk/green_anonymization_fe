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
const size22 = "22px";
const size18 = "18px";
const size16 = "16px";
const size14 = "14px";
const size12 = "12px";
const size11 = "11px";

const lh108 = 1.08;
const lh109 = 1.09;
const lh116 = 1.16;
const lh118 = 1.18;
const lh150 = 1.5;
const lh138 = 1.38;
const lh140 = 1.4;
const lh158 = 1.58;
const lh167 = 1.67;
const lh175 = 1.75;

const blue = "#155dfc";
const darkBlue = "#1447e6";
const blueShadow = "#3B82F64D";
const white = "#ffffff";
const lightBlue = "#eff6ff";
const subtleBg = "#f8fafc";
const mediumGray = "#9ca3af";
const lightGray = "#fcfdfd";
const softGray = "#f3f4f6";
const charcoal = "#101828";
const grayDark = "#6a7282";

const accentBlue = "#3B82F6";
const accentGreen = "#10B981";
const accentAmber = "#F59E0B";
const accentRed = "#EF4444";
const accentLilac = "#7F22FE";

const accentLightBlue = "#eff6ff";
const accentLightGreen = "#ecfdf5";
const accentLightAmber = "#fffbeb";
const accentLightRed = "#FEF0F0";
const accentLightLilac = "#F5F3FF";

const footerDividerColor = "#E5E7EB";
const footerLinkHoverColor = "#111827";

const mainRadius = 16;
const buttonRadius = 14;

const md = 768;
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
    color: {
      blue,
      darkBlue,
      lightBlue,
      white,
      charcoal,
      grayDark,
    },
    primary: {
      main: blue,
    },
    secondary: {
      main: lightBlue,
    },
    background: {
      default: white,
      paper: white,
      lightGray: lightGray,
      softGray: softGray,
      mediumGray: mediumGray,
    },
    text: {
      primary: charcoal,
      secondary: grayDark,
    },
    divider: footerDividerColor,
    action: {
      active: footerLinkHoverColor,
    },
    subtle: {
      bg: subtleBg,
    },
    accent: {
      blue: accentBlue,
      green: accentGreen,
      amber: accentAmber,
      red: accentRed,
      lilac: accentLilac,
      lightBlue: accentLightBlue,
      lightGreen: accentLightGreen,
      lightAmber: accentLightAmber,
      lightRed: accentLightRed,
      lightLilac: accentLightLilac,
    },
    footer: {
      divider: footerDividerColor,
      linkHover: footerLinkHoverColor,
    },
  },

  typography: {
    fontFamily: mainFontFamily,

    headingFontFamily,
    fontSize11: size11,
    fontSize12: size12,
    fontSize14: size14,
    fontSize16: size16,
    fontSize18: size18,
    fontSize22: size22,
    fontSize28: size28,
    fontSize32: size32,
    fontSize35: size35,
    fontSize44: size44,
    fontSize56: size56,
    fontSize64: size64,

    fontWeightRegular: regular,
    fontWeightMedium: semiBold,
    fontWeightBold: bold,

    lineHeight108: lh108,
    lineHeight109: lh109,
    lineHeight116: lh116,
    lineHeight118: lh118,
    lineHeight150: lh150,
    lineHeight138: lh138,
    lineHeight140: lh140,
    lineHeight158: lh158,
    lineHeight167: lh167,
    lineHeight175: lh175,

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
        html: { width: "100%", height: "100%", scrollBehavior: "smooth" },
        body: { width: "100%", minHeight: "100%", margin: 0 },
        "#root": { width: "100%", minHeight: "100vh" },
        "*": { boxSizing: "border-box" },
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: false,
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
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
        containedPrimary: {
          backgroundColor: blue,
          boxShadow: `0px 4px 14px 0px ${blueShadow}`,
          "&:hover": {
            backgroundColor: darkBlue,
            boxShadow: `0px 4px 14px 0px ${blueShadow}`,
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: lightGray,

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: mediumGray,
            borderWidth: "1px !important",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: mediumGray,
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: blue,
          },
        },
        input: {
          height: "100%",
          boxSizing: "border-box",

          "&:-webkit-autofill": {
            WebkitBoxShadow: `0 0 0 100px ${lightGray} inset  !important`,
            WebkitTextFillColor: charcoal,
          },
        },
      },
    },
  },
});
