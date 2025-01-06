import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type H1Props = React.ComponentPropsWithoutRef<"h1">;

function H1({ className, children, ...otherProps }: H1Props) {
  const classNames = twMerge(
    clsx(
      "group relative my-8 scroll-m-8 font-extrabold text-highlight",
      className
    )
  );

  return (
    <h1 {...otherProps} className={classNames}>
      {children}
    </h1>
  );
}

export default H1;
