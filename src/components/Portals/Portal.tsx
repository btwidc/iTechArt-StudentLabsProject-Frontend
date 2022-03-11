import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface NodesProps {
  children: ReactNode;
  root: HTMLElement;
}

const Portal = ({ children, root }: NodesProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, root) : null;
};

export default Portal;
