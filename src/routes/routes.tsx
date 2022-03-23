import {
  PROFILE_ROUTE,
  EVENTS_ROUTE,
  NOTES_ROUTE,
  CANDIDATES_ROUTE,
} from './routesPath';

import { CgProfile, CgNotes } from 'react-icons/cg';
import { MdEvent } from 'react-icons/md';
import { IoMdPeople } from 'react-icons/io';

import Profile from '../pages/Profile/Profile';
import Events from '../pages/Events/Events';
import Notes from '../pages/Notes/Notes';
import CandidatesList from '../pages/Candidates/CandidatesList/CandidatesList';

export const contentRoutes = [
  {
    path: PROFILE_ROUTE,
    Component: Profile,
    title: 'Profile',
    icon: <CgProfile />,
    className: 'nav-item',
  },
  {
    path: EVENTS_ROUTE,
    Component: Events,
    title: 'Events',
    icon: <MdEvent />,
    className: 'nav-item',
  },
  {
    path: NOTES_ROUTE,
    Component: Notes,
    title: 'Notes',
    icon: <CgNotes />,
    className: 'nav-item',
  },
  {
    path: CANDIDATES_ROUTE,
    Component: CandidatesList,
    title: 'Candidates',
    icon: <IoMdPeople />,
    className: 'nav-item',
  },
];
