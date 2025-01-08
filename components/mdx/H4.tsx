import React from "react";
import { mergeClasses } from "@/lib/utils";

type H4Props = React.ComponentPropsWithoutRef<"h4">;

function H4({ className, children, ...otherProps }: H4Props) {
  const classNames = mergeClasses(
    "group relative my-6 scroll-m-8 font-semibold text-highlight",
    className
  );

  return (
    <h4 {...otherProps} className={classNames}>
      {children}
    </h4>
  );
}

export default H4;
