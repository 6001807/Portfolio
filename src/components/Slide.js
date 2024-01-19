import Carousel from 'react-bootstrap/Carousel';

const Slide = () => {
    return (
        <Carousel id="carousel" style={{ width: '55%', marginRight: '6%'}}>
          <Carousel.Item interval={2500}>
            <img
              className="slide"
              src="img/askfree.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="slide"
              src="img/portfolio.PNG"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="slide"
              src="img/animap.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      );
}
 
export default Slide;