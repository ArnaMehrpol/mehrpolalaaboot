import React from "react";

const gettingforgatenpass = () => {
  return (
    <div className="container forgatenform">
      <div className="row d-flex justify-content-center align-items-center  mt-5">
        <div className="col-md-4 align-items-center">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                لطفا کد دریافتی خود را وارد فرمایید:
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              ارسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default gettingforgatenpass;
