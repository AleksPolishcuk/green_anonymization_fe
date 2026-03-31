import { Button, Typography } from "@mui/material";
import styled, { css, keyframes } from "styled-components";

const bp = {
  sm: "375px",
  md: "787px",
  lg: "1440px",
  xl: "1920px",
};

const enterAnimation = keyframes`
  0% {
    transform: translate(190px, 150px) rotate(-55deg) scale(0.187);
    opacity: 0.98;
  }

  55% {
    transform: translate(0, 0) rotate(360deg) scale(1);
    opacity: 1;
  }

  100% {
    transform: translate(0, 0) rotate(360deg) scale(1);
    opacity: 1;
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(10px);
  }
`;

export const Section = styled.section`
  position: relative;
  padding: 0;
  background:
    url("/img/hero/wave-bottom.png") bottom center / 100% auto no-repeat,
    radial-gradient(
      ellipse at 0% 0%,
      rgba(197, 202, 245, 0.55) 0%,
      transparent 60%
    ),
    radial-gradient(
      ellipse at 100% 100%,
      rgba(216, 208, 240, 0.5) 0%,
      transparent 55%
    ),
    radial-gradient(
      ellipse at 55% 40%,
      rgba(255, 255, 255, 0.7) 0%,
      transparent 45%
    ),
    linear-gradient(135deg, #e8eaf6 0%, #f0f2ff 50%, #ede8f5 100%);
`;

export const HeroGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  padding-top: 171px;
  padding-bottom: 126px;

  @media (min-width: ${bp.md}) {
    grid-template-columns: minmax(0, 1.1fr) minmax(360px, 0.9fr);
    column-gap: 24px;
    align-items: start;
    padding-left: 44px;
    padding-right: 44px;
  }

  @media (min-width: 1025px) and (max-width: 1439px) {
    grid-template-columns: minmax(0, 1fr) minmax(420px, 520px);
    column-gap: 20px;
  }

  @media (min-width: ${bp.lg}) {
    grid-template-columns: minmax(0, 684px) minmax(0, 583px);
    justify-content: space-between;
    column-gap: 37px;
    padding-left: 112px;
    padding-right: 112px;
    padding-top: 208px;
    padding-bottom: 193px;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 100%;

  @media (min-width: ${bp.lg}) {
    max-width: 684px;
  }
`;

export const Pill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  padding: 9px 17px;
  border-radius: 16777200px;
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.15);
  color: #1447e6;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 158%;
  letter-spacing: -0.01em;
`;

export const PillDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  background: #1447e6;
`;

export const Title = styled(Typography)`
  && {
    margin: 0;
    max-width: 100%;
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 128%;

    @media (min-width: ${bp.lg}) {
      max-width: 720px;
      font-size: 64px;
      line-height: 1.08;
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
  bottom: -4px;
  display: block;
  width: 100%;
  height: auto;
  pointer-events: none;
  user-select: none;
`;

export const Description = styled(Typography)`
  && {
    margin: 24px 0 0;

    color: #99a1af;
    font-weight: 400;
    font-size: 18px;
    line-height: 167%;
    max-width: 302px;

    @media (min-width: ${bp.md}) {
      max-width: 520px;
    }

    @media (min-width: ${bp.lg}) {
      max-width: 500px;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 42px;
`;

const buttonBase = css`
  && {
    text-transform: none;

    font-size: 14px;
  }
`;

export const PrimaryButton = styled(Button)`
  ${buttonBase};

  && {
    padding: 14px 24px;
    background: #155dfc;
    color: #ffffff;
    box-shadow: 0 4px 8px rgba(59, 130, 246, 0.28);

    &:hover {
      background: #1447e6;
      box-shadow: 0 4px 8px rgba(59, 130, 246, 0.34);
    }

    @media (min-width: ${bp.md}) {
      padding: 17px 27px;
      font-size: 16px;
    }
  }
`;

export const StatsRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  gap: 0;
  margin-top: 56px;

  @media (max-width: ${bp.md}) {
    margin-top: 40px;
  }
`;

export const StatItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  min-width: 0;

  &:not(:last-of-type) {
    margin-right: 16px;
    padding-right: 16px;
  }

  &:not(:last-of-type)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 24px;
    background: #e5e7eb;
    transform: translateY(-50%);
  }

  @media (min-width: ${bp.md}) {
    &:not(:last-of-type) {
      margin-right: 18px;
      padding-right: 18px;
    }

    &:not(:last-of-type)::after {
      height: 28px;
    }
  }

  @media (min-width: ${bp.lg}) {
    &:not(:last-of-type) {
      margin-right: 28px;
      padding-right: 28px;
    }

    &:not(:last-of-type)::after {
      height: 32px;
    }
  }
`;

export const StatValue = styled(Typography)`
  && {
    margin: 0;
    color: #101828;
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    letter-spacing: 0.05em;

    @media (min-width: ${bp.md}) {
      font-size: 18px;
    }

    @media (min-width: ${bp.lg}) {
      font-size: 22px;
    }
  }
`;

export const StatLabel = styled(Typography)`
  && {
    margin: 0;
    color: #99a1af;
    font-size: 11px;
    line-height: 1.5;

    @media (min-width: ${bp.md}) {
      font-size: 12px;
    }
  }
`;

export const Visual = styled.div`
  display: none;

  @media (min-width: ${bp.md}) {
    position: relative;
    display: block;
    width: 100%;
    min-width: 320px;
    height: 460px;
    align-self: start;
    background: transparent;
    overflow: visible;
  }

  @media (min-width: ${bp.lg}) {
    width: 583px;
    min-width: 583px;
    height: 694px;
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
  animation: ${enterAnimation} 2.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
`;

export const ShieldFloatLayer = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  filter: drop-shadow(0 34px 70px rgba(80, 110, 255, 0.18));
  animation: ${floatAnimation} 4.8s ease-in-out 2.8s infinite alternate;
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
