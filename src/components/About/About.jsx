import "./About.css";
import React, { useState } from "react";
import { CgSoftwareDownload } from "react-icons/cg";

const About = () => {
  const [scroll, setScroll] = useState(false);
  const scrollHandler = () => {
    if (window.document.documentElement.scrollTop > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", scrollHandler);
  return (
    <div className={scroll ? "mini-intr-content" : "intr-content"}>
      <p className="gold m-b25 sub-title">ABOUT ME</p>
      <h3 className="title">Biography</h3>
      <div className="border-bottom m-b15"></div>
      <p className="m-b20 text">
        I'm a Freelancer Front-end Developer with over 1 years of experience.
        I'm Iran. I code and create web elements for amazing people around the
        world. I like work with new people. New people are new experiences.
      </p>
      <div className="under-about">
        <ul>
          <li>NAME</li>
          <li>BIRTHDAY</li>
          <li>AGE</li>
          <li>ADDRESS</li>
          <li>PHONE</li>
          <li>EMAIL</li>
          <li>SKYPE</li>
        </ul>
        <ul>
          <li>Amir</li>
          <li>1995,jun,27</li>
          <li>27</li>
          <li>Iran,Tehran</li>
          <li className="b-b">+989119461359</li>
          <li className="b-b">amirjalally73@gmail.com</li>
          <li className="b-b">----</li>
        </ul>
        <div className="border-download">
          <CgSoftwareDownload className="icon-dow color" />
        </div>
      </div>
    </div>
  );
};

export default About;
