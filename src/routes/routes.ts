import {
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    MAIN_ROUTE,
    PROFILE_ROUTE,
    EVENTS_ROUTE,
    NOTES_ROUTE,
    CANDIDATES_ROUTE,
} from '../utils/routesPath';

import Auth from '../pages/AuthPage/Auth';
import MainPage from '../pages/MainPage/MainPage';
import MainContent from '../components/MainContent/MainContent';
import Profile from '../components/Profile/Profile';
import Events from '../components/Events/Events';
import Notes from '../components/Notes/Notes';
import Candidates from '../components/Candidates/Candidates';
import MainSidebarInfo from '../components/MainSidebarInfo/MainSidebarInfo';
import ProfileSidebarInfo from '../components/ProfileSidebarInfo/ProfileSidebarInfo';
import EventsSidebarInfo from '../components/EventsSidebarInfo/EventsSidebarInfo';
import NotesSidebarInfo from '../components/NotesSidebarInfo/NotesSidebarInfo';
import CandidatesSidebarInfo from '../components/CandidatesSidebarInfo/CandidatesSidebarInfo';

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

export const sidebarInfoRoutes = [
    {
        path: '*',
        Component: MainSidebarInfo,
    },
    {
        path: PROFILE_ROUTE,
        Component: ProfileSidebarInfo,
    },
    {
        path: EVENTS_ROUTE,
        Component: EventsSidebarInfo,
    },
    {
        path: NOTES_ROUTE,
        Component: NotesSidebarInfo,
    },
    {
        path: CANDIDATES_ROUTE,
        Component: CandidatesSidebarInfo,
    },
];
