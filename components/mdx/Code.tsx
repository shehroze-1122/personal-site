import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type CodeProps = React.ComponentPropsWithoutRef<"code">;

function Code({ className, children, ...otherProps }: CodeProps) {
  const classNames = twMerge(
    clsx(
      "px-[0.3rem] text-sm rounded-sm group-[&]:rounded-none group-[&]:[&>span[data-line]:first-child]:pt-4 group-[&]:[&>span[data-line]:last-child]:pb-4 group-[&]:[&>span[data-line]]:px-4",
      className
    )
  );

  return (
    <code {...otherProps} className={classNames}>
      {children}
    </code>
  );
}

export default Code;
