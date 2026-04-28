export interface Entity {
  start: number;
  end: number;
  entity_type: string;
  score: number;
  analysis_explanation: string | null;
}

export interface TextSegment {
  type: "text" | "entity" | "redacted";
  content: string;
  entity?: Entity;
}

export const parseTextWithEntities = (
  text: string,
  entities: Entity[],
): TextSegment[] => {
  if (!entities || entities.length === 0) {
    return [{ type: "text", content: text }];
  }

  const segments: TextSegment[] = [];
  let lastIndex = 0;

  const sortedEntities = [...entities].sort((a, b) => a.start - b.start);

  sortedEntities.forEach((entity) => {
    if (lastIndex < entity.start) {
      segments.push({
        type: "text",
        content: text.substring(lastIndex, entity.start),
      });
    }

    segments.push({
      type: "entity",
      content: text.substring(entity.start, entity.end),
      entity,
    });

    lastIndex = entity.end;
  });

  if (lastIndex < text.length) {
    segments.push({
      type: "text",
      content: text.substring(lastIndex),
    });
  }

  return segments;
};

export const parseTextWithRedactions = (
  text: string,
  entities: Entity[],
): TextSegment[] => {
  if (!entities || entities.length === 0) {
    return [{ type: "text", content: text }];
  }

  const segments: TextSegment[] = [];
  let lastIndex = 0;

  const sortedEntities = [...entities].sort((a, b) => a.start - b.start);

  sortedEntities.forEach((entity) => {
    if (lastIndex < entity.start) {
      segments.push({
        type: "text",
        content: text.substring(lastIndex, entity.start),
      });
    }

    segments.push({
      type: "redacted",
      content: "[" + entity.entity_type + "]",
      entity,
    });

    lastIndex = entity.end;
  });

  if (lastIndex < text.length) {
    segments.push({
      type: "text",
      content: text.substring(lastIndex),
    });
  }

  return segments;
};
