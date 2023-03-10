import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";


const Login = () => {
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  let name, value, users, result;
  let navigate = useNavigate();

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleclick = async (e) => {
    result = await axios
      .post("http://localhost:8080/user/signin", user)
      .then((res) => {
        users = res.data;
        console.log(user);
      });

    console.log(users);
    if (users.role === "SECRETARY") {
      navigate(`/loginsecreatry/${users.id}`);
    }
    if (users.role === "OWNER") {
      navigate(`/loginowner/${users.id}`);
    }
    if (users.role === "TENANT") {
      navigate(`/logintenant/${users.id}`);
    }
    if (user.role === "ACCOUNTANT") {
      navigate(`/loginaccountant/${users.id}`);
    }
    if (users.role === "MAINTAINANCE_TEAM") {
      navigate(`/loginmaintainanceteam/${users.id}`);
    }
  };

  return (
    <div >
    <form className="mx-auto col-6 col-md-10 col-lg-6 text-dark fw-bold">
      <h3 style={{ color: "white" }}>Sign In</h3>

      <div className="mb-3 col-md-9">
        <label >Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          required
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 col-md-9">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          required
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 col-md-9">
        <label>Role</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter role"
          required
          id="role"
          name="role"
          value={user.role}
          onChange={handleChange}
        />
      </div>
    {/* <div className="mb-3 col-md-9">
      <select name="role" id="role" >
        <option value={user.role} >Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      </div> */}
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div >
        <button
          type="button"
          className="btn btn-danger "
          onClick={handleclick}
        >
          Submit
        </button>
      </div>
    </form>
    </div>
  );
};

export default Login;
