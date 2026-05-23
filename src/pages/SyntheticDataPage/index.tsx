import { useTranslation } from "react-i18next";

import SyntheticDataContents from "components/SyntheticDataContents";
import SyntheticGenerationSettings from "components/SyntheticGenerationSettings";

import {
  HeaderDescription,
  HeaderTitle,
  HeaderTopRow,
  PageHeader,
  PageRoot,
} from "./styles";
import DriverStyles from "components/WorkflowTour/DriverStyles";

export default function SyntheticDataPage() {
  const { t } = useTranslation();

  return (
    <PageRoot>
      <DriverStyles />
      <PageHeader>
        <HeaderTopRow>
          <HeaderTitle variant="h4">
            {t("syntheticData.header.title")}
          </HeaderTitle>
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
