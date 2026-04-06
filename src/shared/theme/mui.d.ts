import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    subtle: {
      bg: string;
    };
    accent: {
      blue: string;
      green: string;
      amber: string;
      red: string;
      lilac: string;
      lightBlue: string;
      lightGreen: string;
      lightAmber: string;
      lightRed: string;
      lightLilac: string;
    };
    footer: {
      divider: string;
      linkHover: string;
    };
  }

  interface PaletteOptions {
    subtle?: {
      bg?: string;
    };
    accent?: {
      blue?: string;
      green?: string;
      amber?: string;
      red?: string;
      lilac?: string;
      lightBlue?: string;
      lightGreen?: string;
      lightAmber?: string;
      lightRed?: string;
      lightLilac?: string;
    };
    footer?: {
      divider?: string;
      linkHover?: string;
    };
  }
}
