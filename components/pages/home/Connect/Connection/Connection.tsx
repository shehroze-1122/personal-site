import React from "react";
import ExternalLink from "@/components/common/ExternalLink";

type ConnectionProps = {
  type: string;
  href: string;
  label: string;
};

function Connection({ type, href, label }: ConnectionProps) {
  return (
    <div className="flex flex-row items-center gap-10 px-0 max-xs:flex-col max-xs:items-start max-xs:gap-0">
      <div className="text-left w-12 text-foreground">{type}</div>
      <div>
        <ExternalLink href={href}>{label}</ExternalLink>
      </div>
    </div>
  );
}

export default Connection;
