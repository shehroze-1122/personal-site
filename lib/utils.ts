import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const getFormattedDateString = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

export const mergeClasses = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
