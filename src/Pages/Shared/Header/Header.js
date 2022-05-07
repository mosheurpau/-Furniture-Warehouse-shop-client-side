import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import auth from "../../../firebase.init";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="https://i.ibb.co/K7hH6Tb/furniture-logo.png"
            width="70"
            height="70"
            className="d-inline-block align-center nav-logo"
          />{" "}
          <b className="logo-title">
            <span style={{ color: "#EB7700" }}>Furniture</span> Warehouse
          </b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
          <Nav className="ms-auto">
            <Nav.Link as={CustomLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/items">
              Inventory Item
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/addItem">
              Add Items
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/manage">
              Manage Item
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link>
              {user ? (
                <Button
                  onClick={handleSignOut}
                  variant="link"
                  className="text-decoration-none"
                  style={{ color: "#EB7700" }}
                >
                  <b>Log Out</b>
                </Button>
              ) : (
                <Nav.Link className="my-auto" as={CustomLink} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
