"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";

export const UserButton = ({ user }: Session) => {
  return (
    <div className="flex gap-2">
      <h1>{user?.email}</h1>

      <button onClick={() => signOut()}>sign out</button>
    </div>
  );
};
