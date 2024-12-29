import React from "react";
import Connection from "./Connection";

export type ConnectionType = {
  type: string;
  href: string;
  label: string;
};

const data: ConnectionType[] = [
  {
    type: "Email",
    href: "mailto:talat.shehroze@gmail.com",
    label: "talat.shehroze@gmail.com",
  },
  {
    type: "LinkedIn",
    href: "https://www.linkedin.com/in/shehroze-talat/",
    label: "/in/shehroze-talat",
  },
  {
    type: "GitHub",
    href: "https://github.com/shehroze-1122",
    label: "@shehroze-1122",
  },
];

function Connect() {
  return (
    <section className="flex flex-col gap-5">
      <h2>Connect</h2>
      <div className="flex flex-col gap-3">
        {data.map((connection) => (
          <Connection
            key={connection.label}
            type={connection.type}
            href={connection.href}
            label={connection.label}
          />
        ))}
      </div>
    </section>
  );
}

export default Connect;
