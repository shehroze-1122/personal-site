import React from "react";
import data from "@/data/personal/about.json";
import Section from "@/components/common/Section";

function About() {
  const paragraphs = data.paragraphs;
  return (
    <Section title="About">
      <div className="flex flex-col gap-3">
        {paragraphs.map((paragraph, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
    </Section>
  );
}

export default About;
