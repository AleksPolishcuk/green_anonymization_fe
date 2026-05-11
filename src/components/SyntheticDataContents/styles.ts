import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SyntheticDataRoot = styled(Box)(({ theme }) => ({
  position: "relative",
  margin: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(7),
}));
