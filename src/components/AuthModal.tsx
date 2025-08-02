import { signInInputFields, signUpInputFields } from '@/utils/constants';
import { signInFormData } from '@/utils/types';
import { Dispatch, FC, SetStateAction } from 'react';
import { ZodError } from 'zod';
import { AuthContainer } from './AuthContainer';

type AuthModalType = {
  switchAuthModal: boolean;
  setSwitchAuthModal: Dispatch<SetStateAction<boolean>>;
  handleSignInSubmit: (e: FormData) => void;
  handleSignUpSubmit: (e: FormData) => void;
  error: ZodError<signInFormData> | undefined;
  setError: Dispatch<SetStateAction<ZodError<signInFormData> | undefined>>;
};

const AuthModal: FC<AuthModalType> = ({
  switchAuthModal,
  setSwitchAuthModal,
  handleSignInSubmit,
  handleSignUpSubmit,
  error,
  setError,
}) => {
  return (
    <>
      {switchAuthModal ? (
        <AuthContainer
          inputFields={signInInputFields}
          heading="Sign in to continue"
          subHeading="Sign in to access all the features on this app"
          buttonText="Sign In"
          link="/sign-up"
          linkText="Sign Up"
          error={error}
          setError={setError}
          onSubmit={handleSignInSubmit}
          isModal={true}
          setIsModal={() => {
            setSwitchAuthModal((prev) => !prev);
          }}
        />
      ) : (
        <AuthContainer
          inputFields={signUpInputFields}
          heading="Create an account to continue"
          subHeading="Create an account to access all the features on this app"
          buttonText="Sign Up"
          link="/sign-in"
          linkText="Sign In"
          error={error}
          setError={setError}
          onSubmit={handleSignUpSubmit}
          isModal={true}
          setIsModal={() => {
            setSwitchAuthModal((prev) => !prev);
          }}
        />
      )}
    </>
  );
};

export { AuthModal };
