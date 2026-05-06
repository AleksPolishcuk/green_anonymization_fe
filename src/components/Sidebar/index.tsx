import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";

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
  SubNavStepIcon,
  SubNavItem,
  SubNavList,
  SubNavChevron,
} from "./styles";
import { DEID_STEPS, headerSpriteRef } from "constants/MainPages";
import { useSidebar } from "./useSidebar";
import { useAppSelector } from "store/hooks";
import type { DeidStep } from "store/types/document";

const DEID_STEP_LABELS: Record<DeidStep, string> = {
  framework: "sidebar.deidSteps.framework",
  dataSource: "sidebar.deidSteps.dataSource",
  results: "sidebar.deidSteps.results",
};

export default function Sidebar() {
  const { t } = useTranslation();
  const location = useLocation();
  const currentStep = useAppSelector((s) => s.document.currentStep);

  const { sidebarRef, isMobileOpen, handleSidebarClick, handleNavClick } =
    useSidebar();

  const isDeidPage = location.pathname === "/deidentification";
  const currentStepIndex = DEID_STEPS.indexOf(currentStep);

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
          <SubNavChevron>
            <ChevronRight fontSize="small" />
          </SubNavChevron>
        </SidebarNavItem>

        {isDeidPage && (
          <SubNavList $isMobileOpen={isMobileOpen}>
            {DEID_STEPS.map((step, index) => {
              const isActive = step === currentStep;
              const isCompleted = index < currentStepIndex;
              const isDisabled = index > currentStepIndex;

              return (
                <SubNavItem
                  key={step}
                  $active={isActive}
                  $disabled={isDisabled}
                >
                  <SubNavStepIcon viewBox="0 0 16 16" aria-hidden="true">
                    <use
                      href={headerSpriteRef(
                        isCompleted
                          ? "icon-step-completed"
                          : isActive
                            ? "icon-step-active"
                            : "icon-step-pending",
                      )}
                    />
                  </SubNavStepIcon>
                  {t(DEID_STEP_LABELS[step])}
                </SubNavItem>
              );
            })}
          </SubNavList>
        )}

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
