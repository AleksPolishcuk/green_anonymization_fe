import { Typography } from "@mui/material";
import { AutoAwesomeOutlined } from "@mui/icons-material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { COMPLIANCE_FRAMEWORKS } from "constants/MainPages";
import { ProFeatureModal } from "components/ProFeatureModal";
import { Loader } from "shared/ui/Loader";

import {
  SectionRoot,
  Card,
  CardHeader,
  CardHeaderIcon,
  CardHeaderText,
  CardTitle,
  CardSubtitle,
  SourceDocumentSelect,
  DocumentIconBox,
  DocumentName,
  StatusBadge,
  MetaGrid,
  MetaItem,
  MetaIcon,
  MetaText,
  MetaLabel,
  PreviewBox,
  PreviewHeader,
  PreviewHeaderLeft,
  PreviewIcon,
  PreviewText,
  PreviewContent,
  PreviewToggleButton,
  CounterBox,
  CounterButton,
  CounterValue,
  CounterHelper,
  PreservedBox,
  PreservedTitle,
  PreservedList,
  PreservedItem,
  GenerateButton,
  SecureText,
  EmptyState,
} from "./styles";

import { useSyntheticGenerationSettings } from "./useSyntheticGenerationSettings";

export default function SyntheticGenerationSettings() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    documents,
    selectedDocument,
    recordsCount,
    maxRecordsCount,
    isPreviewExpanded,
    isLoadingDocument,
    proModalOpen,
    error,
    setIsPreviewExpanded,
    handleSelectDocument,
    handleDecrease,
    handleIncrease,
    handleProModalClose,
    handleGenerate,
  } = useSyntheticGenerationSettings();

  const getFrameworkName = (code?: string) =>
    COMPLIANCE_FRAMEWORKS.find((framework) => framework.code === code)?.name ??
    code;

  const frameworkName = getFrameworkName(selectedDocument?.chosenCompliance);

  if (isLoadingDocument) {
    return (
      <SectionRoot>
        <Card>
          <Loader />
        </Card>
      </SectionRoot>
    );
  }

  if (!selectedDocument && documents.length > 0) {
    return (
      <SectionRoot $fullWidth>
        <Card>
          <CardHeader>
            <CardHeaderIcon>
              <DescriptionOutlinedIcon />
            </CardHeaderIcon>

            <CardHeaderText>
              <CardTitle>{t("syntheticData.selectDocument.title")}</CardTitle>

              <CardSubtitle>
                {t("syntheticData.selectDocument.description")}
              </CardSubtitle>
            </CardHeaderText>
          </CardHeader>

          {documents.map((item) => (
            <SourceDocumentSelect
              key={item.id}
              onClick={() => handleSelectDocument(item.id)}
              role="button"
            >
              <DocumentIconBox>
                <DescriptionOutlinedIcon />
              </DocumentIconBox>

              <DocumentName>{item.fileName}</DocumentName>

              <StatusBadge>
                {getFrameworkName(item.chosenCompliance)}
              </StatusBadge>
            </SourceDocumentSelect>
          ))}
        </Card>
      </SectionRoot>
    );
  }

  if (error || !selectedDocument) {
    return (
      <SectionRoot $fullWidth>
        <Card>
          <EmptyState>
            <AutoAwesomeOutlined />

            <Typography variant="h5">
              {t("syntheticData.emptyState.title")}
            </Typography>

            <Typography color="text.secondary">
              {t("syntheticData.emptyState.description")}
            </Typography>

            <GenerateButton onClick={() => navigate("/deidentification")}>
              <ShieldOutlinedIcon />

              {t("syntheticData.emptyState.button")}
            </GenerateButton>
          </EmptyState>
        </Card>
      </SectionRoot>
    );
  }

  return (
    <>
      <ProFeatureModal
        open={proModalOpen}
        onClose={handleProModalClose}
        messageKey="syntheticData"
      />
      <SectionRoot>
        <Card>
          <CardHeader>
            <CardHeaderIcon>
              <DescriptionOutlinedIcon />
            </CardHeaderIcon>

            <CardHeaderText>
              <CardTitle>{t("syntheticData.sourceDocument.title")}</CardTitle>

              <CardSubtitle>
                {t("syntheticData.sourceDocument.description")}
              </CardSubtitle>
            </CardHeaderText>
          </CardHeader>

          <SourceDocumentSelect>
            <DocumentIconBox>
              <DescriptionOutlinedIcon />
            </DocumentIconBox>

            <DocumentName>{selectedDocument.fileName}</DocumentName>

            <StatusBadge>
              {t("syntheticData.sourceDocument.status")}
            </StatusBadge>
          </SourceDocumentSelect>

          <MetaGrid>
            <MetaItem>
              <MetaIcon>
                <CalendarTodayOutlinedIcon />
              </MetaIcon>

              <MetaText>
                {new Date(selectedDocument.createdAt).toLocaleDateString()}

                <MetaLabel>
                  {t("syntheticData.sourceDocument.meta.created")}
                </MetaLabel>
              </MetaText>
            </MetaItem>

            <MetaItem>
              <MetaIcon>
                <ShieldOutlinedIcon />
              </MetaIcon>

              <MetaText>
                {frameworkName}

                <MetaLabel>
                  {t("syntheticData.sourceDocument.meta.framework")}
                </MetaLabel>
              </MetaText>
            </MetaItem>

            <MetaItem>
              <MetaIcon>
                <LocalOfferOutlinedIcon />
              </MetaIcon>

              <MetaText>
                {selectedDocument.piiEntities.length}

                <MetaLabel>
                  {t("syntheticData.sourceDocument.meta.entities")}
                </MetaLabel>
              </MetaText>
            </MetaItem>

            <MetaItem>
              <MetaIcon>
                <TextSnippetOutlinedIcon />
              </MetaIcon>

              <MetaText>
                {selectedDocument.anonymizedText.length}

                <MetaLabel>
                  {t("syntheticData.sourceDocument.meta.characters")}
                </MetaLabel>
              </MetaText>
            </MetaItem>
          </MetaGrid>

          <PreviewBox>
            <PreviewHeader>
              <PreviewHeaderLeft>
                <PreviewIcon>
                  <AutoAwesomeOutlined />
                </PreviewIcon>

                <div>
                  <PreviewText>
                    {t("syntheticData.sourceDocument.preview.title")}
                  </PreviewText>

                  <CardSubtitle>
                    {t("syntheticData.sourceDocument.preview.description")}
                  </CardSubtitle>
                </div>
              </PreviewHeaderLeft>
            </PreviewHeader>

            <PreviewContent $expanded={isPreviewExpanded}>
              {selectedDocument.anonymizedText}
            </PreviewContent>

            <PreviewToggleButton
              type="button"
              onClick={() => setIsPreviewExpanded((prev) => !prev)}
            >
              {isPreviewExpanded
                ? t("syntheticData.sourceDocument.preview.hide")
                : t("syntheticData.sourceDocument.preview.show")}

              <KeyboardArrowDownRoundedIcon />
            </PreviewToggleButton>
          </PreviewBox>
        </Card>

        <Card>
          <CardHeader>
            <CardHeaderIcon>
              <AutoAwesomeOutlined />
            </CardHeaderIcon>

            <CardHeaderText>
              <CardTitle>{t("syntheticData.generation.title")}</CardTitle>

              <CardSubtitle>
                {t("syntheticData.generation.description")}
              </CardSubtitle>
            </CardHeaderText>
          </CardHeader>

          <Typography variant="h5">
            {t("syntheticData.generation.recordsTitle")}
          </Typography>

          <CardSubtitle>
            {t("syntheticData.generation.recordsDescription")}
          </CardSubtitle>

          <CounterBox>
            <CounterButton type="button" onClick={handleDecrease}>
              <RemoveRoundedIcon />
            </CounterButton>

            <CounterValue>{recordsCount}</CounterValue>

            <CounterButton type="button" onClick={handleIncrease}>
              <AddRoundedIcon />
            </CounterButton>
          </CounterBox>

          <CounterHelper>
            {t("syntheticData.generation.helper", { max: maxRecordsCount })}
          </CounterHelper>

          <PreservedBox>
            <PreservedTitle>
              {t("syntheticData.generation.preserved.title")}
            </PreservedTitle>

            <PreservedList>
              {[
                t("syntheticData.generation.preserved.items.structure"),
                t("syntheticData.generation.preserved.items.diagnosis"),
                t("syntheticData.generation.preserved.items.schema"),
                t("syntheticData.generation.preserved.items.statistics"),
              ].map((item) => (
                <PreservedItem key={item}>
                  <CheckCircleOutlineRoundedIcon />
                  {item}
                </PreservedItem>
              ))}
            </PreservedList>
          </PreservedBox>

          <GenerateButton onClick={handleGenerate}>
            <AutoAwesomeOutlined />
            {t("syntheticData.generation.button")}
          </GenerateButton>

          <SecureText>{t("syntheticData.generation.secure")}</SecureText>
        </Card>
      </SectionRoot>
    </>
  );
}
