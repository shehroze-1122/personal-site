import React from "react";
import { mergeClasses } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

type InternalLinkProps = { className?: string } & React.PropsWithChildren<
  LinkProps & React.HTMLProps<HTMLAnchorElement>
>;

function InternalLink({ className, ...otherProps }: InternalLinkProps) {
  const classNames = mergeClasses(
    "decoration-1 decoration-primary underline hover:decoration-4 hover:text-highlight",
    className
  );
  return <Link {...otherProps} className={classNames} />;
}

export default InternalLink;
