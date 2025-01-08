import React from "react";
import { mergeClasses } from "@/lib/utils";

type SeparatorProps = React.ComponentPropsWithoutRef<"hr">;
function Separator({ className, ...otherProps }: SeparatorProps) {
  const classNames = mergeClasses("h-px bg-secondary border-0", className);
  return <hr {...otherProps} className={classNames} />;
}

export default Separator;
