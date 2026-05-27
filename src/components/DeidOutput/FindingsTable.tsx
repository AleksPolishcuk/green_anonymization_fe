import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import {
  DESELECT_CONFIRM_SHOWN_KEY,
  FINDINGS_PAGE_SIZE,
  headerSpriteRef,
} from "constants/MainPages";
import { BaseModal } from "components/BaseModal";
import { ProFeatureModal } from "components/ProFeatureModal";
import { useFeatureAccess } from "shared/hooks/useFeatureAccess";
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
  SpriteIconSvg,
  PaginationBar,
  PaginationButton,
  PaginationInfo,
} from "./analysisStyles";
import { usePagination } from "./hooks/usePagination";

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
  const [proModalOpen, setProModalOpen] = useState(false);
  const [pendingDeselectId, setPendingDeselectId] = useState<string | null>(
    null,
  );
  const { hasCustomRules } = useFeatureAccess();

  const handleProModalClose = () => setProModalOpen(false);

  const handleToggle = (entity: Entity) => {
    if (!hasCustomRules) {
      setProModalOpen(true);
      return;
    }
    if (entity.selected && !localStorage.getItem(DESELECT_CONFIRM_SHOWN_KEY)) {
      setPendingDeselectId(entity.id);
      return;
    }
    onToggle(entity.id);
  };

  const handleConfirmDeselect = () => {
    if (!pendingDeselectId) return;
    localStorage.setItem(DESELECT_CONFIRM_SHOWN_KEY, "true");
    onToggle(pendingDeselectId);
    setPendingDeselectId(null);
  };

  const handleCancelDeselect = () => {
    setPendingDeselectId(null);
  };

  const {
    visibleItems: visibleEntities,
    currentPage,
    totalPages,
    goNext,
    goPrev,
    startIndex,
  } = usePagination({
    items: entities,
    pageSize: FINDINGS_PAGE_SIZE,
  });

  return (
    <>
      <ProFeatureModal
        open={proModalOpen}
        onClose={handleProModalClose}
        messageKey="customRules"
      />
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
          <>
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
                  {visibleEntities.map((entity, index) => (
                    <Tr key={entity.id}>
                      <Td>{startIndex + index + 1}</Td>
                      <TdBold>
                        {originalText.slice(entity.start, entity.end)}
                      </TdBold>
                      <Td>
                        {entity.start}-{entity.end}
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
                          onClick={() => handleToggle(entity)}
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
            </TableScrollWrapper>

            {totalPages > 1 && (
              <PaginationBar>
                <PaginationButton onClick={goPrev} disabled={currentPage === 1}>
                  <ChevronLeft />
                  {t("findingsTable.pagination.previous")}
                </PaginationButton>
                <PaginationInfo>
                  {t("findingsTable.pagination.page", {
                    current: currentPage,
                    total: totalPages,
                  })}
                </PaginationInfo>
                <PaginationButton
                  onClick={goNext}
                  disabled={currentPage === totalPages}
                >
                  {t("findingsTable.pagination.next")}
                  <ChevronRight />
                </PaginationButton>
              </PaginationBar>
            )}
          </>
        )}
      </TableCard>

      <BaseModal
        open={pendingDeselectId !== null}
        onClose={handleCancelDeselect}
      >
        <DialogTitle>{t("findingsTable.deselectConfirm.title")}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t("findingsTable.deselectConfirm.body")}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ padding: 3, gap: 1 }}>
          <ToggleButton $selected={false} onClick={handleCancelDeselect}>
            {t("findingsTable.deselectConfirm.cancel")}
          </ToggleButton>
          <ToggleButton $selected onClick={handleConfirmDeselect}>
            {t("findingsTable.deselectConfirm.confirm")}
          </ToggleButton>
        </DialogActions>
      </BaseModal>
    </>
  );
};
