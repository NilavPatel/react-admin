import React, { Component } from "react";
import { Nav, Navbar } from 'react-bootstrap';

export default class Menus extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/Home/Dashboard">Home</Nav.Link>
              <Nav.Link href="/Home/AboutUs">About Us</Nav.Link>
              <Nav.Link href="/Home/ContactUs">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="/Login">Logout</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}