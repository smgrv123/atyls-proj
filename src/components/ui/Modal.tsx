'use client';

import { cn } from '@/utils/lib';
import React, { useEffect, useRef, useState } from 'react';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  const [show, setShow] = useState(isOpen);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timeout = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      ref={overlayRef}
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity duration-300',
        isOpen ? 'opacity-100' : 'opacity-0'
      )}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={cn(
          'w-1/3 relative transition-all duration-300 transform',
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        )}
        style={{ minWidth: 300 }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
