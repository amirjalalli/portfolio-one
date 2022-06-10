import "./Introduction.css";
import React, { useState } from "react";
import { IoLogoPlaystation } from "react-icons/io";

const Introduction = () => {
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
      <p className="gold m-b25 sub-title">INTRODUCTION</p>
      <h3 className="title">React Developer</h3>
      <div className="border-bottom m-b15"></div>
      <p className="m-b20 text">
        I design and develop services for customers of all sizes, specializing
        in creating stylish, modern websites, web services and online stores.
      </p>
      <IoLogoPlaystation className="icon-ply" />
    </div>
  );
};

export default Introduction;
