import React, { useEffect, useState } from "react";
import UnSuccessinfotable from "../components/UnSuccessinfotable";

const successpay = () => {
  const [table, settable] = useState("");
  useEffect(() => {
    settable(<UnSuccessinfotable />);
  }, []);

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 d-flex justify-content-center">
          <div className="successPart1">
            <div className="successLogo text-center mt-3 align-text">
              <i class="bi bi-bag-x unsuccessIcon"></i>
            </div>
            <h5 className="text-center text-danger">
              سقارش شما ثبت شد ولی پرداخت ناموفق بود!
            </h5>
            <p>
              برای جلوگیری از لغو سیستمی سفارش تا
              <span className="text-danger">یک ساعت</span> آینده پرداخت را انجام
              دهید
            </p>
          </div>
          {/* *************************************************** */}
        </div>
        <div className="alert alert-secondary" role="alert">
          این سفارش در بازه ساعت 15 تا 18 تارخ سه شنبه 27 اردیبهشت 1401 به آقای
          دکتر مهرداد باقری به آدرس خیابان اشرفی اصفهانی بن بست طباطبائی ساختمان
          حکیم پلاک 26 طبقه چهارم شماره 19 تحویل خواهد شد
        </div>
      </div>
      {table}
      {/*  End row */}
    </div>
  );
};

export default successpay;
