import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const ModalSoftDelete = (props) => {
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
          style={{
            transform: props.modalHandler
              ? "translateX(0)"
              : "translateX(-100vw)",
            opacity: props.modalHandler ? "1" : "0",
          }}
          className="modal1  "
          // theModal
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
                {props.deleteLoading && (
                  <>
                    <span className="ml-2 text-primary">...Loading</span>
                    <div
                      className="spinner-grow text-primary ml-2"
                      role="status"
                    ></div>
                  </>
                )}
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

export default ModalSoftDelete;
