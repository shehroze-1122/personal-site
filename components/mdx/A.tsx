import React from "react";
import ExternalLink from "../common/ExternalLink";
import InternalLink from "../common/InternalLink";
import { mergeClasses } from "@/lib/utils";

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
  const classNames = mergeClasses("", className);
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
