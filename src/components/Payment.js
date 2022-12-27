import React from "react";
import "./paymentStyle.css";
import { useState, useEffect } from "react";
function Payment() {
  const [radioButton, setRadio] = useState();
  const [paymentData, setFormData] = useState({});


  const onChangeHandler = (event) => {
    setFormData(() => ({
      ...paymentData,
      [event.target.name]: event.target.value,
    }));
  };
  const data = () => {
    console.log("Payment Data", paymentData);

  };
  useEffect(() => {
    localStorage.setItem("Payment Data", JSON.stringify(paymentData));
  }, [paymentData]);
  const formData = JSON.parse(localStorage.getItem('SignupData' ))
  const infoData = JSON.parse(localStorage.getItem('personal Info'))
  const payData = JSON.parse(localStorage.getItem("Payment Data"))
  // console.log("OverAll Data",formData ,infoData, payData);

  let allData = Object.assign(formData ,infoData, payData) ;
console.log(allData);
  return (
    <>
      <div className="paymentcontainer" id="payment">
        <div className="paymentheading">PAYMENT OPTIONS</div>
        <div className="buttons">
          <button className="button" type="account">
           ACCOUNT
          </button>         
          <button className="button" type="info">
          PERSONAL INFO
          </button>      
          <button className="button" type="payment">
          PAYMENT DETAIL{" "}
          </button>
        </div>
        <ul>
          <li>
            <input
              type="radio"
              id="f-option"
              name="selector"
              value="1"
              onClick={() => {
                setRadio("UPI");
              }}
            />
            <label for="f-option">UPI</label>

            <div className="check"></div>
          </li>

          <li>
            <input
              type="radio"
              id="s-option"
              name="selector"
              value="2"
              onClick={() => {
                setRadio("CARD");
              }}
            />
            <label for="s-option">CARD</label>

            <div className="check">
              <div className="inside"></div>
            </div>
          </li>

          <li>
            <input
              type="radio"
              id="t-option"
              name="selector"
              value="3"
              onClick={() => {
                setRadio("");
              }}
            />
            <label for="t-option">CASH ON DELIVERY</label>

            <div className="check">
              <div className="inside"></div>
            </div>
          </li>
        </ul>
        {radioButton === "UPI" && (
          <div className="upisection">
            <label>Enter the UPI ID:-</label>

            <input
              type="text"
              id="fname"
              name="upiId"
              maxLength={12}
              onChange={onChangeHandler}
            />
          </div>
        )}
        {radioButton === "CARD" && (
          <div className="cardInfo">
            <div className="accnumber">
              <input
                type="text"
                id="account"
                name="accountNumber"
                maxLength={12}
                placeholder="Enter the account number"
                onChange={onChangeHandler}
              />
            </div>
            <div className="holdername">
              <input
                type="text"
                id="name"
                name="Account holder name"
                placeholder="Enter the name"
                maxLength={20}
                onChange={onChangeHandler}
              />
            </div>
            <div className="ifsccode">
              <input
                type="text"
                id="code"
                name="IFSC-code"
                placeholder="IFSC code"
                maxLength={12}
                onChange={onChangeHandler}
              />
            </div>
          </div>
        )}
        <div className="next">
          <button className="nextbutton" type="Submit" onClick={data}>
            SUBMIT{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Payment;
