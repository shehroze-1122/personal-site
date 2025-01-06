import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type H3Props = React.ComponentPropsWithoutRef<"h3">;

function H3({ className, children, ...otherProps }: H3Props) {
  const classNames = twMerge(
    clsx(
      "group relative my-6 scroll-m-8 font-semibold text-highlight",
      className
    )
  );

  return (
    <h3 {...otherProps} className={classNames}>
      {children}
    </h3>
  );
}

export default H3;
