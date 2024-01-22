"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ClientSessionPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <h1>Laster...</h1>;
  }

  if (status === "unauthenticated") {
    redirect("/api/auth/signin?callbackUrl=/clientSession");
  }

  return (
    <>
      <h1 className="mb-10 text-2xl">Client component</h1>

      {status === "authenticated" && session.user && (
        <pre>
          Session:
          <br />
          {JSON.stringify(session, null, 2)}
        </pre>
      )}
    </>
  );
}
