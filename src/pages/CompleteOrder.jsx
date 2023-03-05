import { useSelector } from "react-redux";
import "./CompleteOrder.css";
import { useDispatch } from "react-redux";
import { stateActions } from "../store/StateSlice";
import {useNavigate} from 'react-router-dom'

export default function CompleteOrder() {
  const cart = useSelector((state) => state.cart);
  const person = useSelector((state) => state.personalInfo);
  const shipping = useSelector((state) => state.shipping);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const total = cart.reduce((acc, item) => {
    return (acc += item.total);
  }, 0);

  function handleBack() {
    dispatch(stateActions.setState(-1));
  }

  function order(){
    navigate('/cart/thanks')
  }

  return (
    <div className="complete-order">
      <h3>Review your order</h3>
      <div className="order-details">
        <table className="order-details__items">
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="order-details__item">
                <td>{item.item}</td>
                <td>{item.amount}</td>
                <td>${item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="order-total">Sub-total: ${total}</div>
      </div>
      <div className="order-info">
        <h3>Your address</h3>
        <div>
          <span>Name:</span>{" "}
          <span>
            {person.firstName} {person.lastName}
          </span>
        </div>
        <div>
          <span>Address:</span>{" "}
          <span>
            {person.address}, {person.city}, {person.country}
          </span>
        </div>
        <div>
          <span>Email:</span> <span>{person.email}</span>
        </div>
        <div><span>Shipping:</span> <span>{shipping?.shipping} (${shipping?.cost})</span></div>
      </div>
      <hr />
      <div className="total-order">
        Total: ${shipping?.cost + total}
      </div>
      <div className="order-btns">
      <button className="order-back-btn" onClick={handleBack}>Back</button>
      <button onClick={order} className="order-btn">Order</button>
      </div>
    </div>
  );
}
