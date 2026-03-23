import { store } from "app/store";
import type { PropsWithChildren } from "react";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};
