"use client";

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";

export default function Socials() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <Button
        variant={"outline"}
        className="flex w-full gap-4"
        onClick={() =>
          signIn("google", {
            // redirect: false,
            callbackUrl: "/",
          })
        }
      >
        <p>Sign in with Google</p>
        <FcGoogle className="size-5" />
      </Button>

      <Button
        variant={"outline"}
        className="flex w-full gap-4"
        onClick={() =>
          signIn("github", {
            // redirect: false,
            callbackUrl: "/",
          })
        }
      >
        <p>Sign in with Github</p>
        <FaGithub className="size-5" />
      </Button>
    </div>
  );
}
