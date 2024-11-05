import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

import myImage from "./../images/bts/키링/BTS방탄 굿즈 스트랩 키링.jpg";
import myImage2 from "./../images/bts/키링/BTS 피규어 키링.jpg";

// import required modules
import { Navigation } from "swiper/modules";
import SwiperItem from "../components/SwiperItem";

export default function App() {
  return (
    <>
      <section>
        <h3>악세서리</h3>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={4} spaceBetween={50}>
          <SwiperSlide>
            <SwiperItem />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperItem />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
