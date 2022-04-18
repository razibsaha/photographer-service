import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jassica Alba",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia deleniti sint aut eligendi nemo unde maxime aliquid saepe reiciendis. Molestias odio eligendi obcaecati, sequi facere numquam unde id nam est!",
    },
    {
      id: 2,
      name: "Chris Smith",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia deleniti sint aut eligendi nemo unde maxime aliquid saepe reiciendis. Molestias odio eligendi obcaecati, sequi facere numquam unde id nam est!",
    },
    {
      id: 3,
      name: "William Jack",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia deleniti sint aut eligendi nemo unde maxime aliquid saepe reiciendis. Molestias odio eligendi obcaecati, sequi facere numquam unde id nam est!",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      className="bg-slate-50"
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <p>{testimonials[0].review}</p>
        <p>- {testimonials[0].name}</p>
      </Carousel.Item>
      <Carousel.Item>
        <p>{testimonials[0].review}</p>
        <p>- {testimonials[0].name}</p>
      </Carousel.Item>
      <Carousel.Item>
        <p>{testimonials[0].review}</p>
        <p>- {testimonials[0].name}</p>
      </Carousel.Item>
    </Carousel>
  );
};

export default Testimonials;
