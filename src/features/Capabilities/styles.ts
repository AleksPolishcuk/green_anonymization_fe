// 1. Импортируем styled из Material UI вместо styled-components
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

// 2. Импорт Theme больше не нужен, встроенный styled уже типизирован

export const CapabilitiesSection = styled("section")({
  backgroundColor: "#f8fafc",
  padding: "80px 0",
  width: "100%",
});

export const TitleSectionBlock = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  maxWidth: "760px",
  margin: "0 auto 64px auto",
});

export const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  letterSpacing: "0.05em",
  marginBottom: "16px",
  textTransform: "uppercase",
}));

export const CardsList = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "24px",
  // Используем ваш брейкпоинт md (787px) из theme.ts
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const CardItem = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper, // #fff
  borderRadius: theme.shape.borderRadius, // 16px из вашей темы
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.02)",
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  width: "44px",
  height: "44px",
  borderRadius: "8px",
  backgroundColor: theme.palette.secondary.main, // #eff6ff из вашей темы
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main, // #155dfc
  "& svg": {
    width: "20px",
    height: "20px",
    fill: "currentColor", // Автоматически красится в primary.main
  },
}));
