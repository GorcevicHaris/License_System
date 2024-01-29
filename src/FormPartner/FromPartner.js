import React, { useState } from "react";
import "./partner.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Dodajte ovu liniju da biste uključili stilove za react-phone-number-input

export default function FromPartner() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [values, setValues] = useState({
    name: "",
    pib: 0,
    email: "",
    number: 0,
  });

  function onHandleChange(event) {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  }

  function handlePhoneChange(value) {
    setPhoneNumber(value);
    onHandleChange({ target: { name: "number", value: value } });
  }
  console.log(values);
  // function generateRandomTaxNumber() {
  //   // Generišemo devetocifreni nasumičan broj
  //   const randomNumber = Math.floor(Math.random() * 900000000) + 100000000;

  //   return randomNumber.toString(); // Pretvaramo broj u string
  // }

  // const randomTaxNumber = generateRandomTaxNumber();
  // console.log(randomTaxNumber);

  return (
    <div className="container">
      <div className="form-container">
        <form>
          <h2 className="form-heading">Dodaj novog partnera</h2>

          <label>Naziv Partnera:</label>
          <input onChange={onHandleChange} type="text" name="name" />

          <h3>PIB*</h3>
          <label>Poreski identifikacioni broj, primer: 123456789</label>
          <input
            onChange={onHandleChange}
            type="number"
            id="pib"
            name="pib"
            pattern="[0-9]{9}"
          />

          {/* Treći input: Email */}
          <label htmlFor="email">Email:</label>
          <input onChange={onHandleChange} type="email" name="email" />

          {/* Broj telefona */}
          <div className="phone-input-container">
            <label htmlFor="phoneNumber">Broj telefona:</label>
            <PhoneInput
              name="number"
              international
              placeholder="Unesite broj telefona"
              onChange={handlePhoneChange}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>

          <div className="btns">
            <button className="btn btn1">Otkazi</button>
            <button onClick={() => console.log(values)} className="btn btn2">
              Dodaj
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
