import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    subtle: {
      bg: string;
    };
  }

  interface PaletteOptions {
    subtle?: {
      bg?: string;
    };
  }
}
