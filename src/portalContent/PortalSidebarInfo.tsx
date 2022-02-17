import React from 'react';
import { createPortal } from 'react-dom';

interface ChildrenProp {
    children: React.ReactNode;
}

const PortalSidebarInfo = ({ children }: ChildrenProp) => {
    const sidebarInfoElement = document.getElementById(
        'sidebar-info-container',
    );
    return sidebarInfoElement
        ? createPortal(children, sidebarInfoElement)
        : null;
};

export default PortalSidebarInfo;
