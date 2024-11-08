import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { ShoppingCart, CreditCard } from "lucide-react";
import { toggleCart } from "../reduxComponents/cartSlice";
import "./productList.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Navigation } from "swiper/modules";
import SwiperItem from "../components/SwiperItem";
import "./productList.css";

export default function ProductList() {
  const { idolGroup } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const cartAmount = cartItems.length;
  const [slidesPerView, setSlidesPerView] = useState(window.innerWidth <= 440 ? 1 : 4);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth <= 440 ? 1 : 4);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const accessories = products.filter((product) => product.category === "accessory");
  const stationery = products.filter((product) => product.category === "stationery");

  const filteredAccessories =
    idolGroup && idolGroup !== "all"
      ? accessories.filter((product) => product.idolGroup.toLowerCase() === idolGroup.toLowerCase())
      : accessories;

  const filteredStationery =
    idolGroup && idolGroup !== "all"
      ? stationery.filter((product) => product.idolGroup.toLowerCase() === idolGroup.toLowerCase())
      : stationery;

  return (
    <div className="listContainer">
      <section>
        <h3>악세서리</h3>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={slidesPerView}
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
          slidesPerView={slidesPerView}
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
          <button
            className="topButton"
            onClick={() => {
              dispatch(toggleCart());
            }}
          >
            <div className="ShoppingCartBox">
              <ShoppingCart />
              <span className="cartAmount">{cartAmount}</span>
            </div>
          </button>
          <button className="bottomButton" onClick={() => navigate("/product/payment")}>
            <CreditCard />
          </button>
        </div>
      )}
    </div>
  );
}
