import { AuthContainer } from "@/components/AuthContainer";

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
  {
    heading: "Repeat Password",
    placeholder: "Enter your password again",
    type: "password",
    fullWidth: true,
  },
];

export default function SignUp() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-1/3">
        <AuthContainer
          inputFields={inputFields}
          heading="Create an account to continue"
          subHeading="Create an account to access all the features on this app"
          buttonText="Sign Up"
          link="/sign-in"
          linkText="Sign In"
        />
      </div>
    </div>
  );
}
