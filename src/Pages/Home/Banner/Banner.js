import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <div className="banner-style">
      <Container fluid="md">
        <Row>
          <Col md={6} className="my-auto text-start">
            <h1 className="mt-5 banner-title">
              Furniture that comforts the eyes
            </h1>
            <h5 className="mt-5 banner-detail mb-5">
              Ut lobortis, ex vitae lobortis cursus, elit nisi facilisis urna,
              at porttitor eros leo ac ex. Nunc molestie turpis varius purus
              accumsan maximus. Nam ut libero aliquet.
            </h5>
            <button className="banner-btn">
              Shop Collection{" "}
              <FontAwesomeIcon className="" icon={faArrowRight} />
            </button>
          </Col>
          <Col md={6} className="my-auto text-center">
            <img
              className="img-fluid"
              src="https://i.ibb.co/xmk8K1R/banner-furniture.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
