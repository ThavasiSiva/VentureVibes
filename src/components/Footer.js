import React from 'react'
import { Row, Col } from "react-bootstrap";
import img0 from "./images/logo.png";
import venturevibes from "./venturevibes.png"
function Footer() {
  return (
    <div>
      <Row id="About">
        <Col md={12} xs={12} className="text-center mt-5"  style={{color:"rgb(136, 78, 78)"}}>
         <b> ABOUT </b> 
        </Col>
      </Row> 
       <Row className="bkclr">
        <Col md={3}>
          <img className="bkimage" src={venturevibes}  />
        </Col>

        <Col md={6} className="mt-4">
          <h3 className="text-center" style={{color:"green"}}>Why Venture Vibes ?</h3>
          <p className='paragraph'>
            With our intuitive search feature, travelers can easily find the
            perfect flight, hotel, and rental car options tailored to their
            preferences and budget. Our advanced filtering options allow users
            to refine their search results by factors such as price range,
            location, amenities, and customer ratings, ensuring that they find
            exactly what they're looking for.
          </p>
        </Col>

        <Col md={3}>
          <h4 className="text-center mt-4 " style={{color:"green"}} >Follow us</h4>
          <div className="d-flex align-items-center justify-content-center gap-3 fs-3">
            <a
              href="https://www.whatsapp.com/join"
              target="_blank"
              rel="noopener noreferrer"
              className='paragraph'
            >
              <i class="bi bi-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className='paragraph'
            >
              <i class="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className='paragraph'
            >
              <i class="bi bi-facebook"></i>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
