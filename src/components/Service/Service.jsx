import React, { useState } from "react";
import "./Service.css";

const Service = () => {
  const [scroll, setScroll] = useState(false);
  const scrollHandler = () => {
    if (window.document.documentElement.scrollTop > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const sevviceMain = [
    {
      title: "Brand Consultant",
      text: "I build brands through cultural insights & strategic vision. Custom crafted business solutions.",
      subPrice: "Starts from",
      price: "$599",
    },
    {
      title: "Global Marketing",
      text: "Custom marketing solutions. Get your business on the next level. We provide worldwide marketing.",
      subPrice: "Starts from",
      price: "$399",
    },
    {
      title: "UI/UX Solutions",
      text: "Design direction for business. Get your business on the next level. We help to create great experiences.",
      subPrice: "Starts from",
      price: "$499",
    },
  ];
  window.addEventListener("scroll", scrollHandler);
  return (
    <div className={scroll ? "mini-intr-content" : "intr-content"}>
      <p className="gold service-text m-b25">Service</p>
      <h1 className="service-title">What I Do</h1>
      <div className="border-bottom m-b32"></div>
      <p className="text m-b32">
        I help ambitious businesses like yours generate more profits by building
        awareness, driving web traffic, connecting with customers and growing
        overall sales.
      </p>
      <div className="sevviceMain">
        {sevviceMain.map((val, ind) => {
          return (
            <div key={ind} className="service-content">
              <div className="right">
                <div>{val.title}</div>
                <div>{val.text}</div>
              </div>
              <div className="left">
                <div>{val.subPrice}</div>
                <div className="gold">{val.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
