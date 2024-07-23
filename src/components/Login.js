import React, { useState, useEffect} from "react";
import Swal from "sweetalert2";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import axios from "axios";

function Login() {

    const [input, setInput] = useState({ email: "", password: "" });
    const [result, setResult] = useState({});

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
      };
    
    // console.log(input);

    useEffect(() => {
      axios
        .get("http://localhost:3000/api/userreviewget")
        .then((res) => {
          setResult(res.data);
        });
    }, []);

    const handleClick = () => {
      
      let data = {
       
        email: input.email,
        password: input.password,
      };
      console.log(data);
  
      axios.post(
        "http://localhost:3000/api/userreviewinsert",
        data
      );

      console.log("Your data", data)
  
      Swal.fire({
        title: "Login Success!",
        icon: "success",
      });
  
    }
    console.log(result);


  return (
    <div  style={{backgroundColor:"grey"}}>
    <Container className="login-container">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={4} >
          <div style={{backgroundColor:"#ffffff",borderRadius:"10px"}} className="p-4">
            <h2 className="mb-4 text-center">Login</h2>
            <Form>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="email" placeholder="Enter email" name="email" value={input.email} onChange={handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword" className="mt-4">
                <Form.Control type="password" placeholder="Password" name="password" value={input.password}  onChange={handleChange} />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="button" className="mt-3" onClick={handleClick}>
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Login;
