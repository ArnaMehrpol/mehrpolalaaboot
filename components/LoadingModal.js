import React from "react";

const LoadingModal = (props) => {
  return (
    <>
      <div className="loadingModal">
        <span className="loadingModalText">...Loading</span>
        <br />
        <div
          class="spinner-grow loadingModalSpinner text-light"
          role="status"
        ></div>
      </div>
    </>
  );
};

export default LoadingModal;
