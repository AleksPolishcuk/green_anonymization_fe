import { Box, styled } from "@mui/material";

export const Page = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const LeftSection = styled(Box)(({ theme }) => ({
  width: "55%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: theme.palette.background.default,

  [theme.breakpoints.down("md")]: {
    width: "100%",
    flex: 1,
  },
}));

export const RightSection = styled(Box)(({ theme }) => ({
  width: "45%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: theme.spacing(10),

  color: theme.palette.color.white,

  background: "linear-gradient(135deg, #0EA5E9 0%, #3B82F6 50%, #1E40AF 100%)",


  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const LeftContent = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: theme.typography.pxToRem(448),

  display: "flex",
  flexDirection: "column",

  gap: theme.spacing(10),

  padding: theme.spacing(0, 6),

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 4),
  },
}));

export const RightContent = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: theme.typography.pxToRem(448),

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  textAlign: "center",

  gap: theme.spacing(6),
}));