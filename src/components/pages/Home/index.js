import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    console.log("see the useeffect working ");
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    console.log(result);
    setUser(result.data.reverse());
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
    Navigate("/home");
  };
  return (
    <div className="container mt-5 w-75">
      <table className="table table-hover table-responsive table-bordered">
        <thead>
          <tr className="bg-dark text-white text-center">
            <th>User ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {user.map(({ id, name, username }) => {
            return (
              <tr key={id}>
                <td className="align-middle text-center"> {id} </td>
                <td className="align-middle">{name}</td>
                <td className="align-middle">{username}</td>

                <td>
                  <button type="button" className="btn btn-primary">
                    View
                  </button>

                  {/* <button type="button" class="btn btn-secondary">
                    Edit
                  </button> */}
                  <Link
                    className="btn btn-secondary mx-2"
                    to={`/edit/users/${id}`}
                  >
                    Edit{" "}
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteUser(id)}
                    to="/home"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
