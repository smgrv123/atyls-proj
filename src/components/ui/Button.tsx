import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC } from 'react';

const buttonVariants = cva('rounded-md', {
  variants: {
    size: {
      default: 'h-10 py-2 px-4',
      xs: 'h-fit w-fit',
      sm: 'h-9 px-2 rounded-md',
      lg: 'h-11 px-8 rounded-md',
    },
    variant: {
      primary: 'bg-inherit text-black',
      submit: 'bg-blue-600 text-white',
      outline: 'bg-transparent border-2 border-gray-200 transition-all text-sm ',
      destructive: 'bg-red-500 text-white ',
      subtle: 'bg-slate-100 text-slate-900 ',

      secondary: 'bg-gray-200 text-gray-800 ',
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'primary',
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ className, variant, size, ...props }) => {
  return <button className={buttonVariants({ variant, size, className })} {...props} />;
};

export { Button };
