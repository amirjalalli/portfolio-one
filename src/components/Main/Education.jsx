import React, { useState } from "react";
import "./Main.css";
const EducationData = [
  {
    title: "FRENIFY UNIVERSITY",
    data: "( 2014 — 2017 )",
    name: "Computer Science",
    text: "Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "EDU UNIVERSITY",
    data: "( 2011 — 2014 )",
    name: "Master Degree",
    text: "Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "CLOLUMBIA COLLEGE",
    data: "( 2007 — 2011 )",
    name: "Bachelor Degree",
    text: "Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Education = () => {
  return (
    <div className="mini-intr-content">
      {EducationData.map((value, key) => {
        return (
          <div key={key} className="box-Main">
            <div>
              {value.title}
              {value.data}
            </div>
            <div className="b-left">{value.name}</div>
            <div>{value.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
