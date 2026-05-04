export type Entity = {
  id: number;
  text: string;
  startPos: number;
  endPos: number;
  score: number;
  recognizer: string;
  pattern: string;
  factor: string;
  selected: boolean;
};

export type AnalysisData = {
  originalText: string;
  entities: Entity[];
  complianceFramework: string;
  accuracy: number;
};
