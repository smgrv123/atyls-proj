import { Dispatch, SetStateAction } from "react";
import { ZodError } from "zod";

export type AuthContainerProps = {
  inputFields: {
    heading: string;
    placeholder: string;
    type: string;
    fullWidth: boolean;
    name: string;
  }[];
  heading: string;
  subHeading: string;
  link: string;
  linkText: string;
  buttonText: string;
  onSubmit: (form: FormData) => void;
  error: ZodError<signInFormData> | ZodError<signUpFormData> | undefined;
  setError: Dispatch<
    SetStateAction<
      ZodError<signInFormData> | ZodError<signUpFormData> | undefined
    >
  >;
};

export type signUpFormData = {
  emailOrUsername: string;
  password: string;
  repeatPassword?: string;
};

export type signInFormData = {
  emailOrUsername: string;
  password: string;
};

export type user = {
  emailOrUsername: string;
  password: string;
};
