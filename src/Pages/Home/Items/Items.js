import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Item from "../Item/Item";

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
    </Container>
  );
};

export default Items;
