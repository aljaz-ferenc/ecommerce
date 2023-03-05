import React, { useState } from "react";
import "./AddToCartButton.css";
import { cartActions } from "../store/CartSlice";
import { useDispatch } from "react-redux";

export default function AddToCartButton({ handleAddToCart, item }) {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  function handleAmount(e) {
    setAmount(+e.target.value);
  }

  function handleAddItemToCart() {
    handleAddToCart();
    dispatch(
      cartActions.addToCart({
        amount: amount,
        item: item[0].name,
        id: item[0].id,
        price: item[0].price,
        image: item[0].image
      })
    );
  }

  return (
    <div className="add-cart">
      <div className="add-cart__amount--container">
      <p>Amount:</p>
      <input
        defaultValue={1}
        onChange={handleAmount}
        className="add-cart__amount"
        type="number"
        min={1}
        />
        </div>
      <button onClick={handleAddItemToCart} className="add-cart__btn">
        Add to Cart
      </button>
    </div>
  );
}
