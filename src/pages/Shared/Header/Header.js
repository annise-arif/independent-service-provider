import "bootstrap/dist/css/bootstrap.min.css";
import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);



  const handleSignOut = () =>{
    signOut(auth);
  }
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="primary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-warning">
            Memorable Journeys
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <Nav>
            {
                user ? 
                <div>
                  <small>{user.email}</small>
                <button className="btn btn-link text-decoration-none text-white" onClick={handleSignOut}>Sign Out</button>
                </div>
               : 
                <Nav.Link eventKey={2} as={Link} to="/login">
                  Login
                </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
