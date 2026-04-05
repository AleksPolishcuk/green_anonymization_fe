import styled from "styled-components";

import { headerCta, headerInteraction } from "shared/constants/header";
import { theme as appTheme } from "shared/theme/theme";

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
  font-size: ${appTheme.typography.h6.fontSize};
  line-height: ${appTheme.typography.button.lineHeight};
  font-weight: ${appTheme.typography.fontWeightMedium};
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
