import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "./payement.css";

const PaymentForm = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div className="card-container">
      <div className="radio-button-container">
        <div className="radio-button">
          <input
            type="radio"
            className="radio-button__input"
            id="radio1"
            name="radio-group"
          />
          <label className="radio-button__label" htmlFor="radio1">
            <span className="radio-button__custom"></span>
            1000€
          </label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            className="radio-button__input"
            id="radio2"
            name="radio-group"
          />
          <label className="radio-button__label" htmlFor="radio2">
            <span className="radio-button__custom"></span>
            2000€
          </label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            className="radio-button__input"
            id="radio3"
            name="radio-group"
          />
          <label className="radio-button__label" htmlFor="radio3">
            <span className="radio-button__custom"></span>
            3000€
          </label>
        </div>
      </div>
      <div className="form-container">
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <form>
          <div className="input-container">
            <label htmlFor="number">Numéro de carte</label>
            <input
              type="number"
              name="number"
              placeholder=" "
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="input-container">
            <label htmlFor="expiry">Date de fin de validité</label>
            <input
              type="number"
              name="expiry"
              placeholder=" "
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="input-container">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              name="name"
              placeholder=" "
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="input-container">
            <label htmlFor="cvc">CVC</label>
            <input
              type="number"
              name="cvc"
              placeholder=" "
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
        </form>
      </div>
      <div className="button-container">
        <button className="Btn">
          Pay
          <svg viewBox="0 0 576 512" className="svgIcon">
            <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
