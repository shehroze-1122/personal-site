import React from "react";
import data from "@/data/personal/about.json";

function About() {
  const paragraphs = data.paragraphs;
  return (
    <section className="flex flex-col gap-5">
      <h2>About</h2>
      <div className="flex flex-col gap-3">
        {paragraphs.map((paragraph, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
    </section>
  );
}

export default About;
