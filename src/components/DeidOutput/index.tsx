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
} from "./utils/parsers";
import { headerSpriteRef } from "constants/MainPages";
import { useDownloadRedactedTextCopy } from "./hooks/useDownloadRedactedTextCopy";
import { useAppSelector } from "store/hooks";

export default function DeidOutputSection() {
  const { t } = useTranslation("translation", { keyPrefix: "deidOutput" });
  const { originalText, piiEntities, selectedFramework } = useAppSelector(
    (s) => s.document,
  );

  const entities = piiEntities ?? [];
  const text = originalText ?? "";
  const entityCount = entities.length;

  const originalSegments = parseTextWithEntities(text, entities);
  const redactedSegments = parseTextWithRedactions(text, entities);

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

          <CardContent>
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
              {selectedFramework}
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
              {t("deIdentifiedOutput.copy")}
            </ActionButton>

            <ActionButton onClick={handleDownloadText}>
              <DownloadIconWrapper viewBox="0 0 13 13" aria-hidden="true">
                <use href={headerSpriteRef("icon-IconDownload")} />
              </DownloadIconWrapper>
              {t("deIdentifiedOutput.downloadTxt")}
            </ActionButton>

            <ActionButton onClick={handleDownloadJson}>
              <DownloadIconWrapper viewBox="0 0 13 13" aria-hidden="true">
                <use href={headerSpriteRef("icon-IconDownload")} />
              </DownloadIconWrapper>
              {t("deIdentifiedOutput.downloadJson")}
            </ActionButton>
          </ActionButtonsContainer>
        </DeidOutputSectionCard>
      </DeidOutputSectionStack>
    </DeidOutputSectionRoot>
  );
}
