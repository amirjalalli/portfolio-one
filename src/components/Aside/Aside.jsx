import "./Aside.css";
import React, { useState } from "react";
import amir from "../../img/amir.jpg";
import { FiMenu } from "react-icons/fi";
import { IoMdFunnel } from "react-icons/io";

const Aside = () => {
  const [icon, setIcon] = useState(false);
  const [scroll, setScroll] = useState(false);
  function showMenu() {
    if (!icon) {
      setIcon(true);
    } else {
      setIcon(false);
    }
  }

  const scrollHandler = () => {
    if (window.document.documentElement.scrollTop > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", scrollHandler);
  return (
    <div className={scroll ? "mini-asid-container" : "asid-container"}>
      <span onClick={showMenu}>
        {icon ? (
          <IoMdFunnel className="icon-menu" />
        ) : (
          <FiMenu className="icon-menu" />
        )}
      </span>
      <div className={scroll ? "mini-aside-content" : "aside-content"}>
        <div className={scroll ? "mini-out-side-border" : "out-side-border"}>
          <div className={scroll ? "mini-inside-border" : "inside-border"}>
            <img src={amir} alt="my picter" />
            <p>HI THERE! I AM</p>
            <h3>Amir Jalali</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
