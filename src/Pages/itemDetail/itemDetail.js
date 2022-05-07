import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./iItemDetail.css";

const ItemDetail = () => {
  const { itemId } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://stark-sea-67117.herokuapp.com/item/${itemId}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [itemId]);
  console.log(itemId);
  const { name, img, description, price, quantity, supplier } = items;
  return (
    <Container fluid="md">
      <Row className="justify-content-md-center">
        <Col lg="12">
          <h1 className="text-center mb-5 mt-5">Furniture Items Details</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg="6" className="text-center mb-5">
          <div>
            <img height={300} src={img} alt="" />
          </div>
        </Col>
        <Col lg="6" className="text-start d-flex align-items-center">
          <div>
            <h3 className="mb-4">{name}</h3>
            <h5>Price: ${price}</h5>
            <h5>Quantity: {quantity}</h5>
            <h5>Supplier: {supplier}</h5>
            <p>{description}</p>
            <div>
              <input
                className="me-2 update-input"
                type="text"
                name=""
                id=""
                placeholder="Enter quantity"
              />
              <button className="update-btn">Update Quantity</button>
            </div>
            <button className="delivered-btn">Delivered</button> <br />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
