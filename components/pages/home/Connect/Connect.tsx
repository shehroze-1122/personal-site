import React from "react";
import data from "@/data/personal/links";
import Connection from "./Connection";

function Connect() {
  const connections = data.links;
  return (
    <section className="flex flex-col gap-5">
      <h2>Connect</h2>
      <div className="flex flex-col gap-3">
        {connections.map((connection) => (
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
