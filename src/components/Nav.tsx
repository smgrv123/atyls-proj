'use client';

import { userStore } from '@/store/userStore';
import { LocalStorageKeys } from '@/utils/constants';
import { LogIn, Mouse } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from './ui/Button';

const Nav = () => {
  const [user, setuser] = useState<string>();

  const pathName = usePathname();

  const storeUser = userStore((getState) => getState.user);
  const setStoreUser = userStore((getState) => getState.setUser);
  const clearUser = userStore((getState) => getState.clearUser);

  useEffect(() => {
    const user = localStorage.getItem(LocalStorageKeys.USER) || storeUser;
    if (user) {
      if (!storeUser) {
        setStoreUser(user);
      }
      setuser(user);
      return;
    }
    setuser('');
  }, [user, storeUser, setStoreUser]);

  return (
    <nav className="flex flex-row justify-between items-center pl-7 pr-5 py-3">
      <div className="flex flex-row gap-1 items-center">
        <div className="rotate-90">
          <Mouse />
        </div>
        <span className="font-semibold">foo-rum</span>
      </div>
      {user ? (
        <Button variant={'primary'} size={'xs'} onClick={clearUser}>
          <span className="font-semibold">{user}</span>
        </Button>
      ) : pathName.includes('sign') ? (
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
