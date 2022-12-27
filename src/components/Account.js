import React from "react";
import { useState, useEffect } from "react";
import "./AccountStyle.css";
function Account() {
  const [formdata, setFormData] = useState({});
  const [error, setError] = useState(false);

  const onChangeHandler = (event) => {
    event.preventDefault();
    setFormData(() => ({
      ...formdata,
      [event.target.name]: event.target.value,
    }));
   
  };


  

  const accountdata = () => {
    console.log("account info", formdata);


    
    if(Object.keys(formdata).length===0){
      setError(true)
    }
  
  };

  useEffect(() => {
    localStorage.setItem("SignupData", JSON.stringify(formdata));
  }, [formdata]);
  console.log(localStorage.getItem("SignupData"));
 
  return (
    <>
      <form onChange={onChangeHandler}>
        <div className="heading">Sign up</div>
        <div className="text">Let's create your account.</div>
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
        <div className="formText">Enter your details down.</div>

        <div className="Signupform">
          <div className="name">
            <input
              type="text"
              className="fname"
              name="firstname"
              autoComplete="off"
              required
              value={formdata.firstname}
              minLength="3"
              placeholder="First Name"
              onChange={onChangeHandler}
            />
            <input
              type="text"
              className="fname"
              name="lastname"
              required
              value={formdata.lastname}
              minLength="3"
              autoComplete="off"
              placeholder="Last Name"
              onChange={onChangeHandler}
            />
          </div>
          {error ?<small> Name is required.</small>: ""}
          <div className="email">
            <input
              type="email"
              className="fname"
              autoComplete="off"
              name="email"
              value={formdata.email}
              placeholder="Email"
              required
              onChange={onChangeHandler}
            />
          </div>
          {error 
          // && formdata.email.length <= 0
           ?<small>email is required.</small>:""}
          <div className="password">
            <input
              type="password"
              className="fname"
              autoComplete="off"
              name="password"
              value={formdata.password}
              placeholder="Password"
              required
              minLength="5"
              onChange={onChangeHandler}
            />
            <input
              type="password"
              className="fname"
              name="confirmPassword"
              autoComplete="off"
              value={formdata.confirmPassword}
              placeholder="Confirm Password"
              required
              minLength="5"
              onChange={onChangeHandler}
            />
          </div>
          {error 
          // && formdata.password.length <= 0
          ?<small>Password is required.</small>:""}
          <div className="phonenumber">
            <input
              type="text"
              className="fname"
              name="phonenumber"
              value={formdata.phonenumber}
              placeholder="Phone Number"
              onChange={onChangeHandler}
              maxLength={11}
              required
            />
          </div>
          {error 
          // && formdata.phonenumber.length <= 0
           ?<small>PhoneNumber is required.</small>:""}
        </div>
        <div className="next">
          <button className="nextbutton" type="Submit" onClick={accountdata}>
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
}

export default Account ;
