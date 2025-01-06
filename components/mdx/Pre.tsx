"use client";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { Check, Clipboard } from "react-feather";
import { twMerge } from "tailwind-merge";

type PreProps = React.ComponentPropsWithoutRef<"pre">;

function Pre({ className, children, ...otherProps }: PreProps) {
  const classNames = twMerge(
    clsx(
      "group overflow-x-auto py-0 my-8 border border-secondary rounded-md",
      className
    )
  );

  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleClickCopy = async () => {
    const code = preRef.current?.textContent;

    if (code) {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  };

  return (
    <div className="relative">
      <button
        disabled={isCopied}
        onClick={handleClickCopy}
        className="absolute right-3 top-3 size-6 z-10"
      >
        {isCopied ? <Check className="text-green-400 " /> : <Clipboard />}
      </button>
      <pre ref={preRef} {...otherProps} className={classNames}>
        {children}
      </pre>
    </div>
  );
}

export default Pre;
