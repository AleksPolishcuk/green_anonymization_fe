import React from "react";
import { type TextSegment } from "./utils/parsers";
import { EntityHighlight, RedactedContent } from "./styles";
import { TextContent } from "./styles";
import { useTranslation } from "react-i18next";

interface TaggedTextProps {
  segments: TextSegment[];
}

export const TaggedText: React.FC<TaggedTextProps> = ({ segments }) => {
  const { t } = useTranslation("translation", { keyPrefix: "deidOutput" });

  return (
    <TextContent>
      {segments.map((segment, index) => {
        switch (segment.type) {
          case "entity":
            return (
              <EntityHighlight key={index} title={segment.entity?.entity_type}>
                {segment.content}
              </EntityHighlight>
            );
          case "redacted":
            return (
              <RedactedContent key={index} title={t("redactedContentTooltip")}>
                {segment.content}
              </RedactedContent>
            );
          case "text":
          default:
            return (
              <React.Fragment key={index}>{segment.content}</React.Fragment>
            );
        }
      })}
    </TextContent>
  );
};
