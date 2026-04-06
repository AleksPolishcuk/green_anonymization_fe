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
  interface TypographyVariants {
    fontSize14: string;
    fontSize16: string;
    fontSize18: string;
    fontWeightSemiBold: number;
  }

  interface TypographyVariantsOptions {
    fontSize14?: string;
    fontSize16?: string;
    fontSize18?: string;
    fontWeightSemiBold?: number;
  }
}
