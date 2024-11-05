import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

import myImage from "./../images/bts/키링/BTS방탄 굿즈 스트랩 키링.jpg";
import myImage2 from "./../images/bts/키링/BTS 피규어 키링.jpg";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <section>
        <h3>악세서리</h3>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={50}
        >
          <SwiperSlide>
            <div>
              <img src={myImage} alt="BTS 키링" />
              <strong>메뉴이름</strong>
              <span>
                <s>원래가격</s>
                <em>할인가격</em>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={myImage2} alt="BTS 키링" />
              <strong>메뉴이름</strong>
              <span>
                <s>원래가격</s>
                <em>할인가격</em>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={myImage} alt="BTS 키링" />
              <strong>메뉴이름</strong>
              <span>
                <s>원래가격</s>
                <em>할인가격</em>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={myImage} alt="BTS 키링" />
              <strong>메뉴이름</strong>
              <span>
                <s>원래가격</s>
                <em>할인가격</em>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={myImage} alt="BTS 키링" />
              <strong>메뉴이름</strong>
              <span>
                <s>원래가격</s>
                <em>할인가격</em>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={myImage} alt="BTS 키링" />
              <strong>메뉴이름</strong>
              <span>
                <s>원래가격</s>
                <em>할인가격</em>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={myImage} alt="BTS 키링" />
              <strong>메뉴이름</strong>
              <span>
                <s>원래가격</s>
                <em>할인가격</em>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={myImage} alt="BTS 키링" />
              <strong>메뉴이름</strong>
              <span>
                <s>원래가격</s>
                <em>할인가격</em>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={myImage} alt="BTS 키링" />
              <strong>메뉴이름</strong>
              <span>
                <s>원래가격</s>
                <em>할인가격</em>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={myImage} alt="BTS 키링" />
              <strong>메뉴이름</strong>
              <span>
                <s>원래가격</s>
                <em>할인가격</em>
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={myImage} alt="BTS 키링" />
              <strong>메뉴이름</strong>
              <span>
                <s>원래가격</s>
                <em>할인가격</em>
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
