import React, { useRef } from "react";
import { useEffect } from "react";

const Modal = (props) => {
  const target = useRef();
  const focusHandler = () => {
    target.current.focus();
  };
  useEffect(() => {
    focusHandler();
  }, []);
  return (
    <>
      <div className="backdrop">
        <div
          className="modal1 "
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title fs-5 text-danger"
                  id="exampleModalLabel"
                >
                  توجه!
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal1"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">آیا از انجام عملیات مطمئن هستید؟</div>
              <div className="modal-footer">
                <button
                  onClick={props.modalHandler}
                  ref={target}
                  type="button"
                  className="btn btn-warning ms-3"
                  data-bs-dismiss="modal1"
                >
                  بستن
                </button>
                <button
                  onClick={props.delete}
                  type="button"
                  className="btn btn-primary text-black"
                >
                  پاکش کن
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
