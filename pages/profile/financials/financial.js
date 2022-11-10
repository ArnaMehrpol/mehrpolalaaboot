import Image from "next/image";
import React from "react";
import Link from "next/link";
import ShowpathProfile from '../../../components/profile/components/showPathProfile/ShowpathProfile'
import ProfileLayout from '../../../components/profile/layouts/ProfileLayout'

const financials = () => {
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
          <div className="mainTitle mb-4">
              <h6 className="text-muted fw-bold border-b-2 border-blue-500 pb-1.5 w-[90px]">
                وضعیت خرید 
              </h6>
          </div>
          <form class="search-flex w-full flex items-center justify-center mb-3">
              <div class="search-bar relative w-75">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none bg-blue-500 hover:bg-blue-400 p-2 rounded-md rounded-r-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="bg-white border border-gray-100 hover:bg-blue-500 text-gray-900 text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-blue-400  block w-full pl-10 p-2"
                  placeholder="دنبال چی میگردی؟"
                  required
                />
              </div>
              <div className="filter-btn pr-4">
                <Link href="/">
                  <a
                    className=" px-4 py-1 bg-blue-500 rounded-sm"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="text-sm text-white">فیلتر</span>
                  </a>
                </Link>
                <div className="dropdown-menu">
                  <div className="w-98 h-full flex lg:flex-row flex-col items-center justify-center mb-3 p-1">
                  <div className="md:w-32 w-full mx-2">
                      <label className="text-xs text-slate-600 lg:pr-2.5 mb-2  mx-2">
                        فروشنده
                      </label>
                      <div className=" border border-slate-500 flex items-center p-[0.38rem] rounded-md bg-white">
                      <input
                            type="text"
                            className="w-full rounded-sm focus:outline-none overflow-hidden mx-1"
                          />
                      </div>
                    </div>
                    <div className="md:w-32 w-full md:ml-2">
                      <label className="text-xs text-slate-600 lg:pr-2.5 mb-2  mx-2">
                        شماره سفارش 
                      </label>
                      <div className=" border border-slate-500 flex items-center p-[0.38rem] rounded-md bg-white">
                      <input
                            type="text"
                            className="w-full rounded-sm focus:outline-none overflow-hidden mx-1"
                          />
                      </div>
                    </div>
                    <div className="w-72">
                      <label className="text-xs text-slate-600 lg:pr-2.5 mb-2 mx-2">
                        تاریخ
                      </label>
                      <div className=" border border-slate-500 flex items-center p-[0.38rem] rounded-md bg-white">
                        <div className="flex items-center">
                          <span className="text-xs text-slate-600">از</span>
                          <input
                            type="text"
                            className="w-full rounded-sm focus:outline-none overflow-hidden mx-1"
                          />
                        </div>
                        <div className=" flex items-center">
                          <span className="text-xs text-slate-600">تا</span>
                          <input
                            type="text"
                            className="w-full mx-2 rounded-sm focus:outline-none overflow-hidden"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="md:w-32 w-full mx-2">
                      <label className="text-xs text-slate-600 lg:pr-2.5 mb-2  mx-2">
                          وضعیت
                      </label>
                      <select
                            className="form-select form-select-text-style text-[12px] text-slate-600 py-2.5"
                            aria-label="Default select example"
                          >
                            <option className="">وضعیت</option>
                            <option className="" value="1">
                              درحال آماده سازی
                            </option>
                            <option className="" value="2">
                              ارسال شده
                            </option>
                            <option className="" value="3">
                            تحویل شده
                            </option>
                          </select>
                    </div>

                    <div className="search-btn flex justify-end mt-6">
                      <Link href="/">
                        <a className="px-4 py-1 bg-blue-500 hover:bg-blue-400 rounded-md">
                          <span className="text-white text-xs">جستجو</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          <div class="overflow-x-auto relative mt-3">
            <table class="w-full text-center text-gray-500">
              <thead class="lg:text-xs text-[9px] text-gray-600 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3">
                    ردیف
                  </th>
                  <th scope="col" className="py-3">
                    شماره سفارش  
                  </th>
                  <th scope="col">تاریخ سفارش</th>
                  <th scope="col" className="py-3 px-6">
                    فروشنده
                  </th>
                  <th scope="col" className="py-3 px-6">
                    وضعیت
                  </th>
                  <th scope="col" className="py-3 px-6">
                  عملیات 
                  </th>
                  <th scope="col" className="py-3 px-6">
                  فاکتور 
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-500 md:text-[12px] text-[9px] border-b ">
              <tr class="">
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                  ۱
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                  <Link href="/profile/order"><a className="text-xs text-blue-500 hover:text-blue-400">۸۹۳۴۷۶</a></Link>
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                  ۲۵ / ۰۷ / ۱۴۰۱
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                  فروشگاه شیک نو
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    در جریان
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                    <Link href="/profile/financials/statusOrder"><a className="text-white bg-blue-500 hover:bg-blue-400 px-2 py-1 rounded-sm">مشاهده</a></Link> 
                  </th>
                  <th scope="row" class="py-4 px-6  whitespace-nowrap">
                  <Link href="/profile/financials/statusOrder"><a className="text-white bg-blue-500 hover:bg-blue-400 px-2 py-1 rounded-sm">مشاهده</a></Link>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default financials;
