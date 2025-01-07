import React from "react";
import CopyRight from "./CopyRight";
import Links from "./Links";

function Footer() {
  return (
    <footer className="mt-14 flex flex-row justify-between items-center font-mono max-xs:flex-col-reverse max-xs:items-center max-xs:gap-3">
      <CopyRight />
      <Links />
    </footer>
  );
}

export default Footer;
