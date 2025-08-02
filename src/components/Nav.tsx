"use client";

import { LogIn, Mouse } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav className="flex flex-row justify-between items-center pl-7 pr-5 py-3">
      <div className="flex flex-row gap-1 items-center">
        <div className="rotate-90">
          <Mouse />
        </div>
        <span className="font-semibold">foo-rum</span>
      </div>
      {pathName.includes("sign") ? (
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
