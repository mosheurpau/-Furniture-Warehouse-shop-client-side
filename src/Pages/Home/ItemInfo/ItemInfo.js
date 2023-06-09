import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import wooden from "../../../images/wooden.png";
import dissount from "../../../images/dissount.png";
import sale from "../../../images/sale.png";
const ItemInfo = () => {
  return (
    <div className="mb-5">
      <Container fluid="md">
        <Row className="justify-content-md-center">
          <Col lg="4">
            <Row className="m-2 border-4 bg-light ps-3">
              <Col className="my-auto text-start">
                <p style={{ color: "#D1BC92" }}>NEW ARRIVALS</p>
                <h5 className="fw-bold pb-2">WOODEN SHOP NOW</h5>
                <a className="text-decoration-none text-black" href="">
                  VIEW COLLECTION
                </a>
              </Col>
              <Col className="my-auto text-center img-effect">
                <img className="img-fluid" src={dissount} alt="" />
              </Col>
            </Row>
          </Col>
          <Col lg="4">
            <Row className="m-2 border-4 bg-light ps-3">
              <Col className="my-auto text-start">
                <p style={{ color: "#D1BC92" }}>DISSCOUNT</p>
                <h5 className="fw-bold pb-2">TABLE DISK</h5>
                <a className="text-decoration-none text-black" href="">
                  VIEW COLLECTION
                </a>
              </Col>
              <Col className="my-auto text-center img-effect">
                <img className="img-fluid" src={sale} alt="" />
              </Col>
            </Row>
          </Col>
          <Col lg="4">
            <Row className="m-2 border-4 bg-light ps-3">
              <Col className="my-auto text-start">
                <p style={{ color: "#D1BC92" }}>SALE</p>
                <h5 className="fw-bold pb-2">TABLE LIT</h5>
                <a className="text-decoration-none text-black" href="">
                  VIEW COLLECTION
                </a>
              </Col>
              <Col className="my-auto text-center img-effect">
                <img className="img-fluid" src={wooden} alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemInfo;
