import React from 'react';
import Portal from './Portal';

interface ChildrenProp {
    children: React.ReactNode;
}

const ContentExtension = ({ children }: ChildrenProp) => {
    const contentElement = document.getElementById('content-container');

    return contentElement ? (
        <Portal root={contentElement}>{children}</Portal>
    ) : null;
};

export default ContentExtension;
