import React from 'react';
import Portal from './Portal';

interface ChildrenProp {
    children: React.ReactNode;
}

const SidebarExtension = ({ children }: ChildrenProp) => {
    const sidebarElement = document.getElementById('sidebar-info-container');

    return sidebarElement ? (
        <Portal root={sidebarElement}>{children}</Portal>
    ) : null;
};

export default SidebarExtension;
