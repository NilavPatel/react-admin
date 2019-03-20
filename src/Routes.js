import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

export default () =>
  <Switch>
    <Route path="/Home" component={Home} />
    <Route path="/Login" component={Login} />
    <Route path="/" component={Login} />
  </Switch>;