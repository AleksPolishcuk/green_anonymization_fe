import type { Theme } from "@mui/material";

export const workspaceLayoutStyles = (theme: Theme) => ({
  wrapper: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.lightGray,
    display: "flex",
    justifyContent: "center",
  },

  root: {
    width: "100%",
    maxWidth: theme.breakpoints.values.lg,
    display: "flex",
    alignItems: "flex-start",
  },

  content: {
    flex: 1,
    minWidth: 0,
  },
});
