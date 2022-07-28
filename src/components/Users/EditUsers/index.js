import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditUsers() {
  const [user, setUser] = useState({
    id: new Date().getTime().toString().substring(6, 11),
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });
  const Navigate = useNavigate();
  const { id } = useParams(); //Id of user to be deleted coming from dynamic routing
  const { name, username, email, phone, website } = user;

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    Navigate("/home"); // kis user ka data update krna hai iske liye id diya
  };
  const loadUser = async (id) => {
    const user = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(user.data);
  };

  useEffect(() => {
    loadUser(id);
  }, [id]); //Jab bhi edit pe koi click krega ye page render hoga aue ek hi bar data load hoga

  return (
    <>
      <form className="w-25 mx-auto mt-5">
        <h1>Edit user</h1>
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
            Update an user
          </Link>
        </div>
      </form>
    </>
  );
}

export default EditUsers;
