export type InputFormRequest = {
  text: string;
  file: File | null;
};

export type InputFormResponse = {
  originalText: string;
  anonymizedText: string;
};
