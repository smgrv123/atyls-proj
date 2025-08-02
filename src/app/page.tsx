'use client';

import { AuthModal } from '@/components/AuthModal';
import CreatePost from '@/components/home/CreatePost';
import PostCard from '@/components/home/PostCard';
import Modal from '@/components/ui/Modal';
import Toast from '@/components/ui/Toast';
import { messageStore } from '@/store/messageStore';
import { userStore } from '@/store/userStore';
import { LocalStorageKeys } from '@/utils/constants';
import { signInFormData, signUpFormData } from '@/utils/types';
import { signInSchema, signUpSchema } from '@/utils/validation';
import { useEffect, useState } from 'react';
import { ZodError } from 'zod';

export default function Home() {
  const [postContent, setPostContent] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [switchAuthModal, setSwitchAuthModal] = useState(true);
  const [invalidCred, setinvalidCred] = useState(false);
  const [error, setError] = useState<ZodError<signInFormData> | undefined>();
  const [toast, setToast] = useState<{
    message: string;
    variant: 'info' | 'error' | 'success';
    isOpen: boolean;
  }>({
    message: 'Post created successfully',
    variant: 'info',
    isOpen: false,
  });
  const [user, setuser] = useState('');

  const storeUser = userStore((getState) => getState.user);
  const setUser = userStore((getState) => getState.setUser);
  const userMessages = messageStore((getState) => getState.messages);
  const appendUserMessages = messageStore((getState) => getState.appendMessage);

  const handleSignInSubmit = (form: FormData) => {
    const userData = Object.fromEntries(form.entries()) as signInFormData;
    const { success, error } = signInSchema.safeParse(userData);
    if (!success) {
      setError(error);
      return;
    }
    const userName = userData.emailOrUsername;
    const password = userData.password;
    if (
      (userName === 'demo@example.com' && password === 'password123') ||
      (userName === 'test@user.com' && password === 'testpass')
    ) {
      localStorage.setItem(LocalStorageKeys.USER, userName);
      setUser(userName);
      setOpenModal(false);
    } else {
      setinvalidCred(true);
    }
  };

  const handleSignUpSubmit = (form: FormData) => {
    const userData = Object.fromEntries(form.entries()) as signUpFormData;

    const { success, error } = signUpSchema.safeParse(userData);
    if (!success) {
      setError(error);
      return;
    }
    localStorage.setItem(LocalStorageKeys.USER, userData.emailOrUsername);
    setUser(userData.emailOrUsername);
    setOpenModal(false);
  };

  useEffect(() => {
    const user = localStorage.getItem(LocalStorageKeys.USER) || storeUser;
    if (user) {
      setuser(user);
      return;
    }
    setuser('');
  }, [storeUser, setUser]);

  return (
    <div
      className="min-h-screen flex flex-col gap-4 items-center justify-center"
      onClick={() => {
        const user = localStorage.getItem(LocalStorageKeys.USER);

        if (!user) {
          setOpenModal(true);
        }
      }}
    >
      <CreatePost
        postContent={postContent}
        setPostContent={setPostContent}
        onSubmit={() => {
          if (postContent.trim() === '') return;
          appendUserMessages({
            userName: user,
            message: postContent,
            timestamp: '5 mins ago',
          });
          setToast({
            message: 'Post created successfully',
            variant: 'success',
            isOpen: true,
          });
          setPostContent('');
        }}
      />
      {userMessages.map((item, index) => (
        <PostCard key={index} {...item} />
      ))}
      {toast.isOpen && <Toast onClose={() => setToast({ ...toast, isOpen: false })} {...toast} />}
      <Modal isOpen={openModal}>
        <AuthModal
          switchAuthModal={switchAuthModal}
          setSwitchAuthModal={setSwitchAuthModal}
          handleSignInSubmit={handleSignInSubmit}
          handleSignUpSubmit={handleSignUpSubmit}
          error={error}
          setError={setError}
        />
      </Modal>
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
