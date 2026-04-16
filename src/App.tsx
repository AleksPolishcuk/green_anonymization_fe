import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";

import { store } from "./store";
import { router } from "./router";
import { theme } from "shared/theme/theme";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
