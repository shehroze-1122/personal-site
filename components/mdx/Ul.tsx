import React from "react";
import { mergeClasses } from "@/lib/utils";

type UlProps = React.ComponentPropsWithoutRef<"ul">;

function Ul({ className, children, ...otherProps }: UlProps) {
  const classNames = mergeClasses(
    "my-5 list-none list-inside marker:text-highlight",
    className
  );

  return (
    <ul {...otherProps} className={classNames}>
      {children}
    </ul>
  );
}

export default Ul;
