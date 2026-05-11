import { useTranslation } from "react-i18next";
import { PageHeaderRoot, PageHeaderSubtitle, PageHeaderTitle } from "./styles";

export default function SyntheticDataHeader() {
  const { t } = useTranslation("translation", {
    keyPrefix: "syntheticDataHeader",
  });
  return (
    <PageHeaderRoot>
      <PageHeaderTitle variant="h4">{t("title")}</PageHeaderTitle>
      <PageHeaderSubtitle variant="body1">{t("subtitle")}</PageHeaderSubtitle>
    </PageHeaderRoot>
  );
}
