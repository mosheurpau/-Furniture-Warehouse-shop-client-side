import React, { useState } from "react";
import { Button, Container, Form, InputGroup, Table } from "react-bootstrap";
import useItemAll from "../../hooks/useItemAll";
import "./ManageItems.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ManageItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems, isLoading] = useItemAll();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://furniture-warehouse-shop-server-side.onrender.com/itemAll/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };

  const handleNoDelete = () => {
    alert(
      "You can not delete other user item. You can only delete your item that you add"
    );
  };

  const navigate = useNavigate();
  const navigateToItemDetail = (_id) => {
    navigate(`/items/${_id}`);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <Container>
      <div className="w-100 mx-auto">
        <h2 className="my-5">Manage All Items</h2>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search the item you want"
            aria-label="Search the item you want"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>

        <Table striped bordered responsive hover variant="light">
          <thead>
            <tr>
              <th>#ID</th>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Item Quantity</th>
              <th>Item Update</th>
              <th>Item Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td> {item.price}</td>
                <td> {item.quantity}</td>
                <td>
                  <button
                    className="btn-update"
                    onClick={() => navigateToItemDetail(item._id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  {user.email === item.email ? (
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(item._id)}
                    >
                      <FontAwesomeIcon className="delete-icon" icon={faTrash} />
                    </button>
                  ) : (
                    <button
                      className="delete-btn"
                      onClick={() => handleNoDelete()}
                    >
                      NO
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default ManageItems;
