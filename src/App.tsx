import { Provider } from "react-redux";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { store } from "./store";
import { router } from "./router";
import { theme } from "shared/theme/theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
