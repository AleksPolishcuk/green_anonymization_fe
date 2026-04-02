import { useCallback, useEffect, useId, useMemo, useRef } from "react";
import type { CSSProperties, FC, ReactNode, RefObject } from "react";

import {
  SurfaceContent,
  SurfaceFilter,
  SurfaceRoot,
} from "components/GlassSurface/styles";

export type GlassSurfaceMixBlendMode =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity"
  | "plus-darker"
  | "plus-lighter";

export type GlassSurfaceProps = {
  children?: ReactNode;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  brightness?: number;
  opacity?: number;
  blur?: number;
  displace?: number;
  backgroundOpacity?: number;
  saturation?: number;
  distortionScale?: number;
  redOffset?: number;
  greenOffset?: number;
  blueOffset?: number;
  xChannel?: "R" | "G" | "B";
  yChannel?: "R" | "G" | "B";
  mixBlendMode?: GlassSurfaceMixBlendMode;
  className?: string;
  contentClassName?: string;
  style?: CSSProperties;
};

function sanitizeSvgId(raw: string): string {
  return raw.replace(/[^a-zA-Z0-9_-]/g, "");
}

function supportsSvgBackdropFilterUrl(): boolean {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return false;
  }

  const ua = navigator.userAgent;
  const isWebkit = /Safari/.test(ua) && !/Chrome/.test(ua);
  const isFirefox = /Firefox/.test(ua);

  if (isWebkit || isFirefox) {
    return false;
  }

  const div = document.createElement("div");
  div.style.backdropFilter = "url(#glass-filter-test)";
  return div.style.backdropFilter !== "";
}

const GlassSurface: FC<GlassSurfaceProps> = ({
  children,
  width = 200,
  height = 80,
  borderRadius = 20,
  borderWidth = 0.07,
  brightness = 50,
  opacity = 0.93,
  blur = 2,
  displace = 0,
  backgroundOpacity = 0,
  saturation = 1,
  distortionScale = -180,
  redOffset = 0,
  greenOffset = 10,
  blueOffset = 20,
  xChannel = "R",
  yChannel = "G",
  mixBlendMode = "difference",
  className = "",
  contentClassName = "",
  style = {},
}) => {
  const safeId = sanitizeSvgId(useId());
  const filterId = `glass-filter-${safeId}`;
  const redGradId = `red-grad-${safeId}`;
  const blueGradId = `blue-grad-${safeId}`;

  const svgSupported = useMemo(() => supportsSvgBackdropFilterUrl(), []);

  const containerRef = useRef<HTMLDivElement>(null);
  const feImageRef = useRef<SVGFEImageElement | null>(null);
  const redChannelRef = useRef<SVGFEDisplacementMapElement | null>(null);
  const greenChannelRef = useRef<SVGFEDisplacementMapElement | null>(null);
  const blueChannelRef = useRef<SVGFEDisplacementMapElement | null>(null);
  const gaussianBlurRef = useRef<SVGFEGaussianBlurElement | null>(null);

  const generateDisplacementMap = useCallback(() => {
    const rect = containerRef.current?.getBoundingClientRect();
    const actualWidth = rect?.width || 400;
    const actualHeight = rect?.height || 200;
    const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

    const svgContent = `
      <svg viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${redGradId})" />
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode: ${mixBlendMode}" />
        <rect x="${edgeSize}" y="${edgeSize}" width="${actualWidth - edgeSize * 2}" height="${actualHeight - edgeSize * 2}" rx="${borderRadius}" fill="hsl(0 0% ${brightness}% / ${opacity})" style="filter:blur(${blur}px)" />
      </svg>
    `;

    return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
  }, [
    borderRadius,
    borderWidth,
    blur,
    blueGradId,
    brightness,
    mixBlendMode,
    opacity,
    redGradId,
  ]);

  const updateDisplacementMap = useCallback(() => {
    feImageRef.current?.setAttribute("href", generateDisplacementMap());
  }, [generateDisplacementMap]);

  useEffect(() => {
    updateDisplacementMap();
    const channelUpdates: { ref: RefObject<SVGFEDisplacementMapElement | null>; offset: number }[] = [
      { ref: redChannelRef, offset: redOffset },
      { ref: greenChannelRef, offset: greenOffset },
      { ref: blueChannelRef, offset: blueOffset },
    ];
    for (const { ref, offset } of channelUpdates) {
      const el = ref.current;
      if (el) {
        el.setAttribute("scale", String(distortionScale + offset));
        el.setAttribute("xChannelSelector", xChannel);
        el.setAttribute("yChannelSelector", yChannel);
      }
    }

    gaussianBlurRef.current?.setAttribute("stdDeviation", String(displace));
  }, [
    displace,
    distortionScale,
    greenOffset,
    blueOffset,
    redOffset,
    updateDisplacementMap,
    xChannel,
    yChannel,
  ]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) {
      return;
    }

    const ro = new ResizeObserver(() => {
      requestAnimationFrame(() => {
        updateDisplacementMap();
      });
    });

    ro.observe(el);
    return () => {
      ro.disconnect();
    };
  }, [updateDisplacementMap]);

  const containerStyle: CSSProperties = {
    ...style,
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    borderRadius: `${borderRadius}px`,
    ["--glass-frost" as string]: backgroundOpacity,
    ["--glass-saturation" as string]: saturation,
    ["--filter-id" as string]: `url(#${filterId})`,
  };

  const isHeaderContent = contentClassName
    .split(/\s+/)
    .includes("header-glass-content");

  return (
    <SurfaceRoot
      ref={containerRef}
      className={className}
      style={containerStyle}
      $svgSupported={svgSupported}
    >
      <SurfaceFilter xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
            <feImage ref={feImageRef} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />

            <feDisplacementMap ref={redChannelRef} in="SourceGraphic" in2="map" result="dispRed" />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />

            <feDisplacementMap ref={greenChannelRef} in="SourceGraphic" in2="map" result="dispGreen" />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="green"
            />

            <feDisplacementMap ref={blueChannelRef} in="SourceGraphic" in2="map" result="dispBlue" />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="blue"
            />

            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur ref={gaussianBlurRef} in="output" stdDeviation="0.25" />
          </filter>
        </defs>
      </SurfaceFilter>

      <SurfaceContent className={contentClassName} $isHeaderContent={isHeaderContent}>
        {children}
      </SurfaceContent>
    </SurfaceRoot>
  );
};

export default GlassSurface;
