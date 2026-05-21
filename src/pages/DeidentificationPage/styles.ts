import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  padding: theme.spacing(3, 2),

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4, 3),
  },

  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(5),
    padding: theme.spacing(8, 8),
  },
}));
