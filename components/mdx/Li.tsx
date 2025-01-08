import React from "react";
import { mergeClasses } from "@/lib/utils";

type LiProps = React.ComponentPropsWithoutRef<"li">;

function Li({ className, children, ...otherProps }: LiProps) {
  const classNames = mergeClasses(
    "my-2 [ul_&]:relative [ul_&]:pl-4 [ul_&]:before:text-gray-400 [ul_&]:before:content-['–'] [ul_&]:before:mr-2 [ul_&]:before:absolute [ul_&]:before:-ml-4",
    className
  );

  return (
    <li {...otherProps} className={classNames}>
      {children}
    </li>
  );
}

export default Li;
