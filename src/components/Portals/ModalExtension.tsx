import React, { FC, ReactNode } from 'react';

import Portal from './Portal';

interface ChildrenProp {
  children?: ReactNode;
}

const ModalExtension: FC = ({ children }: ChildrenProp) => {
  const modalElement = document.getElementById('modal-extension');

  return modalElement ? <Portal root={modalElement}>{children}</Portal> : null;
};

export default ModalExtension;
