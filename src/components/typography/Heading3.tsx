import { ComponentProps } from "react";

export const Heading3 = ({ children, ...rest }: ComponentProps<"h2">) => (
  <h3 className={"mb-2 text-2xl font-medium"} {...rest}>
    {children}
  </h3>
);
