import React from "react";
import Billing from "./Billing";
import Navbar from "./Navbar";
import Total from "./Total";

function Payment() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="py-5 my-5">
          <h1 className="display-5 fw-bold">Payment</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <Billing />
          <Total />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Payment;
