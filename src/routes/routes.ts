import {
  PROFILE_ROUTE,
  EVENTS_ROUTE,
  NOTES_ROUTE,
  CANDIDATES_ROUTE,
} from '../utils/routesPath';

import MainContent from '../components/MainContent/MainContent';
import Profile from '../components/Profile/Profile';
import Events from '../components/Events/Events';
import Notes from '../components/Notes/Notes';
import Candidates from '../components/Candidates/Candidates';

export const contentRoutes = [
  {
    path: '*',
    Component: MainContent,
  },
  {
    path: PROFILE_ROUTE,
    Component: Profile,
  },
  {
    path: EVENTS_ROUTE,
    Component: Events,
  },
  {
    path: NOTES_ROUTE,
    Component: Notes,
  },
  {
    path: CANDIDATES_ROUTE,
    Component: Candidates,
  },
];
