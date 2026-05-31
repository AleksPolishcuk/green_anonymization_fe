import { useTranslation } from "react-i18next";
import { NoteAddOutlined } from "@mui/icons-material";

import { headerSpriteRef } from "constants/MainPages";

import {
  HeaderCard,
  HeaderTitle,
  HeaderStats,
  AccuracyBadge,
  SpriteIconSvg,
} from "./analysisStyles";
import { LimitReachedModal } from "components/LimitReachedModal";
import { FindingsTable } from "./FindingsTable";
import { useDeidOutput } from "./hooks/useDeidOutput";
import {
  DeidOutputSectionCard,
  DeidOutputSectionRoot,
  DeidOutputSectionStack,
  DeidOutputTopActions,
  CreateNewDocumentButton,
  CardHeader,
  CardHeaderTextSection,
  CardTitle,
  CardSubtitle,
  ComplianceBadge,
  CardContent,
  ActionButtonsContainer,
  ActionButton,
  DetectedEntityNumberBadge,
  ExclamationMarkIconWrapper,
  ComplianceSafeIconWrapper,
  CopyIconWrapper,
  BackArrowIconWrapper,
  Dropdown,
  DropdownItem,
} from "./styles";
import { TaggedText } from "./taggedText";
import CtaSynthetycBlock from "components/CtaSynthetycBlock";
import { ActionButtonIconWrapper } from "../SyntheticDataContents/syntheticDataGeneratedDataset.styles";

export default function DeidOutputSection() {
  const { t } = useTranslation("translation", { keyPrefix: "deidOutput" });
  const {
    piiEntities,
    originalText,
    entityCount,
    selectedCount,
    accuracy,
    frameworkName,
    originalSegments,
    redactedSegments,
    toggleEntity,
    handleCopyText,
    handleBack,
    handleCreateNewDocument,
    anchorEl,
    setAnchorEl,
    handleDownload,
    editLimitModalOpen,
    handleCloseEditLimitModal,
  } = useDeidOutput();

  return (
    <DeidOutputSectionRoot>
      <HeaderCard>
        <div>
          <HeaderTitle>{t("header.title")}</HeaderTitle>
          <HeaderStats>
            {t("header.stats", {
              totalCount: entityCount,
              selectedCount,
              framework: frameworkName,
            })}
          </HeaderStats>
        </div>
        <AccuracyBadge>
          <SpriteIconSvg aria-hidden="true">
            <use href={headerSpriteRef("icon-accuracy-check")} />
          </SpriteIconSvg>
          {t("header.accuracy", { value: accuracy })}
        </AccuracyBadge>
      </HeaderCard>

      <DeidOutputTopActions>
        <CreateNewDocumentButton onClick={handleCreateNewDocument}>
          <NoteAddOutlined />
          {t("newDocument")}
        </CreateNewDocumentButton>
      </DeidOutputTopActions>

      <DeidOutputSectionStack>
        <DeidOutputSectionCard>
          <CardHeader>
            <CardHeaderTextSection>
              <CardTitle>{t("originalText.title")}</CardTitle>
              <CardSubtitle>{t("originalText.subtitle")}</CardSubtitle>
            </CardHeaderTextSection>

            <DetectedEntityNumberBadge>
              <ExclamationMarkIconWrapper
                viewBox="0 0 11 11"
                aria-hidden="true"
              >
                <use href={headerSpriteRef("icon-IconExclamationMark")} />
              </ExclamationMarkIconWrapper>
              {entityCount + " " + t("originalText.entities")}
            </DetectedEntityNumberBadge>
          </CardHeader>

          <CardContent data-tour="original-text">
            <TaggedText segments={originalSegments} />
          </CardContent>

          <ActionButtonsContainer>
            <ActionButton onClick={handleBack}>
              <BackArrowIconWrapper viewBox="0 0 32 32" aria-hidden="true">
                <use href={headerSpriteRef("icon-IconArrow")} />
              </BackArrowIconWrapper>
              {t("originalText.back")}
            </ActionButton>
          </ActionButtonsContainer>
        </DeidOutputSectionCard>

        <DeidOutputSectionCard>
          <CardHeader>
            <CardHeaderTextSection>
              <CardTitle>{t("deIdentifiedOutput.title")}</CardTitle>
              <CardSubtitle>{t("deIdentifiedOutput.subtitle")}</CardSubtitle>
            </CardHeaderTextSection>
            <ComplianceBadge>
              <ComplianceSafeIconWrapper viewBox="0 0 11 11" aria-hidden="true">
                <use href={headerSpriteRef("icon-IconComplianceSafe")} />
              </ComplianceSafeIconWrapper>
              {frameworkName}
            </ComplianceBadge>
          </CardHeader>

          <CardContent data-tour="redacted-text">
            <TaggedText segments={redactedSegments} />
          </CardContent>

          <ActionButtonsContainer>
            <ActionButton onClick={handleCopyText}>
              <CopyIconWrapper viewBox="0 0 13 13" aria-hidden="true">
                <use href={headerSpriteRef("icon-IconCopy")} />
              </CopyIconWrapper>
              {t("deIdentifiedOutput.copy")}
            </ActionButton>

            <ActionButton onClick={(e) => setAnchorEl(e.currentTarget)}>
              <ActionButtonIconWrapper>
                <use href={headerSpriteRef("icon-IconDownload")} />
              </ActionButtonIconWrapper>
              {t("deIdentifiedOutput.downloadButton")}
            </ActionButton>
            <Dropdown
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <DropdownItem onClick={() => handleDownload("txt")}>
                {t("deIdentifiedOutput.formatTxt")}
              </DropdownItem>
              <DropdownItem onClick={() => handleDownload("pdf")}>
                {t("deIdentifiedOutput.formatPdf")}
              </DropdownItem>
              <DropdownItem onClick={() => handleDownload("docx")}>
                {t("deIdentifiedOutput.formatDocx")}
              </DropdownItem>
            </Dropdown>
          </ActionButtonsContainer>
        </DeidOutputSectionCard>
      </DeidOutputSectionStack>

      {piiEntities && originalText && (
        <FindingsTable
          entities={piiEntities}
          originalText={originalText}
          selectedCount={selectedCount}
          totalCount={entityCount}
          onToggle={toggleEntity}
        />
      )}
      <CtaSynthetycBlock />
      <LimitReachedModal
        open={editLimitModalOpen}
        onClose={handleCloseEditLimitModal}
        variant="edits"
      />
    </DeidOutputSectionRoot>
  );
}
