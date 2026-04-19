import type { Theme } from "@mui/material";

export const workspaceLayoutStyles = (theme: Theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    backgroundColor: theme.palette.background.lightGray,
  },

  content: {
    flex: 1,
    minWidth: 0,
    padding: theme.spacing(0, 8),
  },
});
