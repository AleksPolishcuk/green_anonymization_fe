import { ThemeProvider } from "app/providers/theme-provider";
import { StoreProvider } from "app/providers/store-provider";
import { RouterProvider } from "app/providers/router-provider";

function App() {
  return (
    <ThemeProvider>
      <StoreProvider>
        <RouterProvider />
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
