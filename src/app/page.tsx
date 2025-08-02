"use client";

import CreatePost from "@/components/home/CreatePost";
import PostCard from "@/components/home/PostCard";
import Toast from "@/components/ui/Toast";
import { useState } from "react";

export default function Home() {
  const [postContent, setPostContent] = useState("");
  const [userMessages, setUserMessages] = useState([
    {
      userName: "test",
      message:
        "Tempor laborum irure quis eiusmod amet dolor adipisicing. Do et reprehenderit aliqua commodo. Excepteur duis duis in esse officia excepteur qui officia ea et quis et cupidatat ad non. Ut voluptate cupidatat eu. Qui elit aliquip ea. Proident ipsum ut sunt.",
      timestamp: "5 mins ago",
    },
    {
      userName: "test2",
      message:
        "Tempor laborum irure quis eiusmod amet dolor adipisicing. Do et reprehenderit aliqua commodo. Excepteur duis duis in esse officia excepteur qui officia ea et quis et cupidatat ad non. Ut voluptate cupidatat eu. Qui elit aliquip ea. Proident ipsum ut sunt.",
      timestamp: "5 mins ago",
    },
    {
      userName: "test3",
      message:
        "Tempor laborum irure quis eiusmod amet dolor adipisicing. Do et reprehenderit aliqua commodo. Excepteur duis duis in esse officia excepteur qui officia ea et quis et cupidatat ad non. Ut voluptate cupidatat eu. Qui elit aliquip ea. Proident ipsum ut sunt.",
      timestamp: "5 mins ago",
    },
    {
      userName: "test4",
      message:
        "Tempor laborum irure quis eiusmod amet dolor adipisicing. Do et reprehenderit aliqua commodo. Excepteur duis duis in esse officia excepteur qui officia ea et quis et cupidatat ad non. Ut voluptate cupidatat eu. Qui elit aliquip ea. Proident ipsum ut sunt.",
      timestamp: "5 mins ago",
    },
  ]);

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
