import { useTranslation } from "react-i18next";

import { headerSpriteRef } from "constants/header";

import {
  SidebarLogoBox,
  SidebarLogoIcon,
  SidebarLogoRow,
  SidebarRoot,
  SidebarSubtitle,
  SidebarTextBlock,
  SidebarTitle,
} from "./styles";

export default function Sidebar() {
  const { t } = useTranslation();

  return (
    <SidebarRoot>
      <SidebarLogoRow to="/">
        <SidebarLogoBox>
          <SidebarLogoIcon aria-hidden="true">
            <use href={headerSpriteRef("icon-logo-work")} />
          </SidebarLogoIcon>
        </SidebarLogoBox>

        <SidebarTextBlock>
          <SidebarTitle variant="h5">{t("sidebar.title")}</SidebarTitle>
          <SidebarSubtitle variant="body2">
            {t("sidebar.subtitle")}
          </SidebarSubtitle>
        </SidebarTextBlock>
      </SidebarLogoRow>
    </SidebarRoot>
  );
}
