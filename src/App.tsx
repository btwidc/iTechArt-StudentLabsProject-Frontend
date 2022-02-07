import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { checkAuthAction } from "./store/actions/userActions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const state = useTypedSelector((state) => state);
  console.log(state);

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) {
      dispatch(checkAuthAction());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
