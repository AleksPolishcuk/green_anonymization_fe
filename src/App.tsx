import { Provider } from "react-redux";
import { store } from "./store";

import { ThemeProvider } from "@mui/material/styles";

import { RouterProvider } from "react-router-dom";

import { theme } from "shared/theme/theme";
import { router } from "./router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
