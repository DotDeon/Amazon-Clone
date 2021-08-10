import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, img, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <small>R</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {/*Product*/}
        {/*Product*/}
        {/*Product*/}
      </div>

      <img src={img} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
export default Product;
