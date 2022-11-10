import React from "react";
import Link from "next/link";
import Image from "next/image";

const Receipt = () => {
  return (
    <section
      className="max-w-screen-xl mx-auto overflow-hidden bg-white rounded-md border border-slate-100 p-3"
      dir="rtl"
    >
      <div className="overflow-x-auto relative mb-5 rounded-md">
        <table class="w-full h-full table table-bordered rounded-md">
          <thead>
            <tr className="bg-blue-200 md:text-center text-slate-600 font-semibold md:text-xs text-[10px]">
              <th scope="col">ردیف</th>
              <th scope="col">شماره رهگیری </th>
              <th scope="col">تاریخ ثبت</th>
              <th scope="col">موضوع</th>
              <th scope="col">شماره سفارش</th>
              <th scope="col">شاکی</th>
              <th scope="col">مهلت پاسخ</th>
              <th scope="col">تاریخ مشاهده</th>
              <th scope="col">وضعیت</th>
              <th scope="col">جزئیات</th>
            </tr>
          </thead>
          <tbody className="text-center text-slate-600 md:text-xs text-[12px]">
            <tr className="">
              <th scope="row" className="">
                ۱
              </th>
              <td>۲۱۳۴۵۶۷۹</td>
              <td>۱۴۰۱/۰۶/۲۲ </td>
              <td>عدم تحویل به موقع</td>
              <td>۲۱۳۴۵۶۷</td>
              <td>شیک نو</td>
              <td>۱۴۰۱/۰۶/۲۲ </td>
              <td>۱۴۰۱/۰۶/۲۲ </td>
              <td>پاسخ داده شده</td>
              <td>
                <Link href="/">
                  <a className="text-[12px] text-white bg-orange-400 hover:bg-orange-500 flex justify-center items-center py-0.5 px-1.5 rounded-sm">
                    مشاهده
                  </a>
                </Link>
              </td>
            </tr>
            <tr className="text-center">
              <th scope="row" className="text-slate-600">
                ۲
              </th>
              <td>۲۱۳۴۵۶۷۹</td>
              <td>۱۴۰۱/۰۶/۲۲ </td>
              <td>عدم تحویل به موقع</td>
              <td>۲۱۳۴۵۶۷</td>
              <td>شیک نو</td>
              <td>۱۴۰۱/۰۶/۲۲ </td>
              <td>۱۴۰۱/۰۶/۲۲ </td>
              <td>در جریان بررسی</td>
              <td>
                <Link href="/">
                  <a className="text-[12px] text-white bg-orange-400 hover:bg-orange-500 flex justify-center items-center py-0.5 px-1.5 rounded-sm">
                    مشاهده
                  </a>
                </Link>
              </td>
            </tr>
            <tr className="text-center">
              <th scope="row" className="text-slate-600">
                ۳
              </th>
              <td>۲۱۳۴۵۶۷۹</td>
              <td>۱۴۰۱/۰۶/۲۲ </td>
              <td>عدم تحویل به موقع</td>
              <td>۲۱۳۴۵۶۷</td>
              <td>شیک نو</td>
              <td>۱۴۰۱/۰۶/۲۲ </td>
              <td>۱۴۰۱/۰۶/۲۲ </td>
              <td>ارجاع به دپارتمان حقوقی و قراردادی</td>
              <td>
                <Link href="/">
                  <a className="text-[12px] text-white bg-orange-400 hover:bg-orange-500 flex justify-center items-center py-0.5 px-1.5 rounded-sm">
                    مشاهده
                  </a>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Receipt;
