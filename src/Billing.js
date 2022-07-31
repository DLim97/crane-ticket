import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Billing() {
  const [cards, setCards] = useState([
    {
      cardNo: "12344567890",
      cardHolder: "User Name",
      expiryDate: "08/24",
      cvv: "233",
    },
  ]);
  const [addCardMode, setAddCardMode] = useState(false);
  const [newCard, setNewCard] = useState({
    cardNo: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const onChangeField = (event) => {
    let field = event.target.name;
    let value = event.target.value;
    setNewCard({ ...newCard, [field]: value });
  };

  const addCard = () => {
    setAddCardMode(false);
    cards.push(newCard);
    setNewCard({
      cardNo: "",
      cardHolder: "",
      expiryDate: "",
      cvv: "",
    });
  };

  const cancelAddCard = () => {
    setAddCardMode(false);
    setNewCard({
      cardNo: "",
      cardHolder: "",
      expiryDate: "",
      cvv: "",
    });
  };

  return (
    <div className="col-6">
      <div className="row my-4 align-items-center">
        <div className="col-10">
          <h5 className="">Payment</h5>
          <h6>Use Credit / Debit Card</h6>
        </div>
      </div>
      <div className="row">
        {cards.map((c) => (
          <div className="form-check">
            <input className="form-check-input" type="radio" name="card" id="card" checked={true} />
            <div className="">
              <FontAwesomeIcon icon={faCcVisa} />
            </div>
            <div>Visa - {c.cardNo.substring(c.cardNo.length - 4, c.cardNo.length)}</div>
            <div>
              {c.cardHolder} | exp. {c.expiryDate}
            </div>
            <div>
              <label for="name" className="form-label">
                Security Code
              </label>
              <input type="text" className="form-control" id="expDate" placeholder="CVV" />
              <span>3 digits on back of card</span>
            </div>
          </div>
        ))}
        {!addCardMode && (
          <div className="" onClick={() => setAddCardMode(true)}>
            <FontAwesomeIcon icon={faPlus} className="pe-2" />
            <FontAwesomeIcon icon={faCreditCard} className="pe-2" />
            <span>Add New Card</span>
          </div>
        )}
      </div>
      {addCardMode && (
        <div className="row">
          <div className="col-12">
            <div className="mb-3">
              <label for="name" className="form-label">
                Name of Card
              </label>
              <input type="text" className="form-control" id="name" name="cardHolder" value={newCard.cardHolder} onChange={(e) => onChangeField(e)} />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label for="card" className="form-label">
                Card Number
              </label>
              <input type="text" className="form-control" id="cardNo" name="cardNo" value={newCard.cardNo} onChange={(e) => onChangeField(e)} />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label for="name" className="form-label">
                Expiration Date
              </label>
              <input type="text" className="form-control" id="expDate" name="expiryDate" placeholder="MM/YY" value={newCard.expiryDate} onChange={(e) => onChangeField(e)} />
            </div>
          </div>
          <div className="col-4">
            <div className="mb-3">
              <label for="name" className="form-label">
                Security Code
              </label>
              <input type="text" className="form-control" id="expDate" name="cvv" placeholder="CVV" value={newCard.cvv} onChange={(e) => onChangeField(e)} />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <div className="btn btn-primary me-4" onClick={() => addCard()}>
                Add Card
              </div>
              <div className="btn btn-secondary" onClick={() => cancelAddCard()}>
                Cancel
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Billing;
