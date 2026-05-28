import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  TableCard,
  TableHeader,
  TableHeaderColumn,
  TableIconWrapper,
  TableTitle,
  TableStats,
  TableScrollWrapper,
  StyledTable,
  Th,
  Td,
  Tr,
  SpriteIconSvg,
  DataSafetyInfoWrapper,
  DataSafetyInfoIconWrapper,
  ActionButtonsContainer,
  ActionButton,
  ActionButtonIconWrapper,
  TableHeaderColumnButtons,
  Dropdown,
  DropdownItem,
  PaginationBar,
  PaginationButton,
  PaginationInfo,
} from "./syntheticDataGeneratedDataset.styles";
import { headerSpriteRef, FINDINGS_PAGE_SIZE } from "constants/MainPages";
import { useAppSelector } from "store/hooks";
import { useSyntheticDataContents } from "./useSyntheticDataContents";
import { usePagination } from "components/DeidOutput/hooks/usePagination";
import { useState } from "react";

export default function SyntheticDataGeneratedDataset() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { t } = useTranslation("translation", {
    keyPrefix: "syntheticDataGeneratedDataset",
  });
  const { t: tFindingsTable } = useTranslation("translation", {
    keyPrefix: "deidOutput.findingsTable",
  });

  const { syntheticDocuments } = useAppSelector((state) => state.syntheticData);
  const { handleRegenerate, handleDownload, handleTableDownload } =
    useSyntheticDataContents();

  const {
    visibleItems: visibleDocuments,
    currentPage,
    totalPages,
    goNext,
    goPrev,
    startIndex,
  } = usePagination({
    items: syntheticDocuments || [],
    pageSize: FINDINGS_PAGE_SIZE,
  });

  return (
    <TableCard>
      <TableHeader style={{ cursor: "default" }}>
        <TableHeaderColumn>
          <TableIconWrapper>
            <SpriteIconSvg aria-hidden="true">
              <use href={headerSpriteRef("icon-database")} />
            </SpriteIconSvg>
          </TableIconWrapper>
          <div>
            <TableTitle>{t("title")}</TableTitle>
            <TableStats>
              {t("subtitle", { count: syntheticDocuments?.length })}
            </TableStats>
          </div>
        </TableHeaderColumn>
        <TableHeaderColumnButtons>
          <ActionButtonsContainer>
            <ActionButton onClick={handleRegenerate}>
              <ActionButtonIconWrapper>
                <use href={headerSpriteRef("icon-IconRefresh")} />
              </ActionButtonIconWrapper>
              {t("regenerateDatasetButton")}
            </ActionButton>
            <ActionButton onClick={() => handleTableDownload()}>
              <ActionButtonIconWrapper>
                <use href={headerSpriteRef("icon-IconDownload")} />
              </ActionButtonIconWrapper>
              {t("downloadTableButton")}
            </ActionButton>
            <ActionButton onClick={(e) => setAnchorEl(e.currentTarget)}>
              <ActionButtonIconWrapper>
                <use href={headerSpriteRef("icon-IconDownload")} />
              </ActionButtonIconWrapper>
              {t("downloadArchiveButton")}
            </ActionButton>
            <Dropdown
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <DropdownItem
                key={t("formatTxt")}
                onClick={() => handleDownload("txt")}
              >
                {t("formatTxt")}
              </DropdownItem>
              <DropdownItem
                key={t("formatPdf")}
                onClick={() => handleDownload("pdf")}
              >
                {t("formatPdf")}
              </DropdownItem>
              <DropdownItem
                key={t("formatDocx")}
                onClick={() => handleDownload("docx")}
              >
                {t("formatDocx")}
              </DropdownItem>
            </Dropdown>
          </ActionButtonsContainer>
        </TableHeaderColumnButtons>
      </TableHeader>

      <TableScrollWrapper>
        <StyledTable>
          <thead>
            <tr>
              <Th>{t("columns.id")}</Th>
              {syntheticDocuments?.[0]?.entities.map((entity, entityIndex) => (
                <Th key={`${entity.entity_type}-${entityIndex}`}>
                  {entity.entity_type}
                </Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleDocuments?.map((doc, rowIndex) => (
              <Tr key={doc.id}>
                <Td>{startIndex + rowIndex + 1}</Td>
                {doc.entities.map((entity, entityIndex) => (
                  <Td
                    key={`${doc.id}-${rowIndex}-${entityIndex}-${entity.entity_type}`}
                  >
                    {entity.value}
                  </Td>
                ))}
              </Tr>
            ))}
          </tbody>
        </StyledTable>
      </TableScrollWrapper>

      {totalPages > 1 && (
        <PaginationBar>
          <PaginationButton onClick={goPrev} disabled={currentPage === 1}>
            <ChevronLeft />
            {tFindingsTable("pagination.previous")}
          </PaginationButton>
          <PaginationInfo>
            {tFindingsTable("pagination.page", {
              current: currentPage,
              total: totalPages,
            })}
          </PaginationInfo>
          <PaginationButton
            onClick={goNext}
            disabled={currentPage === totalPages}
          >
            {tFindingsTable("pagination.next")}
            <ChevronRight />
          </PaginationButton>
        </PaginationBar>
      )}

      <DataSafetyInfoWrapper>
        <DataSafetyInfoIconWrapper>
          <use href={headerSpriteRef("icon-IconComplianceSafe")} />
        </DataSafetyInfoIconWrapper>
        <TableStats>{t("dataSafetyInfo")}</TableStats>
      </DataSafetyInfoWrapper>
    </TableCard>
  );
}
