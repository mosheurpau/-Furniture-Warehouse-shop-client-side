import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Category = () => {
  return (
    <Container fluid="md">
      <Row className="justify-content-md-center">
        <Col lg="8">
          <h1 className="text-center mb-5">Furniture Category</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={4} lg={2}>
          <img src="https://i.ibb.co/C0ZjgBx/cat-1.jpg" alt="" />
          <h5>Living Room</h5>
          <p>7 item</p>
        </Col>
        <Col md={4} lg={2}>
          <img src="https://i.ibb.co/VwwJNLR/cat-2.jpg" alt="" />
          <h5>Bedroom</h5>
          <p>7 item</p>
        </Col>
        <Col md={4} lg={2}>
          <img src="https://i.ibb.co/5sxPvjd/cat-3.jpg" alt="" />
          <h5>Home Office</h5>
          <p>9 item</p>
        </Col>
        <Col md={4} lg={2}>
          <img src="https://i.ibb.co/Bg0QW7g/cat-4.jpg" alt="" />
          <h5>Lighting</h5>
          <p>12 item</p>
        </Col>
        <Col md={4} lg={2}>
          <img src="https://i.ibb.co/jDhGsBp/cat-5.jpg" alt="" />
          <h5>Home Decoration</h5>
          <p>22 item</p>
        </Col>
        <Col md={4} lg={2}>
          <img src="https://i.ibb.co/jRjM2Nd/cat-6.jpg" alt="" />
          <h5>Dining Room</h5>
          <p>11 item</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Category;
