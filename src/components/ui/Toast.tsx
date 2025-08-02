import { cva, type VariantProps } from 'class-variance-authority';
import { CircleAlert, Info } from 'lucide-react';
import React, { useEffect } from 'react';

const toastVariants = cva(
  [
    'fixed left-1/2 bottom-8 z-50 min-w-[280px] max-w-xs px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 opacity-100 animate-toast-enter',
    'transform -translate-x-1/2',
    'transition-all duration-300',
  ],
  {
    variants: {
      variant: {
        info: 'bg-blue-600 text-white',
        error: 'bg-red-600 text-white',
        success: 'bg-green-600 text-white',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

interface ToastProps extends VariantProps<typeof toastVariants> {
  message: string;
  onClose: () => void;
}

const icons = {
  info: <Info />,
  error: <CircleAlert />,
};

export const Toast: React.FC<ToastProps> = ({ message, variant = 'info', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={toastVariants({ variant })} role="alert">
      <span className="flex items-center">{icons[variant as keyof typeof icons]}</span>
      <span className="flex-1 text-base font-medium">{message}</span>
      <button
        onClick={onClose}
        aria-label="Close"
        className="ml-2 text-lg leading-none bg-transparent border-none text-white hover:text-gray-200 focus:outline-none"
        type="button"
      >
        ×
      </button>
    </div>
  );
};

export default Toast;
