import type { ReactNode } from "react";

import Header from "components/Header";
import Footer from "components/Footer";

type LayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
