import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import amir from "../../img/amir.jpg";

// Import Swiper styles
import "./FeaturedProjects.css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const FeaturedProjects = () => {
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
      <h1 className="gold m-b25">PORTFOLIO</h1>
      <h3 className="m-b5 f-40">Featured Projects</h3>
      <div className="border-bottom m-b32"></div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={amir} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amir} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amir} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amir} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amir} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amir} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amir} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amir} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amir} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturedProjects;
