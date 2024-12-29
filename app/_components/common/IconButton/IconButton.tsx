import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

function IconButton({ className, children, ...otherProps }: ButtonProps) {
  const classNames = twMerge(
    clsx("text-foreground hover:text-highlight", className)
  );
  return (
    <button {...otherProps} className={classNames}>
      {children}
    </button>
  );
}

export default IconButton;
