import React from "react";
import { Col } from "react-bootstrap";

const item = ({ item }) => {
  const { id, name, img, description, price } = item;

  return (
    <Col lg="4" className="text-center mb-5">
      <img className="w-100" src={img} alt="" />
      <h2 className="pt-3">{name}</h2>
      <h3>price ${price}</h3>
      <p>{description}</p>
    </Col>
  );
};

export default item;
