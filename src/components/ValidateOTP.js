import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ValidateOTP(props) {
    const [otp, setOtp] = useState("");
    let navigate = useNavigate();
    const handleChange = (e) => {
        setOtp(e.target.value)
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/admin/getOtp", {
         method: "GET",
         headers: {
          'Content-Type': 'application/json',
         },
       })
       const json = await response.json();
       if(json.OTP===otp) {
          props.showAlert("Valid otp", "success");
          navigate("/resetpassword");
       }
       else {
         props.showAlert("Invalid otp.Try again", "danger");
       }
    }
    return <div className="login-container">
        <form className="login-form" >
        <p>We have sent an otp to your email.</p>
  <div className="mb-3">
    <input type="text" className="form-control" id="otp" name="otp" placeholder="OTP" value={otp} onChange={handleChange} />
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button><br />
</form>
    </div>
}

export default ValidateOTP;  