"use client";

import InternalLink from "@/components/common/InternalLink";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

function Navigation() {
  const pathname = usePathname();

  const getClasses = (path: string) =>
    clsx({
      "decoration-4 text-highlight": path === pathname,
    });
  return (
    <nav className="flex gap-3">
      {links.map((link) => (
        <InternalLink
          key={link.href}
          href={link.href}
          className={getClasses(link.href)}
        >
          {link.label}
        </InternalLink>
      ))}
    </nav>
  );
}

export default Navigation;
