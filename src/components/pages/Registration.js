// import { Alert } from 'bootstrap';
import React, { useState } from 'react'
import Login from "../pages/Login"

const Registration = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [flag, setFlag] = useState(false)
    const [login, setLogin] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name + "  " + email + "  " + password + " " + phone)
        if (!name || !email || !password || !phone) {
            setFlag(true)
        }
        else {
            setFlag(false)
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));
            console.log("Data")
            setLogin(!login)
        }
    }


    const handleClick = () => {
        setLogin(!login)
    }

    return (
        <>


            {login ? (
                <>
                    <h1 style={{ textAlign: "center" }}>Registration Form </h1>
                    <form onSubmit={handleSubmit}>
                        <div className='row justify-content-center pt-5'>

                            <div className='col-sm-6'>
                                <div className='card p-4'>
                                    <div className="form-group mt-3">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" placeholder="Enter your Name"
                                            onChange={(e) => setName(e.target.value)}
                                            id="name" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="email">Email address:</label>
                                        <input type="email" className="form-control" placeholder="Enter email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            id="email" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="pwd">Password:</label>
                                        <input type="password" className="form-control" placeholder="Enter password"
                                            onChange={(e) => setPassword(e.target.value)}

                                            id="pwd" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="phone">Phone number:</label>
                                        <input type="phone" className="form-control" placeholder="Enter phone number"
                                            onChange={(e) => setPhone(e.target.value)}

                                            id="pwd" />
                                    </div>
                                    <div className="form-group form-check mt-4">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" /> Remember me
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Register</button>
                                    <p>Already registered {""} login in?</p>

                                </div>

                            </div>

                        </div>

                        {flag && (
                            <div className="alert alert-dark" onClick={handleClick} role="alert">
                                Please fill  all the details
                            </div>

                        )}

                    </form>



                </>
            ) : (
                <Login />
            )}


        </>

    )
}

export default Registration