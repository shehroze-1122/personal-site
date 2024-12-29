import React from "react";
import Job from "./Job";
import { jobs } from "./data.json";

function Work() {
  const chronologicalOrder = [...jobs].reverse();
  return (
    <section className="flex flex-col gap-5">
      <h2>Work</h2>
      <div className="flex flex-col gap-3">
        {chronologicalOrder.map((job) => (
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
