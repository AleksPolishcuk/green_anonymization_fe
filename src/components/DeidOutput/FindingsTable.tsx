import { useState } from "react";
import { useTranslation } from "react-i18next";

import { FINDINGS_PAGE_SIZE, headerSpriteRef } from "constants/MainPages";
import { Loader } from "shared/ui/Loader";
import type { Entity } from "store/types/document";

import {
  TableCard,
  TableHeader,
  TableHeaderLeft,
  TableIconWrapper,
  TableTitle,
  TableStats,
  TableScrollWrapper,
  StyledTable,
  Th,
  Td,
  TdBold,
  Tr,
  ScoreBadge,
  RecognizerBadge,
  ToggleButton,
  CollapseArrow,
  LoaderRow,
  SpriteIconSvg,
} from "./analysisStyles";
import { useScroll } from "./hooks/useScroll";

type FindingsTableProps = {
  entities: Entity[];
  originalText: string;
  selectedCount: number;
  totalCount: number;
  onToggle: (id: string) => void;
};

export const FindingsTable = ({
  entities,
  originalText,
  selectedCount,
  totalCount,
  onToggle,
}: FindingsTableProps) => {
  const { t } = useTranslation("translation", { keyPrefix: "deidOutput" });
  const [expanded, setExpanded] = useState(false);

  const {
    visibleItems: visibleEntities,
    hasMore,
    loaderRef,
  } = useScroll({
    items: entities,
    pageSize: FINDINGS_PAGE_SIZE,
    enabled: expanded,
  });

  return (
    <TableCard>
      <TableHeader onClick={() => setExpanded((prev) => !prev)}>
        <TableHeaderLeft>
          <TableIconWrapper>
            <SpriteIconSvg aria-hidden="true">
              <use href={headerSpriteRef("icon-database")} />
            </SpriteIconSvg>
          </TableIconWrapper>
          <div>
            <TableTitle>{t("findingsTable.title")}</TableTitle>
            <TableStats>
              {t("findingsTable.stats", { totalCount, selectedCount })}
            </TableStats>
          </div>
        </TableHeaderLeft>
        <CollapseArrow $expanded={expanded} />
      </TableHeader>

      {expanded && (
        <TableScrollWrapper>
          <StyledTable>
            <thead>
              <tr>
                <Th>{t("findingsTable.columns.id")}</Th>
                <Th>{t("findingsTable.columns.text")}</Th>
                <Th>{t("findingsTable.columns.position")}</Th>
                <Th>{t("findingsTable.columns.score")}</Th>
                <Th>{t("findingsTable.columns.recognizer")}</Th>
                <Th>{t("findingsTable.columns.factor")}</Th>
                <Th>{t("findingsTable.columns.action")}</Th>
              </tr>
            </thead>
            <tbody>
              {visibleEntities.map((entity) => (
                <Tr key={entity.id}>
                  <Td>{entity.id}</Td>
                  <TdBold>
                    {originalText.slice(entity.posStart, entity.posEnd)}
                  </TdBold>
                  <Td>
                    {entity.posStart}–{entity.posEnd}
                  </Td>
                  <Td>
                    <ScoreBadge $score={entity.score}>
                      {entity.score.toFixed(2)}
                    </ScoreBadge>
                  </Td>
                  <Td>
                    <RecognizerBadge $type={entity.entityType}>
                      {entity.entityType}
                    </RecognizerBadge>
                  </Td>
                  <Td>{entity.confidence}</Td>
                  <Td>
                    <ToggleButton
                      $selected={entity.selected}
                      onClick={() => onToggle(entity.id)}
                    >
                      {entity.selected
                        ? t("findingsTable.actions.selected")
                        : t("findingsTable.actions.deselected")}
                    </ToggleButton>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </StyledTable>
          {hasMore && (
            <LoaderRow ref={loaderRef}>
              <Loader />
            </LoaderRow>
          )}
        </TableScrollWrapper>
      )}
    </TableCard>
  );
};
