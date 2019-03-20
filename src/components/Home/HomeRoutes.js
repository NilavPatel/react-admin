import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutUs from "../AboutUs";
import ContactUs from "../ContactUs";
import Dashboard from "../Dashboard";

export default () =>
  <Switch>
    <Route path="/Home/AboutUs" exact component={AboutUs} />
    <Route path="/Home/ContactUs" exact component={ContactUs} />
    <Route path="/Home/Dashboard" exact component={Dashboard} />
    <Route path="/" component={Dashboard} />
  </Switch>;