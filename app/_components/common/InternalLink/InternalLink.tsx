import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

type InternalLinkProps = { className?: string } & React.PropsWithChildren<
  LinkProps & React.HTMLProps<HTMLAnchorElement>
>;

function InternalLink({ className, ...otherProps }: InternalLinkProps) {
  const classNames = twMerge(
    clsx(
      "decoration-1 decoration-primary underline hover:decoration-4 hover:text-highlight",
      className
    )
  );
  return <Link {...otherProps} className={classNames} />;
}

export default InternalLink;
