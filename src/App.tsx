import { useEffect, useRef } from "react";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, useMediaQuery } from "@mui/material";

import { darkTheme, lightTheme } from "shared/theme/theme";
import { store, type RootState } from "./store";
import { router } from "./router";
import { fetchSession } from "store/slices/authSlice";
import { getAccessToken } from "features/Auth/utils/authTokens";

const AppContent = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const sessionFetched = useRef(false);

  const isDark = mode === "system" ? prefersDark : mode === "dark";

  useEffect(() => {
    if (sessionFetched.current || !getAccessToken()) return;
    sessionFetched.current = true;
    store.dispatch(fetchSession());
  }, []);

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
