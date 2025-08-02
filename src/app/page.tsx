"use client";

import { AuthModal } from "@/components/AuthModal";
import CreatePost from "@/components/home/CreatePost";
import PostCard from "@/components/home/PostCard";
import Modal from "@/components/ui/Modal";
import Toast from "@/components/ui/Toast";
import { userStore } from "@/store/userStore";
import { initialUserMessages, LocalStorageKeys } from "@/utils/constants";
import { signInFormData, signUpFormData } from "@/utils/types";
import { signInSchema, signUpSchema } from "@/utils/validation";
import { useState } from "react";
import { ZodError } from "zod";

export default function Home() {
  const [postContent, setPostContent] = useState("");
  const [userMessages, setUserMessages] = useState(initialUserMessages);
  const [openModal, setOpenModal] = useState(false);
  const [switchAuthModal, setSwitchAuthModal] = useState(true);
  const [invalidCred, setinvalidCred] = useState(false);
  const [error, setError] = useState<ZodError<signInFormData> | undefined>();
  const [toast, setToast] = useState<{
    message: string;
    variant: "info" | "error" | "success";
    isOpen: boolean;
  }>({
    message: "Post created successfully",
    variant: "info",
    isOpen: false,
  });

  const setUser = userStore((getState) => getState.setUser);

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
      (userName === "demo@example.com" && password === "password123") ||
      (userName === "test@user.com" && password === "testpass")
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

  console.log("fooooo");
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
          if (postContent.trim() === "") return;
          setUserMessages((prev) => [
            {
              userName: "test",
              message: postContent,
              timestamp: "5 mins ago",
            },
            ...prev,
          ]);
          setToast({
            message: "Post created successfully",
            variant: "success",
            isOpen: true,
          });
          setPostContent("");
        }}
      />
      {userMessages.map((item, index) => (
        <PostCard key={index} {...item} />
      ))}
      {toast.isOpen && (
        <Toast
          onClose={() => setToast({ ...toast, isOpen: false })}
          {...toast}
        />
      )}
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
