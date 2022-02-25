import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface NodesProps {
  children: React.ReactNode;
  root: HTMLCollection[0];
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
