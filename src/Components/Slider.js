import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './Datas/Pictures/image0.jpeg';
import img2 from './Datas/Pictures/image1.jpeg'
import img3 from './Datas/Pictures/image2.png'



function Slider() {
    return (
      <div style={{ display: 'block', width: '95%',margin: 'auto', paddingTop: '1rem'}}>
      
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={img1}
            alt="Image One"
          />
         
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={img2}            alt="Image Two"
          />
        
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={img3}            alt="Image Three"
          />
        
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider