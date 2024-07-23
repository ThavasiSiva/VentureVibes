import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CityMaster() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/citymasterget"
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  const navigate = useNavigate();

  const handleClick = (city_id) => {
    switch (city_id) {
      case "M001":
        navigate("/first");
        break;
    }
  };
  return (
    <div>
      <Row style={{ backgroundColor: "#FFFFFF" }}>
        {items.map((item) => (
          <Col
            key={item.id}
            md={4}
            xs={12}
            className="mt-4 mb-3 d-flex align-items-center justify-content-center"
          >
            <Card
              className="h-100 cardin"
              style={{ width: "80%", borderRadius: "30px" }}
            >
              <Card.Img
                variant="top"
                src={`http://localhost:3000/api/${item.city_image}`}
                alt={item.title}
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderTopRightRadius: "30px",
                  borderTopLeftRadius: "30px",
                }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title
                  style={{
                    fontFamily: "serif",
                    textAlign: "center",
                    color: "red",
                  }}
                >
                  {item.city}
                </Card.Title>
                <Card.Text style={{ flex: "1", textAlign: "justify" }}>
                  {item.description}
                </Card.Text>
                <div className="mt-auto">
                  <Button
                    style={{ borderRadius: "30px" }}
                    className="btn"
                    variant="outline-success"
                    onClick={() =>
                      item.city_id ? handleClick(item.city_id) : null
                    }
                  >
                    Explore
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CityMaster;
