import React from 'react'
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Services=(Props)=>{
    return(
        <>
            <section id='Services'>
                <Container>
                    <Row >

                        <Col sm='3'></Col>
                    <Col sm='6' >
                        <h1 className='servicehead'>SERVICES</h1>
                        <hr id='serviceline'/>

                    </Col>
                    <Col sm='3'></Col>

                    </Row>
                    <br />

                    <Row>
                        <Col sm='3'>
                        <img src="https://festive-curie-33cd8a.netlify.app/static/media/5.34e33007.jpg" alt="" className='serviceimage'></img>
                        </Col>
                        <Col sm='3' className='servicecontent'>
                        <h3 className='servicehead2'>VACCINATION</h3>
                        <p className='servicepara'>Assistant Professor at Graphic Era Deemed to be University. It has survived not only five centuries, but also the leap into electronic typesetting. It was popularised in the 1960s with t</p>
                        <button class="MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root my-3 col-btn css-79xub" tabindex="0" type="button">Read more<span class="MuiTouchRipple-root css-w0pj6f"></span></button>
                        </Col>
                        
                        <Col sm='3'>
                        <img className='serviceimage' src="https://festive-curie-33cd8a.netlify.app/static/media/7.b22286f8.jpg" />                        </Col>
                        <Col sm='3' className='servicecontent'>
                        <h3 className='servicehead2'>DIAGONSTICS</h3>
                        <p className='servicepara'>Assistant Professor at Graphic Era Deemed to be University. It has survived not only five centuries, but also the leap into electronic typesetting. It was popularised in the 1960s with t</p>
                        <button class="MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root my-3 col-btn css-79xub" tabindex="0" type="button">Read more<span class="MuiTouchRipple-root css-w0pj6f"></span></button>
                        </Col>

                        <Col sm='3' >
                        <img src="https://festive-curie-33cd8a.netlify.app/static/media/6.4f42246c.jpg" className='serviceimage' />                        </Col>
                        <Col sm='3' className='servicecontent'>
                        <h3 className='servicehead2'>NUTRITION</h3>
                        <p className='servicepara'>Assistant Professor at Graphic Era Deemed to be University. It has survived not only five centuries, but also the leap into electronic typesetting. It was popularised in the 1960s with t</p>
                        <button class="MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root my-3 col-btn css-79xub" tabindex="0" type="button">Read more<span class="MuiTouchRipple-root css-w0pj6f"></span></button>
                        </Col>

                        <Col sm='3' > 
                        <img src="https://festive-curie-33cd8a.netlify.app/static/media/2.f0f5a705.jpg"  className='serviceimage'></img>
                        </Col>
                        <Col sm='3' className='servicecontent'>
                        <h3 className='servicehead2'>ADOPTION</h3>
                        <p className='servicepara'>Assistant Professor at Graphic Era Deemed to be University. It has survived not only five centuries, but also the leap into electronic typesetting. It was popularised in the 1960s with t</p>
                        <button class="MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root my-3 col-btn css-79xub" tabindex="0" type="button">Read more<span class="MuiTouchRipple-root css-w0pj6f"></span></button>
                        </Col>
                        
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Services;