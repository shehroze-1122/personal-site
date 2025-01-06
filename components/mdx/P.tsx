import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type PProps = React.ComponentPropsWithoutRef<"p">;

function P({ className, children, ...otherProps }: PProps) {
  const classNames = twMerge(clsx("[&:not(:first-child)]:mt-6", className));

  return (
    <p {...otherProps} className={classNames}>
      {children}
    </p>
  );
}

export default P;
