import React from "react";
const Blog = () => {
  return (
    <div>
      <div className="container mx-auto flex justify-center align-middle my-5">
        <h1>Blog</h1>
      </div>
      <div class="max-w-lg mx-auto p-8">
        <details
          class="open:bg-white open:ring-1 open:ring-black/5  open:shadow-lg p-6 rounded-lg"
          close
        >
          <summary class="text-sm leading-6 text-slate-900  font-semibold select-none">
          Why are you using firebase? What other options do you have to implement authentication?
          </summary>
          <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>
            Because Firebase is free and by Google. Any Service by Google is
            trustworthy. There are some other authetication services like Auth0
            and Okta.
            </p>
          </div>
        </details>
      </div>
      <div class="max-w-lg mx-auto p-8">
        <details
          class="open:bg-white open:ring-1 open:ring-black/5  open:shadow-lg p-6 rounded-lg"
          close
        >
          <summary class="text-sm leading-6 text-slate-900  font-semibold select-none">
          What other services does firebase provide other than authentication?
          </summary>
          <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>
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
            </p>
          </div>
        </details>
      </div>
      <div class="max-w-lg mx-auto p-8">
        <details
          class="open:bg-white open:ring-1 open:ring-black/5  open:shadow-lg p-6 rounded-lg"
          close
        >
          <summary class="text-sm leading-6 text-slate-900  font-semibold select-none">
            Difference between authorization and authentication.
          </summary>
          <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            <p>
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
            </p>
          </div>
        </details>
      </div>

    </div>
  );
};

export default Blog;
