import { ShieldIcon } from "assets/icons/auth/ShieldIcon";
import { signinStats } from "constants/auth";
import { Trans, useTranslation } from "react-i18next";
import {
  EnterpriseParagraph,
  ShieldLogo,
  StatItem,
  StatLabel,
  Stats,
  StatValue,
  WelcomeHeading,
} from "./styles";

export default function SignInHero() {
  const { t } = useTranslation();
  return (
    <>
      <ShieldLogo>
        <ShieldIcon />
      </ShieldLogo>
      <WelcomeHeading>
        {t("signIn.hero.title1")}
        <br />
        {t("signIn.hero.title2")}
      </WelcomeHeading>

      <EnterpriseParagraph variant="body1">
        <Trans
          i18nKey={t("signIn.hero.description")}
          components={{ lineBreak: <br /> }}
        />
      </EnterpriseParagraph>

      <Stats>
        {signinStats.map((item) => (
          <StatItem key={item.labelKey}>
            <StatValue variant="h4">{t(item.valueKey)}</StatValue>
            <StatLabel variant="body2">{t(item.labelKey)}</StatLabel>
          </StatItem>
        ))}
      </Stats>
    </>
  );
}
