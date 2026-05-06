export type InputFormRequest = {
  text: string | null;
  file: File | null;
};

export type InputFormResponse = {
  originalText: string;
  anonymizedText: string;
};
