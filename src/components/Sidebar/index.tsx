import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

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
import { headerSpriteRef } from "constants/MainPages";
import { useSidebar } from "./useSidebar";

export default function Sidebar() {
  const { t } = useTranslation();

  const { sidebarRef, isMobileOpen, handleSidebarClick, handleNavClick } =
    useSidebar();

  return (
    <SidebarRoot
      ref={sidebarRef}
      $isMobileOpen={isMobileOpen}
      onClick={handleSidebarClick}
    >
      <SidebarLogoRow to="/" onClick={handleNavClick}>
        <SidebarLogoBox>
          <SidebarLogoIcon aria-hidden="true">
            <use href={headerSpriteRef("icon-logo-work")} />
          </SidebarLogoIcon>
        </SidebarLogoBox>

        <SidebarTextBlock $isMobileOpen={isMobileOpen}>
          <SidebarTitle variant="h5">{t("sidebar.title")}</SidebarTitle>
          <SidebarSubtitle variant="body2">
            {t("sidebar.subtitle")}
          </SidebarSubtitle>
        </SidebarTextBlock>
      </SidebarLogoRow>

      <SidebarSectionTitle $isMobileOpen={isMobileOpen}>
        {t("sidebar.workspace")}
      </SidebarSectionTitle>

      <SidebarNav>
        <SidebarNavItem
          to="/dashboard"
          $isMobileOpen={isMobileOpen}
          onClick={handleNavClick}
        >
          <SidebarNavIconBox>
            <SidebarNavIcon aria-hidden="true">
              <use href={headerSpriteRef("icon-dashboard")} />
            </SidebarNavIcon>
          </SidebarNavIconBox>
          <Typography variant="body1">{t("sidebar.dashboard")}</Typography>
        </SidebarNavItem>

        <SidebarNavItem
          to="/deidentification"
          $isMobileOpen={isMobileOpen}
          onClick={handleNavClick}
        >
          <SidebarNavIconBox>
            <SidebarNavIcon aria-hidden="true">
              <use href={headerSpriteRef("pii")} />
            </SidebarNavIcon>
          </SidebarNavIconBox>
          <Typography variant="body1">{t("sidebar.deidentify")}</Typography>
        </SidebarNavItem>

        <SidebarNavItem
          to="/syntheticdata"
          $isMobileOpen={isMobileOpen}
          onClick={handleNavClick}
        >
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
