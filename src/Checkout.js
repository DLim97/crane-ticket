import React, { useRef, useState } from "react";
import Billing from "./Billing";
import Cart from "./Cart";
import SuccessModel from "./SuccessModel";
import Total from "./Total";

function Checkout(props) {
  const [ticketNo, setTicketNo] = useState(1);
  const [showPayment, setShowPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [total, setTotal] = useState(0);
  const modelRef = useRef();
  const { selectedShow, setShowCheckout } = props;
  const staticBackdrop = document.getElementById("staticBackdrop");
  staticBackdrop?.addEventListener("hide.bs.modal", (event) => {
    setShowCheckout(false);
  });
  return (
    <React.Fragment>
      <div className="container">
        <div className="py-5 my-5">
          <h1 className="display-5 fw-bold">Checkout</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {!showPayment && <Cart ticketNo={ticketNo} setTicketNo={setTicketNo} selectedShow={selectedShow} />}
          {showPayment && <Billing />}
          <Total
            ticketNo={ticketNo}
            selectedShow={selectedShow}
            showSuccess={showSuccess}
            setShowCheckout={setShowCheckout}
            showPayment={showPayment}
            setShowSuccess={setShowSuccess}
            modelRef={modelRef}
            total={total}
            setTotal={setTotal}
          />
        </div>
        {!showPayment && (
          <div className="row">
            <div className="btn btn-primary" onClick={() => setShowPayment(true)}>
              Proceed to payment
            </div>
          </div>
        )}
      </div>
      {showSuccess && <SuccessModel setShowSuccess={setShowSuccess} modelRef={modelRef} selectedShow={selectedShow} ticketNo={ticketNo} total={total} />}
    </React.Fragment>
  );
}

export default Checkout;
