import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import "./Items.css";
import Item from "../Item/Item";

const Items = () => {
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://furniture-warehouse-shop-server-side.onrender.com/item")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <Container fluid="md">
      <Row className="justify-content-md-center">
        <Col lg="8">
          <h1 className="text-center mb-5">Furniture Items</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        {items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </Row>
      <div className="mb-5">
        <button className="all-item-btn mt-5" style={{ borderRadius: "5px" }}>
          <Link className="all-item" to="/inventory">
            Manage All Items{" "}
            <FontAwesomeIcon className="" icon={faArrowRight} />
          </Link>
        </button>
      </div>
    </Container>
  );
};

export default Items;
