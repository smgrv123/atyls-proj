import { cn } from '@/utils/lib';
import { FC, HTMLAttributes } from 'react';

const SubHeading: FC<HTMLAttributes<HTMLHeadingElement>> = ({ className, ...props }) => {
  return (
    <h4 className={cn('text-sm font-normal tracking-tight text-gray-500', className)} {...props} />
  );
};

export { SubHeading };
