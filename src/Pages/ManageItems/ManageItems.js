import React from "react";
import { Container, Table } from "react-bootstrap";
import useItemAll from "../../hooks/useItemAll";
import "./ManageItems.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
const ManageItems = () => {
  const [items, setItems] = useItemAll();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://stark-sea-67117.herokuapp.com/itemAll/${id}`;
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

  const navigate = useNavigate();
  const navigateToItemDetail = (_id) => {
    navigate(`/items/${_id}`);
  };

  return (
    <Container>
      <div className="w-100 mx-auto">
        <h2 className="my-5">Manage your Items</h2>
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
            {items.map((item) => (
              <tr key={item._id}>
                <td>...{item._id.slice(20, 30)}</td>
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
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item._id)}
                  >
                    <FontAwesomeIcon className="delete-icon" icon={faTrash} />
                  </button>
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
