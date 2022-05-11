import {
  PROFILE_ROUTE,
  EVENTS_ROUTE,
  NOTES_ROUTE,
  CANDIDATES_ROUTE,
  CHAT_ROUTE,
} from './routesPath';

import { CgProfile, CgNotes } from 'react-icons/cg';
import { MdEvent } from 'react-icons/md';
import { IoMdPeople } from 'react-icons/io';
import { HiOutlineChatAlt } from 'react-icons/hi';

import Profile from '../pages/Profile/Profile';
import EventsList from '../pages/Events/EventsList/EventsList';
import Notes from '../pages/Notes/Notes';
import CandidatesList from '../pages/Candidates/CandidatesList/CandidatesList';
import ChatPage from '../pages/ChatPage/ChatPage';

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
    Component: EventsList,
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
  {
    path: CHAT_ROUTE,
    Component: ChatPage,
    title: 'Chat',
    icon: <HiOutlineChatAlt />,
    className: 'nav-item',
  },
];
