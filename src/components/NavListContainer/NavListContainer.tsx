import React, { FC } from 'react';
import './NavListContainer.scss';

const NavListContainer: FC = ({ children }) => {
  return (
    <div className="nav-menu-list-container">
      <nav className="nav-list-container">{children}</nav>
    </div>
  );
};

export default NavListContainer;
