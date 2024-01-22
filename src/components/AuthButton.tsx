"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button, ButtonProps } from "./ui/button";
import { LoadingSpinner } from "./LoadingSpinner";

export default function AuthButton(props: ButtonProps) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Button className="px-5" {...props}>
        <LoadingSpinner />
      </Button>
    );
  }

  return (
    <>
      {status === "authenticated" && session.user ? (
        <Button
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
          {...props}
        >
          Logg ut
        </Button>
      ) : (
        <Button onClick={() => signIn()} {...props}>
          Logg inn
        </Button>
      )}
    </>
  );
}
