import { createBrowserRouter } from "react-router-dom";

import HomePage from "pages/HomePage";
import ContactUsPage from "pages/ContactUsPage";
import { MainLayout } from "Layouts";
import { NotFound } from "pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: (
      <MainLayout headerOverlay>
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
    element: (
      <MainLayout>
        <NotFound />
      </MainLayout>
    ),
  },
]);
