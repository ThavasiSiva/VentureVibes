import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Main.css'


function Main() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/categorymasterget"
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  const handleClick = (categoryId) => {
    console.log(categoryId);
    switch (categoryId) {
      case 'C001':
        navigate("/temple");
        break;
      case 'C002':
        navigate("/mall");
        break;
      case 'C003':
        navigate("/water");
        break;
      case 'C004':
        navigate("/park");
        break;
      case 'C005':
        navigate("/Amuse");
        break;
      case 'C006':
        navigate("/moun");
        break;
      default:
        navigate("/moun");
        break;
    }
  };

  return (
    <div style={{backgroundColor:"#FFFFFF"}}>
      <Container fluid>
      <Row>
        {items.map((item) => (
          <Col
            key={item.category_id}
            md={4}
            xs={12}
            className="mt-5 mb-3 d-flex align-items-center justify-content-center"
          >
            <Card className="h-100 cardin" style={{ width: "80%",borderRadius:"30px" }}>
              <Card.Img
                variant="top"
                src={`http://localhost:3000/api/${item.category_image}`}
                alt={item.title}
                style={{ height: "200px", objectFit: "cover",borderTopRightRadius:"30px",borderTopLeftRadius:"30px" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title  style={{fontFamily:"serif",textAlign:"center",color:"rgb(136, 78, 78)"}}>{item.category_name}</Card.Title>
                <Card.Text style={{ flex: "1", textAlign: "justify" }}>
                  {item.description}
                </Card.Text>
                <div className="mt-auto text-center">
                  <Button
                   style={{borderRadius:"30px",paddingLeft:"15px",paddingRight:"15px"}}
                    variant="outline-success"
                    onClick={() => item.category_id ? handleClick(item.category_id) : null} /* Pass item.id to handleClick */
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
    </div>
  );
}

export default Main;
