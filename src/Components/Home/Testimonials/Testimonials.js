import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jassica Alba",
      review:
        "An excellent photography service! The whole team are extremely professional, reliable and pleasure to work with. Down to the initial phone call, their knowledge, to the photography and post production, their customer service was outstanding. The photography has had a huge impact our brand and we’re elated with the end results. The Photography Firm, have secured our business for the future, I would highly recommend them to all.",
    },
    {
      id: 2,
      name: "Chris Smith",
      review:
        "Many thanks for the photos, they are brilliant and better than I imagined. The whole team was brilliant to work with and your flexible approach and willingness was truly excellent. I am now proud that we have images that really stand out and showcase our products. I very much look forward to working with the team in the future.",
    },
    {
      id: 3,
      name: "William Jack",
      review:
        "Choosing to work with Photography Firm was one of the best decisions I have made. They are very easy to work with and they went over and above to meet and exceed expectations. Andy is a very gifted photographer and he has produced some exceptional images for my website. I am writing this review after experiencing my 3rd commission with the Photography Firm and I will definitely keep on using them. I can't recommend them enough, so if you are looking for an excellent photographer then look no further!",
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
        What they say about us
        </h1>
      </div>

      <div className="container mx-auto text-center text-slate-500 bg-[#4b4948]">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item className="p-28">
            <span className="text-[#D5B69C] text-8xl comma">"</span>
            <p className="review">{testimonials[0].review}</p>
            <span className="text-[#D5B69C] text-2xl comma">"</span>
            <p className="name">- {testimonials[0].name}</p>
          </Carousel.Item>
          <Carousel.Item className=" p-28 ">
            <span className="text-[#D5B69C] text-8xl comma">"</span>
            <p className="review">{testimonials[1].review}</p>
            <span className="text-[#D5B69C] text-2xl comma">"</span>
            <p className="name">- {testimonials[1].name}</p>
          </Carousel.Item>
          <Carousel.Item className=" p-28 ">
            <span className="text-[#D5B69C] text-8xl comma">"</span>
            <p className="review">{testimonials[2].review}</p>
            <span className="text-[#D5B69C] text-2xl comma">"</span>
            <p className="name">- {testimonials[2].name}</p>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
