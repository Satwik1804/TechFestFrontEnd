import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword(props) {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        newemail: "",
        newpassword: "",
        cpassword: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(credentials.newpassword!==credentials.cpassword) {
            props.showAlert("Password and confirm password does not match", "danger");
            return;
        }
        const response = await fetch("http://localhost:5000/admin/reset-password", {
         method: "PUT",
         headers: {
          'Content-Type': 'application/json',
         },
         body: JSON.stringify(credentials)
       })
       const json = await response.json();
       if(json.success) {
          props.showAlert("Credentials Updated Successfully.Login again", "success");
          navigate("/login");
       } 
       else {
         props.showAlert("Something Went Wrong.Try again", "danger");
       }
     }
    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
     }
    return <div className="login-container">
        <form className="login-form" >
        <h2>Reset Password</h2>
  <div className="mb-3">
    <input type="email" className="form-control" id="newemail" name="newemail" placeholder="Email" value={credentials.newemail} onChange={handleChange} aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <input type="password" className="form-control" name="newpassword" placeholder="Password" value={credentials.newpassword} id="newpassword" onChange={handleChange} />
  </div>
  <div className="mb-3">
    <input type="password" className="form-control" name="cpassword" placeholder="Confirm Password" value={credentials.cpassword} id="cpassword" onChange={handleChange} />
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button><br />
</form>
    </div>
}

export default ResetPassword;