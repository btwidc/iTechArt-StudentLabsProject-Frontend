import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { contentRoutes } from '../../../routes/routes';

import { logoutAuthAction } from '../../../store/actions/userActions';
import { useDispatch } from 'react-redux';

import { MdLogout } from 'react-icons/md';

import './NavList.scss';

const NavList: FC = () => {
  const dispatch = useDispatch();

  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(logoutAuthAction());
  };

  return (
    <ul className="nav-list">
      {contentRoutes.map((item) => {
        const navItem = (
          <li key={item.title} className={item.className}>
            <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        );
        return navItem;
      })}
      <li className="divider" />
      <button onClick={handleLogout}>
        <MdLogout />
        <span>Logout</span>
      </button>
    </ul>
  );
};

export default NavList;
