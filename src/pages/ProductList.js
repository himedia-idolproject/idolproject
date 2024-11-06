import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SwiperItem from "../components/SwiperItem";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./productList.css";
import Carts from "../components/Carts";

export default function ProductList() {
  const { idolGroup } = useParams(); // URL에서 아이돌 정보를 가져옴
  const products = useSelector((state) => state.products.products);

  const accessories = products.filter(
    (product) => product.category === "accessory"
  );
  const stationery = products.filter(
    (product) => product.category === "stationery"
  );

  const filteredAccessories =
    idolGroup && idolGroup !== "all"
      ? accessories.filter(
          (product) =>
            product.idolGroup.toLowerCase() === idolGroup.toLowerCase()
        )
      : accessories;

  const filteredStationery =
    idolGroup && idolGroup !== "all"
      ? stationery.filter(
          (product) =>
            product.idolGroup.toLowerCase() === idolGroup.toLowerCase()
        )
      : stationery;

  return (
    <>
      {/* <Carts /> */}
      <section>
        <h3>악세서리</h3>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={50}
        >
          {filteredAccessories.map((product) => (
            <SwiperSlide key={product.id}>
              <SwiperItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section>
        <h3>문구/취미</h3>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={50}
        >
          {filteredStationery.map((product) => (
            <SwiperSlide key={product.id}>
              <SwiperItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
