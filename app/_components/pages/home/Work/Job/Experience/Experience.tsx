"use client";
import React from "react";
import { ExperienceType } from "../Job";
import Highlights from "./Highlights";

type ExperienceProps = { data: ExperienceType };

const getFormattedDate = (date: Date) => {
  const shortMonthformatter = new Intl.DateTimeFormat("en", { month: "short" });

  return `${shortMonthformatter.format(date)} ${date.getFullYear()}`;
};

function Experience({ data }: ExperienceProps) {
  const { title, startDate, endDate, highlights } = data;

  const start = getFormattedDate(new Date(startDate));
  const end = endDate ? getFormattedDate(new Date(endDate)) : "Current";
  return (
    <div>
      <div className="flex flex-row justify-between max-xs:flex-col-reverse">
        <p>
          {start} - {end}
        </p>
        <p className="text-highlight">{title}</p>
      </div>
      {highlights && highlights.length > 0 && <Highlights data={highlights} />}
    </div>
  );
}

export default Experience;
