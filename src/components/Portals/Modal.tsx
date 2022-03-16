import React, { FC, ReactNode } from 'react';

import Portal from './Portal';

interface ChildrenProp {
  children?: ReactNode;
}

const Modal: FC<ChildrenProp> = ({ children }) => {
  const modalContainer = document.getElementById('root');

  return modalContainer ? (
    <Portal root={modalContainer}>{children}</Portal>
  ) : null;
};

export default Modal;
