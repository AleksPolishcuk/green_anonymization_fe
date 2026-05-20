import { useTranslation } from "react-i18next";
import { AutoAwesomeOutlined } from "@mui/icons-material";

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
