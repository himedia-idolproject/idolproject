import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Product = () => {
  const { group } = useParams();
  const products = useSelector((state) => state.products.products);

  const filteredProducts =
    group === "all"
      ? products
      : products.filter((product) => product.idolGroup.toLowerCase() === group);

  return (
    <div>
      <h1>
        {group === "all" ? "전체 상품" : `${group.toUpperCase()} 상품 리스트`}
      </h1>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price}원</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
