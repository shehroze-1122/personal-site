import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

function Button({ className, children, ...otherProps }: ButtonProps) {
  const classNames = twMerge(
    clsx(
      "text-foreground bg-transparent border border-secondary rounded-lg px-2 py-1 transition-colors duration-200 hover:border-primary hover:text-highlight",
      className
    )
  );
  return (
    <button {...otherProps} className={classNames}>
      {children}
    </button>
  );
}

export default Button;
