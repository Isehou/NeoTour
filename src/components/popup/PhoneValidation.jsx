import React, { useState } from "react";
import {
  PhoneInput,
  defaultCountries,
  parseCountry,
} from "react-international-phone";
import "react-international-phone/style.css";
import "./phone-validation.css";

function InfoValidation() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const countries = defaultCountries.filter((country) => {
    const { iso2 } = parseCountry(country);
    return ["ru", "kz", "kg"].includes(iso2);
  });

  return (
    <div className="phone-validation">
      <div className="phone-validation-wrapper">
        <div className="validation-text-frame">
          <h1>Info</h1>
          <p>
            To submit an application for a tour reservation, you need to fill in
            your information and select the number of people for the reservation
          </p>
        </div>
        <div className="">
          <p>Phone Number</p>
          <PhoneInput
            defaultCountry="kg"
            value={phoneNumber}
            onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
            countries={countries}
          />
        </div>
      </div>
    </div>
  );
}

export default InfoValidation;
