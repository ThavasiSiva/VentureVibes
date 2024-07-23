import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./images/first 1.jpg";
import img2 from "./images/second2.jpg";
import img3 from "./images/third2.png (1).jpg";
import img4 from "./images/card1.jpg";
import img5 from "./images/card2.jpg";
import img6 from "./images/card3.jpg";
import img7 from "./images/card4.jpg";
import img8 from "./images/card5.jpg";
import img9 from "./images/card6.jpg";
import img0 from "./images/logo.png";
import img11 from "./images/bg.jpg";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function NavBar() {
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
    <Container fluid className="outer_div">
    
      <Row>
        <Col>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img className="d-block w-100" src={img1} alt="First slide" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row id="popular-destination">
        <Col md={12} className="mt-4">
          <h1 className="ms-2" style={{ fontFamily: "serif",color:'rgb(77, 44, 44)',textAlign:"center" }}>
            Popular Destination
          </h1>
        </Col>
      </Row>

      <Row style={{ backgroundColor: "#FFFFFF" }}>
        {items.map((item) => (
          <Col
            key={item.id}
            md={4}
            xs={12}
            className="mt-4 mb-3 d-flex align-items-center justify-content-center"
          >
            <Card className="h-100 cardin" style={{ width: "80%",borderRadius:"30px"  }}>
              <Card.Img
                variant="top"
                src={`http://localhost:3000/api/${item.city_image}`}
                alt={item.title}
                style={{ height: "200px", objectFit: "cover" ,borderTopRightRadius:"30px",borderTopLeftRadius:"30px"}}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title  style={{fontFamily:"serif",textAlign:"center",color:"rgb(136, 78, 78)"}}>{item.city}</Card.Title>
                <Card.Text style={{ flex: "1", textAlign: "justify" }}>
                  {item.description}
                </Card.Text>
                <div className="mt-auto text-center">
                  <Button
                  style={{borderRadius:"30px",paddingLeft:"15px",paddingRight:"15px"}}
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

    
    </Container>
  );
}

export default NavBar;
