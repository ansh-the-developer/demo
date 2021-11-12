import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
const Doctor = (Props) => {
  return (
    <>
        <section id='team'>
     
        <Container fluid className='Team'>
         
            <Row>
            {/* <Col sm='2'></Col> */}
              <Col sm='6'>
                <h1 className="dh">Dr. Priyank Das</h1>
                <p className="dp">
                  Assistant Professor at Graphic Era Deemed to be University. It
                  has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It
                  was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages,Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknow type and scras
                </p>
              </Col>

              <Col sm='6'>
                <img
                className="di"
                
                  src="https://festive-curie-33cd8a.netlify.app/static/media/2.f0f5a705.jpg"
                  
                ></img>
              </Col>
              {/* <Col sm='2'></Col> */}
            </Row>
          
        </Container>
        </section>
     
    </>
  );
};
export default Doctor;
