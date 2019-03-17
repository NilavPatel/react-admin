import React, { Component } from "react";
import './Home.css';
import HomeRoutes from "./HomeRoutes"
import Menus from '../Layout/Menu';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';

export default class Home extends Component {
    render() {
        return (
            <div className="row no-gutters">
                <div className="col col-12">
                    <Header></Header>
                </div>
                <div className="col col-12">
                    <div className="row no-gutters">
                        <div className="col col-3"><Menus /></div>
                        <div className="col col-9 content-panel"><HomeRoutes /></div>
                    </div>
                </div>
                <div className="col col-12">
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}