import type { ReactNode } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { workspaceLayoutStyles } from "./styles";
import Sidebar from "components/Sidebar";

type WorkspaceLayoutProps = {
  children: ReactNode;
};

export const WorkspaceLayout = ({ children }: WorkspaceLayoutProps) => {
  const theme = useTheme();
  const styles = workspaceLayoutStyles(theme);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.root}>
        <Sidebar />
        <Box component="main" sx={styles.content}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
