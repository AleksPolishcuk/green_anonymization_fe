import { IconButton } from "@mui/material";
import styled from "styled-components";

import {
  headerBar,
  headerDesktopAuthBreakpointPx,
  headerDesktopBar,
  headerInteraction,
  headerLayout,
  headerLgBreakpointPx,
  headerLogoDesktop,
  headerLogoLockBreakpointPx,
  headerLogoViewBox,
  headerLayoutHorizontalPaddingPx,
  headerMobileTabletBarHeightPx,
  headerModal,
  headerTabletBreakpointPx,
} from "shared/constants/header";
import { theme as appTheme } from "shared/theme/theme";

const logoViewW = headerLogoViewBox.width;
const logoViewH = headerLogoViewBox.height;

export const HeaderShell = styled.header`
  position: sticky;
  top: 0;
  z-index: ${headerLayout.shellZIndex};
  padding-top: ${appTheme.spacing(4)};
`;

export const HeaderLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 ${headerLayoutHorizontalPaddingPx}px;

  @media (min-width: ${headerTabletBreakpointPx}px) {
    padding: 0 ${appTheme.spacing(6)};
  }

  @media (min-width: ${headerLgBreakpointPx}px) {
    padding: 0 ${appTheme.spacing(8)};
  }
`;

export const HeaderBar = styled.div`
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  min-height: ${headerMobileTabletBarHeightPx}px;
  border-radius: ${headerDesktopBar.borderRadiusPx}px;
  padding: ${appTheme.spacing(4)} ${appTheme.spacing(6)};
  background: ${headerBar.background};
  border: ${headerBar.border};
  box-shadow: ${headerBar.boxShadow};
  -webkit-backdrop-filter: blur(${headerBar.backdropBlurPx}px)
    saturate(${headerBar.saturatePercent}%) brightness(${headerBar.brightness});
  backdrop-filter: blur(${headerBar.backdropBlurPx}px)
    saturate(${headerBar.saturatePercent}%) brightness(${headerBar.brightness});

  @supports not (backdrop-filter: blur(${headerBar.supportsBlurTestPx}px)) {
    background: ${headerBar.fallbackBackground};
    box-shadow: ${headerBar.fallbackBoxShadowNoBackdrop};
  }

  @media (min-width: ${headerLgBreakpointPx}px) {
    height: ${headerDesktopBar.heightPx}px;
    max-width: ${headerDesktopBar.widthPx}px;
    min-height: unset;
    padding: ${appTheme.spacing(4)} ${appTheme.spacing(8)};
  }
`;

export const HeaderFrame = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${appTheme.spacing(4)};
  width: 100%;
  min-width: 0;
  min-height: 0;

  @media (min-width: ${headerDesktopAuthBreakpointPx}px) {
    position: relative;
    height: 100%;
  }

  @media (min-width: ${headerLgBreakpointPx}px) {
    padding: 0;
  }
`;

export const DesktopNavCenter = styled.div`
  display: none;
  pointer-events: none;

  @media (min-width: ${headerDesktopAuthBreakpointPx}px) {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: ${headerLayout.desktopNavCenterZIndex};
    pointer-events: auto;
  }
`;

export const LogoSlot = styled.div`
  position: relative;
  z-index: ${headerLayout.logoSlotZIndex};
  display: flex;
  align-items: center;
  min-width: 0;
  /* Shrink so the burger stays inside the bar (overflow hidden on HeaderBar). */
  flex: 1 1 0;

  @media (min-width: ${headerLogoLockBreakpointPx}px) {
    flex: 0 0 ${headerLogoDesktop.widthPx}px;
    width: ${headerLogoDesktop.widthPx}px;
    min-width: ${headerLogoDesktop.widthPx}px;
    flex-shrink: 0;
  }
`;

export const HeaderTrailing = styled.div`
  position: relative;
  z-index: ${headerLayout.logoSlotZIndex};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${appTheme.spacing(3)};
  flex-shrink: 0;
  flex-grow: 0;
`;

export const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${appTheme.spacing(5.5)};
`;

export const LogoLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-width: 0;
  max-width: ${headerLogoDesktop.widthPx}px;
  width: 100%;
  text-decoration: none;
  line-height: 0;
  outline: none;

  &:focus,
  &:focus-visible {
    outline: none;
  }

  flex-shrink: 1;

  @media (min-width: ${headerLogoLockBreakpointPx}px) {
    width: ${headerLogoDesktop.widthPx}px;
    max-width: none;
    height: ${headerLogoDesktop.heightPx}px;
    flex-shrink: 0;
  }
`;

export const LogoIcon = styled.svg`
  && {
    display: block;
    overflow: visible;
    width: 100%;
    max-width: ${headerLogoDesktop.widthPx}px;
    height: auto;
    aspect-ratio: ${logoViewW} / ${logoViewH};
    flex-shrink: 1;

    @media (min-width: ${headerLogoLockBreakpointPx}px) {
      width: ${headerLogoDesktop.widthPx}px;
      min-width: ${headerLogoDesktop.widthPx}px;
      height: ${headerLogoDesktop.heightPx}px;
      min-height: ${headerLogoDesktop.heightPx}px;
      max-width: none;
      flex-shrink: 0;
      aspect-ratio: unset;
    }
  }
`;

export const MobileOnlyBurgerButton = styled(IconButton)`
  &.MuiIconButton-root {
    flex-shrink: 0;
    padding: 0;
    border-radius: ${headerInteraction.iconButtonRadiusPx}px;
    color: inherit;
    transition:
      background-color ${headerInteraction.transitionFastSeconds}s
        ${headerInteraction.easingStandard},
      transform ${headerInteraction.transitionFastSeconds}s
        ${headerInteraction.easingOut},
      box-shadow ${headerInteraction.transitionFastSeconds}s
        ${headerInteraction.easingStandard};

    &:hover {
      background-color: ${headerInteraction.iconButtonHoverBg};
      transform: scale(${headerInteraction.iconButtonScaleHover});
    }

    &:active {
      transform: scale(${headerInteraction.iconButtonScaleActive});
      background-color: ${headerInteraction.iconButtonHoverBgActive};
    }

    &:focus-visible {
      outline: ${headerInteraction.focusRingWidthPx}px solid
        ${headerInteraction.focusRingColor};
      outline-offset: ${headerInteraction.focusRingOffsetPx}px;
      box-shadow: ${headerInteraction.focusRingShadow};
    }

    &:focus:not(:focus-visible) {
      outline: none;
      box-shadow: none;
    }

    @media (min-width: ${headerDesktopAuthBreakpointPx}px) {
      display: none !important;
    }
  }
`;

export const BurgerIcon = styled.svg`
  width: ${headerModal.closeControlSizePx}px;
  height: ${headerModal.closeControlSizePx}px;
`;
