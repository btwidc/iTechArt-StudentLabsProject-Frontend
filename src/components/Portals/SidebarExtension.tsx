import React, { FC, ReactNode } from 'react';

import Portal from './Portal';

interface ChildrenProps {
  children?: ReactNode;
}

const SidebarExtension: FC = ({ children }: ChildrenProps) => {
  const sidebarElement = document.getElementById('sidebar-extension');

  return sidebarElement ? (
    <Portal root={sidebarElement}>{children}</Portal>
  ) : null;
};

export default SidebarExtension;
