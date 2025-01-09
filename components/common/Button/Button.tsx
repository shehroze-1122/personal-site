import React from "react";
import { mergeClasses } from "@/lib/utils";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

function Button({ className, children, ...otherProps }: ButtonProps) {
  const classNames = mergeClasses(
    "text-foreground bg-secondary border border-secondary rounded-lg px-2 py-1 transition-colors duration-200 hover:border hover:border-primary hover:text-highlight",
    className
  );
  return (
    <button {...otherProps} className={classNames}>
      {children}
    </button>
  );
}

export default Button;
