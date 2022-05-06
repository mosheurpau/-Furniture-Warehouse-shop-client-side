import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-style">
      <Container fluid="md">
        <Row>
          <Col md={12} className="my-auto text-center">
            <h1 className="mt-5 banner-title">
              Furniture that comforts the eyes
            </h1>
            <h5 className="mt-5">
              Ut lobortis, ex vitae lobortis cursus, elit nisi facilisis urna,
              at porttitor eros leo ac ex. Nunc molestie turpis varius purus
              accumsan maximus. Nam ut libero aliquet.
            </h5>
            <Button variant="primary" size="lg" className="fw-bold mt-5">
              <a className="text-decoration-none text-white" href="#">
                Shop Collection
              </a>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
