import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SuccessModel(props) {
  const { modelRef, selectedShow, ticketNo, total } = props;
  return (
    <React.Fragment>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ref={modelRef} style={{ display: "none" }}></button>
      <div className="modal" tabindex="-1" id="staticBackdrop">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-success">
                <FontAwesomeIcon icon={faCheckCircle} /> Payment Success
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-8 pb-4">
                  <h6>
                    {selectedShow?.name} - {selectedShow?.desc}
                  </h6>
                </div>
                <div className="col-4">
                  <h6>
                    $ {selectedShow?.price} x {ticketNo}
                  </h6>
                </div>
                <div className="col-12">
                  <img src="/sample.png" className="img-qr" />
                  <span>Please take a screenshot of the above QR</span>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="row w-100">
                <div className="col-6">
                  <h5>Total: $ {total}</h5>
                </div>
                <div className="col-6 text-end">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Return to listing page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SuccessModel;
