import React, { useState } from "react";
import {
  PhoneInput,
  defaultCountries,
  parseCountry,
} from "react-international-phone";
import "react-international-phone/style.css";
import "./validation.css";
import closeButton from "../../assets/pages-element/uil_multiply.svg";

function Validation({ validationActive, setValidationActive }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const countries = defaultCountries.filter((country) => {
    const { iso2 } = parseCountry(country);
    return ["ru", "kz", "kg"].includes(iso2);
  });

  return (
    <div
      className={validationActive ? "validation active" : "validation"}
      onClick={() => setValidationActive(false)}
    >
      <div className="validation-wrapper" onClick={(e) => e.stopPropagation()}>
        <div className="validation-text-frame">
          <div className="validation-text-frame__title">
            <h1>Info</h1>
            <button className="close-button">
              <img src={closeButton} alt="" />
            </button>
          </div>
          <p>
            To submit an application for a tour reservation, you need to fill in
            your information and select the number of people for the reservation
          </p>
        </div>
        <div className="">
          <p className="validation-subtitle">Phone Number</p>
          <PhoneInput
            defaultCountry="kg"
            value={phoneNumber}
            onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
            countries={countries}
          />
        </div>
        <div className="">
          <p className="validation-subtitle">Commentaries to trip</p>
          <input
            className="validation-input"
            type="text"
            placeholder="Write your wishes to trip..."
          />
        </div>
        <div className="validation-people-preorder">
          <p className="validation-subtitle">Commentaries to trip</p>
          <div className="alignment-block">
            <div className="validation-people-preorder block-grey">
              <button
                className="validation-people-preorder__btn"
                onClick={handleDecrement}
              >
                -
              </button>
              <p>{count}</p>
              <button
                className="validation-people-preorder__btn"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
            <img src="" alt="" />
            <p>{count} People</p>
          </div>
        </div>
        <button className="validation-submit__btn">Submit</button>
      </div>
    </div>
  );
}

export default Validation;
