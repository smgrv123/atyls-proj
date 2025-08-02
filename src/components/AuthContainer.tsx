"use client";

import { LogIn } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { Heading } from "./ui/Heading";
import { Input } from "./ui/Input";
import { SubHeading } from "./ui/SubHeading";

type AuthContainerProps = {
  inputFields: {
    heading: string;
    placeholder: string;
    type: string;
    fullWidth: boolean;
  }[];
  heading: string;
  subHeading: string;
  link: string;
  linkText: string;
  buttonText: string;
};

const AuthContainer = ({
  inputFields,
  heading,
  subHeading,
  link,
  linkText,
  buttonText,
}: AuthContainerProps) => {
  return (
    <div className="bg-gray-200 px-2 pb-6 pt-2 rounded-2xl shadow-md flex flex-col items-center">
      <div className="bg-white px-6 py-5 rounded-2xl w-full">
        <div className="flex justify-center items-center mb-6">
          <span className="bg-gray-200 rounded-full p-4">
            <LogIn />
          </span>
        </div>
        <div className="flex flex-col gap-2 my-4 text-center">
          <Heading>{heading}</Heading>
          <SubHeading>{subHeading}</SubHeading>
        </div>
        <form
          className="w-full flex flex-col gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("first");
          }}
        >
          {inputFields.map((field, index) => (
            <Input
              heading={field.heading}
              placeholder={field.placeholder}
              type={field.type}
              key={index}
              fullWidth={field.fullWidth}
            />
          ))}
          <Button type="submit" variant="submit" className="mt-2 w-full">
            {buttonText}
          </Button>
        </form>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm">
        Do not have an account?{" "}
        <Link href={link} className="text-blue-600 font-medium hover:underline">
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export { AuthContainer };
