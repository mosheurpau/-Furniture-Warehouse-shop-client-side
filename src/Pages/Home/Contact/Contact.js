import React from "react";
import { Col, Container, Row, Form, FloatingLabel } from "react-bootstrap";

import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col md={12}>
            <h3 className="contact-title my-3">Contact Us</h3>
            <h5 className="sub-title mb-5">Stay connected with us.</h5>
          </Col>
          <Col
            md={6}
            className="px-5 pt-4 mb-5"
            style={{ color: "#EB7700", fontWeight: "400", fontSize: "1rem" }}
          >
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" className="mb-3">
                  <FloatingLabel label="Full Name">
                    <Form.Control
                      size="lg"
                      style={{
                        backgroundColor: "transparent",
                        color: "#CCD6F6",
                      }}
                      required
                      type="text"
                      placeholder="Full Name"
                      name="name"
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="12" className="mb-3">
                  <FloatingLabel label="Email">
                    <Form.Control
                      size="lg"
                      style={{
                        backgroundColor: "transparent",
                        color: "#CCD6F6",
                      }}
                      required
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="12" className="mb-3">
                  <FloatingLabel label="Subject">
                    <Form.Control
                      size="lg"
                      style={{
                        backgroundColor: "transparent",
                        color: "#CCD6F6",
                      }}
                      required
                      type="text"
                      placeholder="Subject"
                      name="subject"
                    />
                  </FloatingLabel>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="12"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <FloatingLabel label="Message">
                    <Form.Control
                      as="textarea"
                      required
                      style={{
                        height: "100px",
                        backgroundColor: "transparent",
                        color: "#CCD6F6",
                      }}
                      size="lg"
                      type="text"
                      placeholder="Message"
                      name="message"
                    />
                  </FloatingLabel>
                </Form.Group>
              </Row>
              <p className="text-start my-3">
                {" "}
                <button
                  className="w-100"
                  type="submit"
                  style={{
                    color: "white",
                    backgroundColor: "#EB7700",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    borderRadius: "5px",
                    border: "0",
                  }}
                >
                  SEND
                </button>
              </p>
            </Form>
          </Col>
          <Col md={6}>
            <Row className="g-0">
              <Col md={12} className="mx-auto">
                <div className="d-flex align-items-center justify-content-center mt-5 contact-img">
                  <img
                    style={{ height: "200px" }}
                    className="img-fluid"
                    src={"https://i.ibb.co/K7hH6Tb/furniture-logo.png"}
                    alt=""
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <div className="text-center mt-3">
                    <h3>
                      <strong>
                        {" "}
                        <span style={{ color: "#EB7700" }}>Furniture</span>{" "}
                        Warehouse
                      </strong>
                    </h3>
                    <p className="mb-0 pb-0">
                      <strong className="mb-0 pb-0">
                        mosheur199829@gmail.com <br />
                        +8801754675993 <br />
                        Nikunjo-2, Dhaka, Bangladesh.
                      </strong>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
