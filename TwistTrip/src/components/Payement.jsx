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
    <div className="Card-container">
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
            <input
              type="number"
              name="number"
              placeholder=" "
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <label>Numéro de carte</label>
          </div>
          <div className="input-container">
            <input
              type="number"
              name="expiry"
              placeholder=" "
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <label>Date de fin de validité</label>
          </div>
          <div className="input-container">
            <input
              type="text"
              name="name"
              placeholder=" "
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <label>Nom</label>
          </div>
          <div className="input-container">
            <input
              type="number"
              name="cvc"
              placeholder=" "
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <label>CVC</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
