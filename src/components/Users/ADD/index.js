import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//Usehistory is used to redirect user after post request

function Add() {
  const [user, setUser] = useState({
    id: new Date().getTime().toString().substring(6, 11),
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });
  const Navigate = useNavigate();
  const { name, username, email, phone, website } = user;

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    Navigate("/home");
  };
  return (
    <>
      <form className="w-25 mx-auto mt-5">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            name="name"
            value={name}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            name="username"
            value={username}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Email"
            className="form-control"
            name="email"
            value={email}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Phone"
            className="form-control"
            name="phone"
            value={phone}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Website"
            className="form-control"
            name="website"
            value={website}
            onChange={handleInput}
          />
        </div>
        <div className="text-center">
          <Link
            className="btn btn-primary mx-auto w-100"
            to="/add/users"
            onClick={handleSubmit}
          >
            Add Client
          </Link>
        </div>
      </form>
    </>
  );
}

export default Add;
