import React, { FC } from 'react';
import Portal from './Portal';

const SidebarExtension: FC = ({ children }) => {
  const sidebarElement = document.getElementsByClassName(
    'sidebar-info-container',
  )[0];

  return sidebarElement ? (
    <Portal root={sidebarElement}>{children}</Portal>
  ) : null;
};

export default SidebarExtension;
