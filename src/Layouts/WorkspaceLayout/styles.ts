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
    marginLeft: "72px",

    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
    },
  },
});
