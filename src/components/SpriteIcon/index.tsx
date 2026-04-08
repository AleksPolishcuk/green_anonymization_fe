import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

import { spriteSvgPublicPath } from "constants/footer";

export type SpriteIconProps = {
  symbolId: string;
  viewBox: string;
  width?: number;
  height?: number;
  preserveAspectRatio?: string;
  sx?: SxProps<Theme>;
  decorative?: boolean;
  "aria-label"?: string;
};

export function SpriteIcon({
  symbolId,
  viewBox,
  width,
  height,
  preserveAspectRatio = "xMidYMid meet",
  sx,
  decorative,
  "aria-label": ariaLabel,
}: SpriteIconProps) {
  const href = `${spriteSvgPublicPath}#${symbolId}`;

  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      preserveAspectRatio={preserveAspectRatio}
      viewBox={viewBox}
      width={width}
      height={height}
      sx={{ display: "block", flexShrink: 0, ...sx }}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : ariaLabel}
      role={decorative ? undefined : "img"}
    >
      <use href={href} />
    </Box>
  );
}
