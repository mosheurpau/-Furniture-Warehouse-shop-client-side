import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import "./Items.css";

const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://stark-sea-67117.herokuapp.com/item")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Container fluid="md">
      <Row className="justify-content-md-center">
        <Col lg="8">
          <h1 className="text-center mb-5">Furniture Items</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        {items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </Row>
      <div className="mb-5">
        <button className="all-item-btn">
          <Link className="all-item" to="/manage">
            Manage All Items{" "}
            <FontAwesomeIcon className="delete-icon" icon={faArrowRight} />
          </Link>
        </button>
      </div>
    </Container>
  );
};

export default Items;
