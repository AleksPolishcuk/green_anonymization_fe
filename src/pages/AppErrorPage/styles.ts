import { Button, Typography } from "@mui/material";
import { keyframes, styled } from "@mui/material/styles";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ErrorSection = styled("main")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "140px 24px",

  [theme.breakpoints.up("md")]: {
    padding: "170px 24px",
  },
}));

export const ShieldBackground = styled("div")(({ theme }) => ({
  position: "absolute",
  inset: 0,
  backgroundImage: "url('/img/hero/shield.webp')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "80%",
  opacity: 0.1,
  pointerEvents: "none",

  [theme.breakpoints.up("md")]: {
    backgroundSize: "40%",
  },
}));

export const Content = styled("div")(() => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  animation: `${fadeUp} 700ms ease both`,
}));

export const SubtitleText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontWeight: theme.typography.fontWeightBold,
  textTransform: "uppercase",
  color: theme.palette.primary.main,
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  maxWidth: 560,
  marginBottom: theme.spacing(8),
}));

export const Actions = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  flexWrap: "wrap",
  justifyContent: "center",
}));

const BaseButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: theme.typography.fontSize14,
  padding: "14px 24px",

  [theme.breakpoints.up("md")]: {
    padding: "17px 27px",
    fontSize: theme.typography.fontSize16,
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: theme.typography.button.fontSize,
  },
}));

export const HomeButton = styled(BaseButton)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,

  "&:hover": {
    background: theme.palette.primary.dark,
  },
}));

export const RefreshButton = styled(BaseButton)(() => ({}));
