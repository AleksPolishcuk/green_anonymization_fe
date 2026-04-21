import { createBrowserRouter } from "react-router-dom";

import HomePage from "pages/HomePage";
import ContactUsPage from "pages/ContactUsPage";
import { ComplianceSection } from "features/ComplianceSection";
import { MainLayout } from "Layouts";
import AuthCallback from "pages/AuthCallback";
import Dashboard from "pages/Dashboard";
import Register from "pages/Register";
import SignIn from "pages/SignIn";
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
    path: "/register",
    element: <Register />,
  },
  {
    path: "/auth-callback",
    element: <AuthCallback />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
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
