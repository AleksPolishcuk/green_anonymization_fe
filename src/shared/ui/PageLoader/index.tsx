import { styled } from "@mui/material/styles";

import { Loader } from "shared/ui/Loader";

const Root = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  width: "100%",
});

export const PageLoader = () => (
  <Root>
    <Loader />
  </Root>
);
