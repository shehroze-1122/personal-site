import React from "react";
import { mergeClasses } from "@/lib/utils";

type CodeProps = React.ComponentPropsWithoutRef<"code">;

function Code({ className, children, ...otherProps }: CodeProps) {
  const classNames = mergeClasses(
    "px-[0.3rem] text-sm rounded-sm group-[&]:rounded-none group-[&]:[&>span[data-line]:first-child]:pt-4 group-[&]:[&>span[data-line]:last-child]:pb-4 group-[&]:[&>span[data-line]]:px-4",
    className
  );

  return (
    <code {...otherProps} className={classNames}>
      {children}
    </code>
  );
}

export default Code;
