import styled, { css } from "styled-components";

import { headerCta, headerInteraction } from "shared/constants/header";
import { theme as appTheme } from "shared/theme/theme";

export const AuthActionsRow = styled.div<{ $isCompact: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${appTheme.spacing(4)};

  ${({ $isCompact }) =>
    $isCompact &&
    css`
      width: 100%;
      flex-direction: column;
      align-items: stretch;
    `}
`;

export const SignInLink = styled.a`
  box-sizing: border-box;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${headerCta.getStartedHeightPx}px;
  padding: ${headerCta.getStartedPadding};
  border-radius: ${headerCta.buttonBorderRadiusPx}px;
  border: 1px solid transparent;
  background: transparent;
  color: ${headerCta.signInColor};
  font-family: ${appTheme.typography.fontFamily};
  text-decoration: none;
  font-size: ${appTheme.typography.h6.fontSize};
  line-height: ${appTheme.typography.button.lineHeight};
  font-weight: ${appTheme.typography.fontWeightMedium};
  white-space: nowrap;
  transition:
    background-color ${headerInteraction.transitionButtonSeconds}s
      ${headerInteraction.easingStandard},
    border-color ${headerInteraction.transitionButtonSeconds}s
      ${headerInteraction.easingStandard},
    box-shadow ${headerInteraction.transitionButtonSeconds}s
      ${headerInteraction.easingStandard},
    color ${headerInteraction.transitionButtonSeconds}s
      ${headerInteraction.easingStandard};

  &:hover {
    background-color: ${headerCta.getStartedHoverBackground};
    border-color: ${headerCta.getStartedHoverBackground};
    box-shadow: ${headerCta.getStartedHoverBoxShadow};
    color: ${headerCta.getStartedColor};
  }

  &:active {
    background-color: ${appTheme.palette.primary.main};
    border-color: ${appTheme.palette.primary.main};
    box-shadow: ${headerCta.getStartedBoxShadow};
    color: ${headerCta.getStartedColor};
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

export const GetStartedButton = styled.button<{ $isCompact?: boolean }>`
  box-sizing: border-box;
  margin: 0;
  border: none;
  appearance: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${headerCta.buttonBorderRadiusPx}px;
  padding: ${headerCta.getStartedPadding};
  background-color: ${appTheme.palette.primary.main};
  color: ${headerCta.getStartedColor};
  font-family: ${appTheme.typography.fontFamily};
  font-size: ${appTheme.typography.h6.fontSize};
  font-weight: ${appTheme.typography.button.fontWeight};
  line-height: ${appTheme.typography.button.lineHeight};
  white-space: nowrap;
  box-shadow: ${headerCta.getStartedBoxShadow};
  text-transform: none;
  flex-shrink: 0;

  ${({ $isCompact }) =>
    $isCompact
      ? css`
          width: 100%;
          height: auto;
          min-height: ${headerCta.getStartedHeightPx}px;
        `
      : css`
          width: ${headerCta.getStartedWidthPx}px;
          height: ${headerCta.getStartedHeightPx}px;
        `}

  transition:
    background-color ${headerInteraction.transitionButtonSeconds}s ${headerInteraction.easingStandard},
    box-shadow ${headerInteraction.transitionButtonSeconds}s ${headerInteraction.easingStandard};

  &:hover {
    background-color: ${headerCta.getStartedHoverBackground};
    box-shadow: ${headerCta.getStartedHoverBoxShadow};
  }

  &:active {
    background-color: ${appTheme.palette.primary.main};
    box-shadow: ${headerCta.getStartedBoxShadow};
  }

  &:focus-visible {
    outline: ${headerInteraction.focusRingWidthPx}px solid
      ${headerCta.getStartedColor};
    outline-offset: ${headerInteraction.focusRingButtonOffsetPx}px;
    box-shadow:
      ${headerCta.getStartedBoxShadow},
      ${headerInteraction.focusRingStrongShadow};
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
