import { useTranslation } from "react-i18next";

import { EmailIcon } from "assets/icons/EmailIcon";
import {
  EmailAddress,
  EmailCard,
  EmailIconWrapper,
  EmailLabel,
} from "../styles";

export const EmailInfoCard = () => {
  const { t } = useTranslation();

  return (
    <EmailCard>
      <EmailIconWrapper>
        <EmailIcon />
      </EmailIconWrapper>
      <div>
        <EmailLabel>{t("contactUsPage.emailCard.label")}</EmailLabel>
        <EmailAddress>{t("contactUsPage.emailCard.infoEmail")}</EmailAddress>
        <EmailAddress>{t("contactUsPage.emailCard.supportEmail")}</EmailAddress>
      </div>
    </EmailCard>
  );
};
