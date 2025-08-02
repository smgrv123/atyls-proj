"use client";

import { AuthContainer } from "@/components/AuthContainer";
import Toast from "@/components/ui/Toast";
import { userStore } from "@/store/userStore";
import {
  signInInputFields as inputFields,
  LocalStorageKeys,
} from "@/utils/constants";
import { signInFormData } from "@/utils/types";
import { signInSchema } from "@/utils/validation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ZodError } from "zod";

export default function SignIn() {
  const [error, setError] = useState<ZodError<signInFormData> | undefined>();

  const [invalidCred, setinvalidCred] = useState(false);
  const router = useRouter();
  const storeUser = userStore((getState) => getState.user);
  const setUser = userStore((getState) => getState.setUser);

  useEffect(() => {
    const user = localStorage.getItem(LocalStorageKeys.USER) || storeUser;
    if (user) {
      router.replace("/");
    }
  }, [router, storeUser]);

  const handleSubmit = (form: FormData) => {
    const userData = Object.fromEntries(form.entries()) as signInFormData;
    const { success, error } = signInSchema.safeParse(userData);
    if (!success) {
      setError(error);
      return;
    }
    const userName = userData.emailOrUsername;
    const password = userData.password;
    if (
      (userName === "demo@example.com" && password === "password123") ||
      (userName === "test@user.com" && password === "testpass")
    ) {
      localStorage.setItem(LocalStorageKeys.USER, userName);
      setUser(userName);
      router.replace("/");
    } else {
      setinvalidCred(true);
    }
  };

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
          error={error}
          setError={setError}
          onSubmit={handleSubmit}
        />
      </div>
      {invalidCred && (
        <Toast
          message="Invalid credentials. Please try again."
          variant="error"
          onClose={() => setinvalidCred(false)}
        />
      )}
    </div>
  );
}
