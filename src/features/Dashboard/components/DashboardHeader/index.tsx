import { useTranslation } from "react-i18next";

import {
  headerRoutes,
  headerSpriteRef,
  headerSpriteSymbolIds,
} from "constants/header";
import { useCtaNavigate } from "shared/hooks/useCtaNavigate";

import {
  ButtonSpriteIcon,
  HeaderRoot,
  HeaderSubtitle,
  HeaderTextGroup,
  HeaderTitle,
  StartDeIdButton,
} from "./styles";

export const DashboardHeader = () => {
  const { t } = useTranslation("dashboard");
  const onStartDeId = useCtaNavigate({ target: headerRoutes.signIn });

  return (
    <HeaderRoot>
      <HeaderTextGroup>
        <HeaderTitle component="h1">{t("header.title")}</HeaderTitle>
        <HeaderSubtitle>{t("header.subtitle")}</HeaderSubtitle>
      </HeaderTextGroup>

      <StartDeIdButton type="button" onClick={onStartDeId} disableElevation>
        <ButtonSpriteIcon viewBox="0 0 32 32" aria-hidden>
          <use
            href={headerSpriteRef(headerSpriteSymbolIds.dashboardDeIdShield)}
          />
        </ButtonSpriteIcon>
        {t("header.startButton")}
        <ButtonSpriteIcon viewBox="0 0 32 32" aria-hidden>
          <use
            href={headerSpriteRef(headerSpriteSymbolIds.dashboardDeIdArrow)}
          />
        </ButtonSpriteIcon>
      </StartDeIdButton>
    </HeaderRoot>
  );
};
