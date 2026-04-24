import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, useMediaQuery } from "@mui/material";

import { darkTheme, lightTheme } from "shared/theme/theme";
import { store, type RootState } from "./store";
import { router } from "./router";

const AppContent = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  const isDark = mode === "system" ? prefersDark : mode === "dark";

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
