import React from "react";
import Link from "next/link";
import Image from "next/image";

const history = () => {
  return (
    <div>
      <section
        className="max-w-screen-lg mx-auto px-3 relative z-[9999] lg:mt-[85px] mt-[42px] overflow-hidden"
        dir="rtl"
      >
        <div className="px-3 overflow-hidden bg-white rounded-lg shadow-md ">
          <div className="flex flex-col my-4 add-personnel-title">
            <h5 className="font-semibold md:text-base taxt-sm">
              تاریچه معاملات
            </h5>
            <small className="text-slate-600 text-xs mt-0.5">
              در این بخش تاریخچه همکاری مشاهده می شود.
            </small>
          </div>
          <div className="bg-blue-100 rounded-xl p-4">
            <div className="bg-white rounded-lg border border-slate-100 p-4">
              <div className="overflow-x-auto relative mb-5 rounded-md">
                <table class="w-full h-full table table-bordered rounded-md mb-8">
                  <thead>
                    <tr className=" bg-blue-200 text-center text-slate-600 font-semibold text-xs ">
                      <th scope="col">ردیف</th>
                      <th scope="col">شماره سفارش </th>
                      <th scope="col">تاریخ </th>
                      <th scope="col">مبلغ (تومان)</th>
                      <th scope="col"> خریدار</th>
                      <th scope="col">فروشنده</th>
                      <th scope="col">جزییات </th>
                    </tr>
                  </thead>
                  <tbody className="text-center text-slate-600 text-xs">
                    <tr className="">
                      <th scope="row" className="">
                        ۱
                      </th>
                      <td>۲۱۳۴۵۶۷۹</td>
                      <td>۱۴۰۱/۰۶/۲۲ </td>
                      <td>۹۴۵.۶۷۸.۰۰۰</td>
                      <td>شیک نو</td>
                      <td>مپ</td>
                      <td>
                        <span className="text-[12px] text-white bg-orange-400 hover:bg-orange-500 flex justify-center items-center py-0.5 rounded-sm">
                          مشاهده
                        </span>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <th scope="row" className="text-slate-600">
                        ۲
                      </th>
                      <td>۲۱۳۴۵۶۷۹</td>
                      <td>۱۴۰۱/۰۶/۲۲ </td>
                      <td>۹۴۵.۶۷۸.۰۰۰</td>
                      <td>شیک نو</td>
                      <td>مپ</td>
                      <td>
                        <span className="text-[12px] text-white bg-orange-400 hover:bg-orange-500 flex justify-center items-center py-0.5 rounded-sm">
                          مشاهده
                        </span>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <th scope="row" className="text-slate-600">
                        ۳
                      </th>
                      <td>۲۱۳۴۵۶۷۹</td>
                      <td>۱۴۰۱/۰۶/۲۲ </td>
                      <td>۹۴۵.۶۷۸.۰۰۰</td>
                      <td>شیک نو</td>
                      <td>مپ</td>
                      <td>
                        <span className="text-[12px] text-white bg-orange-400 hover:bg-orange-500 flex justify-center items-center py-0.5 rounded-sm">
                          مشاهده
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h6 className="text-xs text-slate-600 mb-4">
                دپارتمان حقوقی و قراردادی
              </h6>
              <div className="overflow-x-auto relative mb-5 rounded-md">
                <table class="w-full h-full table table-bordered rounded-md mb-8">
                  <thead>
                    <tr className=" bg-blue-200 text-center text-slate-600 font-semibold text-xs ">
                      <th scope="col">ردیف</th>
                      <th scope="col">شماره سفارش </th>
                      <th scope="col">تاریخ </th>
                      <th scope="col">مبلغ (تومان)</th>
                      <th scope="col">وضعیت</th>
                      <th scope="col">جزییات </th>
                    </tr>
                  </thead>
                  <tbody className="text-center text-slate-600 text-xs">
                    <tr className="">
                      <th scope="row" className="">
                        ۱
                      </th>
                      <td>۲۱۳۴۵۶۷۹</td>
                      <td>۱۴۰۱/۰۶/۲۲ </td>
                      <td>۹۴۵.۶۷۸.۰۰۰</td>
                      <td>اتمام</td>
                      <td>
                        <span className="text-[12px] text-white bg-orange-400 hover:bg-orange-500 flex justify-center items-center py-0.5 rounded-sm">
                          مشاهده
                        </span>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <th scope="row" className="text-slate-600">
                        ۲
                      </th>
                      <td>۲۱۳۴۵۶۷۹</td>
                      <td>۱۴۰۱/۰۶/۲۲ </td>
                      <td>۹۴۵.۶۷۸.۰۰۰</td>
                      <td>در جریان</td>
                      <td>
                        <span className="text-[12px] text-white bg-orange-400 hover:bg-orange-500 flex justify-center items-center py-0.5 rounded-sm">
                          مشاهده
                        </span>
                      </td>
                    </tr>
                    <tr className="text-center">
                      <th scope="row" className="text-slate-600">
                        ۳
                      </th>
                      <td>۲۱۳۴۵۶۷۹</td>
                      <td>۱۴۰۱/۰۶/۲۲ </td>
                      <td>۹۴۵.۶۷۸.۰۰۰</td>
                      <td>اتمام</td>
                      <td>
                        <span className="text-[12px] text-white bg-orange-400 hover:bg-orange-500 flex justify-center items-center py-0.5 rounded-sm">
                          مشاهده
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default history;
