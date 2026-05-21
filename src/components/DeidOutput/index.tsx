import { useTranslation } from "react-i18next";

import { headerSpriteRef } from "constants/MainPages";

import {
  HeaderCard,
  HeaderTitle,
  HeaderStats,
  AccuracyBadge,
  SpriteIconSvg,
} from "./analysisStyles";
import { FindingsTable } from "./FindingsTable";
import { useDeidOutput } from "./hooks/useDeidOutput";
import { useChangeDetection } from "shared/hooks/useChangeDetection";
import {
  DeidOutputSectionCard,
  DeidOutputSectionRoot,
  DeidOutputSectionStack,
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
  DownloadIconWrapper,
} from "./styles";
import { TaggedText } from "./taggedText";
import CtaSynthetycBlock from "components/CtaSynthetycBlock";

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
    handleSave,
    handleDownloadPdf,
  } = useDeidOutput();

  const { hasChanges, resetChanges } = useChangeDetection({
    piiEntities,
    selectedCount,
  });

  const handleSaveClick = () => {
    handleSave();
    resetChanges();
  };

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

            <ActionButton onClick={handleDownloadPdf}>
              <DownloadIconWrapper viewBox="0 0 13 13" aria-hidden="true">
                <use href={headerSpriteRef("icon-IconDownload")} />
              </DownloadIconWrapper>
              {t("deIdentifiedOutput.downloadPdf")}
            </ActionButton>

            <ActionButton onClick={handleSaveClick} disabled={!hasChanges}>
              {t("deIdentifiedOutput.saveButtonText")}
            </ActionButton>
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
    </DeidOutputSectionRoot>
  );
}
