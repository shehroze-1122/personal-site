import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type H2Props = React.ComponentPropsWithoutRef<"h2">;

function H2({ className, children, ...otherProps }: H2Props) {
  const classNames = twMerge(
    clsx(
      "group relative my-8 scroll-m-8 font-extrabold text-highlight",
      className
    )
  );

  return (
    <h2 {...otherProps} className={classNames}>
      {children}
    </h2>
  );
}

export default H2;
