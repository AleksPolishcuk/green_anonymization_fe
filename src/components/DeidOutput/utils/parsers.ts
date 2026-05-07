import type { Entity } from "store/types/document";

export interface TextSegment {
  type: "text" | "entity" | "redacted";
  content: string;
  entity?: Entity;
}

type SegmentBuilder = (entity: Entity, entityText: string) => TextSegment;

const buildSegments = (
  text: string,
  entities: Entity[],
  buildSegment: SegmentBuilder,
): TextSegment[] => {
  if (!entities || entities.length === 0) {
    return [{ type: "text", content: text }];
  }

  const segments: TextSegment[] = [];
  let lastIndex = 0;

  const sortedEntities = [...entities].sort((a, b) => a.start - b.end);

  sortedEntities.forEach((entity) => {
    if (lastIndex < entity.start) {
      segments.push({
        type: "text",
        content: text.substring(lastIndex, entity.start),
      });
    }

    segments.push(
      buildSegment(entity, text.substring(entity.start, entity.end)),
    );
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

export const parseTextWithEntities = (
  text: string,
  entities: Entity[],
): TextSegment[] => {
  return buildSegments(text, entities, (entity, entityText) => ({
    type: "entity",
    content: entityText,
    entity,
  }));
};

export const parseTextWithRedactions = (
  text: string,
  entities: Entity[],
): TextSegment[] => {
  return buildSegments(text, entities, (entity) => ({
    type: "redacted",
    content: `[${entity.entityType}]`,
    entity,
  }));
};
