import Image from "next/image";
import Link from "next/link";
import React from "react";

const cartFailed = () => {
  return (
    <>
      <div className="bg-white rounded-md p-4">
        <div className="flex flex-col items-center justify-center space-y-1 ">
          <div className="w-24 h-24 rounded-full bg-rose-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14 text-rose-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </div>
          <h5 className="text-rose-500 font-semibold text-base">
            سفارش شما ثبت گردید اما پرداخت ناموفق بود .
          </h5>
          <p className="text-sm text-slate-400">
            برای جلوگیری از لغو سیستمی سفارش ، تا{" "}
            <span className="text-rose-500">۱ ساعت </span> آینده پرداخت را انجام
            دهید.
          </p>
        </div>
        <div className="flex flex-col space-y-5 mt-4">
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
              <span className="text-slate-400 text-xs font-semibold lg:border-b-4 border-b-2 border-blue-500 py-1 lg:py-3 py-1">
                جزییات پرداخت
              </span>
              <span className=""></span>
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
                      <span className="lg:text-[12px] text-[7px] bg-rose-500 text-white lg:px-3 px-1 lg:py-2 py-1 rounded-full">
                        پرداخت ناموفق
                      </span>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="warning-message bg-orange-100 flex items-center p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-orange-500 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <p className="text-orange-500 text-xs">
              چنانچه طی این فرآیند مبلغی از حساب شما کسر شده است ، طی ۷۲ آینده
              به حساب شما باز خواهد گشت .{" "}
            </p>
          </div>
          <div className="all-btn flex justify-end items-center">
            <Link href="/profile/cart">
              <a className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-400 px-2 py-2 rounded-md">
                <span className="text-white text-xs">پرداخت</span>
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
export default cartFailed;
