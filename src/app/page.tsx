"use client";

import CreatePost from "@/components/home/CreatePost";
import PostCard from "@/components/home/PostCard";
import Toast from "@/components/ui/Toast";
import { initialUserMessages } from "@/utils/constants";
import { useState } from "react";

export default function Home() {
  const [postContent, setPostContent] = useState("");
  const [userMessages, setUserMessages] = useState(initialUserMessages);

  const [toast, setToast] = useState<{
    message: string;
    variant: "info" | "error" | "success";
    isOpen: boolean;
  }>({
    message: "Post created successfully",
    variant: "info",
    isOpen: false,
  });

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
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
    </div>
  );
}
