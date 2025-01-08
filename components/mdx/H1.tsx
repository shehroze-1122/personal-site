import React from "react";
import { mergeClasses } from "@/lib/utils";

type H1Props = React.ComponentPropsWithoutRef<"h1">;

function H1({ className, children, ...otherProps }: H1Props) {
  const classNames = mergeClasses(
    "group relative my-8 scroll-m-8 font-extrabold text-highlight",
    className
  );

  return (
    <h1 {...otherProps} className={classNames}>
      {children}
    </h1>
  );
}

export default H1;
