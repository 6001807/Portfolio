import Carousel from 'react-bootstrap/Carousel';
import port from '../img/portfolio.png';
import animap from '../img/animap.png';
import askfree from '../img/askfree.png';

const Slide = () => {
    return (
        <Carousel id="carousel" style={{ width: '55%', marginRight: '6%'}}>
          <Carousel.Item interval={2500}>
            <img
              className="slide"
              src={askfree}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="slide"
              src={port}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="slide"
              src={animap}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      );
}
 
export default Slide;