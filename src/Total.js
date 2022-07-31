import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Total() {
  return (
    <div className="col-6">
      <div className="row my-4 align-items-center">
        <div className="row">
          <div className="col-6">
            <h5 className="">Total</h5>
          </div>
          <div className="col-6 text-end">
            <h5 className="">
              $500
              <a data-bs-toggle="collapse" href="#totalPanel" role="button" aria-expanded="false" aria-controls="totalPanel">
                <FontAwesomeIcon icon={faChevronDown} color="#000" />
              </a>
            </h5>
          </div>
        </div>
        <div className="collapse" id="totalPanel">
          <div className="row">
            <h5 className="">Tickets</h5>
            <div className="col-6">
              <h6>Resale Tickets: $250 x 2</h6>
            </div>
            <div className="col-6 text-end">
              <h6 className="">$500</h6>
            </div>
          </div>
          <div className="row">
            <h5 className="">Note From Seller</h5>
            <div className="col-12">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eaque, tenetur modi soluta eum fugiat. Harum, amet, corrupti id repellat doloremque nihil totam quia, architecto nostrum
                quibusdam vero. Explicabo, laboriosam?
              </div>
            </div>
          </div>
          <div className="row">
            <h5 className="">Fees</h5>
            <div className="col-6">
              <h6>Service Fees: $250 x 2</h6>
            </div>
            <div className="col-6 text-end">
              <h6 className="">$500</h6>
            </div>
            <div className="col-6">
              <h6>Order Processing Fee</h6>
            </div>
            <div className="col-6 text-end">
              <h6 className="">$2.95</h6>
            </div>
          </div>
          <div className="row">
            <h5 className="">Delivery</h5>
            <div className="col-6">
              <h6>Mobile Entry</h6>
            </div>
            <div className="col-6 text-end">
              <h6 className="">Free</h6>
            </div>
          </div>
          <div className="row">
            <a href="#">Cancel Order</a>
          </div>
          <div className="row">
            <span className="fw-bold">*Important notes</span>
          </div>
          <div className="row">
            <div class="form-check">
              <div className="col-12">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label fw-bold" for="flexCheckDefault">
                  I have read and agree to the current Terms of Use.
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="btn btn-success">Place Order</div>
          </div>
          <div className="row">
            <span className="fw-bold">*Exception may apply, see our Terms of Use.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Total;
