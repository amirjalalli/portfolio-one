import React from "react";
import Experience from "./Experience";
import { useState } from "react";
import Education from "./Education";
import Skill from "./Skill";
const mainData = [
  { title: "Experience" },
  { title: "Education" },
  { title: "Skills" },
];

const Main = (props) => {
  const [active, setActive] = useState("Experience");
  const renderHandler = (name) => {
    switch (name) {
      case mainData[0].title:
        return <Experience />;
      case mainData[1].title:
        return <Education />;
      case mainData[2].title:
        return <Skill />;
      default:
        return mainData[0];
    }
  };

  return (
    <div className="m-left ">
      <div className="mainContent">
        {mainData.map((item, index) => {
          return (
            <div
              className="titleMain"
              key={index}
              onClick={() => setActive(item.title)}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      {renderHandler(active)}
    </div>
  );
};

export default Main;
