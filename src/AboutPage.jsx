import React from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const About = (Props) => {
  return (
    <>
    <section id='about'>
    
      <Container  fluid className="about">
        <Row>
          <Col sm="1" className="blank"></Col>

          <Col sm="6" className="content">
            <h1 class="datasciencehead">Our Clinic</h1>
            <hr id="line" />
            <p class="datasciencepara">
              Dr. MORRIS Pet Hospital &amp; Diagnostic Centre dog clinic
              and veterinary services has its place in the list of Veterinary
              Clinics. Organization has an average score of 4 by NiceLocal
              visitors and concludes its business by the following address:
              Dehradun, Uttarakhand 248001, opposite Sakti Medicos, Subhash
              Nagar, Tilak Marg. GPS coordinates are: longitude — 77°59'28.99''E
              (77.991387), latitude — 30°16'38.15''N (30.277264).{" "}
            </p>

            <Row>
              <Col sm="4">
                <img
                  className="imagefirst1"
                  src="https://festive-curie-33cd8a.netlify.app/static/media/1.3bcd9fc5.jpg"
                  alt=""
                />
                <br />
                <br />
                <button >
                  Pet Of The Month
                </button>
                <p class="image_content">
                  It was with a very heavy heart that Lazy’s owner had to
                  relocate and could not take her with him. True to her name,
                  she is very easy-going and loves to lounge around all day. She
                  likes atte
                </p>
                <span class="read">
                  <a href="#">Read More..</a>
                </span>
              </Col>

              <Col sm="4">
                <img
                  className="imagefirst1"
                  src="https://festive-curie-33cd8a.netlify.app/static/media/6.4f42246c.jpg"
                  alt=""
                />
                <br />
                <br />
                <button > Hot Deals</button>
                <p class="image_content">
                  It was with a very heavy herue to her name, she is very
                  easy-going and loves to lounge around all day. She likes atte
                </p>
                <span class="read">
                  <a href="#">Read More..</a>
                </span>
                <br />
              </Col>

              <Col sm="4">
                <img
                  className="imagefirst1"
                  src="https://festive-curie-33cd8a.netlify.app/static/media/8.47efb15f.jpeg"
                  alt=""
                />
                <br />
                <br />
                <button >
                   Video of Month 
                </button>
                <p class="image_content">
                  It was with a very heavy heart that Lazy’s owner had to
                  relocate and could not take her with him. True to her name,
                  she is very easy-going and loves to lounge around all day. She
                  likes atte
                </p>
                <span class="read">
                  <a href="#">Read More...</a>
                </span>
                <br />
              </Col>
            </Row>
          </Col>

          <Col sm="4" className="third">
            <img
              className="imagefirst"
              src="https://festive-curie-33cd8a.netlify.app/static/media/9.3b2654de.jpeg"
              alt=""
            />
            <button > Meet Our New Receptonist</button>
            <p className="image_content4">
              It was with a very heavy heart that Lazy’s owner had to relocate
              and could not take her with him. True to her name, she is very
              easy-going and loves to lounge around all day. She likes atte
            </p>
            <span className="read4">
              <a href="#">Read More..</a>
            </span>
            <br />
          </Col>

          <Col sm="1"></Col>
        </Row>
      </Container>
      </section>
    </>
  );
};
export default About;
