import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Billing() {
  return (
    <div className="col-6">
      <div className="row my-4 align-items-center">
        <div className="col-10">
          <h5 className="">Payment</h5>
          <h6>Use Credit / Debit Card</h6>
        </div>
      </div>
      <div className="row">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="card" id="card" checked={true} />
          <div className="">
            <FontAwesomeIcon icon={faCcVisa} />
          </div>
          <div>Visa - 9999</div>
          <div>User Name | exp. 00/11</div>
          <div>
            <label for="name" className="form-label">
              Security Code
            </label>
            <input type="text" className="form-control" id="expDate" placeholder="CVV" />
            <span>3 digits on back of card</span>
          </div>
        </div>
        <div className="">
          <FontAwesomeIcon icon={faPlus} className="pe-2" />
          <FontAwesomeIcon icon={faCreditCard} className="pe-2" />
          <span>Add New Card</span>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="mb-3">
            <label for="name" className="form-label">
              Name of Card
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
        </div>
        <div className="col-12">
          <div className="mb-3">
            <label for="card" className="form-label">
              Card Number
            </label>
            <input type="text" className="form-control" id="cardNo" />
          </div>
        </div>
        <div className="col-12">
          <div className="mb-3">
            <label for="name" className="form-label">
              Expiration Date
            </label>
            <input type="text" className="form-control" id="expDate" placeholder="MM/YY" />
          </div>
        </div>
        <div className="col-4">
          <div className="mb-3">
            <label for="name" className="form-label">
              Security Code
            </label>
            <input type="text" className="form-control" id="expDate" placeholder="CVV" />
          </div>
        </div>
        <div className="col-12">
          <div className="mb-3">
            <div className="btn btn-primary">Add Card</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
