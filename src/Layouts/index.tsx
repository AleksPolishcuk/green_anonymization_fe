import type { ReactNode } from "react";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";

type LayoutProps = {
  children: ReactNode;
  headerOverlay?: boolean;
};

export const MainLayout = ({ children, headerOverlay = false }: LayoutProps) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header overlay={headerOverlay} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
