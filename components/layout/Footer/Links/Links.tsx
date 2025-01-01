import React from "react";
import IconLink from "@/components/common/IconLink";
import data from "@/data/personal/links";

function Links() {
  const links = data.links;
  return (
    <div className="flex flex-row items-center gap-2">
      {links.map(({ Icon, key, href }) => (
        <IconLink key={key} href={href} target="_blank">
          <Icon height={25} width={25} />
        </IconLink>
      ))}
    </div>
  );
}

export default Links;
