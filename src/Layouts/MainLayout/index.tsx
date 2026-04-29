import type { ReactNode } from "react";

import Header from "components/Header";
import Footer from "components/Footer";
import { ScrollToTop } from "components/ScrollToTop";

type LayoutProps = {
  children: ReactNode;
  headerOverlay?: boolean;
};

export const MainLayout = ({
  children,
  headerOverlay = false,
}: LayoutProps) => {
  return (
    <>
      <ScrollToTop />
      <Header overlay={headerOverlay} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
