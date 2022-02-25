import React from 'react';
import { navItemsRoutes } from '../../routes/navItemsRoutes';
import { Link, useNavigate } from 'react-router-dom';

import { logoutAuthAction } from '../../store/actions/userActions';
import { useDispatch } from 'react-redux';

import { MdLogout } from 'react-icons/md';
import './NavList.scss';

const NavList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logoutAuthAction(navigate));
  };

  return (
    <ul className="nav-list">
      {navItemsRoutes.map((item) => {
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
      <li className="nav-item">
        <Link to="#" onClick={handleLogout}>
          <MdLogout />
          <span>Logout</span>
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
