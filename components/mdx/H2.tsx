import React from "react";
import { mergeClasses } from "@/lib/utils";

type H2Props = React.ComponentPropsWithoutRef<"h2">;

function H2({ className, children, ...otherProps }: H2Props) {
  const classNames = mergeClasses(
    "group relative my-8 scroll-m-8 font-extrabold text-highlight",
    className
  );

  return (
    <h2 {...otherProps} className={classNames}>
      {children}
    </h2>
  );
}

export default H2;
