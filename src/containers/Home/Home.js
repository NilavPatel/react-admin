import React, { Component } from "react";
import './Home.css';
import HomeRoutes from "./HomeRoutes"
import Menus from '../Menu/Menu';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Menus/>
                <HomeRoutes/>                
            </div>
        );
    }
}