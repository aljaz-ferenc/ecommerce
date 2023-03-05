import "./CartContent.css";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import CartNavigation from "../components/CartNavigation";
import { useState } from "react";

export default function CartContent() {
  const cart = useSelector((state) => state.cart);

  const subTotal = cart.reduce((acc, el) => {
    return acc + +el.total;
  }, 0);

  const [state, setState] = useState(0);

  function handleBack() {
    state === 0 ? null : setState((prevState) => prevState - 1);
  }

  function handleContinue() {
    state === 2 ? null : setState((prevState) => prevState + 1);
  }

  return (
    <div className="cart-content">
      {cart.length === 0 && <div>Your cart is empty</div>}
      {cart.length > 0 &&
        cart.map((item) => (
          <CartItem
            title={item.item}
            amount={item.amount}
            id={item.id}
            key={item.id}
            price={item.price}
            total={item.total}
            image={item.image}
          />
        ))}
    </div>
  );
}
