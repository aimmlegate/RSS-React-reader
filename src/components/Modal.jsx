import React from "react";
import cn from "classnames";

const Modal = props => {
  const { show: showStatus } = props.modalStatus;
  const modalClasses = cn({
    modal: true,
    show: showStatus,
    fade: showStatus
  });
  const style = {
    display: showStatus ? "block" : "none"
  };
  return (
    <div className={modalClasses} style={style} role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={props.closeModal}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{props.modalStatus.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
