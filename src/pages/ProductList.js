import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./productList.css";

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
        </Swiper>
      </section>
      <section>
        <h3>문구/취미</h3>
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
        </Swiper>
      </section>
    </>
  );
}
