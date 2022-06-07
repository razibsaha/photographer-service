import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, price, description, url } = service;
  const navigate = useNavigate();
    const navigateToServiceDetail = (id) =>{
        navigate(`/service/${id}`)
    }
  return (
    <div>
      <Card className="hover:scale-110 md:transform-none" style={{ width: "24rem" }}>
        <Card.Img
          variant="top"
          style={{ height: "18rem", objectFit: "cover" }}
          src={url}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div
            aria-hidden="true"
            class="w-25 h-20 absolute top-60 right-5 flex justify-center items-center rounded-full bg-[#D5B69C]"
          >
            <span class="font-bold text-[#ffffff]">
              <Card.Title>{price}</Card.Title>
            </span>
          </div>

          <Card.Text>{description.slice(0,170)+ '...'}</Card.Text>
          <button onClick={()=>navigateToServiceDetail(id, name, price, description, url)} 
          className="bg-[#4b4948] p-3 rounded-md text-white hover:bg-[#262626]">Check Details</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
