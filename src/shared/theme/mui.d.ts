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
    fontSize28: string;
    fontSize32: string;
    fontSize35: string;
    fontSize44: string;
    fontSize56: string;
    fontSize64: string;
    fontWeightSemiBold: number;
  }

  interface TypographyVariantsOptions {
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
