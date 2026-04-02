import styled from "styled-components";

import {
  headerLogoDesktop,
  headerLogoLockBreakpointPx,
  headerLogoViewBox,
} from "components/Header/constants";

const vw = headerLogoViewBox.width;
const vh = headerLogoViewBox.height;

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
    aspect-ratio: ${vw} / ${vh};
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
