import React from "react";
import { mergeClasses } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

type IconLinkProps = {
  className?: string;
} & React.PropsWithChildren<LinkProps & React.HTMLProps<HTMLAnchorElement>>;

function IconLink({ className, children, ...otherProps }: IconLinkProps) {
  const classNames = mergeClasses(
    "hover:text-primary transition-colors duration-200",
    className
  );

  return (
    <Link {...otherProps} className={classNames}>
      {children}
    </Link>
  );
}

export default IconLink;
