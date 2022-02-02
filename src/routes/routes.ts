import Auth from "../components/pages/AuthPage/Auth";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  ALL_ROUTES,
  MAIN_ROUTE,
} from "../utils/routesPath";
import MainPage from "../components/pages/MainPage/MainPage";

export const publicRoutes = [
  {
    path: ALL_ROUTES,
    Component: Auth,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
];
