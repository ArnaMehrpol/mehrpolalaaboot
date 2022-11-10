import React from "react";
import Link from "next/link";
import Image from "next/image";
import imageOne from "/public/assets/img/products/17.png";
import imageTwo from "/public/assets/img/products/19.png";
import imageThree from "/public/assets/img/products/20.png";
import imageFour from "/public/assets/img/products/16.png";

const certificateSale = () => {
  return (
    <div>
      <section
        className="max-w-screen-lg mx-auto px-3 relative z-[9999] lg:mt-[85px] mt-[42px] overflow-hidden"
        dir="rtl"
      >
        <div className="px-3 overflow-hidden bg-white rounded-lg shadow-md ">
          <div className="flex flex-col my-4 add-personnel-title">
            <h5 className="font-semibold md:text-base taxt-sm">
              شناسنامه سفارش فروش
            </h5>
          </div>
          <div className="bg-blue-100 rounded-xl p-4">
            <div className="bg-white rounded-lg border border-slate-300 p-4 grid grid-cols-3 gap-3">
              <div className="w-full md:col-span-1 col-span-3 flex flex-col space-y-5">
                <div className="flex items-center">
                  <p className="w-full md:text-sm text-xs text-slate-600">
                    شماره سفارش
                  </p>
                  <div className="all-input-group input-group md:col-span-1 col-span-2">
                    <input
                      type="text"
                      className="form-control placeholder:text-center"
                      placeholder="۱۲۵۴۶۹۹"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="w-full md:text-sm text-xs text-slate-600">
                    شماره قرارداد
                  </p>
                  <div className="all-input-group input-group md:col-span-1 col-span-2">
                    <input
                      type="text"
                      className="form-control placeholder:text-center"
                      placeholder="۲۶۶/۱۲۵"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="w-full md:text-sm text-xs text-slate-600">
                    تاریخ ثبت سفارش
                  </p>
                  <div className="all-input-group input-group md:col-span-1 col-span-2">
                    <input
                      type="text"
                      className="form-control placeholder:text-center"
                      placeholder="۱۴۰۱/۰۶/۲۱"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:col-span-1 col-span-3 flex flex-col space-y-5">
                <div className="flex items-center">
                  <p className="w-full md:text-sm text-xs text-slate-600">
                    سفارش دهنده
                  </p>
                  <div className="all-input-group input-group md:col-span-1 col-span-2">
                    <input
                      type="text"
                      className="form-control placeholder:text-center"
                      placeholder="مهرداد باقری"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="w-full md:text-sm text-xs text-slate-600">
                    نحوه پرداخت
                  </p>
                  <div className="all-input-group input-group md:col-span-1 col-span-2">
                    <input
                      type="text"
                      className="form-control placeholder:text-center"
                      placeholder="آنلاین"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 col-span-3">
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="w-full col-span-1 border border-slate-300 rounded-md flex items-center justify-center">
                    <Image
                      src={imageOne}
                      width="75"
                      height="75"
                      title="product-1"
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full col-span-1 border border-slate-300 rounded-md flex items-center justify-center">
                    <Image
                      src={imageTwo}
                      width="75"
                      height="75"
                      title="product-2"
                    />
                  </div>
                  <div className="w-full col-span-1 border border-slate-300 rounded-md flex items-center justify-center">
                    <Image
                      src={imageThree}
                      width="75"
                      height="75"
                      title="product-3"
                    />
                  </div>
                  <div className="w-full col-span-1 border border-slate-300 rounded-md flex items-center justify-center">
                    <Image
                      src={imageFour}
                      width="75"
                      height="75"
                      title="product-4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-slate-300 p-4 grid grid-cols-5 gap-3 items-center mt-4">
              <div className="md:col-span-1 col-span-5 mt-6">
                <p className="text-slate-600 md:text-xs text-[11px]">
                  چوب خرد کن مدل تی ام
                </p>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <label className="text-slate-600 md:text-xs text-center text-[11px] mb-2.5">
                  مبلغ اولیه
                </label>
                <div className="all-input-group input-group">
                  <input
                    type="text"
                    className="form-control placeholder:text-center"
                    placeholder="۱۲.۵۴۶.۹۹۱ تومان"
                  />
                </div>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <label className="text-slate-600 md:text-xs text-center text-[11px] mb-2.5">
                  مبلغ تخفیف
                </label>
                <div className="all-input-group input-group">
                  <input
                    type="text"
                    className="form-control placeholder:text-center"
                    placeholder="۱۲.۵۴۶.۹۹۱ تومان"
                  />
                </div>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <label className="text-slate-600 md:text-xs text-center text-[11px] mb-2.5">
                  مالیات بر ارزش افزوده
                </label>
                <div className="all-input-group input-group">
                  <input
                    type="text"
                    className="form-control placeholder:text-center"
                    placeholder="۱۲.۵۴۶.۹۹۱ تومان"
                  />
                </div>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <label className="text-slate-600 md:text-xs text-center text-[11px] mb-2.5">
                  مبلغ نهایی
                </label>
                <div className="all-input-group input-group">
                  <input
                    type="text"
                    className="form-control placeholder:text-center"
                    placeholder="۱۲.۵۴۶.۹۹۱ تومان"
                  />
                </div>
              </div>
              <div className="md:col-span-1 col-span-5">
                <p className="text-slate-600 md:text-xs text-[11px]">
                  پلوپز 8 نفره پاناسونسک
                </p>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <div className="all-input-group input-group">
                  <input
                    type="text"
                    className="form-control placeholder:text-center"
                    placeholder="۱۲.۵۴۶.۹۹۱ تومان"
                  />
                </div>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <div className="all-input-group input-group">
                  <input
                    type="text"
                    className="form-control placeholder:text-center"
                    placeholder="۱۲.۵۴۶.۹۹۱ تومان"
                  />
                </div>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <div className="all-input-group input-group">
                  <input
                    type="text"
                    className="form-control placeholder:text-center"
                    placeholder="۱۲.۵۴۶.۹۹۱ تومان"
                  />
                </div>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <div className="all-input-group input-group">
                  <input
                    type="text"
                    className="form-control placeholder:text-center"
                    placeholder="۱۲.۵۴۶.۹۹۱ تومان"
                  />
                </div>
              </div>
              <div className="md:col-span-1 col-span-5">
                <p className="text-slate-600 md:text-xs text-[11px]">
                  پلوپز 8 نفره پاناسونسک
                </p>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <div className="all-input-group input-group">
                  <input
                    type="text"
                    className="form-control placeholder:text-center"
                    placeholder="۱۲.۵۴۶.۹۹۱ تومان"
                  />
                </div>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <div className="all-input-group input-group">
                  <input
                    type="text"
                    className="form-control placeholder:text-center"
                    placeholder="۱۲.۵۴۶.۹۹۱ تومان"
                  />
                </div>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <div className="all-input-group input-group">
                  <input
                    type="text"
                    className="form-control placeholder:text-center"
                    placeholder="۱۲.۵۴۶.۹۹۱ تومان"
                  />
                </div>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <div className="all-input-group input-group">
                  <input
                    type="text"
                    className="form-control placeholder:text-center"
                    placeholder="۱۲.۵۴۶.۹۹۱ تومان"
                  />
                </div>
              </div>
              <div className="md:col-span-1 col-span-5">
                <p className="text-slate-600 md:text-xs text-[11px]">
                  صندلی چوبی دسته
                </p>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <div className="all-input-group input-group">
                  <input
                    type="text"
                    className="form-control placeholder:text-center"
                    placeholder="۱۲.۵۴۶.۹۹۱ تومان"
                  />
                </div>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <div className="all-input-group input-group">
                  <input
                    type="text"
                    className="form-control placeholder:text-center"
                    placeholder="۱۲.۵۴۶.۹۹۱ تومان"
                  />
                </div>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <div className="all-input-group input-group">
                  <input
                    type="text"
                    className="form-control placeholder:text-center"
                    placeholder="۱۲.۵۴۶.۹۹۱ تومان"
                  />
                </div>
              </div>
              <div className="md:col-span-1 col-span-5 flex flex-col">
                <div className="all-input-group input-group">
                  <input
                    type="text"
                    className="form-control placeholder:text-center"
                    placeholder="۱۲.۵۴۶.۹۹۱ تومان"
                  />
                </div>
              </div>
              <div className="border-t border-slate-300 col-span-5 -mx-[25px]"></div>
              <div className="md:col-span-1 col-span-5 mt-6">
                <p className="text-slate-600 md:text-xs text-[11px] flex justify-center">
                  جمع کل
                </p>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <label className="text-slate-600 md:text-xs text-center text-[11px] mb-2.5">
                  مبلغ اولیه
                </label>
                <div className="all-input-group input-group">
                  <input
                    type="text"
                    className="form-control placeholder:text-center"
                    placeholder="۱۲.۵۴۶.۹۹۱ تومان"
                  />
                </div>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <label className="text-slate-600 md:text-xs text-center text-[11px] mb-2.5">
                  جمع تخفیف
                </label>
                <div className="all-input-group input-group">
                  <input
                    type="text"
                    className="form-control placeholder:text-center"
                    placeholder="۱۲.۵۴۶.۹۹۱ تومان"
                  />
                </div>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <label className="text-slate-600 md:text-xs text-center text-[11px] mb-2.5">
                  جمع مالیات بر ارزش افزوده
                </label>
                <div className="w-full h-10 bg-orange-400 hover:bg-orange-500 text-white text-xs rounded-md flex items-center justify-center">
                  ۱۲.۵۴۶.۹۹۱ تومان
                </div>
              </div>
              <div className=" md:col-span-1 col-span-5 flex flex-col">
                <label className="text-slate-600 md:text-xs text-center text-[11px] mb-2.5">
                  جمع مبلغ نهایی
                </label>
                <div className="w-full h-10 bg-blue-400 hover:bg-blue-500 text-white text-xs rounded-md flex items-center justify-center">
                  ۱۲.۵۴۶.۹۹۱ تومان
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-slate-300 p-4 mt-4">
              <p className="text-slate-600 md:text-sm text-xs font-semibold">
                وضعیت کالای فروش رفته
              </p>
              <div className="overflow-x-auto mt-4">
                <table class="w-full h-full table table-bordered rounded-md">
                  <thead>
                    <tr className=" bg-slate-100 text-center text-slate-600 font-semibold text-xs">
                      <th scope="col">نام کالا</th>
                      <th scope="col">زمان آماده سازی</th>
                      <th scope="col">کد کالا</th>
                      <th scope="col">تعداد</th>
                      <th scope="col">وضعیت</th>
                      <th scope="col">تاریخ</th>
                      <th scope="col">مبلغ (تومان)</th>
                      <th scope="col">مالیات (تومان)</th>
                      <th scope="col">کارمزد مهرپل (تومان)</th>
                      <th scope="col">سهم فروشنده(تومان)</th>
                      <th scope="col">تاخیر</th>
                      <th scope="col">امتیاز</th>
                    </tr>
                  </thead>
                  <tbody className="text-center text-slate-600 text-xs bg-white">
                    <tr className="">
                      <td>چوب خرد کن مدل ای تی ام</td>
                      <td>۱۲ روز</td>
                      <td>۱۲۶۵۶۵۶۳</td>
                      <td>۲ عدد</td>
                      <td>در جریان</td>
                      <td>۱۴۰۱/۰۶/۲۱</td>
                      <td>۱۲.۲۱۵.۴۱۲</td>
                      <td>۵۸۰.۰۰۰</td>
                      <td>۱.۲۴۵.۰۰۰</td>
                      <td>۱۲.۲۴۵.۰۰۰</td>
                      <td>۰ روز</td>
                      <td>۲۱۰</td>
                    </tr>
                    <tr className="">
                      <td>چوب خرد کن مدل ای تی ام</td>
                      <td>۱۲ روز</td>
                      <td>۱۲۶۵۶۵۶۳</td>
                      <td>۲ عدد</td>
                      <td>در جریان</td>
                      <td>۱۴۰۱/۰۶/۲۱</td>
                      <td>۱۲.۲۱۵.۴۱۲</td>
                      <td>۵۸۰.۰۰۰</td>
                      <td>۱.۲۴۵.۰۰۰</td>
                      <td>۱۲.۲۴۵.۰۰۰</td>
                      <td>۰ روز</td>
                      <td>۲۱۰</td>
                    </tr>
                    <tr className="">
                      <td>چوب خرد کن مدل ای تی ام</td>
                      <td>۱۲ روز</td>
                      <td>۱۲۶۵۶۵۶۳</td>
                      <td>۲ عدد</td>
                      <td>در جریان</td>
                      <td>۱۴۰۱/۰۶/۲۱</td>
                      <td>۱۲.۲۱۵.۴۱۲</td>
                      <td>۵۸۰.۰۰۰</td>
                      <td>۱.۲۴۵.۰۰۰</td>
                      <td>۱۲.۲۴۵.۰۰۰</td>
                      <td>۰ روز</td>
                      <td>۲۱۰</td>
                    </tr>
                    <tr className="">
                      <td>چوب خرد کن مدل ای تی ام</td>
                      <td>۱۲ روز</td>
                      <td>۱۲۶۵۶۵۶۳</td>
                      <td>۲ عدد</td>
                      <td>در جریان</td>
                      <td>۱۴۰۱/۰۶/۲۱</td>
                      <td>۱۲.۲۱۵.۴۱۲</td>
                      <td>۵۸۰.۰۰۰</td>
                      <td>۱.۲۴۵.۰۰۰</td>
                      <td>۱۲.۲۴۵.۰۰۰</td>
                      <td>۰ روز</td>
                      <td>۲۱۰</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-slate-300 p-4 mt-4">
              <p className="text-slate-600 md:text-sm text-xs font-semibold">
                روش ارسال
              </p>
              <div className="overflow-x-auto mt-4">
                <table class="w-full h-full table table-bordered rounded-md">
                  <thead>
                    <tr className=" bg-slate-100 text-center text-slate-600 font-semibold text-xs">
                      <th scope="col">ردیف</th>
                      <th scope="col">نام کالا</th>
                      <th scope="col">کد کالا</th>
                      <th scope="col">تعداد</th>
                      <th scope="col">تاریخ ارسال</th>
                      <th scope="col">هزینه ارسال</th>
                      <th scope="col">تاریخ تحویل</th>
                      <th scope="col">روش ارسال</th>
                    </tr>
                  </thead>
                  <tbody className="text-center text-slate-600 text-xs bg-white">
                    <tr className="">
                      <th scope="row" className="">
                        ۱
                      </th>
                      <td>چوب خرد کن مدل ای تی ام</td>
                      <td>۱۲۶۵۶۵۶۳</td>
                      <td>۲ عدد</td>
                      <td>۱۴۰۱/۰۶/۲۱</td>
                      <td>۱۲.۲۱۵.۴۱۲</td>
                      <td>۱۴۰۱/۰۶/۲۱</td>
                      <td>پست</td>
                    </tr>
                    <tr className="">
                      <th scope="row" className="text-slate-600">
                        ۲
                      </th>
                      <td>چوب خرد کن مدل ای تی ام</td>
                      <td>۱۲۶۵۶۵۶۳</td>
                      <td>۲ عدد</td>
                      <td>۱۴۰۱/۰۶/۲۱</td>
                      <td>۱۲.۲۱۵.۴۱۲</td>
                      <td>۱۴۰۱/۰۶/۲۱</td>
                      <td>پست</td>
                    </tr>
                    <tr className="">
                      <th scope="row" className="text-slate-600">
                        ۳
                      </th>
                      <td>چوب خرد کن مدل ای تی ام</td>
                      <td>۱۲۶۵۶۵۶۳</td>
                      <td>۲ عدد</td>
                      <td>۱۴۰۱/۰۶/۲۱</td>
                      <td>۱۲.۲۱۵.۴۱۲</td>
                      <td>۱۴۰۱/۰۶/۲۱</td>
                      <td>پست</td>
                    </tr>

                    <tr className="">
                      <th scope="row" className="text-slate-600">
                        ۴
                      </th>
                      <td>چوب خرد کن مدل ای تی ام</td>
                      <td>۱۲۶۵۶۵۶۳</td>
                      <td>۲ عدد</td>
                      <td>۱۴۰۱/۰۶/۲۱</td>
                      <td>۱۲.۲۱۵.۴۱۲</td>
                      <td>۱۴۰۱/۰۶/۲۱</td>
                      <td>پست</td>
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

export default certificateSale;
