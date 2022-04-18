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
    <div>
      <div className="container md:d-flex text-center mx-auto my-5">
        <h6>Some Feedbacks</h6>
        <h1>
          What They Said
        </h1>
      </div>

      <div className="container mx-auto text-center text-slate-500 bg-slate-100 font-serif text-2xl">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item className=" p-28 ">
            <span className="text-yellow-500 text-8xl">"</span>
            <p>{testimonials[0].review}</p>
            <span className="text-yellow-500 text-2xl">"</span>
            <p>- {testimonials[0].name}</p>
          </Carousel.Item>
          <Carousel.Item className=" p-28 ">
            <span className="text-yellow-500 text-8xl">"</span>
            <p>{testimonials[1].review}</p>
            <span className="text-yellow-500 text-2xl">"</span>
            <p>- {testimonials[1].name}</p>
          </Carousel.Item>
          <Carousel.Item className=" p-28 ">
            <span className="text-yellow-500 text-8xl">"</span>
            <p>{testimonials[2].review}</p>
            <span className="text-yellow-500 text-2xl">"</span>
            <p>- {testimonials[2].name}</p>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
