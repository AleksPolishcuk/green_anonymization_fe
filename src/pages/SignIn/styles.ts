import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Page = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    minHeight: "100dvh",
    gap: theme.spacing(8),
    paddingBottom: theme.spacing(6),
  },
}));

export const LeftSection = styled(Box)(({ theme }) => ({
  flex: "1 1 45%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(6),
  background: "linear-gradient(135deg, #1E40AF 0%, #3B82F6 50%, #0EA5E9 100%)",
  color: theme.palette.color.white,

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const RightSection = styled(Box)(({ theme }) => ({
  flex: "1 1 55%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(6),

  [theme.breakpoints.down("md")]: {
    flex: 1,
    width: "100%",
    minHeight: "100dvh",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(8, 3),
  },
}));

export const LeftContent = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: theme.spacing(112),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: theme.spacing(6),

  [theme.breakpoints.down("lg")]: {
    maxWidth: theme.spacing(112),
  },
}));

export const RightContent = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: theme.spacing(117),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    maxWidth: theme.spacing(112),
    gap: theme.spacing(5),
  },
}));
