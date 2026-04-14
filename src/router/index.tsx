import { createBrowserRouter } from "react-router-dom";

import HomePage from "pages/HomePage";
import ContactUsPage from "pages/ContactUsPage";
import { ComplianceSection } from "features/ComplianceSection";
import { MainLayout } from "Layouts";
import { NotFound } from "pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout headerOverlay>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: "/compliance",
    element: (
      <MainLayout>
        <ComplianceSection />
      </MainLayout>
    ),
  },
  {
    path: "/contactus",
    element: (
      <MainLayout>
        <ContactUsPage />
      </MainLayout>
    ),
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
