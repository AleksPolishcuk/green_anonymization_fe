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
} from "./styles";
import { TaggedText } from "./taggedText";
import {
  parseTextWithEntities,
  parseTextWithRedactions,
  type Entity,
} from "./utils/parsers";
import ExclamationMarkIcon from "assets/icons/ExclamationMarkIcon";
import ComplianceSafeIcon from "assets/icons/ComplianceSafeIcon";
import CopyIcon from "assets/icons/CopyIcon";
import DownloadIcon from "assets/icons/DownloadIcon";

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
              <ExclamationMarkIcon />
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
              <ComplianceSafeIcon />
              {/* TODO: Make dynamic based on selected framework */}
              {t("output.deIdentifiedOutput.hipaaCompliant")}
            </ComplianceBadge>
          </CardHeader>

          <CardContent>
            <TaggedText segments={redactedSegments} />
          </CardContent>

          <ActionButtonsContainer>
            <ActionButton>
              <CopyIcon />
              {t("output.deIdentifiedOutput.copy")}
            </ActionButton>

            <ActionButton>
              <DownloadIcon />
              {t("output.deIdentifiedOutput.downloadTxt")}
            </ActionButton>

            <ActionButton>
              <DownloadIcon />
              {t("output.deIdentifiedOutput.downloadJson")}
            </ActionButton>
          </ActionButtonsContainer>
        </DeidOutputSectionCard>
      </DeidOutputSectionStack>
    </DeidOutputSectionRoot>
  );
}
