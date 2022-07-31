import { Component, useState } from "react";

import React from "react";
import Checkout from "./Checkout";
import Navbar from "./Navbar";

function List() {
  const [showCheckout, setShowCheckout] = useState(false);
  const onBuyTicket = () => {
    setShowCheckout(!showCheckout);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="py-5 my-5">
          <h1 className="display-5 fw-bold">All Shows</h1>
          <div className="col-lg-6">
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex voluptatem repellat, consequatur iusto rerum voluptatibus vero vitae earum cum accusamus est, sed mollitia cumque
              magnam exercitationem et corporis aut.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <h5 className="">List of shows</h5>
        <div className="row my-4 align-items-center">
          <div className="col-2">
            <div>JUL 30</div>
            <div>7:00pm</div>
          </div>
          <div className="col-8">
            <div>Name</div>
            <div>Desc</div>
          </div>
          <div className="col-2">
            <div className="btn btn-primary" onClick={() => onBuyTicket()}>
              Buy Tickets
            </div>
          </div>
        </div>
        <div className="row my-4 align-items-center">
          <div className="col-2">
            <div>Aug 01</div>
            <div>7:00pm</div>
          </div>
          <div className="col-8">
            <div>Name</div>
            <div>Desc</div>
          </div>
          <div className="col-2">
            <div className="btn btn-primary" onClick={() => onBuyTicket()}>
              Buy Tickets
            </div>
          </div>
        </div>
      </div>
      {showCheckout && <Checkout />}
    </React.Fragment>
  );
}

export default List;
