import React from "react";
import { mergeClasses } from "@/lib/utils";

type OlProps = React.ComponentPropsWithoutRef<"ol">;

function Ol({ className, children, ...otherProps }: OlProps) {
  const classNames = mergeClasses(
    "my-5 list-decimal list-inside marker:text-highlight",
    className
  );
  return (
    <ol {...otherProps} className={classNames}>
      {children}
    </ol>
  );
}

export default Ol;
