import React, { FC, ReactNode } from 'react';

import Portal from './Portal';

interface SidebarExtensionProps {
  children?: ReactNode;
}

const SidebarExtension: FC<SidebarExtensionProps> = ({ children }) => {
  const sidebarElement = document.getElementById('sidebar-extension');

  return sidebarElement ? (
    <Portal root={sidebarElement}>{children}</Portal>
  ) : null;
};

export default SidebarExtension;
