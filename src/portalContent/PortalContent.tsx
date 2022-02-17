import React from 'react';
import { createPortal } from 'react-dom';

interface ChildrenProp {
    children: React.ReactNode;
}

const PortalContent = ({ children }: ChildrenProp) => {
    const contentElement = document.getElementById('content-container');
    return contentElement ? createPortal(children, contentElement) : null;
};

export default PortalContent;
