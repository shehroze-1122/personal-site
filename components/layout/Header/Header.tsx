import React from "react";
import Avatar from "./Avatar";
import Navigation from "./Navigation";
import ThemeToggle from "../ThemeToggle";

function Header() {
  return (
    <header className="flex flex-row justify-between">
      <Avatar />
      <div className="flex flex-row items-center gap-5">
        <ThemeToggle />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
