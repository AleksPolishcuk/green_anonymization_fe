import { useTranslation } from "react-i18next";

import { useCtaNavigate } from "shared/hooks/useCtaNavigate";

import {
  ButtonSpriteIcon,
  HeaderRoot,
  HeaderSubtitle,
  HeaderTextGroup,
  HeaderTitle,
  StartDeIdButton,
} from "./styles";
import { headerSpriteRef, headerSpriteSymbolIds } from "constants/MainPages";

export const DashboardHeader = () => {
  const { t } = useTranslation();
  const onStartDeId = useCtaNavigate({ target: "/deidentification" });

  return (
    <HeaderRoot>
      <HeaderTextGroup>
        <HeaderTitle component="h1">{t("dashboard.header.title")}</HeaderTitle>
        <HeaderSubtitle>{t("dashboard.header.subtitle")}</HeaderSubtitle>
      </HeaderTextGroup>

      <StartDeIdButton type="button" onClick={onStartDeId} disableElevation>
        <ButtonSpriteIcon viewBox="0 0 32 32" aria-hidden>
          <use
            href={headerSpriteRef(headerSpriteSymbolIds.dashboardDeIdShield)}
          />
        </ButtonSpriteIcon>
        {t("dashboard.header.startButton")}
        <ButtonSpriteIcon viewBox="0 0 32 32" aria-hidden>
          <use
            href={headerSpriteRef(headerSpriteSymbolIds.dashboardDeIdArrow)}
          />
        </ButtonSpriteIcon>
      </StartDeIdButton>
    </HeaderRoot>
  );
};
