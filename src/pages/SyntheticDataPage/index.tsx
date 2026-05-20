import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AutoAwesomeOutlined } from "@mui/icons-material";

import { headerRoutes } from "constants/MainPages";
import { ProFeatureModal } from "components/ProFeatureModal";
import { useFeatureAccess } from "shared/hooks/useFeatureAccess";
import SyntheticDataContents from "components/SyntheticDataContents";
import SyntheticGenerationSettings from "components/SyntheticGenerationSettings";

import {
  AIPoweredBadge,
  HeaderDescription,
  HeaderTitle,
  HeaderTopRow,
  PageHeader,
  PageRoot,
} from "./styles";

export default function SyntheticDataPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { hasSyntheticData } = useFeatureAccess();

  const handleModalClose = () => navigate(headerRoutes.dashboard);

  if (!hasSyntheticData) {
    return (
      <ProFeatureModal
        open
        onClose={handleModalClose}
        messageKey="syntheticData"
      />
    );
  }

  return (
    <PageRoot>
      <PageHeader>
        <HeaderTopRow>
          <HeaderTitle variant="h4">
            {t("syntheticData.header.title")}
          </HeaderTitle>
          <AIPoweredBadge
            icon={<AutoAwesomeOutlined />}
            label={t("syntheticData.header.badge")}
          />
        </HeaderTopRow>

        <HeaderDescription>
          {t("syntheticData.header.description")}
        </HeaderDescription>
      </PageHeader>
      <SyntheticGenerationSettings />
      <SyntheticDataContents />
    </PageRoot>
  );
}
