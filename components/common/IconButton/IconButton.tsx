import React from "react";
import { mergeClasses } from "@/lib/utils";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

function IconButton({ className, children, ...otherProps }: ButtonProps) {
  const classNames = mergeClasses(
    "text-foreground hover:text-highlight",
    className
  );
  return (
    <button {...otherProps} className={classNames}>
      {children}
    </button>
  );
}

export default IconButton;
