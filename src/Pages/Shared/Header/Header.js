import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
            <Nav.Link as={CustomLink} to="/home"></Nav.Link>
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
            <Nav.Link as={CustomLink} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
