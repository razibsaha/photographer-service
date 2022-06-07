import React, { useEffect, useState } from "react";
import Service from "./Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="container md:d-flex text-center mx-auto my-5">
        <h6>What are offering <span className="text-[#D5B69C]">{services.length}</span> services </h6>
        <h1>Exclusive Memories Captured</h1>
      </div>
      <div className="container relative d-flex gap-5 flex-wrap justify-center align-middle mx-auto">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
