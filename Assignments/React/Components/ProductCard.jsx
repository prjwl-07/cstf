import React from "react";
import { useState } from "react";
import ProductDetail from "./ProductDetail";

function ProductCard({ product, applyCheck }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <h3>{product.price}</h3>
      <h3>{product.id}</h3>
      <button onClick={()=>{applyCheck(product.id)}}>See in Detail</button>
    </div>
  );
}

export default ProductCard;
