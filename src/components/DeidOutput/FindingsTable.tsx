import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { Loader } from "shared/ui/Loader";

import type { Entity } from "./types";
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
import { FINDINGS_PAGE_SIZE, headerSpriteRef } from "constants/MainPages";

type FindingsTableProps = {
  entities: Entity[];
  selectedCount: number;
  totalCount: number;
  onToggle: (id: number) => void;
};

export const FindingsTable = ({
  entities,
  selectedCount,
  totalCount,
  onToggle,
}: FindingsTableProps) => {
  const { t } = useTranslation("translation", { keyPrefix: "deidOutput" });
  const [expanded, setExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(FINDINGS_PAGE_SIZE);
  const loaderRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(false);

  const hasMore = visibleCount < entities.length;
  const visibleEntities = entities.slice(0, visibleCount);

  const loadMore = useCallback(() => {
    if (loadingRef.current) return;
    loadingRef.current = true;
    setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + FINDINGS_PAGE_SIZE, entities.length),
      );
      loadingRef.current = false;
    }, 500);
  }, [entities.length]);

  useEffect(() => {
    const node = loaderRef.current;
    if (!node || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) loadMore();
      },
      { threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [loadMore, hasMore, visibleCount, expanded]);

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
                <Th>{t("findingsTable.columns.pattern")}</Th>
                <Th>{t("findingsTable.columns.factor")}</Th>
                <Th>{t("findingsTable.columns.action")}</Th>
              </tr>
            </thead>
            <tbody>
              {visibleEntities.map((entity) => (
                <Tr key={entity.id}>
                  <Td>{entity.id}</Td>
                  <TdBold>{entity.text}</TdBold>
                  <Td>
                    {entity.startPos}–{entity.endPos}
                  </Td>
                  <Td>
                    <ScoreBadge $score={entity.score}>
                      {entity.score.toFixed(2)}
                    </ScoreBadge>
                  </Td>
                  <Td>
                    <RecognizerBadge $type={entity.recognizer}>
                      {entity.recognizer}
                    </RecognizerBadge>
                  </Td>
                  <Td>{entity.pattern}</Td>
                  <Td>{entity.factor}</Td>
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
