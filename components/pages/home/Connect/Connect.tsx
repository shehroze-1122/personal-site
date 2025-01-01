import React from "react";
import data from "@/data/personal/links";
import Section from "@/components/common/Section";
import Connection from "./Connection";

function Connect() {
  const connections = data.links;
  return (
    <Section title="Connect">
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
    </Section>
  );
}

export default Connect;
