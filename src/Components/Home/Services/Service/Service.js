import React from "react";
import { Button, Card } from "react-bootstrap";

const Service = ({ service }) => {
  const { name, price, description, url } = service;
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
          <Button variant="primary">Check Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
