import React from 'react'
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dog1 from "./Image/dog.png"
const Contact=(Props)=>{
    return(
        <>
        <section id='Contact'>
            <Container fluid className='footer'>
                <Row>
                    <Col sm='3'>
                    <img src={dog1} width='80%'  ></img>
                    </Col>

                    <Col sm='5'>
                    <h1 class="fw-bolder">Contact Detail</h1>
                    <p>DR. Vyas Clinic</p>
                    <p>
                        <i>
                        <svg class="svg-inline--fa fa-home fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
                        </i>
                        Veer sawarkar marg opposite Sakti Medicos Subhash Nagar Dehradun Uttarakhand 248001 India
                    </p>

                    <p>
                        <i>
                        +91-7014296174, +91-9634403372, +91-9634403312
                        </i>
                    </p>

                    <p>
                        <i>
                        drvyas@gmail.com
                        </i>
                    </p>

                    </Col>

                    <Col sm='4'>
                    <h1 class="fw-bolder">Dog Health Library</h1>
                    <ul>
                        <li>Arthritis</li>
                        <li>Canine Distemper</li>
                        <li>Feline Distemper</li>
                        <li>Canine Parvovirus</li>
                        <li>Fleas</li>
                        <li>Ticks</li>
                        <li>Obesity</li>
                        </ul>

                    </Col>

                    <p class="text-center">Copyright © AMAN CHANDRA JOSHI a.k.a Anshu 2021-22.</p>
                    
                </Row>
            </Container>

        </section>

        </>
    )
}
export default Contact;