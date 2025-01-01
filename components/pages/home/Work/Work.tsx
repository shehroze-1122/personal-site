import React from "react";
import data from "@/data/personal/work.json";
import Section from "@/components/common/Section";
import Job from "./Job";

function Work() {
  const jobs = [...data.jobs].reverse();
  return (
    <Section title="Work">
      <div className="flex flex-col gap-3">
        {jobs.map((job) => (
          <Job
            key={job.id}
            company={job.company}
            experiences={job.experiences}
          />
        ))}
      </div>
    </Section>
  );
}

export default Work;
