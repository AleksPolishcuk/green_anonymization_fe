import { GlobalStyles } from "@mui/material";
import { cardShadows } from "constants/MainPages";

export default function DriverStyles() {
  return (
    <GlobalStyles
      styles={(theme) => ({
        ".clinical-tour": {
          backgroundColor: `${theme.palette.background.paper} !important`,
          border: `1px solid ${theme.palette.divider} !important`,
          borderRadius: `${theme.shape.borderRadius}px !important`,
          padding: `${theme.spacing(4)} !important`,
          width: "calc(100vw - 32px) !important",
          maxWidth: "380px !important",
          minWidth: "0 !important",
          boxSizing: "border-box !important",

          boxShadow:
            theme.palette.mode === "dark"
              ? `${cardShadows.cardDarkHover} !important`
              : `${cardShadows.cardHover} !important`,

          [theme.breakpoints.up("sm")]: {
            padding: `${theme.spacing(5)} !important`,
          },
        },

        ".clinical-tour .driver-popover-title": {
          ...theme.typography.h5,
          color: `${theme.palette.text.primary} !important`,
          fontWeight: `${theme.typography.fontWeightBold} !important`,
          marginBottom: theme.spacing(2),
        },

        ".clinical-tour .driver-popover-description": {
          ...theme.typography.body2,
          color: `${theme.palette.text.secondary} !important`,
          lineHeight: theme.typography.lineHeight150,
          marginBottom: theme.spacing(4),
        },

        ".clinical-tour .driver-popover-footer": {
          display: "flex !important",
          flexDirection: "column-reverse !important",
          gap: `${theme.spacing(2)} !important`,
          marginTop: `${theme.spacing(4)} !important`,

          [theme.breakpoints.up("sm")]: {
            flexDirection: "row !important",
            justifyContent: "flex-end !important",
          },
        },

        ".clinical-tour .driver-popover-next-btn": {
          ...theme.typography.button,
          border: "none !important",
          borderRadius: `${theme.shape.borderRadius}px !important`,
          backgroundColor: `${theme.palette.primary.main} !important`,
          color: `${theme.palette.common.white} !important`,
          textShadow: "none !important",
          padding: `${theme.spacing(2)} ${theme.spacing(4)} !important`,
          transition: "all .2s ease",
        },

        ".clinical-tour .driver-popover-next-btn:hover": {
          opacity: ".92",
          transform: "translateY(-1px)",
        },

        ".clinical-tour .driver-popover-prev-btn": {
          ...theme.typography.button,
          borderRadius: `${theme.shape.borderRadius}px !important`,
          border: `1px solid ${theme.palette.divider} !important`,
          backgroundColor: `${theme.palette.background.default} !important`,
          color: `${theme.palette.text.secondary} !important`,
          textShadow: "none !important",
          padding: `${theme.spacing(2)} ${theme.spacing(4)} !important`,
        },

        ".clinical-tour .driver-popover-prev-btn:hover": {
          backgroundColor: `${theme.palette.action.hover} !important`,
        },

        ".clinical-tour .driver-popover-close-btn": {
          color: `${theme.palette.text.secondary} !important`,
          width: "28px",
          height: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },

        ".clinical-tour .driver-popover-close-btn:hover": {
          opacity: ".7",
        },

        ".clinical-tour .driver-popover-arrow": {
          display: "none",
        },

        ".driver-overlay": {
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(2,6,23,.45) !important"
              : "rgba(15,23,42,.32) !important",

          backdropFilter: "none !important",
        },

        ".clinical-tour .driver-popover-next-btn, .clinical-tour .driver-popover-prev-btn":
          {
            width: "100% !important",

            [theme.breakpoints.up("sm")]: {
              width: "auto !important",
            },
          },

        ".driver-active-element": {
          position: "relative !important",
          zIndex: "10001 !important",

          borderRadius: `${theme.shape.borderRadius}px !important`,
          overflow: "hidden !important",

          boxShadow:
            theme.palette.mode === "dark"
              ? "0 0 0 4px rgba(96,165,250,.35), 0 0 36px rgba(96,165,250,.45) !important"
              : "0 0 0 4px rgba(59,130,246,.20), 0 0 28px rgba(59,130,246,.25) !important",

          transition: "box-shadow .2s ease !important",
        },

        ".driver-popover": {
          width: "auto !important",
          maxWidth: "380px !important",

          [theme.breakpoints.down("sm")]: {
            maxWidth: "calc(100vw - 32px) !important",
          },
        },
      })}
    />
  );
}
