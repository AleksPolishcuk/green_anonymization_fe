import type { ReactNode } from "react";

import Footer from "components/Footer";

type LayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <Header /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};
