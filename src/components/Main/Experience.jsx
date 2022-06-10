import React, { useState } from "react";
import "./Main.css";
const ExperienceData = [
  {
    title: "FRENIFY LLC",
    data: "( 2018 — Today )",
    name: "Sr. Front-end Engineer",
    text: "Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "GOOGLE LLC",
    data: "( 2016 — 2018 )",
    name: "Front-end Developer",
    text: "Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "TWITTER LLC",
    data: "( 2016 — 2011 )",
    name: "Graphic Designer",
    text: "Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Experience = () => {
  return (
    <div className="mini-intr-content">
      {ExperienceData.map((val, ind) => {
        return (
          <div key={ind} className="box-Main">
            <div>
              {val.title}
              {val.data}
            </div>
            <div className="b-left">{val.name}</div>
            <div>{val.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
