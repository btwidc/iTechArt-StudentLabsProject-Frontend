import Auth from "../components/pages/AuthPage/Auth";
import MainPage from "../components/pages/MainPage/MainPage";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  //ALL_ROUTES,
  MAIN_ROUTE,
} from "../utils/routesPath";

export const publicRoutes = [
  // {
  //   path: ALL_ROUTES,
  //   Component: Auth,
  // },
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
