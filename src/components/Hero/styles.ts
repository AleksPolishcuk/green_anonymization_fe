import { Button, Typography } from "@mui/material";
import styled, { css, keyframes } from "styled-components";

import {
  heroAnimation,
  heroAssets,
  heroBreakpoints,
  heroColors,
  heroLayout,
  heroRadii,
  heroShadows,
  heroTypography,
} from "shared/constants/hero";

const enterAnimation = keyframes`
  0% {
    transform:
      translate(${heroAnimation.enterTranslateX}, ${heroAnimation.enterTranslateY})
      rotate(${heroAnimation.enterRotateStart})
      scale(${heroAnimation.enterScaleStart});
    opacity: 0.98;
  }

  55% {
    transform:
      translate(0, 0)
      rotate(${heroAnimation.enterRotateEnd})
      scale(${heroAnimation.enterScaleEnd});
    opacity: 1;
  }

  100% {
    transform:
      translate(0, 0)
      rotate(${heroAnimation.enterRotateEnd})
      scale(${heroAnimation.enterScaleEnd});
    opacity: 1;
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(${heroAnimation.floatOffsetStart});
  }

  50% {
    transform: translateY(${heroAnimation.floatOffsetMiddle});
  }

  100% {
    transform: translateY(${heroAnimation.floatOffsetEnd});
  }
`;

export const Section = styled.section`
  position: relative;
  padding: 0;
  background:
    url("${heroAssets.waveBottom}") bottom center / 100% auto no-repeat,
    radial-gradient(
      ellipse at 0% 0%,
      ${heroColors.radialTopLeft} 0%,
      transparent 60%
    ),
    radial-gradient(
      ellipse at 100% 100%,
      ${heroColors.radialBottomRight} 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 55% 40%,
      ${heroColors.radialCenter} 0%,
      transparent 45%
    ),
    linear-gradient(
      135deg,
      ${heroColors.gradientStart} 0%,
      ${heroColors.gradientMiddle} 50%,
      ${heroColors.gradientEnd} 100%
    );
`;

export const HeroGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  padding-top: ${heroLayout.heroTopPaddingMobile}px;
  padding-bottom: ${heroLayout.heroBottomPaddingMobile}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    grid-template-columns:
      minmax(0, ${heroLayout.contentGridPrimaryFraction})
      minmax(
        ${heroLayout.visualGridSecondaryMinWidth}px,
        ${heroLayout.visualGridSecondaryFraction}
      );
    column-gap: ${heroLayout.columnGapTablet}px;
    align-items: start;
    padding-left: ${heroLayout.sidePaddingTablet}px;
    padding-right: ${heroLayout.sidePaddingTablet}px;
  }

  @media (min-width: ${heroBreakpoints.laptopMin}px) and (max-width: ${heroBreakpoints.laptopMax}px) {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(
        ${heroLayout.laptopVisualMinWidth}px,
        ${heroLayout.laptopVisualMaxWidth}px
      );
    column-gap: ${heroLayout.columnGapLaptop}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    grid-template-columns:
      minmax(0, ${heroLayout.contentDesktopMaxWidth}px)
      minmax(0, ${heroLayout.visualDesktopWidth}px);
    justify-content: space-between;
    column-gap: ${heroLayout.columnGapDesktop}px;
    padding-left: ${heroLayout.sidePaddingDesktop}px;
    padding-right: ${heroLayout.sidePaddingDesktop}px;
    padding-top: ${heroLayout.heroTopPaddingDesktop}px;
    padding-bottom: ${heroLayout.heroBottomPaddingDesktop}px;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    max-width: ${heroLayout.contentDesktopMaxWidth}px;
  }
`;

export const Pill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${heroLayout.pillGap}px;
  margin-bottom: ${heroLayout.pillMarginBottom}px;
  padding: ${heroLayout.pillPaddingY}px ${heroLayout.pillPaddingX}px;
  border-radius: ${heroRadii.pill}px;
  background: ${heroColors.pillBackground};
  border: 1px solid ${heroColors.pillBorder};
  color: ${({ theme }) => theme.palette.primary.dark};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 600;
  font-size: ${heroTypography.pillFontSize};
  line-height: ${heroTypography.pillLineHeight};
  letter-spacing: ${heroTypography.pillLetterSpacing};
`;

export const PillDot = styled.span`
  width: ${heroLayout.pillGap}px;
  height: ${heroLayout.pillGap}px;
  border-radius: ${heroRadii.dot};
  flex-shrink: 0;
  background: ${({ theme }) => theme.palette.primary.dark};
`;

export const Title = styled(Typography)`
  && {
    margin: 0;
    max-width: 100%;
    font-family: ${({ theme }) => theme.typography.h1.fontFamily};
    font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
    font-size: ${heroTypography.titleMobileFontSize};
    line-height: ${heroTypography.titleMobileLineHeight};

    @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
      max-width: ${heroLayout.titleDesktopMaxWidth}px;
      font-size: ${({ theme }) => theme.typography.h1.fontSize};
      line-height: ${({ theme }) => theme.typography.h1.lineHeight};
    }
  }
`;

