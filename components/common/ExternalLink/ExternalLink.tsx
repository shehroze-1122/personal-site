import React from "react";
import { ArrowUpRight } from "react-feather";
import { mergeClasses } from "@/lib/utils";
type ExternalLinkProps = React.ComponentPropsWithoutRef<"a">;

function ExternalLink({
  className,
  children,
  ...otherProps
}: ExternalLinkProps) {
  const classNames = mergeClasses(
    "inline-flex flex-row gap-1 items-center text-highlight decoration-1 decoration-primary underline hover:decoration-4",
    className
  );
  return (
    <a {...otherProps} target="_blank" className={classNames}>
      {children} <ArrowUpRight width={20} height={20} />
    </a>
  );
}

export default ExternalLink;
