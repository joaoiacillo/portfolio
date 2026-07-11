import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";

import pattern01 from "@/assets/pattern-01.png";

export const CallToAction = ({
  children,
  href,
  newTab = false,
  invert = false,
}: {
  href: string;
  invert?: boolean;
  newTab?: boolean;
} & PropsWithChildren) => (
  <Link
    href={href}
    target={newTab ? "_blank" : undefined}
    className={clsx(
      "relative flex-1 overflow-hidden rounded-lg rounded-br-4xl px-12 py-6 font-bold transition-[background,scale] hover:scale-102 active:scale-95",
      invert
        ? "bg-background text-foreground border-1 border-black/10 hover:bg-black/30 active:bg-black/90"
        : "bg-black bg-center text-white active:bg-black/90",
    )}
    style={{ backgroundImage: !invert ? `url(${pattern01.src})` : "" }}
  >
    {!invert && <div className={"absolute inset-0 bg-black/80"}></div>}

    <span className={"relative flex items-center justify-center gap-2"}>
      {children}
    </span>
  </Link>
);
