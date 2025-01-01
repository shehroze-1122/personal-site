import React from "react";
import IconLink from "@/components/common/IconLink";
import { GitHub, Linkedin, Mail } from "react-feather";

const data = [
  {
    key: "email",
    href: "mailto:talat.shehroze@gmail.com",
    Icon: Mail,
  },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/shehroze-talat/",
    Icon: Linkedin,
  },
  {
    key: "github",
    href: "https://github.com/shehroze-1122",
    Icon: GitHub,
  },
];

function Links() {
  return (
    <div className="flex flex-row items-center gap-2">
      {data.map(({ Icon, key, href }) => (
        <IconLink key={key} href={href} target="_blank">
          <Icon height={25} width={25} />
        </IconLink>
      ))}
    </div>
  );
}

export default Links;
