import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
import ExternalLink from "../common/ExternalLink";
import InternalLink from "../common/InternalLink";

type AProps = React.ComponentPropsWithoutRef<"a">;

function A({ className, children, ...otherProps }: AProps) {
  if (className?.includes("rehype-auto-link")) {
    return (
      <a
        {...otherProps}
        className="w-full text-highlight opacity-0 absolute ml-[-20px] transition-opacity duration-200 group-hover:opacity-100"
      >
        #
      </a>
    );
  }
  const classNames = twMerge(clsx("", className));
  if (!otherProps.href || otherProps.href.startsWith("http")) {
    return (
      <ExternalLink {...otherProps} className={classNames}>
        {children}
      </ExternalLink>
    );
  }
  return (
    <InternalLink {...otherProps} href={otherProps.href} className={classNames}>
      {children}
    </InternalLink>
  );
}

export default A;
