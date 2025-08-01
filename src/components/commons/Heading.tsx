import { cn } from "@/utils/lib";
import { FC, HTMLAttributes } from "react";

const Heading: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return (
    <h1
      className={cn(
        "text-xl font-bold tracking-tight text-gray-900",
        className,
      )}
      {...props}
    />
  );
};

export { Heading };
