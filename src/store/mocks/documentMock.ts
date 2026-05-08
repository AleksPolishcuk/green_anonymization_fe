import type { DocumentState } from "store/types/document";

export const DOCUMENT_MOCK: DocumentState = {
  selectedFramework: {
    code: "HIPAA_US",
    name: "HIPAA",
    description: "Health Insurance Portability and Accountability Act (US)",
    entityTypesCount: 18,
    isActive: true,
  },
  originalText:
    "Patient: Dr. Sarah Johnson Date of Visit: March 15, 2026 Chief Complaint: The patient is a 45-year-old female presenting with persistent headaches.",
  redactedText: "",
  entities: [
    {
      id: "1",
      entityType: "PERSON",
      value: "Dr. Sarah Johnson",
      posStart: 13,
      posEnd: 26,
      score: 0.85,
      confidence: "Low",
      documentId: "1",
    },
    {
      id: "2",
      entityType: "DATE_TIME",
      value: "March 15, 2026",
      posStart: 42,
      posEnd: 56,
      score: 0.85,
      confidence: "Medium",
      documentId: "2",
    },
    {
      id: "3",
      entityType: "DATE_TIME",
      value: "45-year-old",
      posStart: 91,
      posEnd: 102,
      score: 0.85,
      confidence: "High",
      documentId: "3",
    },
  ],
};
