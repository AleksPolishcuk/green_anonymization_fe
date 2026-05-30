import { createBrowserRouter } from "react-router-dom";

import { MainLayout, WorkspaceLayout } from "Layouts";

import {
  AuthCallback,
  ComplianceSection,
  ContactUsPage,
  Dashboard,
  DeidentificationPage,
  HomePage,
  NotFound,
  PricingPage,
  ProfilePage,
  Register,
  SignIn,
  SyntheticDataPage,
} from "./lazyPages";

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
    path: "profile",
    element: (
      <WorkspaceLayout>
        <ProfilePage />
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
