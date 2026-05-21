import type { SyntheticDataDocument } from "store/types/syntheticData";

export type GenerateSyntheticDataRequest = {
  documentId: string;
  count: number;
};

export type GenerateSyntheticDataResponse = {
  syntheticDocuments: SyntheticDataDocument[];
};

export type DownloadSyntheticDataRequest = {
  anonymizedTexts: string[];
  extension: "txt" | "pdf" | "docx";
};
