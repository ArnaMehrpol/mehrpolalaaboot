import React from "react";
import Link from "next/link";
import Image from "next/image";
import PDF from "/public/assets/img/pic/pdf.png"
// import DaynamicTable from "./daynamicTable/DaynamicTable";

const OrderTable = () => {
  return (

    <div class="overflow-x-auto relative">
            <table class="w-full md:text-xs text-center text-gray-500 overflow-hidden table-bordered table-rounded-xl rounded-md ">
              <thead class="md:text-xs text-[9px] text-gray-600  bg-slate-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 mx-2">
                    ردیف
                  </th>
                  <th scope="col" className="py-3 mx-2">
                    تصویر فاکتور
                  </th>
                  <th scope="col" className="py-3 mx-2">
                    شماره سفارش 
                  </th>
                  <th scope="col" className="py-3 mx-2">
                     تاریخ ثبت سفارش
                  </th>
                  <th scope="col" className="py-3 mx-2">
                    وضعیت پرداخت
                  </th>
                  <th scope="col" className="py-3 mx-2">
                    سفارش دهنده
                  </th>
                  <th scope="col" className="py-3 mx-2">
                    روش ارسال
                  </th>
                  <th scope="col" className="py-3 mx-2">
                     مدت تاخیر
                  </th>
                  <th scope="col" className="py-3 mx-2">
                    جزئیات
                  </th>
              
                </tr>
              </thead>
              <tbody className="text-gray-500 lg:text-xs text-[9px] bg-white ">
                <tr class="tr-one">
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    ۱
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    <Link href="/">
                    <a>
                    <Image src={PDF} className="p-1 border border-slate-100 rounded-sm" width="50" height="50"/>
                    </a>
                    </Link>
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                  ۱۲۴۵۶۹۸۶۳
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                  ۱۴۰۱/۰۸/۲۵
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    آنلاین
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    مهرداد باقری
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    رایگان 
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                  ندارد
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    <span className="text-[11px] text-white bg-orange-500 hover:bg-orange-400 flex justify-center items-center py-2 px-1 rounded-sm">نمایش بیشتر</span>
                </th>
                </tr>
                <tr class="tr-two">
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    ۲
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    <Link href="/">
                    <a>
                    <Image src={PDF} className="p-1 border border-slate-100 rounded-sm" width="50" height="50"/>
                    </a>
                    </Link>
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                  ۱۲۴۵۶۹۸۶۳
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                  ۱۴۰۱/۰۸/۲۵
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    آنلاین
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    مهرداد باقری
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    رایگان 
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                  ۲ روز کاری
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    <span className="text-[11px] text-white bg-orange-500 hover:bg-orange-400 flex justify-center items-center py-2 px-1 rounded-sm">نمایش بیشتر</span>
                </th>
                  
                </tr>
              </tbody>
            </table>
          </div>
  );
};

export default OrderTable;
