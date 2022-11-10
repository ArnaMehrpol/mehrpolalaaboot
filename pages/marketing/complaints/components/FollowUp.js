import React from "react";
import Link from "next/link";
import Image from "next/image";

const FollowUp = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-white rounded-md border border-slate-100 p-4 mt-4">
      <div className="grid grid-cols-6 mb-6 gap-2 items-center">
        <div className="md:col-span-1 col-span-6">
          <p className="text-slate-600 tet-xs flex items-center">
            جستجو بر اساس :
          </p>
        </div>
        <div className="md:col-span-1 col-span-6">
          <div className="all-input-group input-group md:col-span-1 col-span-2">
            <input
              type="text"
              className="form-control"
              placeholder="شماره رهگیری"
            />
          </div>
        </div>
        <div className="md:col-span-1 col-span-6">
          <div className="all-input-group input-group md:col-span-1 col-span-2">
            <input
              type="text"
              className="form-control"
              placeholder="تاریخ ثبت"
            />
          </div>
        </div>
        <div className="md:col-span-1 col-span-6">
          <div className="all-input-group input-group md:col-span-1 col-span-2">
            <input type="text" className="form-control" placeholder="متشاکی" />
          </div>
        </div>
        <div className="md:col-span-1 col-span-6">
          <div className="all-input-group input-group md:col-span-1 col-span-2">
            <select
              class="form-select form-select-text-style py-[0.674rem] "
              aria-label="Default select example"
            >
              <option selected> انتخاب کنید</option>
              <option className="text-sm text-slate-400" value="1"></option>
              <option className="text-sm text-slate-400" value="2"></option>
              <option className="text-sm text-slate-400" value="3"></option>
            </select>
          </div>
        </div>
        <div className="md:col-span-1 col-span-6">
          <div className="w-full h-full end-save flex justify-end items-end">
            <Link href="/">
              <a className="px-3 py-1 bg-blue-500 rounded-md hover:bg-blue-400">
                <span className="text-xs text-white">جستجو</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto relative mb-5 rounded-md">
        <table class="w-full h-full table table-bordered rounded-md">
          <thead>
            <tr className="bg-blue-200 md:text-center text-slate-600 font-semibold md:text-xs text-[10px]">
              <th scope="col">ردیف</th>
              <th scope="col">شماره رهگیری </th>
              <th scope="col">تاریخ ثبت</th>
              <th scope="col">موضوع</th>
              <th scope="col">شماره سفارش</th>
              <th scope="col">متشاکی</th>
              <th scope="col">مهلت پاسخ</th>
              <th scope="col">تاریخ مشاهده</th>
              <th scope="col">وضعیت</th>
              <th scope="col">جزئیات</th>
            </tr>
          </thead>
          <tbody className="text-center text-slate-600 md:text-xs text-[12px]">
            <tr className="">
              <th scope="row" className="">
                ۱
              </th>
              <td>۲۱۳۴۵۶۷۹</td>
              <td>۱۴۰۱/۰۶/۲۲ </td>
              <td>عدم تحویل به موقع</td>
              <td>۲۱۳۴۵۶۷</td>
              <td>الگانس</td>
              <td>۱۴۰۱/۰۶/۲۲ </td>
              <td>۱۴۰۱/۰۶/۲۲ </td>
              <td>پاسخ داده شده</td>
              <td>
                <Link href="/aa/complaints/components/details">
                  <a className="text-[12px] text-white bg-orange-400 hover:bg-orange-500 flex justify-center items-center py-0.5 px-1.5 rounded-sm">
                    مشاهده
                  </a>
                </Link>
              </td>
            </tr>
            <tr className="text-center">
              <th scope="row" className="text-slate-600">
                ۲
              </th>
              <td>۲۱۳۴۵۶۷۹</td>
              <td>۱۴۰۱/۰۶/۲۲ </td>
              <td>عدم تحویل به موقع</td>
              <td>۲۱۳۴۵۶۷</td>
              <td>مپ</td>
              <td>۱۴۰۱/۰۶/۲۲ </td>
              <td>۱۴۰۱/۰۶/۲۲ </td>
              <td>در جریان یررسی</td>
              <td>
                <Link href="/aa/complaints/components/details">
                  <a className="text-[12px] text-white bg-orange-400 hover:bg-orange-500 flex justify-center items-center py-0.5 px-1.5 rounded-sm">
                    مشاهده
                  </a>
                </Link>
              </td>
            </tr>
            <tr className="text-center">
              <th scope="row" className="text-slate-600">
                ۳
              </th>
              <td>۲۱۳۴۵۶۷۹</td>
              <td>۱۴۰۱/۰۶/۲۲ </td>
              <td>عدم تحویل به موقع</td>
              <td>۲۱۳۴۵۶۷</td>
              <td>تولیدی ابزار دقیق</td>
              <td>۱۴۰۱/۰۶/۲۲ </td>
              <td>۱۴۰۱/۰۶/۲۲ </td>
              <td>ارجاع به دپارتمان حقوقی و قراردادی</td>
              <td>
                <Link href="/aa/complaints/components/details">
                  <a className="text-[12px] text-white bg-orange-400 hover:bg-orange-500 flex justify-center items-center py-0.5 px-1.5 rounded-sm">
                    مشاهده
                  </a>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FollowUp;
