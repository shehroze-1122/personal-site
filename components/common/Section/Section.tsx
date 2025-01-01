import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type SectionProps = {
  title: string;
} & React.ComponentPropsWithoutRef<"section">;

function Section({ title, className, children, ...otherProps }: SectionProps) {
  const classNames = twMerge(clsx("flex flex-col gap-5", className));
  return (
    <section {...otherProps} className={classNames}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
