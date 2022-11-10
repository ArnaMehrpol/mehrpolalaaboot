import Image from "next/image";
import Link from "next/link";
import React from "react";

const cartSuccess = () => {
  return (
    <>
      <div className="bg-white overflow-hidden border border-slate-100 p-3 rounded-md lg:mr-3 mr-0">
        <div className="flex flex-col items-center justify-center space-y-1 mt-4">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          <h5 className="text-blue-500 font-semibold text-base">
            سفارش شما با موفقیت ثبت گردید .
          </h5>
          <p className="text-sm text-slate-400">
            سفارش شما با موفقیت در سیستم ثبت شد . برای مشاهده جزییات بر روی دکمه
            پیگیری سفارش کلیک کنید.
          </p>
        </div>
        <div className="flex flex-col space-y-5 mt-4">
          <div className="bg-slate-200 border border-slate-400 rounded-md">
            <p className="text-slate-400 text-xs p-2">
              {" "}
              این سفارش به محمد مهدوی به آدرس مرزداران ، بزرگراه شهید آیت الله
              اشرفی اصفهانی ، بن بست بهار ، پلاک ۱ واحد ۳ ، و شماره تماس
              ۰۹۱۲۵۸۹۳۴۷۶ تحویل می گردد .
            </p>
          </div>
          <div className="order-info">
            <div className="order-info-title flex">
              <span className="text-slate-400 text-xs font-semibold lg:border-b-4 border-b-2 border-blue-500 lg:py-3 py-1">
                اطلاعات ارسالی سفارش
              </span>
            </div>
            <div class="overflow-x-auto relative mt-3">
              <table class="w-full text-sm text-center text-gray-500">
                <thead class="lg:text-xs text-[9px] text-gray-600 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3">
                      تحویل گیرنده
                    </th>
                    <th scope="col">آدرس</th>
                    <th scope="col" className="py-3 px-6">
                      کدپستی
                    </th>
                    <th scope="col" className="py-3 px-6">
                      شماره تماس
                    </th>
                    <th scope="col" className="py-3 px-6">
                      شیوه ارسال
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-500 lg:text-xs text-[9px] border-b ">
                  <tr class="">
                    <th scope="row" class="py-4 px-6  whitespace-nowrap">
                      محمد مهدوی
                    </th>
                    <th scope="row" class="py-4 px-6  whitespace-nowrap">
                      مرزداران ، بزرگراه شهید آیت الله اشرفی اصفهانی ، بن بست
                      بهار ،پلاک ۱ واحد ۳
                    </th>
                    <th scope="row" class="py-4 px-6  whitespace-nowrap">
                      ۱۲۵۸۹۳۴۷۶
                    </th>
                    <th scope="row" class="py-4 px-6  whitespace-nowrap">
                      ۰۹۱۲۵۸۹۳۴۷۶
                    </th>
                    <th scope="row" class="py-4 px-6  whitespace-nowrap">
                      پیک فروشگاه
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="payment-details">
            <div className="payment-details-title flex">
              <span className="text-slate-400 text-xs font-semibold lg:border-b-4 border-b-2 border-blue-500 lg:py-3 py-1">
                جزییات پرداخت
              </span>
            </div>
            <div class="overflow-x-auto relative mt-3">
              <table class="w-full text-sm text-center text-gray-500">
                <thead class="lg:text-xs text-[9px] text-gray-600 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      درگاه
                    </th>
                    <th scope="col" className="py-3 px-6">
                      کدسفارش
                    </th>
                    <th scope="col" className="py-3 px-6">
                      شماره پیگیری
                    </th>
                    <th scope="col" className="py-3 px-6">
                      تاریخ
                    </th>
                    <th scope="col" className="py-3 px-6">
                      مبلغ
                    </th>
                    <th scope="col" className="py-3 px-6">
                      وضعیت
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-500 lg:text-xs text-[9px] border-b ">
                  <tr class="">
                    <th scope="row" class="py-4 px-6  whitespace-nowrap">
                      بانک سامان
                    </th>
                    <th scope="row" class="py-4 px-6  whitespace-nowrap">
                      ORD-۲۷۱۷۲۵۷۶۰
                    </th>
                    <th scope="row" class="py-4 px-6  whitespace-nowrap">
                      E۲۳۴A۶۴A۹B۰E۷۳D۶
                    </th>
                    <th scope="row" class="py-4 px-6  whitespace-nowrap">
                      {" "}
                      ۱۱:۲۲ ۱۴۰۱/۰۲/۲۶{" "}
                    </th>
                    <th scope="row" class="py-4 px-6  whitespace-nowrap">
                      ۹.۵۷۳.۰۰۰<small>تومان</small>
                    </th>
                    <th scope="row" class="py-4 px-6  whitespace-nowrap">
                      <span className="lg:text-[11px] text-[7px] bg-green-500 text-white md:mx-4 px-1 lg:py-2 py-1 rounded-full">
                        پرداخت موفق
                      </span>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="all-btn flex justify-end items-center mt-6">
            <Link href="/profile/order">
              <a className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-400 px-2 py-2 rounded-md">
                <span className="text-white text-xs">پیگیری سفارش</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-white mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default cartSuccess;
