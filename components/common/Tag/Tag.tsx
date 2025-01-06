import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type TagProps = React.PropsWithChildren<React.ComponentPropsWithoutRef<"div">>;

function Tag({ children, className, ...otherProps }: TagProps) {
  const classNames = twMerge(
    clsx(
      "px-2.5 py-0.5 rounded-full text-xs bg-secondary text-highlight text-nowrap",
      className
    )
  );

  return (
    <div {...otherProps} className={classNames}>
      {children}
    </div>
  );
}

export default Tag;
