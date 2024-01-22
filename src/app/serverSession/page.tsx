import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ServerSessionPage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/serverSession");
  }

  return (
    <>
      <h1 className="text-2xl mb-10">Server component:</h1>
      <pre>
        Session:
        <br />
        {JSON.stringify(session, null, 2)}
      </pre>
    </>
  );
}
