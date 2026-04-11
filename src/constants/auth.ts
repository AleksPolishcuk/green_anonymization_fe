import { keyframes, styled, TextField } from "@mui/material";

export const AUTH_ENDPOINTS = {
    login: "/auth/login",
    refresh: "/auth/refresh",
    verify: "/auth/verify?token=",
  } as const;
  
  export const STORAGE_KEYS = {
    accessToken: "accessToken",
    refreshToken: "refreshToken",
  } as const;
  
  export const USER_ENDPOINTS = {
    register: "/user/register",
    me: "/user/me",
  } as const;

export const AUTH_STATUS = {
  idle: "idle",
  authenticated: "authenticated",
  unauthenticated: "unauthenticated",
  unregistered: "unregistered",
  error: "error",
} as const;

export type AuthStatus = typeof AUTH_STATUS[keyof typeof AUTH_STATUS];


export  const signinStats = [
      {
        valueKey: "stats.clients.value",
        labelKey: "stats.clients.label",
      },
      {
        valueKey: "stats.records.value",
        labelKey: "stats.records.label",
      },
      {
        valueKey: "stats.uptime.value",
        labelKey: "stats.uptime.label",
      },
    ] as const;
    

export const shieldGrowDuration = 1200;

export const headingDelay = 150;
export const paragraphDelay = 300;
    
export const statsDelayOne = 450;
export const statsDelayTwo = 600;
export const statsDelayThree = 750;

export const heroRevealDuration = 700;

export const staggerItem = (delay: number) => ({
  animation: `${fadeUp} ${heroRevealDuration}ms cubic-bezier(0.2, 0.9, 0.2, 1) both`,
  animationDelay: `${delay}ms`,
});

export const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


export const FormInputField = styled(TextField)(({ theme }) => ({
  width: "100%",
  maxWidth: theme.typography.pxToRem(448),
  marginBottom: theme.spacing(5),

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },

  "& .MuiOutlinedInput-root": {
    height: 50,
    borderRadius: theme.shape.borderRadius,
    paddingLeft: theme.spacing(4),

    transition: `box-shadow 160ms ease, background-color 160ms ease`,

    "& fieldset": {
      borderColor: theme.palette.divider,
      transition: `border-color 160ms ease`,
    },

    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },

    "&.Mui-focused": {
      boxShadow: "0 0 0 4px rgba(59,130,246,0.15)",
    },

    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },

    "& input:-webkit-autofill": {
        WebkitBoxShadow: `0 0 0 100px ${theme.palette.color.lightBlue} inset !important`,
        WebkitTextFillColor: theme.palette.text.primary,
        transition: "background-color 9999s ease-out 0s",
    },
  },

  "& input": {
    padding: 0,
    transition: `background-color 200ms ease`,
  },

  "& input::placeholder": {
    color: theme.palette.background.mediumGray,
    opacity: 1,
  },
}));
