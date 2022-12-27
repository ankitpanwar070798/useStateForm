import React, { useState, useEffect } from "react";
import "./infoStyle.css";

function Info() {
  const [infoFormdata, setFormData] = useState({});
  const [load, setLoad] = useState();
  const [error, setError] = useState(false);
  const onChangeHandler = (event) => {
    setFormData(() => ({
      ...infoFormdata,
      [event.target.name]: event.target.value,
    }));
  };

  const onUploadHandler = (event) => {
    //  console.log(event.target.files[0]);
    let imageFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      let base64img = reader.result;
      setLoad(base64img);
    };
  };
    const infodata = () => {
      console.log("Personal info", infoFormdata);
      if(Object.keys(infoFormdata).length===0){
        setError(true)
      }
    };

  useEffect(() => {
    localStorage.setItem("personal Info", JSON.stringify(infoFormdata));
  }, [infoFormdata]);
  // console.log(localStorage.getItem("personal Info"));

  return (
    <>
      <div className="info" id="information">
        <div className="infoHeading">PERSONAL INFORMATION</div>
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
        <div className="uploadphoto">
          <label htmlFor="img">Select profile image:-</label>
           <input
            type="file"
            className="img"
            name="img"
            accept="image/*"
            onChange={onUploadHandler}
          /> 
          <br />
          <p className="profilephoto">
            Preview Photo :- <img src={load} alt="" />
          </p>
        </div>
        <div className="age">
          <label htmlFor="fname">Age:</label>
          <input
            required
            placeholder="ENTER YOUR AGE"
            type="text"
            autoComplete="off"
            name="age"
            maxLength={2}
            onChange={onChangeHandler}
          />
          {error ?<small> age must be above 18* </small>: ""}

        </div>

        <div className="gender">
          <select name="gender" id="gender" required onChange={onChangeHandler}>
            <option value="">-Select Gender-</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {error ?<small> Select Gender </small>: ""}

        </div>
      </div>
      <div className="next">
          <button className="nextbutton" type="Submit" onClick={infodata}>
            SUBMIT{" "}
          </button>
        </div>
    </>
  );
}

export default Info;
