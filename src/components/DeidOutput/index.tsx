import { useTranslation } from "react-i18next";
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
import {
  parseTextWithEntities,
  parseTextWithRedactions,
  type Entity,
} from "./utils/parsers";
import { headerSpriteRef } from "constants/MainPages";
import { useDownloadRedactedTextCopy } from "./hooks/useDownloadRedactedTextCopy";

export default function DeidOutputSection() {
  const { t } = useTranslation("deIdentify");

  // TODO: Replace with state saved in Redux from previous step
  const originalText =
    "Patient: Dr. Sarah Johnson Date of Visit: March 15, 2026 Chief Complaint: The patient is a 45-year-old female presenting with persistent headaches.";
  const mockEntities: Entity[] = [
    {
      analysis_explanation: null,
      end: 26,
      entity_type: "PERSON",
      score: 0.85,
      start: 13,
    },
    {
      analysis_explanation: null,
      end: 56,
      entity_type: "DATE_TIME",
      score: 0.85,
      start: 42,
    },
    {
      analysis_explanation: null,
      end: 102,
      entity_type: "DATE_TIME",
      score: 0.85,
      start: 91,
    },
  ];
  const entityCount = mockEntities.length;

  const originalSegments = parseTextWithEntities(originalText, mockEntities);
  const redactedSegments = parseTextWithRedactions(originalText, mockEntities);

  const { downloadAsJson, downloadAsText, copyToClipboard } =
    useDownloadRedactedTextCopy();

  const handleDownloadJson = () => {
    downloadAsJson(redactedSegments, "de-identified-output");
  };

  const handleDownloadText = () => {
    downloadAsText(redactedSegments, "de-identified-output");
  };

  const handleCopyText = () => {
    copyToClipboard(redactedSegments);
  };

  return (
    <DeidOutputSectionRoot>
      <DeidOutputSectionStack>
        <DeidOutputSectionCard>
          <CardHeader>
            <CardHeaderTextSection>
              <CardTitle>{t("output.originalText.title")}</CardTitle>
              <CardSubtitle>{t("output.originalText.subtitle")}</CardSubtitle>
            </CardHeaderTextSection>

            <DetectedEntityNumberBadge>
              <ExclamationMarkIconWrapper
                viewBox="0 0 11 11"
                aria-hidden="true"
              >
                <use href={headerSpriteRef("icon-IconExclamationMark")} />
              </ExclamationMarkIconWrapper>
              {entityCount + " " + t("output.originalText.entities")}
            </DetectedEntityNumberBadge>
          </CardHeader>

          <CardContent>
            <TaggedText segments={originalSegments} />
          </CardContent>
        </DeidOutputSectionCard>

        <DeidOutputSectionCard>
          <CardHeader>
            <CardHeaderTextSection>
              <CardTitle>{t("output.deIdentifiedOutput.title")}</CardTitle>
              <CardSubtitle>
                {t("output.deIdentifiedOutput.subtitle")}
              </CardSubtitle>
            </CardHeaderTextSection>
            <ComplianceBadge>
              <ComplianceSafeIconWrapper viewBox="0 0 11 11" aria-hidden="true">
                <use href={headerSpriteRef("icon-IconComplianceSafe")} />
              </ComplianceSafeIconWrapper>
              {/* TODO: Make dynamic based on selected framework */}
              {t("output.deIdentifiedOutput.hipaaCompliant")}
            </ComplianceBadge>
          </CardHeader>

          <CardContent>
            <TaggedText segments={redactedSegments} />
          </CardContent>

          <ActionButtonsContainer>
            <ActionButton onClick={handleCopyText}>
              <CopyIconWrapper viewBox="0 0 13 13" aria-hidden="true">
                <use href={headerSpriteRef("icon-IconCopy")} />
              </CopyIconWrapper>
              {t("output.deIdentifiedOutput.copy")}
            </ActionButton>

            <ActionButton onClick={handleDownloadText}>
              <DownloadIconWrapper viewBox="0 0 13 13" aria-hidden="true">
                <use href={headerSpriteRef("icon-IconDownload")} />
              </DownloadIconWrapper>
              {t("output.deIdentifiedOutput.downloadTxt")}
            </ActionButton>

            <ActionButton onClick={handleDownloadJson}>
              <DownloadIconWrapper viewBox="0 0 13 13" aria-hidden="true">
                <use href={headerSpriteRef("icon-IconDownload")} />
              </DownloadIconWrapper>
              {t("output.deIdentifiedOutput.downloadJson")}
            </ActionButton>
          </ActionButtonsContainer>
        </DeidOutputSectionCard>
      </DeidOutputSectionStack>
    </DeidOutputSectionRoot>
  );
}
