import "./ShippingOption.css";
import { shippingActions } from "../store/ShippingSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ShippingOption({
  price,
  image,
  title,
  time,
  description,
  id,
}) {
  const dispatch = useDispatch()
  const shipping = useSelector(state => state.shipping)
  
  function handleSelectShipping() {
    dispatch(shippingActions.setShipping({shipping: title, cost: price}))
  }

  return (
    <div className = {shipping?.shipping === title ? "shipping-input selected" : "shipping-input"}>
      <input
        onChange={handleSelectShipping}
        name="shipping"
        id={id}
        type="radio"
        checked={shipping?.shipping === title ? true : false}
      />
      <label htmlFor={id} className="shipping-option">
        <img src={image} alt="shipping option" />
        <div className="shipping-option__text">
          <h3>
            {title} - ${price}
          </h3>
          <p>{description}</p>
          <p>{time}</p>
        </div>
      </label>
    </div>
  );
}
