import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

import { ContactForm } from "features/ContactForm";
import { FaqSection } from "features/FaqSection";
import { PageSubtitle, PageTitle, PageSection } from "./styles";

export default function ContactUsPage() {
  const { t } = useTranslation();

  return (
    <PageSection>
      <Container>
        <PageTitle variant="h2">{t("contactUsPage.title")}</PageTitle>
        <PageSubtitle variant="body1">
          {t("contactUsPage.subtitle")}
        </PageSubtitle>
        <ContactForm />
      </Container>
      <FaqSection />
    </PageSection>
  );
}
