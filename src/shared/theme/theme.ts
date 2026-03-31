import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 787,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#155dfc",
      dark: "#1447e6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#eff6ff",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
    text: {
      primary: "#101828",
      secondary: "#6a7282",
    },
    divider: "#e5e7eb",
  },
  typography: {
    fontFamily: `'Inter', sans-serif`,
    h1: {
      fontFamily: "'DM Serif Display', serif",
      fontWeight: 400,
      fontSize: "32px",
      lineHeight: "128%",

      "@media (min-width:787px)": {
        fontSize: "64px",
        lineHeight: 1.08,
      },
    },
    h2: {
      fontFamily: "'DM Serif Display', serif",
      fontWeight: 400,
      fontSize: "56px",
      lineHeight: 1.09,
    },
    h3: {
      fontFamily: "'DM Serif Display', serif",
      fontWeight: 400,
      fontSize: "38px",
      lineHeight: 1.16,
    },
    h4: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: 1.38,
    },
    h6: {
      fontFamily: "'DM Serif Display', serif",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: 1.4,
    },
    body1: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: 1.75,
    },
    button: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: 1.5,
    },
  },
  spacing: 4,
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          width: "100%",
          height: "100%",
        },
        body: {
          width: "100%",
          minHeight: "100%",
          margin: 0,
        },
        "#root": {
          width: "100%",
          minHeight: "100vh",
        },
        "*": {
          boxSizing: "border-box",
        },
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

          "@media (min-width:1440px)": {
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
          borderRadius: 14,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },
  },
});
