import React, { useEffect, useState } from "react";
import Successinfotable from "../components/Successinfotable";

const successpay = () => {
  const [table, settable] = useState("");
  useEffect(() => {
    settable(<Successinfotable />);
  }, []);

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 d-flex justify-content-center">
          <div className="successPart1">
            <div className="successLogo text-center mt-3 align-text">
              <i className="bi bi-bag-check successIcon"></i>
            </div>
            <h5 className="text-center">سقارش شما با موفقیت ثبت گردید</h5>
            <p>
              سفارش شما با موفقیت در سیستم ثبت شد. برای مشاهده جزئیات بر روی
              دکمه پیگیری سفارش کلیک نمایید
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
