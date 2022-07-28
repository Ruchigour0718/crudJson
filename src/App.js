import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Data from "./components/Data";
import Navbar from "./components/Layout/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Add from "./components/Users/ADD";
import EditUsers from "./components/Users/EditUsers";
import View from "./components/Users/View";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Registration />} />

          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/data" element={<Data />} />

          <Route path="/add/users" element={<Add />} />
          <Route path="/edit/users/:id" element={<EditUsers />} />
          {/* <Route path="/edit/users/:id" element={<EditUsers />} /> */}
          <Route path="/users/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
