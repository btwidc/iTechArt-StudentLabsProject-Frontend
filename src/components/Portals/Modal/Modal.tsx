import React, { FC, ReactNode } from 'react';

import Portal from '../Portal';
import './Modal.scss';

interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
}

const Modal: FC<ModalProps> = ({ children, isOpen }) => {
  const modalContainer = document.getElementById('root');

  return modalContainer ? (
    <Portal root={modalContainer}>
      {isOpen ? (
        <div className="modal-window-container">
          <div className="modal-container">{children}</div>
        </div>
      ) : null}
    </Portal>
  ) : null;
};

export default Modal;
