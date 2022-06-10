import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Customer.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Customer = () => {
  const [scroll, setScroll] = useState(false);
  const scrollHandler = () => {
    if (window.document.documentElement.scrollTop > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const site = [
    { name: "Twitter" },
    { name: "FaceBook" },
    { name: "Telgram" },
    { name: "StackOverFlow" },
    { name: "Git" },
    { name: "Instagram" },
    { name: "WhatsApp" },
    { name: "------" },
  ];

  window.addEventListener("scroll", scrollHandler);
  return (
    <div className={scroll ? "mini-intr-content" : "intr-content"}>
      <p className="gold service-text m-b25">CUSTOMERS</p>
      <h1 className="service-title">Happy People</h1>
      <div className="border-bottom m-b32"></div>
      <div className="box">
        {site.map((item, index) => {
          return (
            <div className="boxCustomer" key={index}>
              {item.name}
            </div>
          );
        })}
      </div>
      <>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide className="item">
            <h1>Where does</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia
            </p>
          </SwiperSlide>
          <SwiperSlide className="item">
            <h1>Where does</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia
            </p>
          </SwiperSlide>
          <SwiperSlide className="item">
            <h1>Where does</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia
            </p>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Customer;
