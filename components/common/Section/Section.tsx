import React from "react";
import { mergeClasses } from "@/lib/utils";

type SectionProps = {
  title: string;
} & React.ComponentPropsWithoutRef<"section">;

function Section({ title, className, children, ...otherProps }: SectionProps) {
  const classNames = mergeClasses("flex flex-col gap-5", className);
  return (
    <section {...otherProps} className={classNames}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
