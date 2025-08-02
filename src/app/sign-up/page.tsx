"use client";

import { AuthContainer } from "@/components/AuthContainer";
import { userStore } from "@/store/userStore";
import {
  signUpInputFields as inputFields,
  LocalStorageKeys,
} from "@/utils/constants";
import { signUpFormData } from "@/utils/types";
import { signUpSchema } from "@/utils/validation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ZodError } from "zod";

export default function SignUp() {
  const [error, setError] = useState<ZodError<signUpFormData> | undefined>();

  const router = useRouter();

  const setUser = userStore((getState) => getState.setUser);

  useEffect(() => {
    const user = localStorage.getItem(LocalStorageKeys.USER);
    if (user) {
      router.replace("/");
    }
  }, [router]);

  const handleSubmit = (form: FormData) => {
    const userData = Object.fromEntries(form.entries()) as signUpFormData;

    const { success, error } = signUpSchema.safeParse(userData);
    if (!success) {
      setError(error);
      return;
    }
    localStorage.setItem(LocalStorageKeys.USER, userData.emailOrUsername);
    setUser(userData.emailOrUsername);
    router.replace("/");
  };

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
          error={error}
          setError={setError}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
