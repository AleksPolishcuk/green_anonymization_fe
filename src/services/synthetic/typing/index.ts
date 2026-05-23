import type {
  SyntheticDataDocument,
  SyntheticEntity,
} from "store/types/syntheticData";

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

export type DownloadSyntheticTableRequest = {
  syntheticEntities: SyntheticEntity[][];
};
