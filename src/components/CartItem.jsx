import "./CartItem.css";
import AddBtn from "./AddBtn";
import RemoveBtn from "./RemoveBtn";
import TrashIcon from "./TrashIcon";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/CartSlice";

export default function CartItem({ image, title, id, price, total, amount }) {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(cartActions.removeFromCart(id));
  }

  return (
    <div className="cart-item">
      <img
        className="cart-item__image"
        src={`https://hbrtheedcngbriamntkr.supabase.co/storage/v1/object/public/images/${image}`}
        alt=""
      />
      <div className="cart-item__text">
        <div>
          <div className="cart-item__text--title">{title}</div>
          <div className="cart-item__text--price">Price: {price}</div>
          <div className="cart-item__text--total">Total: ${total}</div>
        </div>
      </div>
      <div className="cart-item__amount">
        <div>Amount: {amount}</div>
        <div className="cart-item__amount--adjust">
          <AddBtn id={id} />
          <RemoveBtn id={id} amount={amount} />
        </div>
        <div onClick={handleRemove} className="cart-item__amount--remove">
          <div>Remove</div>
          <TrashIcon />
        </div>
      </div>
    </div>
  );
}
