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
  const { t } = useTranslation();

  return (
    <>
      <ShieldLogo>
        <ShieldIcon />
      </ShieldLogo>
      <WelcomeHeading>
        {t("register.hero.title1")}
        <br />
        {t("register.hero.title2")}
      </WelcomeHeading>

      <EnterpriseParagraph>
        {t("register.hero.description")}
      </EnterpriseParagraph>
      <TestimonialCard>
        <TestimonialText>{t("register.testimonial.text")}</TestimonialText>

        <ProfileRow>
          <ProfileCircle>
            <ProfileInitials>
              {t("register.testimonial.initials")}
            </ProfileInitials>
          </ProfileCircle>

          <ProfileTextContainer>
            <ProfileName>{t("register.testimonial.author")}</ProfileName>
            <ProfileRole>{t("register.testimonial.role")}</ProfileRole>
          </ProfileTextContainer>
        </ProfileRow>
      </TestimonialCard>
    </>
  );
}
