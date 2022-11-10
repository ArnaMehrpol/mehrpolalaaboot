import React from "react";

const  DaynamicTable = () => {
    return ( 
        <>
        <div class="overflow-x-auto relative">
            <table class="w-full md:text-xs text-center text-gray-500 overflow-hidden table-bordered table-rounded-xl rounded-md ">
              <thead class="md:text-xs text-[9px] text-gray-600  bg-slate-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 mx-2">
                    ردیف
                  </th>
                  <th scope="col" className="py-3 mx-2">
                     نام کالا
                  </th>
                  <th scope="col" className="py-3 mx-2">
                   کدکالا 
                  </th>
                  <th scope="col" className="py-3 mx-2">
                     وضعیت پرداخت
                  </th>
                  <th scope="col" className="py-3 mx-2">
                     مبلغ به تومان 
                  </th>
                  <th scope="col" className="py-3 mx-2">
                    روش ارسال
                  </th>
                  <th scope="col" className="py-3 mx-2">
                    مدت زمان مجاز ارسال 
                  </th>
                  <th scope="col" className="py-3 mx-2">
                    لغو سفارش
                  </th>
                  <th scope="col" className="py-3 mx-2">
                    جزئیات
                  </th>
                  <th scope="col" className="py-3 mx-2">
                    کد تراکنش
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-500 lg:text-xs text-[9px] bg-white ">
                <tr class="tr-one">
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    ۱
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                  ۱۲۴۵۶۹۸۶۳
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
                  رایگان
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                  رایگان
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    آنلاین
                  </th>
                  
                </tr>
                <tr class="tr-one">
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                  ۲
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                  ۱۲۴۵۶۹۸۶۳
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
                  رایگان
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                  رایگان
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    آنلاین
                  </th>
                
                </tr>
              </tbody>
            </table>
          </div>
        </>
     );
}
 
export default DaynamicTable;