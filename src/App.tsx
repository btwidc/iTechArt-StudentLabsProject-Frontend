import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { checkAuthAction } from "./store/actions/userActions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const refreshToken = localStorage.getItem("refreshToken");

  useEffect(() => {
    if (refreshToken) {
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
