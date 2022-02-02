import Auth from "../components/pages/AuthPage/Auth";

import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  ALL_ROUTES,
} from "../utils/routesPath";

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
];
