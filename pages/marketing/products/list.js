import React from "react";
import Link from "next/link";
import Image from "next/image";
import MarketingLayout from '../../../components/marketing/layout/MarketingLayout'
import MarketingMainHeader from '../../../components/marketing/marketingHeader/MarketingMainHeader'

const add = () => {
  return (
    <div>
      <div className="business-panel-container">
        <div className="grid grid-cols-12 business-panel-cols bg-slate-100">
          <MarketingLayout/>
          <div className="relative col-span-12 overflow-hidden shadow-lg business-panel-mainbar md:col-span-10 shadow-slate-100">
            <MarketingMainHeader/>
            <div className="mainbar-content mt-10 md:col-span-9 col-span-12 md:pb-20 md:mr-3 md:px-0 px-4">
              <section className="max-w-screen-lg mx-auto px-3 relative z-[] lg:mt-[85px] mt-[42px] overflow-hidden h-[100vh]">
                <div className=" bg-white overflow-hidden rounded-lg shadow-md px-3">
                  <div className="list-products-title flex flex-col my-4">
                    <h5 className="text-base font-semibold">لیست محصولات</h5>
                    <small className="text-slate-600 text-xs mt-0.5">
                      لیست محصولات در این قسمت نمایش داده می شود .
                    </small>
                  </div>
                  <form class="search-flex w-full h-full flex md:flex-row flex-col md:justify-between md:items-center md:spae-y-0 space-y-4">
                    <div class="md:w-[80%] w-full search-bar relative">
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
                        placeholder="محصول مورد نظر خود را جستجو نمائید "
                        required
                      />
                    </div>
                    <div className="filter-btn pr-4 flex justify-end mt-1">
                      <Link href="/">
                        <a
                          className="md:px-10 px-[28px] md:py-2 bg-blue-500 hover:bg-blue-500 rounded-md"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="md:text-xs text-[11px] text-white">
                            فیلتر
                          </span>
                        </a>
                      </Link>
                      <div className="dropdown-menu p-2">
                        <div className="w-full h-full flex lg:flex-row flex-col items-center p-1">
                          <div className="md:w-[470px] mx-2">
                            <label className="flex text-xs text-right text-slate-600 lg:pr-2.5 mb-2">
                              قیمت
                            </label>
                            <div className=" border border-slate-500 flex items-center py-[5px] px-2 rounded-md bg-white">
                              <div className="flex items-center">
                                <span className="text-xs text-slate-600">از</span>
                                <input
                                  type="text"
                                  className="w-full rounded-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-600 overflow-hidden mx-1"
                                />
                              </div>
                              <div className=" flex items-center">
                                <span className="text-xs text-slate-600">تا</span>
                                <input
                                  type="text"
                                  className="w-full mx-2 rounded-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-sky-600 overflow-hidden"
                                />
                              </div>
                              <small className="txt-slate-500 text-xs">تومان</small>
                            </div>
                          </div>
                          <div className="w-full grid grid-cols-4 gap-2">
                            <div className="md:col-span-1 col-span-4">
                              <label className="flex text-xs text-right text-slate-700 px-2 mb-2">
                                شرایط فروش
                              </label>
                              <select
                                class="form-select form-select-text-style py-[0.575rem] pr-2"
                                aria-label="Default select example"
                              >
                                <option selected> انتخاب کنید</option>
                                <option
                                  className="text-slate-400 text-sm"
                                  value="1"
                                ></option>
                                <option
                                  className="text-slate-400 text-sm"
                                  value="2"
                                ></option>
                                <option
                                  className="text-slate-400 text-sm"
                                  value="3"
                                ></option>
                              </select>
                            </div>
                            <div className="md:col-span-1 col-span-4">
                              <label className="flex text-xs text-right text-slate-700 px-2 mb-2">
                                روش فروش
                              </label>
                              <select
                                class="form-select form-select-text-style py-[0.575rem] pr-2"
                                aria-label="Default select example"
                              >
                                <option selected> انتخاب کنید</option>
                                <option
                                  className="text-slate-400 text-sm"
                                  value="1"
                                ></option>
                                <option
                                  className="text-slate-400 text-sm"
                                  value="2"
                                ></option>
                                <option
                                  className="text-slate-400 text-sm"
                                  value="3"
                                ></option>
                              </select>
                            </div>
                            <div className="md:col-span-1 col-span-4">
                              <label className="flex text-xs text-right text-slate-700 px-2 mb-2">
                                وضعیت{" "}
                              </label>
                              <select
                                class="form-select form-select-text-style py-[0.575rem] pr-2"
                                aria-label="Default select example"
                              >
                                <option selected> انتخاب کنید</option>
                                <option
                                  className="text-slate-400 text-sm"
                                  value="1"
                                ></option>
                                <option
                                  className="text-slate-400 text-sm"
                                  value="2"
                                ></option>
                                <option
                                  className="text-slate-400 text-sm"
                                  value="3"
                                ></option>
                              </select>
                            </div>
                            <div className="md:col-span-1 col-span-4">
                              <label className="flex text-xs text-right text-slate-700 px-2 mb-2">
                                تخفیف دارها
                              </label>
                              <select
                                class="form-select form-select-text-style py-[0.575rem] pr-2"
                                aria-label="Default select example"
                              >
                                <option selected> انتخاب کنید</option>
                                <option
                                  className="text-slate-400 text-sm"
                                  value="1"
                                ></option>
                                <option
                                  className="text-slate-400 text-sm"
                                  value="2"
                                ></option>
                                <option
                                  className="text-slate-400 text-sm"
                                  value="3"
                                ></option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="search-btn flex justify-end my-1">
                          <Link href="/">
                            <a className="px-4 py-1 bg-blue-500 hover:bg-blue-400 rounded-md">
                              <span className="text-white text-xs">جستجو</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="w-full flex justify-between items-center mt-4">
                    <div className="list-products-title flex flex-col my-4">
                      <h5 className="md:text-base text-sm font-semibold">محصولات</h5>
                    </div>
                    <div className="filter-btn pr-4">
                      <Link href="/">
                        <a
                          className="md:px-2 px-1 md:py-1.5 bg-orange-500 hover:bg-orange-500 rounded-md"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="md:text-xs text-[9px] text-white">
                            اعمال تخفیف گروهی
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div class="overflow-x-auto relative mb-5">
                    <table class="w-full md:text-xs text-center text-gray-500 overflow-hidden rounded-md table-bordered">
                      <thead class="md:text-xs text-[9px] text-gray-600 bg-blue-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="py-3 mx-2">
                            ردیف
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            تصویر
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            نام محصول
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            واحد
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            برند
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            قیمت اصلی(تومان)
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            مبلغ تخفیف (تومان)
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            قیمت نهایی محصول (تومان)
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            تعداد موجودی
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            حداقل فروش
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            روش فروش
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            شرایط فروش
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            روش ارسال
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            وضعیت محصول
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            ویرایش
                          </th>
                          <th scope="col" className="py-3 mx-2">
                            آرشیو
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-500 lg:text-xs text-[9px] border-b ">
                        <tr class="tr-one">
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            ۱
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            {/* <Image src="/public/assets/img/products/1.jpg" className="w-36 h-36 bg-white border border-slate-100 rounded-sm" width="50" height="50"></Image> */}
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            لیفتراک دو دیفرانسیل
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            عدد
                          </th>
                          <th scope="row" class="py-4 px-6 whitespace-nowrap">
                            هایکو
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            ۳.۵۴۶.۲۵۶
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            ۳.۲۵۶
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            ۳.۵۴۶.۲۵۶
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            ۳
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            ۳
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            عمده
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            اقساطی
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            رایگان
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            پیش نویس
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            <Link href="/">
                              <a>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 text-slate-500"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                              </a>
                            </Link>
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            <Link href="/">
                              <a>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 text-slate-500"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
                              </a>
                            </Link>
                          </th>
                        </tr>
                        <tr class="tr-two">
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            ۲
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            {/* <Image src="/public/assets/img/products/1.jpg" className="w-36 h-36 bg-white border border-slate-100 rounded-sm" width="50" height="50"></Image> */}
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            لیفتراک دو دیفرانسیل
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            عدد
                          </th>
                          <th scope="row" class="py-4 px-6 whitespace-nowrap">
                            هایکو
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            ۳.۵۴۶.۲۵۶
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            ۳.۲۵۶
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            ۳.۵۴۶.۲۵۶
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            ۳
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            ۳
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            عمده
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            اقساطی
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            رایگان
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            پیش نویس
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            <Link href="/">
                              <a>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 text-slate-500"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                              </a>
                            </Link>
                          </th>
                          <th scope="row" class="py-4 px-6  whitespace-nowrap">
                            <Link href="/">
                              <a>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 text-slate-500"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default add;
