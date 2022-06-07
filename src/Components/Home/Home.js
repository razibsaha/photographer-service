import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Razib Saha Photographpy</title>
      </Helmet>
      <Banner></Banner>
      <Services></Services>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
