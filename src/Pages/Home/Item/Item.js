import React from "react";
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./Item.css";

const Item = ({ item }) => {
  const { _id, name, img, description, price } = item;
  const navigate = useNavigate();
  const navigateToItemDetail = (_id) => {
    navigate(`/items/${_id}`);
  };
  return (
    <Col lg="4" className="text-center mb-5">
      <img className="w-100 item-img" src={img} alt="" />
      <h2 className="pt-3">{name}</h2>
      <h3>price ${price}</h3>
      <p>{description}</p>
      <Button
        style={{ backgroundColor: "#EB7700" }}
        onClick={() => navigateToItemDetail(_id)}
      >
        Stock Update
      </Button>
    </Col>
  );
};

export default Item;
