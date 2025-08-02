"use client";

import { LocalStorageKeys } from "@/utils/constants";
import { LogIn, Mouse } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Nav = () => {
  const pathName = usePathname();
  const [user, setuser] = useState<string>();

  useEffect(() => {
    const user = localStorage.getItem(LocalStorageKeys.USER);
    if (user) {
      setuser(user);
    }
  }, []);

  return (
    <nav className="flex flex-row justify-between items-center pl-7 pr-5 py-3">
      <div className="flex flex-row gap-1 items-center">
        <div className="rotate-90">
          <Mouse />
        </div>
        <span className="font-semibold">foo-rum</span>
      </div>
      {user ? (
        <span className="font-semibold">{user}</span>
      ) : pathName.includes("sign") ? (
        <Link href="/">
          <span className="font-semibold">Return to Home</span>
        </Link>
      ) : (
        <Link href="/sign-in">
          <div className="flex flex-row gap-1 items-center">
            <span className="font-semibold">Log In</span>
            <LogIn />
          </div>
        </Link>
      )}
    </nav>
  );
};

export { Nav };
