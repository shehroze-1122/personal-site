import React, { useRef, useState } from "react";
import { Highlight } from "../../Job";
import Button from "@/app/_components/common/Button";
import { ChevronRight, ChevronDown } from "react-feather";

type HighlightsProps = { data: Highlight[] };

function Highlights({ data }: HighlightsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const toggleExpanded = () => {
    setIsExpanded((expanded) => !expanded);
  };

  return (
    <div>
      <Button
        onClick={toggleExpanded}
        className="flex flex-row items-center my-1"
      >
        Highlights{" "}
        {isExpanded ? (
          <ChevronDown width={15} height={15} />
        ) : (
          <ChevronRight width={15} height={15} />
        )}
      </Button>
      <div
        ref={contentRef}
        className={`transition-[max-height] duration-200 ease-in-out overflow-hidden ${
          isExpanded ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <ul className="list-disc space-y-1 ml-4">
          {data.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Highlights;
