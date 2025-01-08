import React from "react";
import { mergeClasses } from "@/lib/utils";

type TextSliderProps = {
  className?: string;
};

function TextSlider({ className }: TextSliderProps) {
  const classNames = mergeClasses(
    "relative h-[1em] w-36 overflow-hidden",
    className
  );

  return (
    <div className={classNames}>
      <span className="absolute h-full w-full -translate-y-full animate-slide leading-none">
        Product Engineer
      </span>
      <span className="absolute h-full w-full -translate-y-full animate-slide-secondary leading-none [animation-delay:2s]">
        Full Stack Engineer
      </span>
    </div>
  );
}

export default TextSlider;
