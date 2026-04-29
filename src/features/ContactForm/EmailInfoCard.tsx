import { useTranslation } from "react-i18next";

import { EmailIcon } from "assets/icons/EmailIcon";
import {
  EmailAddress,
  EmailCard,
  EmailIconWrapper,
  EmailLabel,
} from "./styles";

type EmailInfoCardProps = {
  className?: string;
};

export const EmailInfoCard = ({ className }: EmailInfoCardProps) => {
  const { t } = useTranslation();

  return (
    <EmailCard className={className}>
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
