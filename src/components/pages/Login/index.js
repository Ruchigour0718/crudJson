import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Home from '../Home';

const Login = () => {
  const navigate = useNavigate();

  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("")
  const [flag, setFlag] = useState(false)
  const [home, setHome] = useState(true)


  const handleLogin = (e) => {
    e.preventDefault()
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("password").replace(/"/g, "");
    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }


  const handleSubmit = () => {
    setHome(!home)

  }


  return (
    <>
      {home ? (
        <><h1 style={{ textAlign: "center" }}>Login Form </h1>
          <form onSubmit={handleLogin}>
            <div className='row justify-content-center pt-5'>

              <div className='col-sm-6'>
                <div className='card p-4'>

                  <div className="form-group mt-3">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                      onChange={(e) => setEmaillog(e.target.value)}

                      id="email" />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                      onChange={(e) => setPasswordlog(e.target.value)}


                      id="pwd" />
                  </div>

                  <div className="form-group form-check mt-4">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" /> Remember me
                    </label>
                  </div>
                  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Login</button>

                  {flag && (
                    <div className="alert alert-dark" role="alert">
                      Please fill  all the details
                    </div>

                  )}


                </div>

              </div>

            </div>


          </form></>

      ) : (
        <Home />
      )}



    </>




  )
}

export default Login