import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const login = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs="10" lg="6" className="mt-5 mx-auto">
          <h2 className="text-center my-3">Please Login</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default login;
