import styled from "styled-components";
import {
  headerBreakpoint,
  headerCta,
  headerDesktopAuthBreakpointPx,
  headerInteraction,
  headerLogoDesktop,
  headerLogoLockBreakpointPx,
  headerMobileGlassPaddingPx,
  headerTabletBreakpointPx,
} from "components/Header/constants";
import { theme as appTheme } from "shared/theme/theme";

export const HeaderShell = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  padding-top: 16px;
`;

export const HeaderLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 ${headerMobileGlassPaddingPx}px;

  @media (min-width: ${headerTabletBreakpointPx}px) {
    padding: 0 24px;
  }

  @media (min-width: ${headerBreakpoint}px) {
    padding: 0 32px;
  }
`;

export const HeaderFrame = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  min-width: 0;
  min-height: 0;

  @media (min-width: ${headerDesktopAuthBreakpointPx}px) {
    position: relative;
    height: 100%;
  }

  @media (min-width: ${headerBreakpoint}px) {
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
    z-index: 0;
    pointer-events: auto;
  }
`;

export const LogoSlot = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  min-width: 0;
  /* Shrink so the burger stays inside the glass (shell uses overflow hidden). */
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
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  flex-shrink: 0;
  flex-grow: 0;
`;

export const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
`;

export const NavButton = styled.a`
  box-sizing: border-box;
  margin: 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${headerInteraction.linkPadY}px ${headerInteraction.linkPadX}px;
  color: ${headerCta.signInColor};
  font-family: ${appTheme.typography.fontFamily};
  font-size: ${headerCta.signInFontSizePx}px;
  line-height: ${headerCta.signInLineHeight};
  font-weight: ${headerCta.signInFontWeight};
  text-decoration: none;
  border-radius: ${headerInteraction.linkFocusRadiusPx}px;
  transition: color ${headerInteraction.transitionFastSeconds}s ${headerInteraction.easingStandard};

  &::after {
    content: "";
    position: absolute;
    left: ${headerInteraction.linkPadX}px;
    right: ${headerInteraction.linkPadX}px;
    bottom: ${headerInteraction.navLinkUnderlineBottomPx}px;
    height: ${headerInteraction.navLinkUnderlineHeightPx}px;
    background-color: ${headerInteraction.navLinkUnderlineColor};
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.28s ${headerInteraction.easingOut};
  }

  &:hover {
    color: ${headerInteraction.linkNavHoverColor};
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:active {
    color: ${headerInteraction.linkNavHoverColor};
  }

  &:active::after {
    transform: scaleX(1);
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
`;
