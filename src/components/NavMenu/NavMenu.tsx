import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import NavListContainer from './NavListContainer/NavListContainer';
import NavList from './NavList/NavList';

import './NavMenu.scss';

const NavMenu: FC = () => {
  return (
    <div className="nav-container">
      <div className="nav-menu-container">
        <Link className="nav-logo" to="/">
          <img src={'/images/iTechArtLogo.png'} alt="iTechArt logo" />
        </Link>
        <NavListContainer>
          <NavList />
        </NavListContainer>
      </div>
    </div>
  );
};

export default NavMenu;
