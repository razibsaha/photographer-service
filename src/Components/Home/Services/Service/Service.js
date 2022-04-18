import React from "react";
import { Button, Card } from "react-bootstrap";

const Service = ({ service }) => {
  const { name, price, description, url } = service;
  return (
    <div>
      <Card style={{ width: "24rem" }} >
        <Card.Img variant="top" style={{ height: "18rem",objectFit: 'cover' }} src={url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{price}</Card.Title>
          <Card.Text>
          {description}
          </Card.Text>
          <Button variant="primary">Check Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
