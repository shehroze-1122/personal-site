import React from "react";
import CopyRight from "./CopyRight";
import Links from "./Links";
import Navigation from "../Header/Navigation";
import GitHubSourceButton from "./GitHubSourceButton";

function Footer() {
  return (
    <footer className="mt-10 flex flex-col gap-8 max-xs:gap-4">
      <div className="flex flex-row justify-between items-center">
        <Navigation />
        <GitHubSourceButton />
      </div>
      <div className="flex flex-row justify-between items-center font-mono max-xs:flex-col-reverse max-xs:items-start max-xs:gap-3">
        <CopyRight />
        <Links />
      </div>
    </footer>
  );
}

export default Footer;
