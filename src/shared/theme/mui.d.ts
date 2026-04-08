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
  interface TypographyVariants {
    headingFontFamily: string;
    fontSize11: string;
    fontSize12: string;
    fontSize14: string;
    fontSize16: string;
    fontSize18: string;
    fontSize22: string;
    fontSize28: string;
    fontSize32: string;
    fontSize35: string;
    fontSize44: string;
    fontSize56: string;
    fontSize64: string;
    fontWeightSemiBold: number;
    lineHeight108: number;
    lineHeight109: number;
    lineHeight116: number;
    lineHeight118: number;
    lineHeight150: number;
    lineHeight138: number;
    lineHeight140: number;
    lineHeight158: number;
    lineHeight167: number;
    lineHeight175: number;
  }

  interface TypographyVariantsOptions {
    headingFontFamily?: string;
    fontSize11?: string;
    fontSize12?: string;

    fontSize14?: string;
    fontSize16?: string;
    fontSize18?: string;
    fontSize22?: string;
    fontSize28?: string;
    fontSize32?: string;
    fontSize35?: string;
    fontSize44?: string;
    fontSize56?: string;
    fontSize64?: string;
    fontWeightSemiBold?: number;
    lineHeight108?: number;
    lineHeight109?: number;
    lineHeight116?: number;
    lineHeight118?: number;
    lineHeight150?: number;
    lineHeight138?: number;
    lineHeight140?: number;
    lineHeight158?: number;
    lineHeight167?: number;
    lineHeight175?: number;
  }
}
