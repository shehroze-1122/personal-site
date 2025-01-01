import React from "react";
import data from "@/data/personal/work.json";
import Job from "./Job";

function Work() {
  const jobs = [...data.jobs].reverse();
  return (
    <section className="flex flex-col gap-5">
      <h2>Work</h2>
      <div className="flex flex-col gap-3">
        {jobs.map((job) => (
          <Job
            key={job.id}
            company={job.company}
            experiences={job.experiences}
          />
        ))}
      </div>
    </section>
  );
}

export default Work;
