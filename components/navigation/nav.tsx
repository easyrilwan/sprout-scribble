// import { LogIn } from "lucide-react";
import Link from "next/link";

import { auth } from "@/server/auth";

import { UserButton } from "./user-button";

export default async function nav() {
  const session = await auth();
  console.log(session);

  return (
    <header className="py-8">
      <nav>
        <ul className="flex items-center justify-between">
          <li>Logo</li>

          {!session ? (
            <li>
              <button>
                <Link
                  aria-label="sign-in"
                  className="space-x-2"
                  href={"/auth/login"}
                >
                  <span>Login</span>
                </Link>
              </button>
            </li>
          ) : (
            <li>
              <UserButton user={session?.user} expires={session?.expires} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
