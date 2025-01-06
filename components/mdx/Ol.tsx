import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type OlProps = React.ComponentPropsWithoutRef<"ol">;

function Ol({ className, children, ...otherProps }: OlProps) {
  const classNames = twMerge(
    clsx("my-5 list-decimal list-inside marker:text-highlight", className)
  );

  return (
    <ol {...otherProps} className={classNames}>
      {children}
    </ol>
  );
}

export default Ol;
