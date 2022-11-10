import React from "react";
import Link from "next/link";
import Image from "next/image";

const list = () => {
  return (
    <div>
      <section
        className="max-w-screen-lg mx-auto px-3 relative z-[9999] lg:mt-[85px] mt-[42px] overflow-hidden"
        dir="rtl"
      >
        <div className="px-3 overflow-hidden bg-white rounded-lg shadow-md ">
          <div className="flex flex-col my-4 add-personnel-title">
            <h5 className="font-semibold md:text-base taxt-sm">لیست پرسنل</h5>
            <small className="text-slate-600 text-xs mt-0.5">
              در این صفحه لیست پرسنل مشاهده می شود .
            </small>
          </div>
          <div className="overflow-x-auto relative mb-5">
          <table class="w-full h-full table table-bordered rounded-md mb-8 overflow-hidden">
                    <thead>
                      <tr className=" bg-blue-200 text-center text-slate-600 font-semibold text-xs">
                        <th scope="col">ردیف</th>
                        <th scope="col">نام</th>
                        <th scope="col">نام خانوادگی</th>
                        <th scope="col">کدملی</th>
                        <th scope="col">پست سازمانی</th>
                        <th scope="col">کدپرسنلی</th>
                        <th scope="col">نام کاربری</th>
                        <th scope="col">سطح دسترسی</th>
                        <th scope="col">وضعیت</th>
                        <th scope="col">تنظیمات</th>
                      </tr>
                    </thead>
                    <tbody className="text-center text-slate-600 text-xs">
                      <tr className="">
                        <th scope="row" className="">
                          ۱
                        </th>
                        <td>مهرداد</td>
                        <td>باقری</td>
                        <td>۰۰۱۵۲۴۵۸۴۲۰</td>
                        <td>مدیر عامل</td>
                        <td>۲۵</td>
                        <td>mehrdad124</td>
                        <td><span className="text-[12px] text-white bg-blue-500 hover:bg-blue-400 flex justify-center items-center py-0.5 rounded-sm">جزئیات</span></td>
                        <td><span className="text-[12px] text-white bg-green-500 hover:bg-green-400 flex justify-center items-center py-0.5 rounded-sm">فعال</span></td>
                        <td><span className="text-[12px] text-white bg-orange-500 hover:bg-orange-400 flex justify-center items-center py-0.5 rounded-sm">ویرایش</span></td>
                      </tr>
                      <tr className="text-center">
                        <th scope="row" className="text-slate-600">
                          ۲
                        </th>
                        <td>شیما</td>
                        <td>گلی</td>
                        <td>۰۰۱۵۲۴۵۸۴۲۰</td>
                        <td>مدیر داخلی</td>
                        <td>۳۶</td>
                        <td>shima.goli@124</td>
                        <td><span className="text-[12px] text-white bg-blue-500 hover:bg-blue-400 flex justify-center items-center py-0.5 rounded-sm">جزئیات</span></td>
                        <td><span className="text-[12px] text-white bg-green-500 hover:bg-green-400 flex justify-center items-center py-0.5 rounded-sm">فعال</span></td>
                        <td><span className="text-[12px] text-white bg-orange-500 hover:bg-orange-400 flex justify-center items-center py-0.5 rounded-sm">ویرایش</span></td>
                      </tr>
                      <tr className="text-center">
                        <th scope="row" className="text-slate-600">
                          ۳
                        </th>
                        <td>مهرداد</td>
                        <td>باقری</td>
                        <td>۰۰۱۵۲۴۵۸۴۲۰</td>
                        <td>مدیر عامل</td>
                        <td>۹۸</td>
                        <td>mehrdad124</td>
                        <td><span className="text-[12px] text-white bg-blue-500 hover:bg-blue-400 flex justify-center items-center py-0.5 rounded-sm">جزئیات</span></td>
                        <td><span className="md:text-[12px] text-[9px] text-white bg-slate-600 hover:bg-slate-500 flex justify-center items-center py-0.5 rounded-sm">غیر فعال</span></td>
                        <td><span className="text-[12px] text-white bg-orange-500 hover:bg-orange-400 flex justify-center items-center py-0.5 rounded-sm">ویرایش</span></td>
                      </tr>
                    </tbody>
                  </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default list;
