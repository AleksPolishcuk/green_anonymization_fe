import { useTranslation } from "react-i18next";
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
  LoaderRow,
} from "./syntheticDataGeneratedDataset.styles";
import { headerSpriteRef, FINDINGS_PAGE_SIZE } from "constants/MainPages";
import { Loader } from "shared/ui/Loader";
import { useAppSelector } from "store/hooks";
import { useSyntheticDataContents } from "./useSyntheticDataContents";
import { useScroll } from "components/DeidOutput/hooks/useScroll";

export default function SyntheticDataGeneratedDataset() {
  const { t } = useTranslation("translation", {
    keyPrefix: "syntheticDataGeneratedDataset",
  });

  const { syntheticDocuments } = useAppSelector((state) => state.syntheticData);
  const { handleRegenerate, handleDownload, handleTableDownload } =
    useSyntheticDataContents();

  const {
    visibleItems: visibleDocuments,
    hasMore,
    loaderRef,
  } = useScroll({
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
            <ActionButton onClick={() => handleDownload("txt")}>
              <ActionButtonIconWrapper>
                <use href={headerSpriteRef("icon-IconDownload")} />
              </ActionButtonIconWrapper>
              {t("downloadArchiveButton")}
            </ActionButton>
          </ActionButtonsContainer>
        </TableHeaderColumnButtons>
      </TableHeader>

      <TableScrollWrapper>
        <StyledTable>
          <thead>
            <tr>
              <Th>{t("columns.id")}</Th>
              {syntheticDocuments?.[0]?.entities.map((entity) => (
                <Th key={entity.entity_type}>{entity.entity_type}</Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleDocuments?.map((doc, rowIndex) => (
              <Tr key={doc.id}>
                <Td>{rowIndex + 1}</Td>
                {doc.entities.map((entity) => (
                  <Td key={`${doc.id}-${entity.entity_type}`}>
                    {entity.value}
                  </Td>
                ))}
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
      <DataSafetyInfoWrapper>
        <DataSafetyInfoIconWrapper>
          <use href={headerSpriteRef("icon-IconComplianceSafe")} />
        </DataSafetyInfoIconWrapper>
        <TableStats>{t("dataSafetyInfo")}</TableStats>
      </DataSafetyInfoWrapper>
    </TableCard>
  );
}
