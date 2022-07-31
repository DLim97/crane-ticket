import React from "react";

function Cart() {
  return (
    <div className="col-6">
      <div className="row my-4 align-items-center">
        <div className="col-10">
          <h5 className="">Name</h5>
          <h6 className="">Desc</h6>
          <div>Location Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div>JUL 30</div>
          <div>7:00pm</div>
        </div>
        <div className="col-2">
          <select className="form-select" aria-label="Default select example">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Cart;
