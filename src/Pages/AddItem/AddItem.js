import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./AddItem.css";

const AddItem = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://stark-sea-67117.herokuapp.com/item`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

    navigate("/");
  };
  return (
    <Container>
      <Row className="justify-content-md-center my-3">
        <Col
          xs="11"
          lg="6"
          className="mt-3 mx-auto bg-light rounded-top px-5 mb-3 py-5"
        >
          <h2 className="mb-3">
            Add New <span style={{ color: "#EB7700" }}>Furniture Item</span>
          </h2>
          <form
            className="d-flex flex-column"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="mb-2"
              placeholder="Name"
              type="text"
              {...register("name", { required: true, maxLength: 50 })}
            />
            <textarea
              className="mb-2"
              placeholder="Description"
              {...register("description")}
            />
            <input
              className="mb-2"
              placeholder="Price"
              type="number"
              {...register("price")}
            />
            <input
              className="mb-2"
              placeholder="quantity"
              type="number"
              {...register("quantity")}
            />
            <input
              className="mb-2"
              placeholder="supplier"
              type="text"
              {...register("supplier")}
            />
            <input
              className="mb-2"
              placeholder="Photo URL"
              type="text"
              {...register("img")}
            />
            <input className="add-btn" type="submit" value="Add Service" />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddItem;
