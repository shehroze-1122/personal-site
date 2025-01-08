import React from "react";
import { mergeClasses } from "@/lib/utils";

type H3Props = React.ComponentPropsWithoutRef<"h3">;

function H3({ className, children, ...otherProps }: H3Props) {
  const classNames = mergeClasses(
    "group relative my-6 scroll-m-8 font-semibold text-highlight",
    className
  );

  return (
    <h3 {...otherProps} className={classNames}>
      {children}
    </h3>
  );
}

export default H3;
