import { Provider } from "react-redux";
import { store } from "../app/store";

const makeWrapper = ({ children }: { children: JSX.Element }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default makeWrapper;
