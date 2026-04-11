import type { ReactNode } from "react";

import Header from "components/Header";
import Footer from "components/Footer";

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
      <Header overlay={headerOverlay} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
