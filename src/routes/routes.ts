import Auth from "../pages/AuthPage/Auth";
import MainPage from "../pages/MainPage/MainPage";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  MAIN_ROUTE,
} from "../utils/routesPath";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
];

export const authRoutes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
];
