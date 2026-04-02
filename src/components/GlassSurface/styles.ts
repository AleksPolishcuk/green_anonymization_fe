import styled, { css } from "styled-components";

type SurfaceRootProps = {
  $svgSupported: boolean;
};

type SurfaceContentProps = {
  $isHeaderContent: boolean;
};

export const SurfaceRoot = styled.div<SurfaceRootProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: opacity 0.26s ease-out;
  box-sizing: border-box;

  ${({ $svgSupported }) =>
    $svgSupported
      ? css`
          background: light-dark(
            hsl(0 0% 100% / var(--glass-frost, 0)),
            hsl(0 0% 0% / var(--glass-frost, 0))
          );
          -webkit-backdrop-filter: blur(3px) var(--filter-id)
            saturate(var(--glass-saturation, 1));
          backdrop-filter: blur(3px) var(--filter-id)
            saturate(var(--glass-saturation, 1));
          box-shadow:
            0px 4px 16px rgba(17, 17, 26, 0.06),
            0px 8px 24px rgba(17, 17, 26, 0.05),
            0px 16px 56px rgba(17, 17, 26, 0.05);
        `
      : css`
          background: rgba(255, 255, 255, 0.22);
          -webkit-backdrop-filter: blur(3px) saturate(1.85) brightness(1.08);
          backdrop-filter: blur(3px) saturate(1.85) brightness(1.08);
          border: 1px solid rgba(255, 255, 255, 0.28);
          box-shadow:
            0 8px 32px 0 rgba(31, 38, 135, 0.16),
            0 2px 16px 0 rgba(31, 38, 135, 0.08);

          @media (prefers-color-scheme: dark) {
            background: rgba(255, 255, 255, 0.08);
            -webkit-backdrop-filter: blur(3px) saturate(1.85) brightness(1.15);
            backdrop-filter: blur(3px) saturate(1.85) brightness(1.15);
            border: 1px solid rgba(255, 255, 255, 0.18);
            box-shadow:
              0 8px 28px rgba(0, 0, 0, 0.25),
              0 2px 12px rgba(0, 0, 0, 0.15);
          }

          @supports not (backdrop-filter: blur(10px)) {
            background: rgba(255, 255, 255, 0.45);
            box-shadow: 0 8px 24px rgba(16, 24, 40, 0.1);
          }

          @supports not (backdrop-filter: blur(10px)) {
            &::before {
              content: "";
              position: absolute;
              inset: 0;
              background: rgba(255, 255, 255, 0.15);
              border-radius: inherit;
              z-index: -1;
            }
          }

          @supports not (backdrop-filter: blur(10px)) {
            @media (prefers-color-scheme: dark) {
              background: rgba(0, 0, 0, 0.45);

              &::before {
                background: rgba(255, 255, 255, 0.05);
              }
            }
          }
        `}

  &:focus-visible {
    outline: 2px solid light-dark(#007aff, #0a84ff);
    outline-offset: 2px;
  }
`;

export const SurfaceFilter = styled.svg`
  width: 100%;
  height: 100%;
  pointer-events: none;
  position: absolute;
  inset: 0;
  opacity: 0;
  z-index: -1;
`;

export const SurfaceContent = styled.div<SurfaceContentProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  border-radius: inherit;
  position: relative;
  z-index: 1;
  box-sizing: border-box;

  ${({ $isHeaderContent }) =>
    $isHeaderContent &&
    css`
      padding: 16px 24px;
      justify-content: flex-start;

      @media (min-width: 1440px) {
        padding: 16px 32px;
      }
    `}
`;
