import React, { Component } from "react";
import { Nav } from 'react-bootstrap';

export default class Menu extends Component {
  render() {
    return (
      <div>
            <Nav className="flex-column">
              <Nav.Link href="/Home/Dashboard">Home</Nav.Link>
              <Nav.Link href="/Home/AboutUs">About Us</Nav.Link>
              <Nav.Link href="/Home/ContactUs">Contact Us</Nav.Link>
            </Nav>
      </div>
    );
  }
}