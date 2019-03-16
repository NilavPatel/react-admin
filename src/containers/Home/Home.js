import React, { Component } from "react";
import './Home.css';
import { Link } from "react-router-dom";
import HomeRoutes from "./HomeRoutes"

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Link to="/Home/Dashboard"> Dashboard </Link> | 
                <Link to="/Home/AboutUs"> AboutUs </Link> | 
                <Link to="/Home/ContactUs"> ContactUs </Link>
                <HomeRoutes/>
                <Link to="/Login"> Logout </Link>
            </div>
        );
    }
}