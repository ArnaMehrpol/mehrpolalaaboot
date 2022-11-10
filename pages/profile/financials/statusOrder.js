import Image from "next/image";
import React from "react";
import Link from "next/link";
import ShowpathProfile from '../../../components/profile/components/showPathProfile/ShowpathProfile'
import ProfileLayout from '../../../components/profile/layouts/ProfileLayout'

const factor = () => {
  return (
    <>
    <div className=' max-w-screen-2xl bg-light md:px-12 pt-3 mx-auto'
    dir="rtl">
      <div>
        <ShowpathProfile/>
      </div>
      <div className='flex flex-row'>
        <div className=''>
          <ProfileLayout/>
        </div>
        <div className="mainbar-content w-[1100px] md:col-span-9 col-span-12 md:pb-20 md:mr-3 md:px-0 px-2">
          <div className="mainTitle relative lg:my-0 my-4 flex justify-between items-center">
            <h6 className="text-muted fw-bold border-b-2 border-blue-500 w-24 py-1.5">
              جزئیات خرید
            </h6>
            <a href="/profile/financials/financial">
              <i class="bi bi-arrow-left-square text-[28px] text-slate-600"></i>
            </a>
          </div>
          <div className="bg-white w-[93%] mx-auto">
            <div className="grid grid-cols-3 mb-2">
              <div className="md:col-span-2 col-span-3">
                <div class="overflow-x-auto relative">
                  <table class="w-full text-center text-gray-500 table-bordered border-slate-400">
                    <tbody className="text-gray-500">
                      <tr class="">
                        <th
                          scope="row"
                          class="py-2.5 px-16 whitespace-nowrap text-gray-600 text-sm font-normal"
                        >
                          شماره سفارش
                        </th>
                        <th
                          scope="row"
                          class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                        ></th>
                      </tr>
                      <tr class="">
                        <th
                          scope="row"
                          class="py-2.5 px-16  whitespace-nowrap text-gray-600 text-sm font-normal"
                        >
                          تاریخ سفارش
                        </th>
                        <th
                          scope="row"
                          class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                        ></th>
                      </tr>
                      <tr class="">
                        <th
                          scope="row"
                          class="py-2.5 px-16  whitespace-nowrap text-gray-600 text-sm font-normal"
                        >
                          تاریخ واریز
                        </th>
                        <th
                          scope="row"
                          class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                        ></th>
                      </tr>
                      <tr class="">
                        <th
                          scope="row"
                          class="py-2.5 px-16  whitespace-nowrap text-gray-600 text-sm font-normal"
                        >
                          فروشنده کالا
                        </th>
                        <th
                          scope="row"
                          class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                        ></th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="md:col-span-1 col-span-3 flex items-center justify-center border-b border-t border-l border-slate-400">
                <a className="text-sm text-slate-500">تصویر فاکتور</a>
              </div>
            </div>
            <div class="overflow-x-auto relative">
              <table class="w-full md:text-center text-gray-500 table-bordered border-slate-400">
                <thead class="md:text-sm text-xs font-semibold text-gray-600 bg-gray-100">
                  <tr>
                    <th scope="col" className="py-3">
                      شرح
                    </th>
                    <th scope="col" className="py-3">
                      کالای ۱
                    </th>
                    <th scope="col">کالای ۲ </th>
                    <th scope="col" className="py-3">
                      کالای ۳
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-500">
                  <tr class="">
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap font-bold text-gray-600 text-sm"
                    >
                      نام کالا
                    </th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap font-bold text-gray-600 text-sm"
                    >
                      کد کالا
                    </th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap font-bold text-gray-600 text-sm"
                    >
                      تعداد
                    </th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap font-bold text-gray-600 text-sm"
                    >
                      مدت زمان آماده سازی
                    </th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap font-bold text-gray-600 text-sm"
                    >
                      قیمت واحد کالا
                    </th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap font-bold text-gray-600 text-sm"
                    >
                      قیمت کل کالا
                    </th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap font-bold text-gray-600 text-sm"
                    >
                      تخفیف
                    </th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap font-bold text-gray-600 text-sm"
                    >
                      قیمت پس از تخفیف
                    </th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap font-bold text-gray-600 text-sm"
                    >
                      مالیات بر ارزش افزوده
                    </th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap font-bold text-gray-600 text-sm"
                    >
                      مبلغ پرداختی
                    </th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap font-bold text-gray-600 text-sm"
                    >
                      وضعیت پرداخت
                    </th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap font-bold text-gray-600 text-sm"
                    >
                      وضعیت سفارش
                    </th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap font-bold text-gray-600 text-sm"
                    >
                      تاریخ اقدام
                    </th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap font-bold text-gray-600 text-sm"
                    >
                      وضعیت مبلغ پرداختی
                    </th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap font-bold text-gray-600 text-sm"
                    >
                      تاریخ برگشت واریز
                    </th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap font-bold text-gray-600 text-sm"
                    >
                      مبلغ برگشتی
                    </th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap font-bold text-gray-600 text-sm"
                    >
                      بانک مبدا
                    </th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                  </tr>
                  <tr class="">
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap font-bold text-gray-600 text-sm"
                    >
                      بانک مقصد
                    </th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                    <th
                      scope="row"
                      class="py-2.5 px-16  whitespace-nowrap text-xs text-gray-500"
                    ></th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default factor;
