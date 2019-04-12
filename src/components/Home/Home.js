import React, { Component } from "react";
import './Home.css';
import HomeRoutes from "./HomeRoutes"
import { Menu, Header, Footer } from '../Layout';

export default class Home extends Component {
    render() {
        return (
            <div className="my-contaiener">
                <div className="my-header">
                    <Header />
                </div>
                <div className="my-main">
                    <div className="my-menu"><Menu /></div>
                    <div className="my-content"><div className="content-panel"><HomeRoutes /></div></div>
                </div>
                <div className="my-footer">
                    <Footer />
                </div>
            </div>
        );
    }
}