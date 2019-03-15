import React, { Component } from "react";
import './Home.css';
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Link to="/Login">Login</Link>
            </div>
        );
    }
}