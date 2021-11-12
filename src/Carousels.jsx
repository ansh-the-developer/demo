import React from 'react'
import Carousel from "react-bootstrap/Carousel";
const CarouselP = (Props) => {
  return (
    <>

      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            height='500px'
            class="d-block w-100 dark "
            src={Props.Image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{Props.label1}</h3>
            <p>{Props.description1}.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            height='500px'
            className="d-block w-100 dark"
            src={Props.Image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>{Props.label2}</h3>
            <p>{Props.description2}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height='500px'
            className="d-block w-100 dark"
            src={Props.Image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>{Props.label3}</h3>
            <p>
            {Props.description3}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </>
  )
}
export default CarouselP;