import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-wrapper">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link className="navbar-brand" to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-link" to="signin">Sign In</Link>
              <Link className="nav-link" to="signup">Sign Up</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
