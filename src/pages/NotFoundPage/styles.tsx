import { Container, Paper, Typography } from "@mui/material";
import { alpha, keyframes, styled } from "@mui/material/styles";

const cardAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glowPulse = keyframes`
  0% {
    transform: translateX(-50%) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translateX(-50%) scale(1.08);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) scale(1);
    opacity: 0.7;
  }
`;

export const NotFoundSection = styled("main")(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.subtle?.bg ?? "#f8fafc",
  padding: "96px 0 64px",
  [theme.breakpoints.up("md")]: {
    padding: "128px 0 96px",
  },
}));

export const SectionContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    paddingLeft: 68,
    paddingRight: 68,
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 144,
    paddingRight: 144,
  },
}));

export const ContentCard = styled(Paper)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  maxWidth: 840,
  margin: "0 auto",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0px 20px 60px rgba(16, 24, 40, 0.08)",
  animation: `${cardAppear} 700ms ease`,
}));

export const BackgroundGlow = styled("div")(({ theme }) => ({
  position: "absolute",
  top: -120,
  left: "50%",
  width: 320,
  height: 320,
  borderRadius: "50%",
  transform: "translateX(-50%)",
  backgroundColor: alpha(theme.palette.primary.main, 0.12),
  filter: "blur(18px)",
  pointerEvents: "none",
  animation: `${glowPulse} 4s ease-in-out infinite`,
}));

export const CardContent = styled("div")(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "48px 24px",
  [theme.breakpoints.up("sm")]: {
    padding: "56px 40px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "72px 56px",
  },
}));

export const CodeBadge = styled("div")(({ theme }) => ({
  minWidth: 84,
  height: 36,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 16px",
  marginBottom: theme.spacing(4),
  borderRadius: 999,
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  "& .MuiTypography-root": {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "uppercase",
  },
}));

export const SubtitleText = styled(Typography)(({ theme }) => ({
  display: "block",
  marginBottom: theme.spacing(4),
  fontWeight: theme.typography.fontWeightBold,
  textTransform: "uppercase",
  color: theme.palette.primary.main,
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  maxWidth: 620,
  marginBottom: theme.spacing(2),
}));

export const DescriptionText = styled(Typography)(() => ({
  maxWidth: 560,
}));

export const Actions = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  width: "100%",
  maxWidth: 360,
  marginTop: theme.spacing(8),
  "& .MuiButton-root": {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "center",
    maxWidth: "none",
    "& .MuiButton-root": {
      width: "auto",
      minWidth: 180,
    },
  },
}));
