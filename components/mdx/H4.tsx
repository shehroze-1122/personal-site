import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type H4Props = React.ComponentPropsWithoutRef<"h4">;

function H4({ className, children, ...otherProps }: H4Props) {
  const classNames = twMerge(
    clsx(
      "group relative my-6 scroll-m-8 font-semibold text-highlight",
      className
    )
  );

  return (
    <h4 {...otherProps} className={classNames}>
      {children}
    </h4>
  );
}

export default H4;
