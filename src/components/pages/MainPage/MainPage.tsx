import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";

const MainPage = () => {
  const { userStore } = useContext(Context);
  return (
    <div>
      Main page
      <button
        onClick={() => {
          userStore.logout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default observer(MainPage);
