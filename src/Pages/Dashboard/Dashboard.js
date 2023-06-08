import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.css";

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("dashboardData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Container fluid="md" className="dashboard-container">
      <Row>
        <Col sm={6} className="mx-auto">
          <h5 className="my-4">Month wish Revenue</h5>
          <div className="d-flex justify-content-center">
            <ResponsiveContainer width="95%" height={400}>
              <RadarChart width={350} height={250} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey={"month"} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Tooltip />
                <Radar
                  name="revenue"
                  dataKey={"revenue"}
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
                <Radar
                  name="sales"
                  dataKey={"sales"}
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Col>

        <Col sm={6}>
          <h5 className="my-4">Product Category VS Available Quantity</h5>
          <div className="d-flex justify-content-center">
            <ResponsiveContainer width="95%" height={400}>
              <AreaChart
                width={350}
                height={250}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="product_category" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="product_category"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
                <Area
                  type="monotone"
                  dataKey="available_quantity"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <h5 className="my-4">Investment VS Revenue</h5>
          <div className="d-flex justify-content-center">
            <ResponsiveContainer width="95%" height={400}>
              <BarChart width={350} height={50} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="product_category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Col>

        <Col sm={6}>
          <h5 className="my-4">Revenue VS Sales</h5>
          <div className="d-flex justify-content-center">
            <ResponsiveContainer width="95%" height={400}>
              <PieChart width={350} height={250}>
                <Pie
                  data={data}
                  name="Sales"
                  dataKey={"sales"}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                />

                <Tooltip />
                <Pie
                  data={data}
                  name="Revenue"
                  dataKey={"revenue"}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  fill="#82ca9d"
                  label
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
