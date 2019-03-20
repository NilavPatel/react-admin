import React, { Component } from "react";
import { Nav, Navbar } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div className="header-panel">
                <Navbar bg="light" expand="lg" className="justify-content-between">
                    <Navbar.Brand>Nilav Patel</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/Login">Logout</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}