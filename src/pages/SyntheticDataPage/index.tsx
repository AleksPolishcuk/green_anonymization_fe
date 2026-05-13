import { AutoAwesomeOutlined } from "@mui/icons-material";
import {
  AIPoweredBadge,
  HeaderDescription,
  HeaderTitle,
  HeaderTopRow,
  PageHeader,
  PageRoot,
} from "./styles";
import { useTranslation } from "react-i18next";
import SyntheticGenerationSettings from "components/SyntheticGenerationSettings";

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
          ></AIPoweredBadge>
        </HeaderTopRow>

        <HeaderDescription>
          {t("syntheticData.header.description")}
        </HeaderDescription>
      </PageHeader>
      <SyntheticGenerationSettings />
    </PageRoot>
  );
}
