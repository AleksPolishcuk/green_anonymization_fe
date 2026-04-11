import { createBrowserRouter } from "react-router-dom";

import HomePage from "pages/HomePage";
import ContactUsPage from "pages/ContactUsPage";
import { MainLayout } from "Layouts";
import AuthCallback from "pages/AuthCallback";
import Dashboard from "pages/Dashboard";
import Register from "pages/Register";
import SignIn from "pages/SignIn";

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
    element: <HomePage />,
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
]);
