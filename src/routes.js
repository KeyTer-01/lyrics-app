// src/routes.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Lyrics from "./pages/Lyrics";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/lyrics" component={Lyrics} /> */}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </Router>
);

export default Routes;
