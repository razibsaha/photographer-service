import React from "react";
import dp from "../../Assets/Images/dp.png";

const AboutMe = () => {
  return (
    <div>
      <div className="container mx-auto flex justify-center align-middle my-5">
        <h1>About me</h1>
      </div>
      <div  className="container mx-auto flex justify-center align-middle my-5">
          <img src={dp} alt="" />
        </div>
      <div className="container md:flex justify-center align-middle my-12">
      
        <div className="p-12">
          I am a tireless seeker of knowledge, occasional purveyor of wisdom and
          also, coincidentally, a graphic designer and Illustrator. My school of
          thought is reliant on schooling my thought – thoroughly, regularly;
          keeping abreast of design, branding, advertising trends, and
          solutions. Being a graphic designer and illustrator for a long time, I
          believe any design/art should be easy to read, easy to remember but it
          has to be unique. Over the past few years, I'm trying to be more
          effective with my designs and artworks by keeping it modern, unique
          and simple.
        </div>
        
      </div>
    </div>
  );
};

export default AboutMe;
