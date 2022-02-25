import React, { FC } from 'react';
import Portal from './Portal';

const ContentExtension: FC = ({ children }) => {
  const contentElement =
    document.getElementsByClassName('content-container')[0];

  return contentElement ? (
    <Portal root={contentElement}>{children}</Portal>
  ) : null;
};

export default ContentExtension;
