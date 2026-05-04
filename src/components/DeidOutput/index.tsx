import { useState, useCallback, useMemo } from "react";
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
import { FindingsTable } from "./FindingsTable";
import type { Entity as FindingsEntity } from "./types";
import {
  HeaderCard,
  HeaderTitle,
  HeaderStats,
  AccuracyBadge,
  SpriteIconSvg,
} from "./analysisStyles";

const toFindingsEntities = (
  text: string,
  entities: Entity[],
): FindingsEntity[] =>
  entities.map((e, i) => ({
    id: i,
    text: text.slice(e.start, e.end),
    startPos: e.start,
    endPos: e.end,
    score: e.score,
    recognizer: e.entity_type,
    pattern: "Pattern",
    factor: "Medium",
    selected: true,
  }));

export default function DeidOutputSection() {
  const { t } = useTranslation("translation", { keyPrefix: "deidOutput" });

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

  const [findingsEntities, setFindingsEntities] = useState<FindingsEntity[]>(
    () => toFindingsEntities(originalText, mockEntities),
  );

  const toggleEntity = useCallback((id: number) => {
    setFindingsEntities((prev) =>
      prev.map((e) => (e.id === id ? { ...e, selected: !e.selected } : e)),
    );
  }, []);

  const selectedCount = useMemo(
    () => findingsEntities.filter((e) => e.selected).length,
    [findingsEntities],
  );

  const accuracy = useMemo(() => {
    if (findingsEntities.length === 0) return 0;
    const avg =
      findingsEntities.reduce((sum, e) => sum + e.score, 0) /
      findingsEntities.length;
    return Math.round(avg * 1000) / 10;
  }, [findingsEntities]);

  const selectedEntities = useMemo<Entity[]>(
    () =>
      findingsEntities
        .filter((e) => e.selected)
        .map((e) => ({
          start: e.startPos,
          end: e.endPos,
          entity_type: e.recognizer,
          score: e.score,
          analysis_explanation: null,
        })),
    [findingsEntities],
  );

  const originalSegments = parseTextWithEntities(originalText, mockEntities);
  const redactedSegments = parseTextWithRedactions(
    originalText,
    selectedEntities,
  );

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
      <HeaderCard>
        <div>
          <HeaderTitle>{t("header.title")}</HeaderTitle>
          <HeaderStats>
            {/* TODO: Make dynamic based on selected framework */}
            {t("header.stats", {
              totalCount: entityCount,
              selectedCount,
              framework: "HIPAA",
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
              {/* TODO: Make dynamic based on selected framework */}
              {t("deIdentifiedOutput.hipaaCompliant")}
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

      <FindingsTable
        entities={findingsEntities}
        selectedCount={selectedCount}
        totalCount={entityCount}
        onToggle={toggleEntity}
      />
    </DeidOutputSectionRoot>
  );
}
