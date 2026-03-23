import { createTheme } from "@mui/material/styles";

// example of a custom theme with breakpoints, palette, typography, spacing,
// shape and component overrides. will be changed later to fit the design system
// of the project
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
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
    background: {
      default: "#f8f9fb",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', sans-serif`,
    h1: {
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: 1.25,
    },
    h3: {
      fontWeight: 600,
      fontSize: "28px",
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: 1.33,
    },
    h5: {
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: 1.4,
    },
    body1: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: 1.5,
    },
    body2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: 1.43,
    },
    button: {
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: 1.2,
      textTransform: "none",
    },
  },
  spacing: 4,
  shape: {
    borderRadius: 12,
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
          paddingLeft: "16px",
          paddingRight: "16px",

          "@media (min-width:375px)": {
            paddingLeft: "16px",
            paddingRight: "16px",
          },
          "@media (min-width:787px)": {
            paddingLeft: "24px",
            paddingRight: "24px",
          },
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
          borderRadius: 10,
          padding: "10px 20px",
          boxShadow: "none",
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
