import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserStore from "./store/UserStore";

interface UStore {
  userStore: UserStore;
}
const userStore = new UserStore();
export const Context = createContext<UStore>({
  userStore,
});

ReactDOM.render(
  <Context.Provider value={{ userStore }}>
    <App />,
  </Context.Provider>,
  document.getElementById("root")
);
