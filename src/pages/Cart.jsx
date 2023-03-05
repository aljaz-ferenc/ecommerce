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
  const cart = useSelector((state) => state.cart);
  const shipping = useSelector((state) => state.shipping);
  const [headingState, setHeadingState] = useState("Your Cart");
  const navigate = useNavigate();
  // const [state, setState] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("continue");
  const dispatch = useDispatch()
  const state = useSelector(state => state.state)

  const subTotal = cart.reduce((acc, el) => {
    return acc + +el.total;
  }, 0);

  function handleBack() {
    if (state > 0) {
      dispatch(stateActions.setState(-1))
    }
  }

  function handleContinue(e) {
    state === 3 ? null : dispatch(stateActions.setState(1))
    if ((state === 0) & !shipping) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }

  useEffect(() => {
    if (state === 0) navigate("/cart");
    if (state === 1) navigate("/cart/shipping");
    if (state === 2) {
      navigate("/cart/personal-info");
    }
    if (state === 3) {
      // setState(4);
      navigate("/cart/complete-order");
    }

    setHeading();
    console.log(state);
  }, [state]);

  useEffect(() => {
    setIsDisabled(false);
  }, [shipping]);

  function setHeading() {
    if (state === 0) {
      setHeadingState("Your Cart");
      setButtonText("Continue");
    }
    if (state === 1) {
      setHeadingState("Shipping");
      setButtonText("Continue");
    }
    if (state === 2) {
      setHeadingState("Personal info");
      setButtonText("Review");
    }
    if (state === 3) {
      setHeadingState("Complete Order");
      setButtonText("Order");
    }
  }

  function stateZero(){
    dispatch(stateActions.setState(0))
  }

  return (
    <>
      <div className="cart">
        <h1 className="cart__header">{headingState}</h1>
        <div className="cart__container">
          <Link onClick={stateZero} className="back-link" to="/">
            Back to store
          </Link>
          <Outlet  />
          {state > 1 || <div className="cart__footer">
            Sub-total: ${subTotal} (+ Shipping)
          </div>}
          {state > 1 || <div className="cart-buttons">
            {cart.length === 0 || (
              <div className="cart-buttons__buttons">
                <button onClick={handleBack} className={state || "disabled"}>
                  Back
                </button>
                  <button
                  onClick={handleContinue}
                  className={isDisabled ? "disabled" : null}
                >
                  {buttonText}
                </button>
              </div>
            )}
          </div>}
        </div>
        {cart.length === 0 || <CartNavigation state={state} />}
      </div>
    </>
  );
}
