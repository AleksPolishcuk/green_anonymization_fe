import { createBrowserRouter } from "react-router-dom";

import HomePage from "pages/HomePage";
import ContactUsPage from "pages/ContactUsPage";
import { ComplianceSection } from "features/ComplianceSection";
import { MainLayout, WorkspaceLayout } from "Layouts";
import AuthCallback from "pages/AuthCallback";
import Dashboard from "pages/Dashboard";
import Register from "pages/Register";
import SignIn from "pages/SignIn";
import { NotFound } from "pages/NotFoundPage";
import PricingPage from "pages/PricingPage";
import DeidentificationPage from "pages/DeidentificationPage";
import SyntheticDataPage from "pages/SyntheticDataPage";

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
    path: "/pricing",
    element: (
      <MainLayout>
        <PricingPage />
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
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "auth-callback",
    element: <AuthCallback />,
  },
  {
    path: "dashboard",
    element: (
      <WorkspaceLayout>
        <Dashboard />
      </WorkspaceLayout>
    ),
  },
  {
    path: "deidentification",
    element: (
      <WorkspaceLayout>
        <DeidentificationPage />
      </WorkspaceLayout>
    ),
  },
  {
    path: "syntheticdata",
    element: (
      <WorkspaceLayout>
        <SyntheticDataPage />
      </WorkspaceLayout>
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
