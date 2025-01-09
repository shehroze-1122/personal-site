import React from "react";
import { mergeClasses } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

type ButtonLinkProps = { className?: string } & React.PropsWithChildren<
  LinkProps & React.HTMLProps<HTMLAnchorElement>
>;

function ButtonLink({ className, ...otherProps }: ButtonLinkProps) {
  const classNames = mergeClasses(
    "text-foreground bg-secondary border border-secondary rounded-lg px-2.5 py-1.5 transition-colors duration-200 hover:border hover:border-primary hover:text-highlight",
    className
  );
  return <Link {...otherProps} className={classNames} />;
}

export default ButtonLink;
