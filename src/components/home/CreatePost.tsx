"use client";

import { cn } from "@/utils/lib";
import {
  Bold,
  CodeXml,
  Italic,
  List,
  ListOrdered,
  Mic,
  Plus,
  Quote,
  SendHorizontal,
  Smile,
  Trash2,
  Underline,
  Video,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../commons/Button";

export default function CreatePost() {
  const [value, setValue] = useState("");

  const topBarIcons = [
    { icon: <Bold size={16} />, title: "Bold", selected: true },
    { icon: <Italic size={16} />, title: "Italic", selected: false },
    { icon: <Underline size={16} />, title: "Underline", selected: false },
    { icon: <List size={16} />, title: "Bullet List", selected: false },
    {
      icon: <ListOrdered size={16} />,
      title: "Numbered List",
      selected: false,
    },
    { icon: <Quote size={16} />, title: "Quote", selected: false },
    { icon: <CodeXml size={16} />, title: "Code Block", selected: false },
  ];

  const bottomBarIcons = [
    { icon: <Plus size={16} />, title: "Attach", selected: true },
    { icon: <Mic size={16} />, title: "Microphone", selected: false },
    { icon: <Video size={16} />, title: "Camera", selected: false },
  ];

  return (
    <div className="border rounded-lg p-2 bg-white w-full max-w-xl shadow-sm flex flex-col gap-2">
      <div className="flex items-center justify-between pb-2">
        <div className="flex items-center gap-2 bg-gray-200 rounded-md p-1">
          <select className="text-sm bg-white rounded-sm p-2">
            <option>Paragraph</option>
          </select>
          {topBarIcons.map((item, index) => (
            <div
              key={index}
              className={cn(item.selected && "bg-white rounded-sm")}
            >
              <Button title={item.title} size={"sm"} className="align-middle">
                {item.icon}
              </Button>
            </div>
          ))}
        </div>
        <div className="bg-red-200 p-3 rounded-sm">
          <Trash2 className="text-red-400" size={16} />
        </div>
      </div>
      <div className="flex items-start gap-2">
        <Smile size={16} />
        <textarea
          className="flex-1 bg-inherit rounded-md text-sm resize-none border-none outline-none h-20"
          placeholder="How are you feeling today?"
          rows={2}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex gap-2 text-xl text-gray-400">
          {bottomBarIcons.map((item, index) => (
            <div
              key={index}
              className={cn(item.selected && "bg-gray-200 rounded-sm")}
            >
              <Button title={item.title} size={"sm"} className="align-middle">
                {item.icon}
              </Button>
            </div>
          ))}
        </div>
        <Button size="sm" className="ml-2">
          <SendHorizontal className="text-blue-500" />
        </Button>
      </div>
    </div>
  );
}
