import { createBrowserRouter } from "react-router-dom";

import ExampleHomePage from "pages/ExampleHomePage";
import ContactUsPage from "pages/ContactUsPage";
import { MainLayout } from "Layouts";

export const router = createBrowserRouter([
  {
    element: (
      <MainLayout>
        <ExampleHomePage />
      </MainLayout>
    ),
    path: "/",
  },
  {
    element: (
      <MainLayout>
        <ContactUsPage />
      </MainLayout>
    ),
    path: "/contactus",
  },
  {
    path: "*",
    element: <ExampleHomePage />,
  },
]);
