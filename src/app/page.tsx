import { auth } from "@/auth";
import AuthButton from "@/components/AuthButton";

export default async function Home() {
  const session = await auth();

  return (
    <section>
      <h1 className="text-5xl mb-10 text-center">Auth.js v5 demo</h1>
      <pre>
        Session:
        <br />
        {JSON.stringify(session, null, 2)}
      </pre>{" "}
      {!session?.user && (
        <div className="flex justify-center mt-10">
          <AuthButton />
        </div>
      )}
    </section>
  );
}
