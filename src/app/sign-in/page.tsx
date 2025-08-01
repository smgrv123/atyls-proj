import { Button } from "@/components/commons/Button";
import { Heading } from "@/components/commons/Heading";
import { Input } from "@/components/commons/Input";
import { SubHeading } from "@/components/commons/SubHeading";
import { LogIn } from "lucide-react";
import Link from "next/link";

const inputFields = [
  {
    heading: "Email or username",
    placeholder: "Enter your email or username",
    type: "text",
    fullWidth: true,
  },
  {
    heading: "Password",
    placeholder: "Enter your password",
    type: "password",
    fullWidth: true,
  },
];

export default function SignIn() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-gray-200 px-2 pb-6 pt-2 w-1/3 rounded-2xl shadow-md flex flex-col items-center">
        <div className="bg-white px-6 py-5 rounded-2xl w-full">
          <div className="flex justify-center items-center mb-6">
            <span className="bg-gray-200 rounded-full p-4">
              <LogIn />
            </span>
          </div>
          <div className="flex flex-col gap-2 my-4 text-center">
            <Heading>Sign in to continue</Heading>
            <SubHeading>
              Sign in to access all the features on this app
            </SubHeading>
          </div>
          <form className="w-full flex flex-col gap-2">
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
              Sign In
            </Button>
          </form>
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          Do not have an account?{" "}
          <Link
            href="/sign-up"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
