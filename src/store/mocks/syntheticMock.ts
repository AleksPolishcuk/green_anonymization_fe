import type { SyntheticDataDocument } from "store/types/syntheticData";

export const SYNTHETIC_DATA_DOCUMENTS_MOCK: SyntheticDataDocument[] = [
  {
    id: "doc-001",
    entities: [
      {
        id: "entity-001",
        syntheticDataDocumentId: "doc-001",
        entity_type: "PERSON",
        value: "John Smith",
      },
      {
        id: "entity-002",
        syntheticDataDocumentId: "doc-001",
        entity_type: "EMAIL",
        value: "john.smith@example.com",
      },
      {
        id: "entity-003",
        syntheticDataDocumentId: "doc-001",
        entity_type: "PHONE",
        value: "123-456-7890",
      },
      {
        id: "entity-004",
        syntheticDataDocumentId: "doc-001",
        entity_type: "MRN",
        value: "987654321",
      },
      {
        id: "entity-005",
        syntheticDataDocumentId: "doc-001",
        entity_type: "DATE_TIME",
        value: "1979-05-15",
      },
    ],
  },
  {
    id: "doc-002",
    entities: [
      {
        id: "entity-006",
        syntheticDataDocumentId: "doc-002",
        entity_type: "PERSON",
        value: "Sarah Johnson",
      },
      {
        id: "entity-007",
        syntheticDataDocumentId: "doc-002",
        entity_type: "EMAIL",
        value: "sarah.j@hospital.org",
      },
      {
        id: "entity-008",
        syntheticDataDocumentId: "doc-002",
        entity_type: "PHONE",
        value: "555-123-4567",
      },
      {
        id: "entity-009",
        syntheticDataDocumentId: "doc-002",
        entity_type: "MRN",
        value: "456789012",
      },
      {
        id: "entity-010",
        syntheticDataDocumentId: "doc-002",
        entity_type: "DATE_TIME",
        value: "1993-11-22",
      },
    ],
  },
  {
    id: "doc-003",
    entities: [
      {
        id: "entity-011",
        syntheticDataDocumentId: "doc-003",
        entity_type: "PERSON",
        value: "Michael Chen",
      },
      {
        id: "entity-012",
        syntheticDataDocumentId: "doc-003",
        entity_type: "EMAIL",
        value: "m.chen@clinic.net",
      },
      {
        id: "entity-013",
        syntheticDataDocumentId: "doc-003",
        entity_type: "PHONE",
        value: "777-888-9999",
      },
      {
        id: "entity-014",
        syntheticDataDocumentId: "doc-003",
        entity_type: "MRN",
        value: "234567890",
      },
      {
        id: "entity-015",
        syntheticDataDocumentId: "doc-003",
        entity_type: "DATE_TIME",
        value: "1967-03-10",
      },
    ],
  },
];
