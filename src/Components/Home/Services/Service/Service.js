import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, price, description, url } = service;
  const navigate = useNavigate();
    const navigateToServiceDetail = (id, name, price, description, url) =>{
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
            class="w-25 h-20 absolute top-60 right-5 flex justify-center items-center rounded-full bg-red-400"
          >
            <span class="font-bold text-slate-50">
              <Card.Title>{price}</Card.Title>
            </span>
          </div>

          <Card.Text>{description}</Card.Text>
          <Button onClick={()=>navigateToServiceDetail(id, name, price, description, url)} variant="primary">Check Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
