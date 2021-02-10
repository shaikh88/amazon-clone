import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product({
  id,
  name,
  color,
  brand,
  price,
  discription,
  size,
  cart,
  setCart,
  image,
}) {
  const addToBasket = () => {
    setCart(cart + 1);
  };

  return (
    <div className="product">
      <div className="product__info">
        <h3>
          <Link className="link" to={`/${id}`}>
            {name}
          </Link>
        </h3>
        <p>Brand : {brand}</p>
        <p>size : {size}</p>
        <p className="">
          Price: <strong>{price}</strong>
        </p>
      </div>
      <Link to={`/${id}`}>
        <img className="imageClass" src={image} alt="" />
      </Link>
      <div className="product__rating">
        <p>⭐</p>
        <p>⭐</p>
        <p>⭐</p>
        <p>⭐</p>
      </div>

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
