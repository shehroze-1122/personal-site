import React from "react";
import { mergeClasses } from "@/lib/utils";

type TagProps = React.PropsWithChildren<React.ComponentPropsWithoutRef<"div">>;

function Tag({ children, className, ...otherProps }: TagProps) {
  const classNames = mergeClasses(
    "px-2.5 py-0.5 rounded-full text-xs bg-secondary text-highlight text-nowrap",
    className
  );

  return (
    <div {...otherProps} className={classNames}>
      {children}
    </div>
  );
}

export default Tag;