export const TitleAccent = styled.span`
  position: relative;
  display: inline-block;
`;

export const TitleAccentImage = styled.img`
  position: absolute;
  left: 0;
  bottom: ${heroLayout.titleAccentImageBottomOffset}px;
  display: block;
  width: 100%;
  height: auto;
  pointer-events: none;
  user-select: none;
`;

export const Description = styled(Typography)`
  && {
    margin: ${heroLayout.descriptionMarginTop}px 0 0;
    color: ${({ theme }) => theme.palette.text.secondary};
    font-weight: 400;
    font-size: ${heroTypography.descriptionFontSize};
    line-height: ${heroTypography.descriptionLineHeight};
    max-width: ${heroLayout.descriptionMobileMaxWidth}px;

    @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      max-width: ${heroLayout.descriptionTabletMaxWidth}px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
      max-width: ${heroLayout.descriptionDesktopMaxWidth}px;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${heroLayout.actionGap}px;
  margin-top: ${heroLayout.actionsMarginTop}px;
`;

const buttonBase = css`
  && {
    text-transform: none;
    font-size: ${heroTypography.primaryButtonFontSizeMobile};
  }
`;

export const PrimaryButton = styled(Button)`
  ${buttonBase};

  && {
    padding: ${heroLayout.primaryButtonPaddingYMobile}px
      ${heroLayout.primaryButtonPaddingXMobile}px;
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    box-shadow: ${heroShadows.primaryButton};

    &:hover {
      background: ${({ theme }) => theme.palette.primary.dark};
      box-shadow: ${heroShadows.primaryButtonHover};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      padding: ${heroLayout.primaryButtonPaddingYTablet}px
        ${heroLayout.primaryButtonPaddingXTablet}px;
      font-size: ${({ theme }) => theme.typography.button.fontSize};
    }
  }
`;

export const StatsRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  gap: 0;
  margin-top: ${heroLayout.statsMarginTopDesktop}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    margin-top: ${heroLayout.statsMarginTopMobile}px;
  }
`;

export const StatItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  min-width: 0;

  &:not(:last-of-type) {
    margin-right: ${heroLayout.statItemGapMobile}px;
    padding-right: ${heroLayout.statItemGapMobile}px;
  }

  &:not(:last-of-type)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: ${heroLayout.statDividerHeightMobile}px;
    background: ${({ theme }) => theme.palette.divider};
    transform: translateY(-50%);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    &:not(:last-of-type) {
      margin-right: ${heroLayout.statItemGapTablet}px;
      padding-right: ${heroLayout.statItemGapTablet}px;
    }

    &:not(:last-of-type)::after {
      height: ${heroLayout.statDividerHeightTablet}px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    &:not(:last-of-type) {
      margin-right: ${heroLayout.statItemGapDesktop}px;
      padding-right: ${heroLayout.statItemGapDesktop}px;
    }

    &:not(:last-of-type)::after {
      height: ${heroLayout.statDividerHeightDesktop}px;
    }
  }
`;

export const StatValue = styled(Typography)`
  && {
    margin: 0;
    color: ${({ theme }) => theme.palette.text.primary};
    font-family: ${({ theme }) => theme.typography.h1.fontFamily};
    font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
    font-size: ${heroTypography.statValueFontSizeMobile};
    line-height: ${heroTypography.statValueLineHeight};
    letter-spacing: ${heroTypography.statValueLetterSpacing};

    @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      font-size: ${heroTypography.statValueFontSizeTablet};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
      font-size: ${heroTypography.statValueFontSizeDesktop};
    }
  }
`;

export const StatLabel = styled(Typography)`
  && {
    margin: 0;
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: ${heroTypography.statLabelFontSizeMobile};
    line-height: ${heroTypography.statLabelLineHeight};

    @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      font-size: ${heroTypography.statLabelFontSizeTablet};
    }
  }
`;

export const Visual = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    position: relative;
    display: block;
    width: 100%;
    min-width: ${heroLayout.visualTabletMinWidth}px;
    height: ${heroLayout.visualTabletHeight}px;
    align-self: start;
    background: transparent;
    overflow: visible;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    width: ${heroLayout.visualDesktopWidth}px;
    min-width: ${heroLayout.visualDesktopMinWidth}px;
    height: ${heroLayout.visualDesktopHeight}px;
  }
`;

export const ShieldAnimationWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  transform-origin: center center;
  animation: ${enterAnimation} ${heroAnimation.enterDuration}
    ${heroAnimation.enterEasing} forwards;
`;

export const ShieldFloatLayer = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  filter: ${heroShadows.shield};
  animation: ${floatAnimation} ${heroAnimation.floatDuration}
    ${heroAnimation.floatEasing} ${heroAnimation.floatDelay} infinite alternate;
`;

export const ShieldImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
  background: transparent;
`;
