import { ReactNode } from "react";

export default function MainContentWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center items-center screen-height-minus-nav max-w-2xl mx-auto">
      {children}
    </div>
  );
}
