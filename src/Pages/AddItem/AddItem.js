import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./AddItem.css";

const AddItem = () => {
  const [user] = useAuthState(auth);
  console.log(user.email);
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    data.email = user.email;
    const url = `http://localhost:5000/item`;
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
              className="mb-2 item-input"
              placeholder="Name"
              type="text"
              {...register("name", { required: true, maxLength: 50 })}
            />
            <textarea
              className="mb-2 item-input"
              placeholder="Description"
              {...register("description")}
            />
            <input
              className="mb-2 item-input"
              placeholder="Price"
              type="number"
              {...register("price")}
            />
            <input
              className="mb-2 item-input"
              placeholder="quantity"
              type="number"
              {...register("quantity")}
            />
            <input
              className="mb-2 item-input"
              placeholder="supplier"
              type="text"
              {...register("supplier")}
            />
            <input
              className="mb-2 item-input"
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
