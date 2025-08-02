"use client";

import Avatar from "@/assets/avatar.png";
import { Heart, MessageCircle, Send, Smile } from "lucide-react";
import Image from "next/image";
import { FC, useState } from "react";
import { Button } from "../ui/Button";
import Toast from "../ui/Toast";

type PostCardProps = {
  userName: string;
  timestamp: string;
  emoji?: React.ReactNode;
  message: string;
};

const PostCard: FC<PostCardProps> = ({
  userName,
  timestamp,
  emoji = <Smile size={20} />,
  message,
}) => {
  const [toast, setToast] = useState(false);

  const cardIcons = [
    {
      icon: <Heart className="hover:text-red-500 cursor-pointer" size={16} />,
    },
    {
      icon: (
        <MessageCircle
          className="hover:text-blue-500 cursor-pointer"
          size={16}
        />
      ),
    },
    {
      icon: <Send className="hover:text-green-500 cursor-pointer" size={16} />,
    },
  ];

  return (
    <div className="bg-gray-200 rounded-2xl shadow p-2 pb-4 flex flex-col gap-3 w-2/5 border border-gray-100">
      <div className="bg-white rounded-md shadow-md">
        <div className="flex justify-center gap-3 py-4">
          <div className="flex flex-col gap-2 items-center flex-1/12">
            <Image
              src={Avatar}
              alt={userName}
              className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
            <span className="p-1 rounded-full bg-gray-200">{emoji}</span>
          </div>
          <div className="flex flex-col gap-2 flex-11/12">
            <div className="flex flex-col">
              <span className="font-semibold text-gray-900 text-base">
                {userName}
              </span>
              <span className="text-xs text-gray-400">{timestamp}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gray-800 text-sm leading-relaxed">
                {message}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center pl-3">
        {cardIcons.map((item, index) => (
          <Button key={index} size={"xs"} onClick={() => setToast(true)}>
            {item.icon}
          </Button>
        ))}
      </div>
      {toast && (
        <Toast
          message="Functionality not available"
          onClose={() => setToast(false)}
          variant={"error"}
        />
      )}
    </div>
  );
};

export default PostCard;
