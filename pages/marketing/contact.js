import React from "react";
import Link from "next/link";
import Image from "next/image";

const contact = () => {
  return (
    <div>
      <section className="max-w-screen-lg mx-auto px-3 relative z-[9999] lg:mt-[85px] mt-[42px] overflow-hidden">
        <div className=" bg-white overflow-hidden rounded-lg shadow-md px-3">
          <div className="contact-title flex flex-col my-4">
            <h5 className="md:text-base taxt-sm font-semibold">ارتباط با ما</h5>
            <small className="text-slate-600 text-xs mt-0.5">
              در این بخش پیامهای دریافتی نمایش داده می شود .
            </small>
          </div>
          <div class="overflow-x-auto relative mb-5">
            <table class="w-full text-[11px] text-center text-gray-500 overflow-hidden rounded-md">
              <thead class="md:text-xs text-[9px] text-gray-600  bg-blue-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 mx-2">
                    ردیف
                  </th>
                  <th scope="col" className="py-3 mx-2">
                    مشاهده
                  </th>
                  <th scope="col" className="py-3 mx-2">
                    نام و نام خانوادگی
                  </th>
                  <th scope="col" className="py-3 mx-2">
                    ایمیل
                  </th>
                  <th scope="col" className="py-3 mx-2">
                    تلفن
                  </th>
                  <th scope="col" className="py-3 mx-2">
                    تاریخ{" "}
                  </th>
                  <th scope="col" className="py-3 mx-2">
                    متن پیام
                  </th>
                  <th scope="col" className="py-3 mx-2">
                    تنظیمات
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-500 border-b ">
                <tr class="tr-one">
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    ۱
                  </th>
                  <th scope="row" class="whitespace-nowrap">
                    <span className="px-[4px] py-[4px] p-1 rounded-sm bg-rose-500 text-white text-[11px] flex justify-center items-center">
                      خیر
                    </span>
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    مهرداد باقری
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    m.bagheri@gmail.com
                  </th>
                  <th scope="row" class="py-4 px-6 whitespace-nowrap">
                    ۰۹۱۲۴۴۴۲۳۹۸
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    ۱۴۰۱/۰۶/۲۷
                  </th>
                  <th scope="row" class="py-4 whitespace-wrap">
                    <span className="text-[8px] text-slate-600">
                      باسلام لطفا در خصوص نحوه معاملات در سایت و همچنین در مورد
                      اضافه کردن محصولات با عکسو مشخصات و بارگذاری قیمت ...
                      <Link href="/">
                        <a className="text-blue-400 hover:text-blue-500 text-[8px]">
                          مشاهده بیشتر
                        </a>
                      </Link>
                    </span>
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    <Link href="/" className="inline-flex items-center">
                      <a>
                        <i class="bi bi-cursor text-base text-slate-600 ml-4"></i>
                        <i class="bi bi-trash text-base text-rose-500"></i>
                      </a>
                    </Link>
                  </th>
                </tr>
                <tr class="tr-one">
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                  ۲
                  </th>
                  <th scope="row" class=" whitespace-nowrap">
                  <span className="px-[4px] py-[4px] p-1 rounded-sm bg-green-500 text-white text-[11px] flex justify-center items-center">
                      بله
                    </span>
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                   شیما گلی 
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    m.goli@gmail.com
                  </th>
                  <th scope="row" class="py-4 px-6 whitespace-nowrap">
                    ۰۹۱۲۲۳۹۸۴۴۴
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    ۱۴۰۱/۰۶/۲۷
                  </th>
                  <th scope="row" class="py-4 whitespace-wrap">
                    <span className="text-[8px] text-slate-600">
                      باسلام لطفا در خصوص نحوه معاملات در سایت و همچنین در مورد
                      اضافه کردن محصولات با عکسو مشخصات و بارگذاری قیمت ...
                      <Link href="/">
                        <a className="text-blue-400 hover:text-blue-500 text-[8px]">
                          مشاهده بیشتر
                        </a>
                      </Link>
                    </span>
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    <Link href="/" className="inline-flex items-center">
                      <a>
                        <i class="bi bi-cursor text-base text-slate-600 ml-4"></i>
                        <i class="bi bi-trash text-base text-rose-500"></i>
                      </a>
                    </Link>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
