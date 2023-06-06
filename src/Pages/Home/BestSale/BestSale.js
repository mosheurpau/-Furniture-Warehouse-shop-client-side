import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sale1 from "../../../images/sale1.jpg";
import sale2 from "../../../images/sale2.jpg";
import sale3 from "../../../images/sale3.jpg";
import sale4 from "../../../images/sale4.jpg";
const BestSale = () => {
  const sales = [
    {
      _id: 1,
      img: sale1,
      name: "TABLE WOOD",
      price: "280",
    },
    {
      _id: 2,
      img: sale2,
      name: "LOUNGE SOFA",
      price: "126",
    },
    {
      _id: 3,
      img: sale3,
      name: "DECO LAMP",
      price: "180",
    },
    {
      _id: 4,
      img: sale4,
      name: "END TABLE",
      price: "499",
    },
  ];
  return (
    <div className="mb-5 mt-5">
      <h1 className="text-center py-3">Best Selling</h1>
      <Container fluid="md">
        <Row className="m-2 border-4 ps-3">
          {sales.map((sale) => (
            <Col lg="3">
              <img className="img-fluid" src={sale.img} alt="" />
              <div className="text-center pt-3">
                <h5>{sale.name}</h5>
                <parent style={{ color: "#D1BC92", paddingBottom: "40px" }}>
                  $ {sale.price}
                </parent>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BestSale;
