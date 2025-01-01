import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type SeparatorProps = React.ComponentPropsWithoutRef<"hr">;
function Separator({ className, ...otherProps }: SeparatorProps) {
  const classNames = twMerge(clsx("h-px bg-secondary border-0", className));
  return <hr {...otherProps} className={classNames} />;
}

export default Separator;
