import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type TextSliderProps = {
  className?: string;
};

function TextSlider({ className }: TextSliderProps) {
  const classNames = twMerge(
    clsx("relative h-[1em] w-36 overflow-hidden", className)
  );

  return (
    <div className={classNames}>
      <span className="absolute h-full w-full -translate-y-full animate-slide leading-none">
        Product Engineer
      </span>
      <span className="absolute h-full w-full -translate-y-full animate-slide leading-none [animation-delay:2s]">
        Full Stack Engineer
      </span>
    </div>
  );
}

export default TextSlider;
