import type { DocumentState } from "store/types/document";

export const DOCUMENT_MOCK: DocumentState = {
  currentStep: "framework",
  selectedFramework: "HIPAA_US",
  originalText:
    "Patient: Dr. Sarah Johnson Date of Visit: March 15, 2026 Chief Complaint: The patient is a 45-year-old female presenting with persistent headaches.",
  redactedText: "",
  entities: [
    {
      id: "1",
      entityType: "PERSON",
      posStart: 13,
      posEnd: 26,
      score: 0.85,
      confidence: "Low",
      documentId: "1",
      selected: true,
    },
    {
      id: "2",
      entityType: "DATE_TIME",
      posStart: 42,
      posEnd: 56,
      score: 0.85,
      confidence: "Medium",
      documentId: "2",
      selected: true,
    },
    {
      id: "3",
      entityType: "DATE_TIME",
      posStart: 91,
      posEnd: 102,
      score: 0.85,
      confidence: "High",
      documentId: "3",
      selected: true,
    },
  ],
};
