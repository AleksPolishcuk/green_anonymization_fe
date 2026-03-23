import ExampleHomePage from "pages/ExampleHomePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ExampleHomePage />,
  },
]);
