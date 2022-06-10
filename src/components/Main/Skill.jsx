import React from "react";

const skillData = [
  { uptitle: "VsCode", rangeValue: 100 },
  { uptitle: "HTML5 & CSS3", rangeValue: 90 },
  { uptitle: "JavaScript", rangeValue: 78 },
  { uptitle: "React", rangeValue: 100 },
];

const Skill = () => {
  return (
    <div className="mini-intr-content">
      {skillData.map((val, key) => {
        return (
          <div key={key}>
            <div style={{ color: "white" }}>{val.uptitle}</div>
            {/* <span className="spanRange">{val.rangeValue}</span> */}
            <input
              type="range"
              value={val.rangeValue}
              className="inputRange"
              title={val.rangeValue}
            />
          </div>
        );
      })}
      <p className="underSkillp">
        A freelance creative designer with a love for minimal design, clean
        typography and well-written code, located in San Francisco. Provide high
        quality and cost effective offshore web and software development
        services. Wide range of web and software development services across the
        world.
      </p>
    </div>
  );
};

export default Skill;
