import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyItem = () => {
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

  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      `https://furniture-warehouse-shop-server-side.onrender.com/items/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);
  console.log(items);

  const navigate = useNavigate();
  const navigateToItemDetail = (_id) => {
    navigate(`/items/${_id}`);
  };

  return (
    <Container>
      <div className="w-100 mx-auto mb-5">
        <h2 className="my-5">Manage My Items</h2>
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

export default MyItem;
