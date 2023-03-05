import './Form.css'
import { personalInfoActions } from '../store/PersonalInfoSlice'
import { useDispatch } from 'react-redux'

export default function Form() {
  const dispatch = useDispatch(state => state.personalInfo)

  return (
    <form className='form' action="">
    <h3>Your address</h3>
      <div className="form__input-container">
        <label htmlFor="first-name">First name:</label>
        <input required name="first-name" id="first-name" type="text" />
      </div>
      <div className="form__input-container">
        <label htmlFor="last-name">Last name:</label>
        <input required name="last-name" id="last-name" type="text" />
      </div>
      <div className="form__input-container">
        <label htmlFor="address">Address:</label>
        <input required name="address" id="address" type="text" />
      </div>
      <div className="form__input-container">
        <label htmlFor="city">City:</label>
        <input required name="city" id="city" type="text" />
      </div>
      <div className="form__input-container">
        <label htmlFor="country">Country:</label>
        <input required name="country" id="country" type="text" />
      </div>
      <div className="form__input-container">
        <label htmlFor="email">Email:</label>
        <input required name="email" id="email" type="text" />
      </div>
    </form>
  )
}
