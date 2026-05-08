export type InputFormRequest = {
  selectedFrameworkCode: string;
  text: string | null;
  file: File | null;
};

export type InputFormResponse = {
  originalText: string;
  anonymizedText: string;
};
