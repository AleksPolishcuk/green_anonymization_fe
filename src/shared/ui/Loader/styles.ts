import { styled, keyframes } from "@mui/material/styles";

const LOADER_STYLES = {
  size: "100px",
  ringSize: "8em",
  borderWidth: "1em",
  duration: "2s",
  delay: "1s",
} as const;

const loaderAnimation = keyframes`
  0% {
    border: ${LOADER_STYLES.borderWidth} solid var(--loader-color);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    border: 0 solid var(--loader-color);
    transform: scale(1);
    opacity: 0;
  }
`;

export const LoaderWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
});

export const LoaderRoot = styled("div")(({ theme }) => ({
  "--loader-color": theme.palette.primary.main,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: LOADER_STYLES.size,
  height: LOADER_STYLES.size,

  "&::before, &::after": {
    position: "absolute",
    content: '""',
    height: LOADER_STYLES.ringSize,
    width: LOADER_STYLES.ringSize,
    borderRadius: "50%",
    animation: `${loaderAnimation} ${LOADER_STYLES.duration} linear infinite`,
  },

  "&::after": {
    opacity: 0,
    animationDelay: LOADER_STYLES.delay,
  },
}));
