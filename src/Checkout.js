import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Total from "./Total";

function Checkout(props) {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="py-5 my-5">
          <h1 className="display-5 fw-bold">Checkout</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <Cart />
          <Total />
        </div>
        <div className="row">
          <div className="btn btn-primary">Proceed to payment</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Checkout;
