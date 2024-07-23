import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { MdLocationOn } from 'react-icons/md'; // Import the location icon
import { IoLogoYoutube } from "react-icons/io";

function Parks() {
  const [items, setItems] = useState([]);

  const [show, setShow] = useState(false);

  const [selectedItemId, setSelectedItemId] = useState(null);

  const [rating, setRating] = useState(1);
  
  const [comment, setComment] = useState();

  const [show1, setShow1] = useState(false);

  const [showReviewModal, setShowReviewModal] = useState(false);

  const [selectedItemReviews, setSelectedItemReviews] = useState([]);


  const [activeVideoUrl, setActiveVideoUrl] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/placemasterget"
        );

        const filteredItems = response.data.filter(
          (item) =>
            item.category_name && item.category_name.category_name === "Park"
        );

        console.log(response.data);

        console.log("filteredItems", filteredItems);

        setItems(filteredItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (videoUrl) => {
    setActiveVideoUrl(videoUrl);
    console.log(activeVideoUrl)
    setShow1(true);
  };
 

  const handleClose = () => setShow(false);

  const handleShow = (itemId) => {
    setSelectedItemId(itemId);

    setShow(true);
  };


  const handleCloseReviews = () => setShowReviewModal(false);
  const handleShowReviews = (reviews) => {
    setSelectedItemReviews(reviews);
    setShowReviewModal(true);
  };


  const reviewHandler = async () => {
    if (!selectedItemId) {
      Swal.fire({
        title: "Error",

        text: "Please select an item to submit your review.",

        icon: "error",
      });

      return;
    }

    const data = {
      review: [
        {
          rating: rating,

          comment: comment,
        },
      ],
    };

    console.log(data);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/placemasterupdate/${selectedItemId}`,

        data
      );

      console.log(response.data);

      Swal.fire({
        title: "Review Uploaded!",

        icon: "success",
      });
    } catch (error) {
      console.error("Error uploading review:", error);

      Swal.fire({
        title: "Error Uploading Review",

        text: "Please try again later",

        icon: "error",
      });
    }

    setShow(false);
  };


  return (
    
    <div >
    <Container fluid>
      <h1  style={{ textAlign: "center", fontFamily:"serif",color:"rgb(136, 78, 78)" }}>Parks</h1>
      <hr />
      <Row>
        {items.map((item, index) => (
          <>
            {index % 2 === 0 ? (
              <>
                <Col md={7} xs={12}>
                  <h3 style={{fontFamily:"serif",textAlign:"center",color:"rgb(136, 78, 78)"}}>{item.title}</h3>
                  <p>{item.description}</p>
                  <h5 style={{ textDecoration: "underline" }}>More Details:</h5>
                  <table className="table table-bordered mt-3">
  <tbody>
    <tr>
      <th>Timing</th>
      <td>{item.timing}</td>
    </tr>
    <tr>
      <th>Distance</th>
      <td>{item.Distance}</td>
    </tr>
    <tr>
      <th>Location</th>
      <td>
        <a href={item.location} target="_blank">
          <MdLocationOn className="fs-4" style={{ color: "#ff5f5f" }} />
        </a>
      </td>
    </tr>
    <tr>
      <th>Youtube</th>
      <td>
        <IoLogoYoutube onClick={() => handleShow1(item.youtube_url)} style={{ cursor: 'pointer' }} />
      </td>
    </tr>
    <tr>
      <th>Submit Your Review</th>
      <td>
        <Button variant="success" className="mt-2" onClick={() => handleShow(item._id)}>Submit Your Review</Button>
      </td>
    </tr>
    <tr>
      <th>See Others Review</th>
      <td>
        <Button variant="danger" className="mt-2" onClick={() => handleShowReviews(item.review)}>See Others Review</Button>
      </td>
    </tr>
  </tbody>
</table>

                </Col>

                <Col md={5} xs={12} key={item.place_id} className="mb-3">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 h-100 img-fluid"
                        src={`http://localhost:3000/api/${item.upload_images}`}
                        style={{ height: "300px" }}
                        alt="Marudhamalai Temple"
                      />
                    </Carousel.Item>
                    {/* Add Carousel items for mar2 and mar3 similarly */}
                  </Carousel>
                </Col>
              </>
            ) : (
              <>
                <Col md={5} xs={12} key={item.place_id} className="mb-3">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 h-100 img-fluid"
                        src={`http://localhost:3000/api/${item.upload_images}`}
                        style={{ height: "300px" }}
                        alt="Marudhamalai Temple"
                      />
                    </Carousel.Item>
                    {/* Add Carousel items for mar2 and mar3 similarly */}
                  </Carousel>
                </Col>

                <Col md={7} xs={12}>
                  <h3 style={{fontFamily:"serif",textAlign:"center",color:"rgb(136, 78, 78)"}}>{item.title}</h3>
                  <p>{item.description}</p>
                  <h5 style={{ textDecoration: "underline" }}>More Details:</h5>
                  <table className="table table-bordered mt-3">
  <tbody>
    <tr>
      <th>Timing</th>
      <td>{item.timing}</td>
    </tr>
    <tr>
      <th>Things to Do</th>
      <td>{item.Things_to_Do}</td>
    </tr>
    <tr>
      <th>Location</th>
      <td>
        <a href={item.location} target="_blank">
          <MdLocationOn className="fs-4" style={{ color: "#ff5f5f" }} />
        </a>
      </td>
    </tr>
    <tr>
      <th>Youtube</th>
      <td>
        <IoLogoYoutube onClick={() => handleShow1(item.youtube_url)} style={{ cursor: 'pointer' }} />
      </td>
    </tr>
    <tr>
      <th>Submit Your Review</th>
      <td>
        <Button variant="success" className="mt-2" onClick={() => handleShow(item._id)}>Submit Your Review</Button>
      </td>
    </tr>
    <tr>
      <th>See Others Review</th>
      <td>
        <Button variant="danger" className="mt-2" onClick={() => handleShowReviews(item.review)}>See Others Review</Button>
      </td>
    </tr>
  </tbody>
</table>


                </Col>
              </>
            )}
            <hr />
          </>
        ))}
      </Row>
    </Container>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Review</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ul className="stars d-flex gap-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <li
                value={star}
                style={{ listStyle: "none" }}
                onClick={() => setRating(star)}
                className={`star ${star <= rating ? "orange" : ""}`}
                onMouseOver={(e) => e.target.classList.add("yellow")}
                onMouseOut={(e) => e.target.classList.remove("yellow")}
              >
                <i className="bi bi-star fs-2"></i>
              </li>
            ))}
          </ul>

          <textarea
            name="review"
            id="review"
            className="form-control mt-3"
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

          <div className="mt-4 text-center ">
            <Button
              variant="success"
              aria-label="close"
              onClick={reviewHandler}
            >
              Submit
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showReviewModal} onHide={handleCloseReviews}>
        <Modal.Header closeButton>
          <Modal.Title>User Reviews</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedItemReviews.map((review, index) => (
            <div className="mt-2" key={index}>
              {/* <h6>User Review:</h6> */}
              <div className="ms-2">
                <span>Rating: {review.rating}</span>
                <br />
                <span>Comment: {review.comment}</span>
              </div>
            </div>  
          ))}
        </Modal.Body>
      </Modal>
      

      <Modal show={show1} onHide={handleClose1} size="lg" centered>
  <Modal.Header closeButton>
    <Modal.Title>YouTube Video</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <iframe
      width="100%"
      height="400px"
      src={activeVideoUrl}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </Modal.Body>
</Modal>  

      
  </div>
  );
}

export default Parks;
