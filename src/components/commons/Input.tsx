import { cn } from "@/utils/lib";
import { FC, InputHTMLAttributes } from "react";
import { Heading } from "./Heading";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  heading?: string;
  fullWidth?: boolean;
}

const Input: FC<InputProps> = ({
  className,
  heading,
  fullWidth = false,
  ...props
}) => {
  return (
    <>
      {heading && <Heading className="text-sm">{heading}</Heading>}
      <input
        className={cn(
          "px-3 py-2 bg-gray-100 rounded-md text-sm",
          fullWidth ? "w-full" : "w-max",
          className,
        )}
        {...props}
      />
    </>
  );
};

export { Input };
