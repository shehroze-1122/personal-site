import React from "react";
import { mergeClasses } from "@/lib/utils";

type PProps = React.ComponentPropsWithoutRef<"p">;

function P({ className, children, ...otherProps }: PProps) {
  const classNames = mergeClasses("[&:not(:first-child)]:mt-6", className);

  return (
    <p {...otherProps} className={classNames}>
      {children}
    </p>
  );
}

export default P;
