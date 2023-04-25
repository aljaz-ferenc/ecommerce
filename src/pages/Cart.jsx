import "./Cart.css";
import { useSelector } from "react-redux";
import CartNavigation from "../components/CartNavigation";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { stateActions } from "../store/StateSlice";

export default function Cart() {
  const [headingState, setHeadingState] = useState("Your Cart");
  const [buttonText, setButtonText] = useState("continue");
  const cart = useSelector((state) => state.cart);
  const state = useSelector((state) => state.state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const subTotal = cart.reduce((acc, el) => {
    return acc + +el.total;
  }, 0);

  function handleBack() {
    state > 0 && dispatch(stateActions.setState(-1));
  }

  function handleContinue(e) {
    state === 3 ? null : dispatch(stateActions.setState(1));
  }

  useEffect(() => {
    state === 0 && navigate("/cart");
    state === 1 && navigate("/cart/shipping");
    state === 2 && navigate("/cart/personal-info");
    state === 3 && navigate("/cart/complete-order");

    setHeading();
  }, [state]);

  function setHeading() {
    switch (state) {
      case 0:
        setHeadingState("Your Cart");
        setButtonText("Continue");
        break;
      case 1:
        setHeadingState("Shipping");
        setButtonText("Continue");
        break;
      case 2:
        setHeadingState("Personal info");
        setButtonText("Review");
        break;
      case 3:
        setHeadingState("Complete Order");
        setButtonText("Order");
        break;
    }
  }

  function stateZero() {
    dispatch(stateActions.setState(0));
  }

  return (
    <>
      <div className="cart">
        <h1 className="cart__header">{headingState}</h1>
        <div className="cart__container">
          <Link onClick={stateZero} className="back-link" to="/">
            Back to store
          </Link>
          <Outlet />
          {state > 1 || (
            <div className="cart__footer">
              Sub-total: ${subTotal} (+ Shipping)
            </div>
          )}
          {state > 1 || (
            <div className="cart-buttons">
              {cart.length === 0 || (
                <div className="cart-buttons__buttons">
                  <button onClick={handleBack} className={state || "disabled"}>
                    Back
                  </button>
                  <button onClick={handleContinue}>{buttonText}</button>
                </div>
              )}
            </div>
          )}
        </div>
        {cart.length === 0 || <CartNavigation state={state} />}
      </div>
    </>
  );
}
