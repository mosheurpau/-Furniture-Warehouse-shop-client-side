import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./Item.css";

const Item = ({ item }) => {
  const { _id, name, img, description, price } = item;
  const navigate = useNavigate();
  const navigateToItemDetail = (_id) => {
    navigate(`/items/${_id}`);
  };
  return (
    <>
      <Card
        className="mt-5 p-0 mx-auto bg-light"
        style={{ width: "24rem", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <Card.Img
          style={{ height: "18rem" }}
          className="item-img"
          variant="top"
          src={img}
        />
        <Card.Body style={{ height: "14rem" }} className="pb-0">
          <Card.Title className="text-start">
            <h3 className="title-color text-center">{name}</h3>
          </Card.Title>
          <Card.Text className="description">
            <h5>price ${price}</h5>
            <p className="mb-0">{description.slice(0, 150)}...</p>
          </Card.Text>
        </Card.Body>

        <Card.Body className="pt-0">
          <Card.Link>
            <button
              className="w-100 item-btn"
              onClick={() => navigateToItemDetail(_id)}
            >
              Stock Update
            </button>
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
