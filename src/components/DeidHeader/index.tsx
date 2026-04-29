import { useTranslation } from "react-i18next";
import { PageHeaderRoot, PageHeaderSubtitle, PageHeaderTitle } from "./styles";

export default function DeidHeader() {
  const { t } = useTranslation();
  return (
    <PageHeaderRoot>
      <PageHeaderTitle variant="h4">{t("deidHeader.title")}</PageHeaderTitle>
      <PageHeaderSubtitle variant="body1">
        {t("deidHeader.subtitle")}
      </PageHeaderSubtitle>
    </PageHeaderRoot>
  );
}
