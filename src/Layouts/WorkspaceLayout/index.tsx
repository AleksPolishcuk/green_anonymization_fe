import type { ReactNode } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { workspaceLayoutStyles } from "./styles";
import Sidebar from "components/Sidebar";
import { useAuthGuard } from "shared/hooks/useAuthGuard";
import { Loader } from "shared/ui/Loader";

type WorkspaceLayoutProps = {
  children: ReactNode;
};

export const WorkspaceLayout = ({ children }: WorkspaceLayoutProps) => {
  const theme = useTheme();
  const styles = workspaceLayoutStyles(theme);

  const { loading } = useAuthGuard("registered");

  if (loading) return <Loader />;

  return (
    <Box sx={styles.root}>
      <Sidebar />
      <Box component="main" sx={styles.content}>
        {children}
      </Box>
    </Box>
  );
};
