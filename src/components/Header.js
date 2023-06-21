import React from "react";

import { Navbar, Nav } from "react-bootstrap";

import logo from "../images/logo.png";

const Header = () => {
  return (
    <Navbar expand="lg" className="px-5 py-3" style={{ background: "#D21045" }}>
      <div className="pe-5">
        <img
          className="me-5"
          src={logo}
          alt=""
          style={{ width: "70px", height: "70px" }}
        />
      </div>

      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="" style={{ textTransform: "uppercase" }}>
          <Nav.Link className="text-white fs-6 fw-bold pe-5">
            Our
            <br />
            Products
          </Nav.Link>
          <Nav.Link className="text-white fs-6 fw-bold pe-5">
            About
            <br />
            Us
          </Nav.Link>
          <Nav.Link className="text-white fs-6 fw-bold pe-5">
            Live
            <br />
            Better
          </Nav.Link>
          <Nav.Link className="text-white fs-6 fw-bold pe-5">
            Claims &
            <br />
            Support
          </Nav.Link>
          <Nav.Link className="text-white fs-6 fw-bold pe-5">
            My
            <br />
            Account
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
