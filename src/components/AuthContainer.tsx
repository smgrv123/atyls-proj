'use client';

import { AuthContainerProps } from '@/utils/types';
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { Button } from './ui/Button';
import { Heading } from './ui/Heading';
import { Input } from './ui/Input';
import { SubHeading } from './ui/SubHeading';

const AuthContainer: FC<AuthContainerProps> = ({
  inputFields,
  heading,
  subHeading,
  link,
  linkText,
  buttonText,
  onSubmit,
  error,
  setError,
  isModal = false,
  setIsModal,
}) => {
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
            const formData = new FormData(e.currentTarget);

            onSubmit(formData);
          }}
        >
          {inputFields.map((field, index) => (
            <div key={index} className="flex flex-col gap-2">
              <Input
                heading={field.heading}
                placeholder={field.placeholder}
                type={field.type}
                fullWidth={field.fullWidth}
                name={field.name}
                onChange={() => setError(undefined)}
              />
              {error?.issues
                .filter((i) => i.path.includes(field.name))
                .map((i) => (
                  <p key={i.message} className="text-red-500 text-sm">
                    {i.message}
                  </p>
                ))}
            </div>
          ))}
          <Button type="submit" variant="submit" className="mt-2 w-full">
            {buttonText}
          </Button>
        </form>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm">
        Do not have an account?{' '}
        {isModal && setIsModal ? (
          <Button onClick={setIsModal} className="text-blue-600 font-medium hover:underline">
            {linkText}
          </Button>
        ) : (
          <Link href={link} className="text-blue-600 font-medium hover:underline">
            {linkText}
          </Link>
        )}
      </div>
    </div>
  );
};

export { AuthContainer };
