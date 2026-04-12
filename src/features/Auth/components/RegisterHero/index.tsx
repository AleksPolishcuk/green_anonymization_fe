import { ShieldIcon } from "assets/icons/auth/ShieldIcon";
import {
  ShieldLogo,
  WelcomeHeading,
  EnterpriseParagraph,
} from "../SignInHero/styles";
import {
  TestimonialCard,
  TestimonialText,
  ProfileRow,
  ProfileCircle,
  ProfileInitials,
  ProfileTextContainer,
  ProfileName,
  ProfileRole,
} from "./styles";
import { useTranslation } from "react-i18next";

export default function RegisterHero() {
  const { t } = useTranslation("register");

  return (
    <>
      <ShieldLogo>
        <ShieldIcon />
      </ShieldLogo>
      <WelcomeHeading>
        {t("hero.title1")}
        <br />
        {t("hero.title2")}
      </WelcomeHeading>

      <EnterpriseParagraph>{t("hero.description")}</EnterpriseParagraph>
      <TestimonialCard>
        <TestimonialText>{t("testimonial.text")}</TestimonialText>

        <ProfileRow>
          <ProfileCircle>
            <ProfileInitials>{t("testimonial.initials")}</ProfileInitials>
          </ProfileCircle>

          <ProfileTextContainer>
            <ProfileName>{t("testimonial.author")}</ProfileName>
            <ProfileRole>{t("testimonial.role")}</ProfileRole>
          </ProfileTextContainer>
        </ProfileRow>
      </TestimonialCard>
    </>
  );
}
