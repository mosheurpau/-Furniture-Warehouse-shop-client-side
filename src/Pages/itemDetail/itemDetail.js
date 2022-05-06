import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { itemId } = useParams();
  console.log(itemId);
  return (
    <Container style={{ marginBottom: "350px" }} className="text-center mt-5">
      <h2>This is ServiceDetail {itemId}</h2>
      <button className="btn btn-primary">Proceed Checkout</button>
    </Container>
  );
};

export default ItemDetail;
