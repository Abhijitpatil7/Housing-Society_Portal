import { signUp } from "../../services/userService";
import React, { useState } from "react";
import apt3 from '../../images/apt3.jpg';
import { useNavigate } from "react-router-dom";
const MaintainanceTeamRegister = (props) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: "",
    societyName: "",
    role: "MAINTAINANCE_TEAM",
    department: "",
  });
  const navigate = useNavigate();
  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleclick = (e) => {
    if(user.mobileNumber.length!=10){
      document.getElementById("mobilediv").innerHTML+="Enter Valid Mobile Number ";
  }
  else{
    e.preventDefault();
    props.mtotp(user);

    signUp(user)
      .then((resp) => {
        console.log("success");
        navigate("/mtotp");
      })
      .catch((error) => {
        console.log("error");
        console.log(user);
      });
      window.location.reload(false);
    }
  };

  return (
    <div style={{backgroundImage: `url(${apt3})`}}>
    <form className="mx-auto col-8 col-md-6 col-lg-6 text-dark fw-bold">
      <div className="form-group col-md-6 text-dark fw-bold">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          placeholder="Enter first name"
          value={user.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          placeholder="Enter last name"
          value={user.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={user.email}
          onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="mobileNumber">Mobile Number</label>
        <input
          type="mobile"
          className="form-control"
          id="mobileNumber"
          name="mobileNumber"
          placeholder="Enter mobile number"
          value={user.mobileNumber}
          onChange={handleChange}
        />
        <div id="mobilediv" style={{color:"red"}}></div>
      </div>
      
      <div className="form-group col-md-6">
        <label htmlFor="societyName">Society Name</label>
        <input
          type="mobile"
          className="form-control"
          id="societyName"
          name="societyName"
          placeholder="Enter societyName"
          value={user.societyName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="department">Department name</label>
        <input
          type="text"
          className="form-control"
          id="department"
          name="department"
          placeholder="department"
          value={user.department}
          onChange={handleChange}
        />
      </div>
      <div className="form-check col-md-6">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleclick}>
        Submit
      </button>
    </form>
    </div>
  );
};
export default MaintainanceTeamRegister;
