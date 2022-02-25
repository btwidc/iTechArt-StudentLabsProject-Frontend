import { CgProfile } from 'react-icons/cg';
import { MdEvent } from 'react-icons/md';
import { GrNotes } from 'react-icons/gr';
import { IoMdPeople } from 'react-icons/io';

export const navItemsRoutes = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <CgProfile />,
    className: 'nav-item',
  },
  {
    title: 'Events',
    path: '/events',
    icon: <MdEvent />,
    className: 'nav-item',
  },
  {
    title: 'Notes',
    path: '/notes',
    icon: <GrNotes />,
    className: 'nav-item',
  },
  {
    title: 'Candidates',
    path: '/candidates',
    icon: <IoMdPeople />,
    className: 'nav-item',
  },
];
