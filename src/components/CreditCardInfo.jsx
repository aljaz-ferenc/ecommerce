import "./CreditCardInfo.css";

export default function CreditCardInfo() {

  return (
    <form className="form-card" action="">
      <h3>Card details</h3>
      <div className="card-num">
        <label htmlFor="card-number">Card number</label>
        <input required type="number" />
      </div>
      <div className="bottom-row">
        <div>
          <label htmlFor="">Month</label>
          <select required name="" id="">
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
          <input required type="number" />
        </div>
        <div>
          <label htmlFor="">CCV</label>
          <input required type="number" name="" id="" />
        </div>
      </div>
    </form>
  );
}
