import React, { Component } from "react";
import './Home.css';
import HomeRoutes from "./HomeRoutes"
import { Menu, Header, Footer } from '../Layout';

export default class Home extends Component {
    render() {
        return (
            <div className="row no-gutters">
                <div className="col col-12">
                    <Header />
                </div>
                <div className="col col-12">
                    <div className="row no-gutters">
                        <div className="col col-3"><Menu /></div>
                        <div className="col col-9 content-panel"><HomeRoutes /></div>
                    </div>
                </div>
                <div className="col col-12">
                    <Footer />
                </div>
            </div>
        );
    }
}