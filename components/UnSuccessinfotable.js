import Link from "next/link";
import React from "react";

const UnSuccessinfotable = () => {
  return (
    <>
      <div>
        <div className="sefareshInfo">
          <h5>اطلاعات ارسالی سفارش</h5>
          <hr />
        </div>
        <div>
          <table className="table table-bordered table-responsive">
            <tr className="">
              <th className="text-center ">تحویل گیرنده</th>
              <th className="text-center ">آدرس</th>
              <th className="text-center ">کد پستی</th>
              <th className="text-center ">شماره تماس</th>
              <th className="text-center ">زمان ارسال</th>
              <th className="text-center ">شیوه ارسال</th>
            </tr>
            <tr>
              <td className="text-center pt-4 ">دکتر مهرداد باقری</td>
              <td className="text-center pt-4  ">
                اشرفی اصفهانی بن بست طباطبائی پلاک 26 واحد 19
              </td>
              <td className="text-center pt-4 ">1462569874</td>
              <td className="text-center pt-4 ">09123698521</td>
              <td className="text-center pt-4 ">
                15 تا 18 سه شنبه 27 اردیبهشت 1401
              </td>
              <td className="text-center pt-4">پیک فروشگاه</td>
            </tr>
          </table>
        </div>
      </div>
      {/* End of First Table */}
      <hr className="mt-5 bg-primary" />
      <div>
        <div className="sefareshInfo">
          <h5>جزئیات پرداخت</h5>
          <hr />
        </div>
        <div>
          <table className="table table-bordered table-responsive">
            <tr>
              <th className="text-center m-4">درگاه</th>
              <th className="text-center m-4">کد سفارش</th>
              <th className="text-center m-4">شماره پیگیری</th>
              <th className="text-center m-4">تاریخ</th>
              <th className="text-center m-4">مبلغ</th>
              <th className="text-center m-4">وضعیت</th>
            </tr>
            <tr>
              <td className="text-center pt-4 mt-1 ">بانک سامان</td>
              <td className="text-center pt-4 ">ORD-27172769</td>
              <td className="text-center pt-4 ">13596845</td>
              <td className="text-center pt-4 ">1401/02/26 11:01</td>
              <td className="text-center pt-4 ">9,875,243 ریال</td>
              <td className="text-center pt-4 text-danger">پرداخت ناموفق</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-5">
        <Link href={"#"}>
          <a className="btn btn-warning">
            پرداخت مجدد <i className="bi bi-arrow-left me-1"></i>
          </a>
        </Link>
      </div>
    </>
  );
};

export default UnSuccessinfotable;
