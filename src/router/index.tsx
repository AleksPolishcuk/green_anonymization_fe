import { createBrowserRouter } from "react-router-dom";

import HomePage from "pages/HomePage";
import ContactUsPage from "pages/ContactUsPage";
import { ComplianceSection } from "features/ComplianceSection";
import { MainLayout, WorkspaceLayout } from "Layouts";

import { NotFound } from "pages/NotFoundPage";
import DeidentificationPage from "pages/DeidentificationPage";

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
    element: <Dashboard />,
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
    element: <Dashboard />,
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "deidentification",
    element: (
      <WorkspaceLayout>
        <DeidentificationPage />
      </WorkspaceLayout>
    ),
  },
]);
