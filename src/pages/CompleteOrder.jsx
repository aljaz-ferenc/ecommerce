import { useSelector } from "react-redux";
import "./CompleteOrder.css";

export default function CompleteOrder() {
  const cart = useSelector(state => state.cart);
  const person = useSelector(state => state.personalInfo)

  const total = cart.reduce((acc, item) =>{
    return acc += item.total
  }, 0)

  return (
    <div className="complete-order">
      <h3>Review your order</h3>
      <div className="order-details">
        <table className="order-details__items">
          <tr>
            <th>Item</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
          {cart.map((item) => (
            <tr key={item.id} className="order-details__item">
                <td>{item.item}</td>
                <td>{item.amount}</td>
                <td>${item.total}</td>
            </tr>
          ))}
        </table>
        <div className="order-total">
            Total: ${total}
        </div>
      </div>
      <div className="order-info">
        <h3>Your address</h3>
        <div>
            <span>Name:</span> <span>{person.firstName} {person.lastName}</span>
        </div>
        <div>
        <span>Address:</span> <span>{person.address}, {person.city}, {person.country}</span>
        </div>
        <div>
        <span>Email:</span> <span>{person.email}</span>
        </div>
      </div>
      <button>Order</button>
    </div>
  );
}
