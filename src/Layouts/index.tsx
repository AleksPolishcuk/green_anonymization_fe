import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
