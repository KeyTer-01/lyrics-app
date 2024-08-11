// src/routes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Lyrics from "./pages/Lyrics";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllLyrics from "./pages/AllLyrics";

const AllRoutes = () => (
  <Router>
    <Routes>
      {/* <Route path="/" exact element={<Login />} /> */}
      {/* <Route path="/lyrics" component={Lyrics} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<AllLyrics />} />
    </Routes>
  </Router>
);

export default AllRoutes;
