import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "./BannerImages/alexander-dummer-aS4Duj2j7r4-unsplash.jpg";
import slider2 from "./BannerImages/roger-erdvig-g6y5mm9Zby0-unsplash.jpg";
import slider3 from "./BannerImages/soragrit-wongsa-aV5xrpB0bwQ-unsplash.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img style={{height:'60vh'}} className="d-block w-100 object-cover" src={slider1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
        <img style={{height:'60vh'}} className="d-block w-100 max-height: 50% object-cover" src={slider2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
        <img style={{height:'60vh'}} className="d-block w-100 max-height: 50% object-cover" src={slider3} alt="First slide" />
        </Carousel.Item>
      </Carousel>
  );
};

export default Banner;
