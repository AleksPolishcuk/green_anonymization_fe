import "styled-components";
import type { Theme } from "@mui/material/styles";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface DefaultTheme extends Theme {}
}
