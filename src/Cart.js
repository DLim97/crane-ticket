import moment from "moment";
import React, { useState } from "react";

function Cart(props) {
  const [maxTicket, setMaxTicket] = useState([
    { key: 1, value: 1 },
    { key: 2, value: 2 },
    { key: 3, value: 3 },
    { key: 4, value: 4 },
    { key: 5, value: 5 },
  ]);
  const { selectedShow, ticketNo, setTicketNo } = props;
  return (
    <div className="col-6">
      <div className="row my-4 align-items-center">
        <div className="col-10">
          <h5 className="">{selectedShow.name}</h5>
          <h6 className="">{selectedShow.desc}</h6>
          <div>{selectedShow.location}</div>
          <div>{moment(selectedShow.date).format("MMM DD")}</div>
          <div>{moment(selectedShow.date).format("h:mm a")}</div>
        </div>
        <div className="col-2">
          <select className="form-select" aria-label="Ticket Selection" onChange={(e) => setTicketNo(e.target.value)}>
            {maxTicket.map((m) => (
              <option value={m.value}>{m.value}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Cart;
