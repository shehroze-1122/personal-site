import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type UlProps = React.ComponentPropsWithoutRef<"ul">;

function Ul({ className, children, ...otherProps }: UlProps) {
  const classNames = twMerge(
    clsx("my-5 list-none list-inside marker:text-highlight", className)
  );

  return (
    <ul {...otherProps} className={classNames}>
      {children}
    </ul>
  );
}

export default Ul;
