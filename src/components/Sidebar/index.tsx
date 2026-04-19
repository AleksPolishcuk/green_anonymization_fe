import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { headerSpriteRef } from "constants/header";

import {
  SidebarLogoBox,
  SidebarLogoIcon,
  SidebarLogoRow,
  SidebarNav,
  SidebarNavIcon,
  SidebarNavIconBox,
  SidebarNavItem,
  SidebarRoot,
  SidebarSectionTitle,
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

      <SidebarSectionTitle>
        {t("sidebar.workspace", "WORKSPACE")}
      </SidebarSectionTitle>

      <SidebarNav>
        <SidebarNavItem to="/dashboard">
          <SidebarNavIconBox>
            <SidebarNavIcon aria-hidden="true">
              <use href={headerSpriteRef("icon-dashboard")} />
            </SidebarNavIcon>
          </SidebarNavIconBox>
          <Typography variant="body1">{t("sidebar.dashboard")}</Typography>
        </SidebarNavItem>

        <SidebarNavItem to="/deidentification">
          <SidebarNavIconBox>
            <SidebarNavIcon aria-hidden="true">
              <use href={headerSpriteRef("pii")} />
            </SidebarNavIcon>
          </SidebarNavIconBox>
          <Typography variant="body1">{t("sidebar.deidentify")}</Typography>
        </SidebarNavItem>

        <SidebarNavItem to="/synthetic-data">
          <SidebarNavIconBox>
            <SidebarNavIcon aria-hidden="true">
              <use href={headerSpriteRef("synthetic")} />
            </SidebarNavIcon>
          </SidebarNavIconBox>
          <Typography variant="body1">{t("sidebar.syntheticData")}</Typography>
        </SidebarNavItem>
      </SidebarNav>
    </SidebarRoot>
  );
}
