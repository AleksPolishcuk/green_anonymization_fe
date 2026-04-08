import { createBrowserRouter } from "react-router-dom";

import HomePage from "pages/HomePage";
import ContactUsPage from "pages/ContactUsPage";
import { MainLayout } from "Layouts";

export const router = createBrowserRouter([
  {
    element: (
      <MainLayout>
        <HomePage />
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
    element: <HomePage />,
  },
]);
