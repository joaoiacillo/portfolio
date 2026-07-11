import clsx from "clsx";
import { ComponentProps } from "react";

export const Heading2 = ({
  children,
  className,
  ...rest
}: ComponentProps<"h2">) => (
  <h2 className={clsx("my-12 text-4xl font-bold", className)} {...rest}>
    {children}
  </h2>
);
