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
];

export default function SignIn() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-1/3">
        <AuthContainer
          inputFields={inputFields}
          heading="Sign in to continue"
          subHeading="Sign in to access all the features on this app"
          buttonText="Sign In"
          link="/sign-up"
          linkText="Sign Up"
        />
      </div>
    </div>
  );
}
