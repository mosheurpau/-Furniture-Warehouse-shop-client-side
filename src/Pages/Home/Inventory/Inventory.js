import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Loading from "../../Shared/Loading/Loading";
import Item from "../Item/Item";

const Inventory = () => {
  const [items, setItems, isLoading] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/itemAll")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <Container fluid="md" className="my-5">
      <Row className="justify-content-md-center">
        <Col lg="8">
          <h1 className="text-center mt-2">Furniture Items</h1>
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

export default Inventory;
