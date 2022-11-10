import React from "react";

const L6Offers = () => {
  return (
    <div className="container mt-5 bg-white round-10">
      <div className="row">
        <div className="right-part mt-3">
          <div>
            <h6>یک درخواست، چند پیشنهاد</h6>
            <p>
              درخواست خود را اعلام کنید تا پیشنهادهای شگفت انگیز سایر تامین
              کنندگان را دریافت نمایید.
            </p>
          </div>
          <div className="moratabkon">
            <p>2761000+</p>
            <p>20h</p>
          </div>
          <div className="moratabkon">
            <p>درخواست</p>
            <p>میانگین زمان پاسخگویی</p>
          </div>
          <div className="moratabkon">
            <p>کسب و کار فعال</p>
            <p>حوزه</p>
          </div>
        </div>
        <div className="left-part mt-3">
          <h6>در کمترین زمان درخواست خود را ارسال کنید...</h6>
          <form action="#">
            <div className="mb-3">
              <input type="text" className="form-control" id="darkhast" />
            </div>
            <div className="mb-3 moratabkon">
              <input type="number" className="form-control" id="tedad" />
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected className=""></option>
                <option value="1">لیتر</option>
                <option value="2">کیلو</option>
                <option value="3">عدد</option>
              </select>
            </div>

            <div className="ersal-btn">
              <button type="submit" className="btn btn-primary ">
                ارسال درخواست <i className="bi bi-arrow-left me-1"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default L6Offers;
