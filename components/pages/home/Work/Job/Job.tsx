import React from "react";
import Experience from "./Experience";
import ExternalLink from "@/components/common/ExternalLink";

export type Highlight = string;

export type ExperienceType = {
  id: number;
  title: string;
  startDate: string;
  endDate?: string;
  highlights?: Highlight[];
};

type JobProps = {
  company: {
    name: string;
    links: {
      website: string;
    };
  };
  experiences: ExperienceType[];
};

function Job({ company, experiences }: JobProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-highlight">
        <ExternalLink href={company.links.website}>{company.name}</ExternalLink>
      </h3>
      <div className="flex flex-col gap-2">
        {experiences.map((experience) => (
          <Experience key={experience.id} data={experience} />
        ))}
      </div>
    </div>
  );
}

export default Job;
