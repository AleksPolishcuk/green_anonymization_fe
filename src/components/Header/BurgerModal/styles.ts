import styled from "styled-components";
import {
  headerBar,
  headerBurgerPanelWidthPx,
  headerInteraction,
  headerModal,
  headerLayoutHorizontalPaddingPx,
  headerMobileTabletBarHeightPx,
  headerTabletBreakpointPx,
} from "shared/constants/header";
import { theme as appTheme } from "shared/theme/theme";

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  z-index: ${headerModal.overlayZIndex};
  display: block;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: opacity ${headerInteraction.overlayDurationMs}ms
    ${headerInteraction.easing};
  background: ${headerModal.overlayMobileBg};

  @media (min-width: ${headerTabletBreakpointPx}px) {
    background: ${headerModal.overlayTabletBg};
    border: none;
    -webkit-backdrop-filter: blur(${headerModal.overlayBackdropBlurPx}px)
      saturate(${headerModal.overlayBackdropSaturatePercent}%)
      brightness(${headerModal.overlayBackdropBrightness});
    backdrop-filter: blur(${headerModal.overlayBackdropBlurPx}px)
      saturate(${headerModal.overlayBackdropSaturatePercent}%)
      brightness(${headerModal.overlayBackdropBrightness});
  }

  @supports not (backdrop-filter: blur(${headerBar.supportsBlurTestPx}px)) {
    @media (min-width: ${headerTabletBreakpointPx}px) {
      background: ${headerModal.overlayTabletFallbackBg};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition-duration: ${headerModal.reducedMotionTransitionMs}ms;
  }
`;

export const Panel = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100dvh;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 0;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform ${headerInteraction.panelDurationMs}ms
    ${headerInteraction.easing};
  z-index: ${headerModal.panelZIndex};
  overflow: hidden;

  @media (min-width: ${headerTabletBreakpointPx}px) {
    left: auto;
    width: ${headerBurgerPanelWidthPx}px;
    max-width: ${headerBurgerPanelWidthPx}px;
    min-height: 100vh;
    height: 100vh;
    box-shadow: ${headerModal.panelTabletShadow};
    border-radius: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    transition-duration: ${headerModal.reducedMotionTransitionMs}ms;
  }
`;

export const ModalHeader = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: ${headerMobileTabletBarHeightPx}px;
  min-height: ${headerMobileTabletBarHeightPx}px;
  padding: 0 ${headerLayoutHorizontalPaddingPx}px;
  background: ${headerModal.headerBg};

  @media (min-width: ${headerTabletBreakpointPx}px) {
    padding: 0 ${appTheme.spacing(6)};
  }
`;

export const ModalBody = styled.div`
  box-sizing: border-box;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: ${appTheme.spacing(7.5)};
  min-height: 0;
  padding: ${headerLayoutHorizontalPaddingPx}px;
  background: ${appTheme.palette.background.default};
  overflow: auto;

  @media (min-width: ${headerTabletBreakpointPx}px) {
    padding: ${appTheme.spacing(6)};
  }
`;

export const CloseButton = styled.button`
  width: ${headerModal.closeControlSizePx}px;
  height: ${headerModal.closeControlSizePx}px;
  border: none;
  border-radius: ${headerInteraction.iconButtonRadiusPx}px;
  padding: 0;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  transition:
    background-color ${headerInteraction.transitionFastSeconds}s
      ${headerInteraction.easingStandard},
    transform ${headerInteraction.transitionFastSeconds}s
      ${headerInteraction.easingOut},
    box-shadow ${headerInteraction.transitionFastSeconds}s
      ${headerInteraction.easingStandard};

  &:hover {
    background-color: ${headerInteraction.closeButtonHoverBg};
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
`;

export const CloseIcon = styled.svg`
  width: ${headerModal.closeControlSizePx}px;
  height: ${headerModal.closeControlSizePx}px;
`;

export const ModalNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${appTheme.spacing(6)};
`;

export const ModalNavLink = styled.a`
  box-sizing: border-box;
  margin: 0;
  position: relative;
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  padding: ${headerInteraction.linkPadY}px ${headerInteraction.linkPadX}px;
  font-family: ${appTheme.typography.fontFamily};
  font-weight: ${appTheme.typography.body1.fontWeight};
  font-size: ${appTheme.typography.body1.fontSize};
  line-height: ${appTheme.typography.button.lineHeight};
  color: ${appTheme.palette.text.secondary};
  text-decoration: none;
  border-radius: ${headerInteraction.linkFocusRadiusPx}px;
  transition: color ${headerInteraction.transitionFastSeconds}s
    ${headerInteraction.easingStandard};

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
    transition: transform ${headerInteraction.navLinkUnderlineTransitionSeconds}s
      ${headerInteraction.easingOut};
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

export const ModalActions = styled.div`
  margin-top: auto;
  display: grid;
  gap: ${appTheme.spacing(3)};
`;
