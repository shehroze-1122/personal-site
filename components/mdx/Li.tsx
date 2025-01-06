import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type LiProps = React.ComponentPropsWithoutRef<"li">;

function Li({ className, children, ...otherProps }: LiProps) {
  const classNames = twMerge(
    clsx(
      "my-2 [ul_&]:relative [ul_&]:pl-4 [ul_&]:before:text-gray-400 [ul_&]:before:content-['–'] [ul_&]:before:mr-2 [ul_&]:before:absolute [ul_&]:before:-ml-4",
      className
    )
  );

  return (
    <li {...otherProps} className={classNames}>
      {children}
    </li>
  );
}

export default Li;
