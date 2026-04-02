import type { ReactNode } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import styled, { css } from "styled-components";
import GlassSurface from "components/GlassSurface";
import {
  headerDesktopBar,
  headerMobileTabletBarHeightPx,
  headerSurfaceEffect,
} from "components/Header/constants";

type LiquidShellProps = {
  children: ReactNode;
};

const HeaderGlassSurface = styled(GlassSurface)<{ $isDesktopBar: boolean }>`
  margin-left: auto;
  margin-right: auto;

  ${({ $isDesktopBar }) =>
    $isDesktopBar &&
    css`
      max-width: ${headerDesktopBar.widthPx}px;
    `}
`;

export function LiquidShell({ children }: LiquidShellProps) {
  const theme = useTheme();
  const isDesktopBar = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <HeaderGlassSurface
      $isDesktopBar={isDesktopBar}
      width="100%"
      height={
        isDesktopBar ? headerDesktopBar.heightPx : headerMobileTabletBarHeightPx
      }
      borderRadius={headerDesktopBar.borderRadiusPx}
      borderWidth={headerSurfaceEffect.borderWidth}
      brightness={headerSurfaceEffect.brightness}
      opacity={headerSurfaceEffect.opacity}
      blur={headerSurfaceEffect.blur}
      displace={headerSurfaceEffect.displace}
      backgroundOpacity={headerSurfaceEffect.backgroundOpacity}
      saturation={headerSurfaceEffect.saturation}
      distortionScale={headerSurfaceEffect.distortionScale}
      mixBlendMode={headerSurfaceEffect.mixBlendMode}
      contentClassName="header-glass-content"
    >
      {children}
    </HeaderGlassSurface>
  );
}
