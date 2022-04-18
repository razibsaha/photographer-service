import React from "react";
import { Accordion } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <div className="container mx-auto flex justify-center align-middle my-5">
        <h1>Blog</h1>
      </div>
      <div className="container md:flex justify-center align-middle my-12">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Difference between authorization and authentication.
          </Accordion.Header>
          <Accordion.Body>
            Basically, validation is the method involved with checking what
            someone's identity is, though approval is the most common way of
            confirming what explicit applications, records, and information a
            client approaches. The circumstance is like that of an aircraft that
            necessities to figure out which individuals can come ready. The
            initial step is to affirm the character of a traveler to ensure they
            are who they say they are. When a traveler's personality not
            entirely settled, the subsequent advance is checking any
            extraordinary administrations the traveler approaches, whether it's
            flying with every available amenity or visiting the VIP relax. In
            the computerized world, validation and approval achieve these
            equivalent objectives. Validation is utilized to check that clients
            truly are who they address themselves to be. Whenever this has been
            affirmed, approval is then used to concede the client authorization
            to get to various degrees of data and fill explicit roles,
            contingent upon the guidelines laid out for various sorts of
            clients.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
          <Accordion.Body>
            Because Firebase is free and by Google. Any Service by Google is trustworthy. There are some other authetication services like Auth0 and Okta.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
          <Accordion.Body>
            Beside Authentication firebase provides hosting service. Cloud service, seo service and many more.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    </div>
  );
};

export default Blog;
