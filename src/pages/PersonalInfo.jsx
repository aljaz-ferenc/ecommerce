import "./PersonalInfo.css";
import { useDispatch } from "react-redux";
import { personalInfoActions } from "../store/PersonalInfoSlice";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { stateActions } from "../store/StateSlice";

export default function PersonalInfo({addState}) {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const addressRef = useRef()
  const cityRef = useRef()
  const countryRef = useRef()
  const emailRef = useRef()
  const cardNumberRef = useRef()
  const monthRef = useRef()
  const yearRef = useRef()
  const ccvRef = useRef()

  function handleSubmit(e){
    e.preventDefault()
    dispatch(personalInfoActions.setPersonalInfo({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      country: countryRef.current.value,
      email: emailRef.current.value,
      cardNumber: cardNumberRef.current.value,
      month: monthRef.current.value,
      year: yearRef.current.value,
      ccv: ccvRef.current.value,
    }))
    navigate('/cart/complete-order')
    dispatch(stateActions.setState(1))
  }

  function handleBack(e){
    e.preventDefault()
    dispatch(stateActions.setState(-1))
  }

  function noSubmit(e){
e.preventDefault()
  }

  return (
    <div className="personal-info">
      <form onSubmit={handleSubmit} className="form" action="">
        <div className="form-left">
        <h3>Your address</h3>
        <div className="form__input-container">
          <label htmlFor="first-name">First name:</label>
          <input ref={firstNameRef} required name="first-name" id="first-name" type="text" />
        </div>
        <div className="form__input-container">
          <label htmlFor="last-name">Last name:</label>
          <input ref={lastNameRef} required name="last-name" id="last-name" type="text" />
        </div>
        <div className="form__input-container">
          <label htmlFor="address">Address:</label>
          <input ref={addressRef} required name="address" id="address" type="text" />
        </div>
        <div className="form__input-container">
          <label htmlFor="city">City:</label>
          <input ref={cityRef} required name="city" id="city" type="text" />
        </div>
        <div className="form__input-container">
          <label htmlFor="country">Country:</label>
          <input ref={countryRef} required name="country" id="country" type="text" />
        </div>
        <div className="form__input-container">
          <label htmlFor="email">Email:</label>
          <input ref={emailRef} required name="email" id="email" type="email" />
        </div>
        </div>
        <div className="form-right">
        <h3>Card details</h3>
        <div className="card-num">
          <label htmlFor="card-number">Card number</label>
          <input ref={cardNumberRef} required type="number" />
        </div>
        <div className="bottom-row">
          <div>
            <label htmlFor="">Month</label>
            <select ref={monthRef} required name="" id="">
              <option value="1"></option>
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
              <option value="1">6</option>
              <option value="1">7</option>
              <option value="1">8</option>
              <option value="1">9</option>
              <option value="1">10</option>
              <option value="1">11</option>
              <option value="1">12</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Year</label>
            <input ref={yearRef} required type="number" />
          </div>  
          <div>
            <label htmlFor="">CCV</label>
            <input ref={ccvRef} required type="number" name="" id="" />
          </div>
        </div>
      </div>
      <div className="form-btns">
        <button className="form-submit-btn">Submit</button>
      <button className="personal-back-btn" onClick={handleBack}>Back</button>
      </div>
        <p className="form-note">*Your credit card will not yet be charged. You can review your order in the next step.</p>
      </form>
    </div>
  );
}
