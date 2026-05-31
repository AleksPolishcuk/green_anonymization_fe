import { lazy } from "react";

export const HomePage = lazy(() => import("pages/HomePage"));
export const ContactUsPage = lazy(() => import("pages/ContactUsPage"));
export const ComplianceSection = lazy(() =>
  import("features/ComplianceSection").then((m) => ({
    default: m.ComplianceSection,
  })),
);
export const AuthCallback = lazy(() => import("pages/AuthCallback"));
export const Dashboard = lazy(() => import("pages/Dashboard"));
export const Register = lazy(() => import("pages/Register"));
export const SignIn = lazy(() => import("pages/SignIn"));
export const NotFound = lazy(() =>
  import("pages/NotFoundPage").then((m) => ({ default: m.NotFound })),
);
export const PricingPage = lazy(() => import("pages/PricingPage"));
export const DeidentificationPage = lazy(
  () => import("pages/DeidentificationPage"),
);
export const SyntheticDataPage = lazy(() => import("pages/SyntheticDataPage"));
export const ProfilePage = lazy(() => import("pages/ProfilePage"));
