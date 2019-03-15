import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";

export default () =>
  <Switch>
    <Route path="/Home" exact component={Home} />
    <Route path="/Login" exact component={Login} />
    <Route path="/" component={Login} />
  </Switch>;