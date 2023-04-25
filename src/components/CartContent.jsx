import "./CartContent.css";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function CartContent() {
  const cart = useSelector((state) => state.cart);

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