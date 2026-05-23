import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";

import {
  SidebarExitIcon,
  SidebarLogoBox,
  SidebarLogoIcon,
  SidebarLogoRow,
  SidebarNav,
  SidebarNavIcon,
  SidebarNavIconBox,
  SidebarNavItem,
  SidebarProfileContainer,
  SidebarProfileIcon,
  SidebarProfileTextContainer,
  SidebarProFileTextHeading,
  SidebarProFileTextSubtitle,
  SidebarRoot,
  SidebarSectionTitle,
  SidebarSubtitle,
  SidebarTextBlock,
  SidebarTitle,
  SubNavStepIcon,
  SubNavItem,
  SubNavList,
  SubNavChevron,
  SubNavStepLabel,
  ThemeToggleContainer,
} from "./styles";
import { useAppSelector } from "store/hooks";
import { logout } from "store/slices/authSlice";
import { useAppDispatch } from "store/hooks";
import { useNavigate } from "react-router-dom";
import { DEID_STEPS, headerSpriteRef } from "constants/MainPages";
import { useSidebar } from "./useSidebar";
import type { DeidStep } from "store/types/document";
import { ThemeToggle } from "components/ThemeToggle";

const DEID_STEP_LABELS: Record<DeidStep, string> = {
  framework: "sidebar.deidSteps.framework",
  dataSource: "sidebar.deidSteps.dataSource",
  results: "sidebar.deidSteps.results",
};

export default function Sidebar() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth?.user);
  const handleExitClick = () => {
    dispatch(logout());
    navigate("/");
  };
  const location = useLocation();
  const currentStep = useAppSelector((s) => s.document.currentStep);

  const {
    sidebarRef,
    isMobileOpen,
    handleSidebarClick,
    handleNavClick,
    formatEmail,
  } = useSidebar();

  const isDeidPage = location.pathname === "/deidentification";
  const effectiveStep = currentStep ?? DEID_STEPS[0];
  const currentStepIndex = DEID_STEPS.indexOf(effectiveStep);

  return (
    <SidebarRoot
      ref={sidebarRef}
      $isMobileOpen={isMobileOpen}
      onClick={handleSidebarClick}
      data-tour="sidebar"
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
              const isActive = step === effectiveStep;
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
                  <SubNavStepLabel $isMobileOpen={isMobileOpen}>
                    {t(DEID_STEP_LABELS[step])}
                  </SubNavStepLabel>
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
      <ThemeToggleContainer>
        <ThemeToggle />
      </ThemeToggleContainer>
      <SidebarProfileContainer>
        <SidebarProfileIcon>
          {user?.firstName.charAt(0)}
          {user?.lastName.charAt(0)}
        </SidebarProfileIcon>

        <SidebarProfileTextContainer>
          <SidebarProFileTextHeading>
            {user?.firstName} {user?.lastName}
          </SidebarProFileTextHeading>

          <SidebarProFileTextSubtitle title={user?.email}>
            {formatEmail(user?.email)}
          </SidebarProFileTextSubtitle>
        </SidebarProfileTextContainer>

        <SidebarExitIcon onClick={handleExitClick}>
          <use href={headerSpriteRef("icon-exit")} />
        </SidebarExitIcon>
      </SidebarProfileContainer>
    </SidebarRoot>
  );
}
