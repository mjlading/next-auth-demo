"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function WhoAmIButton() {
  const [showUserInfo, setShowUserInfo] = useState(false);

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <h1>Laster...</h1>;
  }

  if (status === "unauthenticated") {
    redirect("/api/auth/signin?callbackUrl=/whoAmI");
  }

  return (
    <>
      <Button onClick={() => setShowUserInfo(!showUserInfo)}>
        Hvem er jeg?
      </Button>
      {showUserInfo && <pre>{JSON.stringify(session, null, 2)}</pre>}
    </>
  );
}
