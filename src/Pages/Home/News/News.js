import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const News = () => {
  return (
    <div className="bg-light ">
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col lg="8">
            <h1 className="text-center mb-3 mt-5">From Our News</h1>
            <p className="mb-5">
              Read about the latest modern furniture design notes on the
              Furniture Warehouse blog.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-5 pb-5">
          <Col md={6} lg={4}>
            <img
              width={300}
              height={300}
              src="https://i.ibb.co/cyKbqTK/blog-1.jpg"
              alt=""
            />
            <p className="fw-bold pt-2" style={{ color: "#EB7700" }}>
              Decoration
            </p>
            <h5>Decorating a Rustic Home</h5>
            <p>
              Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque,
              sem sed convallis ultricies, ante eros
            </p>
            <p style={{ color: "#EB7700" }}>
              <a style={{ color: "#EB7700", textDecoration: "none" }} href="">
                Read More{" "}
                <FontAwesomeIcon
                  style={{ color: "#EB7700" }}
                  className="delete-icon"
                  icon={faArrowRight}
                />
              </a>
            </p>
          </Col>
          <Col md={6} lg={4}>
            <img
              width={300}
              height={300}
              src="https://i.ibb.co/zVY2bbt/blog-2.jpg"
              alt=""
            />
            <p className="fw-bold pt-2" style={{ color: "#EB7700" }}>
              Interior Design
            </p>
            <h5>Bedroom</h5>
            <p>
              Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque,
              sem sed convallis ultricies, ante eros
            </p>
            <p style={{ color: "#EB7700" }}>
              <a style={{ color: "#EB7700", textDecoration: "none" }} href="">
                Read More{" "}
                <FontAwesomeIcon
                  style={{ color: "#EB7700" }}
                  className="delete-icon"
                  icon={faArrowRight}
                />
              </a>
            </p>
          </Col>
          <Col md={6} lg={4}>
            <img
              width={300}
              height={300}
              src="https://i.ibb.co/NWPtzjt/blog-3.jpg"
              alt=""
            />
            <p className="fw-bold pt-2" style={{ color: "#EB7700" }}>
              Home Living
            </p>
            <h5>Home Office</h5>
            <p>
              Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque,
              sem sed convallis ultricies, ante eros
            </p>
            <p style={{ color: "#EB7700" }}>
              <a style={{ color: "#EB7700", textDecoration: "none" }} href="">
                Read More{" "}
                <FontAwesomeIcon
                  style={{ color: "#EB7700" }}
                  className="delete-icon"
                  icon={faArrowRight}
                />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default News;
