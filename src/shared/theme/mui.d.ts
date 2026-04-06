import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    inputHeight: string;
  }

  interface ThemeOptions {
    inputHeight?: string;
  }

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
    headingFontFamily: string;
    fontSize14: string;
    fontSize16: string;
    fontSize18: string;
    fontSize28: string;
    fontSize32: string;
    fontSize35: string;
    fontSize44: string;
    fontSize56: string;
    fontSize64: string;
    fontWeightSemiBold: number;
  }

  interface TypographyVariantsOptions {
    headingFontFamily?: string;
    fontSize14?: string;
    fontSize16?: string;
    fontSize18?: string;
    fontSize28?: string;
    fontSize32?: string;
    fontSize35?: string;
    fontSize44?: string;
    fontSize56?: string;
    fontSize64?: string;
    fontWeightSemiBold?: number;
  }
}
