import React from "react";
import ButtonLink from "@/components/common/ButtonLink";
import { GitHub } from "react-feather";

function GitHubSourceButton() {
  return (
    <ButtonLink
      href="https://github.com/shehroze-1122/personal-site"
      className="flex flex-row items-center gap-1 group"
    >
      <GitHub className="group-hover:scale-110" height={20} /> Source
    </ButtonLink>
  );
}

export default GitHubSourceButton;
