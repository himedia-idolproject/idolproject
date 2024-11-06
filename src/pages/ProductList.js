import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SwiperItem from "../components/SwiperItem";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import "./productList.css";
import { ShoppingCart, CreditCard } from "lucide-react";

export default function ProductList() {
  const { idolGroup } = useParams();
  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const cartAmount = cartItems.length;

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
      {cartAmount > 0 && (
        <div className="buttonDiv">
          <button className="topButton">
            <span className="cartAmount">{cartAmount}</span> <ShoppingCart />{" "}
          </button>
          <button className="bottomButton" onClick={() => navigate("/payment")}>
            <CreditCard />
          </button>
        </div>
      )}
    </>
  );
}
