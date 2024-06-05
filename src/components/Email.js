import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Email(props) {
    var OTP = "";
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/admin/forgot-password", {
         method: "POST",
         headers: {
          'Content-Type': 'application/json',
         },
         body: JSON.stringify({email})
       })
       const json = await response.json();
       if(json.success) {
          props.showAlert("Email sent Successfully", "success");
          navigate("/validateotp");
       }
       else {
         props.showAlert("Something Went Wrong.Try again", "danger");
       }
    }
    return <div className="login-container">
        <form className="login-form" >
        <p>Type your email for sending otp.</p>
  <div className="mb-3">
    <input type="email" className="form-control" id="femail" name="femail" placeholder="email" value={email} onChange={handleChange} />
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button><br />
</form>
    </div>
}

export default Email;