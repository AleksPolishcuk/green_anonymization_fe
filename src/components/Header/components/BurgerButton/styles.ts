import { IconButton } from "@mui/material";
import styled from "styled-components";

import {
  headerModal,
  headerDesktopAuthBreakpointPx,
  headerInteraction,
} from "components/Header/constants";

export const MobileOnlyBurgerButton = styled(IconButton)`
  &.MuiIconButton-root {
    flex-shrink: 0;
    padding: 0;
    border-radius: ${headerInteraction.iconButtonRadiusPx}px;
    color: inherit;
    transition:
      background-color ${headerInteraction.transitionFastSeconds}s ${headerInteraction.easingStandard},
      transform ${headerInteraction.transitionFastSeconds}s ${headerInteraction.easingOut},
      box-shadow ${headerInteraction.transitionFastSeconds}s ${headerInteraction.easingStandard};

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
