import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "../components/card/Card";
import Price from "../components/cart/Price";

const checkPay = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-2">
        <div className="lg:col-span-8 col-span-12 flex flex-col bg-white rounded-md overflow-hidden p-3">
          <div className="bg-slate-100 border border-slate-200 rounded-sm overflow-hidden p-2">
            <p className="text-slate-400 text-xs">
              این سفارش به محمد مهدوی به آدرس مرزداران ، بزرگراه شهید آیت الله
              اشرفی اصفهانی ، بن بست بهار ، پلاک ۱ واحد ۳ ، و شماره تماس
              ۰۹۱۲۵۸۹۳۴۷۶ تحویل می گردد .
            </p>
          </div> 
          <div className="pay-Method mt-4 flex flex-col">
            <span className="text-slate-400 text-xs font-semibold py-1 border-b-2 border-blue-500 w-[6.5rem]">
              انتخاب روش پرداخت
            </span>
            <div className="grid grid-cols-2 lg:gap-3 gap-1.5 mt-3">
              <Link href="/">
                <a className="col-span-1 flex border border-blue-200 bg-blue-100 p-2 rounded-md">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                    <Image
                      src="/../public/assets/img/banks/1.png"
                      width="45"
                      height="45"
                    ></Image>
                  </div>
                  <div className="flex flex-col justify-center mr-3">
                    <h5 className="font-semibold md:text-sm text-[10px]">
                      درگاه بانک سامان
                    </h5>
                    <span className="text-blue-500 md:text-xs text-[10px]">
                      پرداخت اینترنتی
                    </span>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a className="col-span-1 flex border border-blue-200 bg-blue-100 p-2 rounded-md">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                    <Image
                      src="/../public/assets/img/banks/5.png"
                      width="45"
                      height="45"
                    ></Image>
                  </div>
                  <div className="flex flex-col justify-center mr-3">
                    <h5 className="font-semibold md:text-sm text-[10px]">
                      درگاه بانک آینده
                    </h5>
                    <span className="text-slate-400 text-xs">
                      پرداخت اینترنتی
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="order-short mt-3">
            <span className="text-slate-400 text-xs font-semibold py-1 border-b-2 border-blue-500 ">
              خلاصه سفارش
            </span>
            <div className="order-short-cols grid grid-cols-12 gap-3 mt-4">
              <div className="order-short-col lg:col-span-6 col-span-12">
                <div className="order-short-flex border border-slate-200 rounded-md overflow-hidden flex p-2">
                  <div className="order-short-image flex items-center">
                    <Link href="/">
                      <a className="flex items-center justify-center p-2 border border-slate-50 rounded-sm">
                        <Image
                          src="/../public/assets/img/products/15.png"
                          width="35px"
                          height="35px"
                        ></Image>
                      </a>
                    </Link>
                  </div>
                  <div className="flex flex-col pr-3 ">
                    <p className="text-xs font-semibold text-black">
                      دستگاه نشاکار یک ردیفه آدنیس
                    </p>
                    <div className="flex my-2">
                      <span className="px-2 py-1 bg-slate-100 text-xs rounded-md overflow-hidden text-slate-400 ml-3">
                        رنگ:سبز
                      </span>
                      <span className="px-2 py-1 bg-slate-100 text-xs rounded-md overflow-hidden text-slate-400">
                        ارزان ترین
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-short-col lg:col-span-6 col-span-12">
                <div className="order-short-flex border border-slate-200 rounded-md overflow-hidden flex p-2">
                  <div className="order-short-image flex items-center">
                    <Link href="/">
                      <a className="flex items-center justify-center p-2 border border-slate-50 rounded-sm">
                        <Image
                          src="/../public/assets/img/products/14.png"
                          width="35px"
                          height="35px"
                        ></Image>
                      </a>
                    </Link>
                  </div>
                  <div className="flex flex-col pr-3 ">
                    <p className="text-xs font-semibold text-black">
                      دستگاه نشاکار یک ردیفه آدنیس
                    </p>
                    <div className="flex my-2">
                      <span className="px-2 py-1 bg-slate-100 text-xs rounded-md overflow-hidden text-slate-400 ml-3">
                        رنگ:سبز
                      </span>
                      <span className="px-2 py-1 bg-slate-100 text-xs rounded-md overflow-hidden text-slate-400">
                        ارزان ترین
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-short-col lg:col-span-6 col-span-12">
                <div className="order-short-flex border border-slate-200 rounded-md overflow-hidden flex p-2">
                  <div className="order-short-image flex items-center">
                    <Link href="/">
                      <a className="flex items-center justify-center p-2 border border-slate-50 rounded-sm">
                        <Image
                          src="/../public/assets/img/products/12.png"
                          width="35px"
                          height="35px"
                        ></Image>
                      </a>
                    </Link>
                  </div>
                  <div className="flex flex-col pr-3 ">
                    <p className="text-xs font-semibold text-black">
                      دستگاه نشاکار یک ردیفه آدنیس
                    </p>
                    <div className="flex my-2">
                      <span className="px-2 py-1 bg-slate-100 text-xs rounded-md overflow-hidden text-slate-400 ml-3">
                        رنگ:سبز
                      </span>
                      <span className="px-2 py-1 bg-slate-100 text-xs rounded-md overflow-hidden text-slate-400">
                        ارزان ترین
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-short-col lg:col-span-6 col-span-12">
                <div className="order-short-flex border border-slate-200 rounded-md overflow-hidden flex p-2">
                  <div className="order-short-image flex items-center">
                    <Link href="/">
                      <a className="flex items-center justify-center p-2 border border-slate-50 rounded-sm">
                        <Image
                          src="/../public/assets/img/products/18.png"
                          width="35px"
                          height="35px"
                        ></Image>
                      </a>
                    </Link>
                  </div>
                  <div className="flex flex-col pr-3 ">
                    <p className="text-xs font-semibold text-black">
                      دستگاه نشاکار یک ردیفه آدنیس
                    </p>
                    <div className="flex my-2">
                      <span className="px-2 py-1 bg-slate-100 text-xs rounded-md overflow-hidden text-slate-400 ml-3">
                        رنگ:سبز
                      </span>
                      <span className="px-2 py-1 bg-slate-100 text-xs rounded-md overflow-hidden text-slate-400">
                        ارزان ترین
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="warning-message bg-orange-100 flex items-center p-2 rounded-md mt-3">
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
              برای دریافت فاکتور ، بعد از دریافت سفارش به حساب کاربری و صفحه
              جزییات سفارش مراجعه کنید .
            </p>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-12 space-y-3 lg:px-0 px-3">
          <div className="price-box w-full flex flex-col border border-slate-100 rounded-sm bg-white space-y-5 py-2.5 px-2">
            <div className="flex justify-between items-center">
              <p className="text-slate-400 text-xs">قیمت کالاها (۴)</p>
              <Price className="font-semibold" />
            </div>
            <div className="w-full flex justify-between items-center">
              <p className="text-xs text-rose-500">
                سود شما از خرید
                <span className="text-rose-500 text-xs font-semibold mr-0.5">
                  (۱۲%)
                </span>
              </p>
              <Price className="font-semibold" />
            </div>
            <p className="text-slate-400 text-justify text-[12px]">
              هزینه ارسال بر اساس آدرس ،زمان تحویل ، وزن و حجم مرسوله شما محاسبه
              می شود .
            </p>
            {/* <div className="w-full flex justify-between items-center">
              <div className="flex">
                <p className="text-slate-400 text-xs ml-1">هزینه ارسال</p>
                <span className="text-[10px] text-blue-500 bg-blue-100 font-semibold rounded-full px-2 flex items-center justify-center">
                  ۴ مرسوله
                </span>
              </div>
              <Price className="font-semibold" />
            </div> */}
            <div className="w-full flex justify-between items-center">
              <div className="flex">
                <p className="text-slate-400 text-xs ml-1">مبلغ قابل پرداخت</p>
              </div>
              <Price className="font-semibold" />
            </div>

            <Link href="cart-success">
              <a className="text-white bg-blue-500 hover:bg-blue-400 rounded-lg text-xs px-2 py-2 text-center inline-flex items-center justify-center mr-2 mb-2">
                پرداخت و تکمیل خرید
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-xs mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
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
export default checkPay;
