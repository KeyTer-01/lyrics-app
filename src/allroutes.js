// src/routes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Lyrics from "./pages/Lyrics";
import Login from "./pages/Login";
import Register from "./pages/Register";

const AllRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
      {/* <Route path="/lyrics" component={Lyrics} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
);

export default AllRoutes;
