import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type IconLinkProps = {
  className?: string;
} & React.PropsWithChildren<LinkProps & React.HTMLProps<HTMLAnchorElement>>;

function IconLink({ className, children, ...otherProps }: IconLinkProps) {
  const classNames = twMerge(
    clsx("hover:text-primary transition-colors duration-200", className)
  );

  return (
    <Link {...otherProps} className={classNames}>
      {children}
    </Link>
  );
}

export default IconLink;
