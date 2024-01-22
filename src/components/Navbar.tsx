import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import AuthButton from "./AuthButton";

const LINK_BUTTON_STYLE = cn(
  buttonVariants({
    variant: "ghost",
    size: "lg",
  }),
  "font-semibold text-lg"
);

export default function Navbar() {
  return (
    <section className="sticky top-0 z-50">
      <header className="px-10 py-2 border-b">
        <div className="flex gap-2">
          <Link href="/" className={LINK_BUTTON_STYLE}>
            Hjem
          </Link>
          <Link href="/protected" className={LINK_BUTTON_STYLE}>
            Middleware test
          </Link>
          <Link href="/serverSession" className={LINK_BUTTON_STYLE}>
            Server session
          </Link>
          <Link href="/clientSession" className={LINK_BUTTON_STYLE}>
            Klient session
          </Link>
          <Link href="/whoAmI" className={LINK_BUTTON_STYLE}>
            Hvem er jeg?
          </Link>
          <div className="w-full" />
          <AuthButton size="lg" className="text-lg" />
        </div>
      </header>
    </section>
  );
}
