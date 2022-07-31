import { Component, useState } from "react";

import React from "react";
import Checkout from "./Checkout";
import Navbar from "./Navbar";
import moment from "moment";

function List() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [shows, setShows] = useState([
    {
      name: "Bruno Mars Concert",
      desc: "Around the World",
      location: "Bukit Jalil Statdium, KL",
      date: "2022-08-01 21:00",
      price: 250,
      notes: "Covid 19 Precaution must be taken",
      serviceFee: 20,
      orderProcessingFee: 2.95,
    },
    {
      name: "Taylor Swift Concert",
      desc: "Red Army",
      location: "Bukit Jalil Statdium, KL",
      date: "2022-08-22 19:00",
      price: 125,
      notes: "Covid 19 Precaution must be taken",
      serviceFee: 40,
      orderProcessingFee: 5.0,
    },
  ]);
  const [selectedShow, setSelectedShow] = useState({});
  const onBuyTicket = (show) => {
    setSelectedShow(show);
    setShowCheckout(!showCheckout);
  };

  return (
    <React.Fragment>
      <Navbar />

      {!showCheckout && (
        <React.Fragment>
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
            {shows.map((show) => (
              <div className="row my-4 align-items-center">
                <div className="col-2">
                  <div>{moment(show.date).format("MMM DD")}</div>
                  <div>{moment(show.date).format("h:mm a")}</div>
                </div>
                <div className="col-8">
                  <div>{show.name}</div>
                  <div>{show.desc}</div>
                </div>
                <div className="col-2">
                  <div className="btn btn-primary" onClick={() => onBuyTicket(show)}>
                    Buy Tickets
                  </div>
                </div>
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
      {showCheckout && <Checkout selectedShow={selectedShow} setShowCheckout={setShowCheckout} />}
    </React.Fragment>
  );
}

export default List;
