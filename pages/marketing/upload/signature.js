import Link from "next/link";
import Image from "next/image";
import React from "react";
import MarketingUploadSide from "../../../components/marketing/layout/MarketingUploadSide";
import MarketingInfoHeader from "../../../components/marketing/marketingHeader/MarketingInfoHeader";

const signature = () => {
  return (
    <div>
      <div className="business-panel-container">
        <div className="business-panel-cols flex grid-cols-12 bg-slate-100 ">
          <div>
            <MarketingUploadSide/>
          </div>
          <div className="business-panel-mainbar w-100 lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative overflow-hidden">
            <MarketingInfoHeader/>
            <section className="signature-container max-w-screen-md mx-auto lg:px-0 px-3 relative z-[9999] my-5">
              <div className=" bg-white overflow-hidden rounded-lg shadow-md px-5">
                <div className="signature-title flex flex-col my-4">
                  <h5 className="text-lg font-semibold text-slate-600">
                    امضا و مهر
                  </h5>
                  <small className="text-slate-600 text-xs mt-0.5">
                    نمونه امضا مدیران و مهر خود را در این قسمت وارد کنید
                  </small>
                </div>
                <div className="flex flex-col">
                  <div className="signature-one">
                    <div className="signature-sub-title mb-2">
                      <p className="text-sm font-semibold text-slate-600">
                        نمونه امضا نفر اول
                      </p>
                    </div>
                    <div className="signature-cols grid grid-cols-12 lg:gap-0 gap-3">
                      <div className="lg:col-span-4 md:col-span-4 col-span-12 lg:pl-6">
                        <div className="signature-select lg:col-span-3 col-span-12">
                          <lable className="text-sm text-slate-600 px-2 mb-2">
                            نام و نام خانوادگی
                          </lable>
                          <select
                            class="form-select form-select-text-style py-[0.575rem]"
                            aria-label="Default select example"
                          >
                            <option selected className="">
                              انتخاب کنید
                            </option>
                            <option
                              className="text-slate-600 text-sm"
                              value="1"
                            >
                              آرش محمدی
                            </option>
                            <option
                              className="text-slate-600 text-sm"
                              value="2"
                            >
                              محمد مهدوی
                            </option>
                          </select>
                        </div>
                        <div className="signature-select lg:col-span-3 col-span-12 mt-[21px]">
                          <label className="text-sm text-slate-600 px-2 mb-2">
                            محل استفاده از امضا{" "}
                          </label>
                          <select
                            class="form-select form-select-text-style py-[0.575rem]"
                            aria-label="Default select example"
                          >
                            <option selected className="">
                              انتخاب کنید
                            </option>
                            <option
                              className="text-slate-600 text-sm"
                              value="1"
                            >
                              فاکتور
                            </option>
                            <option
                              className="text-slate-600 text-sm"
                              value="1"
                            >
                              قرارداد
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="lg:col-span-4 md:col-span-4 col-span-12">
                        <lable className="text-sm text-slate-600 mb-2">
                          نمونه امضا
                        </lable>
                        <div className="w-full h-32 border border-slate-200 rounded-md relative">
                          <div className="image-col-bg bg-slate-200 px-1 py-9 absolute left-0 opacity-60 z-[999] rounded-md rounded-r-none">
                            <div className="image-col-icons w-full h-full flex flex-col items-center justify-center space-y-4">
                              <Link href="/">
                                <a>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-slate-400 opacity-100"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                    />
                                  </svg>
                                </a>
                              </Link>
                              <Link href="/">
                                <a>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-rose-500 opacity-100"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                  </svg>
                                </a>
                              </Link>
                            </div>
                          </div>
                          <Link href="/">
                            <a className="w-full h-full flex items-center justify-center">
                              <span className="text-slate-400 text-xs fon-semibold ml-3">
                                بارگذاری نمونه امضا
                              </span>
                              <span className="text-slate-500 text-xs fon-semibold bg-slate-100 p-2.5 rounded-tr-lg absolute top-0 right-0">
                                تایید شده
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 text-slate-400"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                />
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="lg:col-span-4 md:col-span-4 col-span-12 lg:lg:pr-6">
                        <div className="flex flex-col space-y-4 mt-4">
                          <button
                            type="button"
                            className="text-white bg-slate-400 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex items-center justify-center alls-input-group"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 text-white"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-xs font-semibold mr-1.5">
                              دریافت کد تایید
                            </span>
                          </button>
                          <div>
                            <input
                              type="text"
                              id="small-input"
                              placeholder="کد تایید را وارد کنید"
                              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                          <button
                            type="button"
                            className="text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex items-center justify-center dark:bg-blue-600"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                              />
                            </svg>

                            <span className="text-xs font-semibold mr-1.5">
                              ثبت نمونه امضا
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="signature-two mt-5">
                    <div className="signature-sub-title mb-2">
                      <p className="text-sm font-semibold text-slate-600">
                        نمونه امضا نفر دوم
                      </p>
                    </div>
                    <div className="signature-cols grid grid-cols-12 lg:gap-0 gap-3">
                      <div className="lg:col-span-4 md:col-span-4 col-span-12 lg:pl-6">
                        <div className="signature-select lg:col-span-3 col-span-12">
                          <lable className="text-sm text-slate-600 px-2 mb-2">
                            نام و نام خانوادگی
                          </lable>
                          <select
                            class="form-select form-select-text-style py-[0.575rem]"
                            aria-label="Default select example"
                          >
                            <option selected className="">
                              انتخاب کنید
                            </option>
                            <option
                              className="text-slate-600 text-sm"
                              value="1"
                            >
                              آرش محمدی
                            </option>
                            <option
                              className="text-slate-600 text-sm"
                              value="2"
                            >
                              محمد مهدوی
                            </option>
                          </select>
                        </div>
                        <div className="signature-select lg:col-span-3 col-span-12 mt-[21px]">
                          <label className="text-sm text-slate-600 px-2 mb-2">
                            محل استفاده از امضا{" "}
                          </label>
                          <select
                            class="form-select form-select-text-style py-[0.575rem]"
                            aria-label="Default select example"
                          >
                            <option selected className="">
                              انتخاب کنید
                            </option>
                            <option
                              className="text-slate-600 text-sm"
                              value="1"
                            >
                              فاکتور
                            </option>
                            <option
                              className="text-slate-600 text-sm"
                              value="1"
                            >
                              قرارداد
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="lg:col-span-4 md:col-span-4 col-span-12">
                        <lable className="text-sm text-slate-600 mb-2">
                          نمونه امضا
                        </lable>
                        <div className="w-full h-32 border border-slate-200 rounded-md relative">
                          <div className="image-col-bg bg-slate-200 px-1 py-9 absolute left-0 opacity-60 z-[999] rounded-md rounded-r-none">
                            <div className="image-col-icons w-full h-full flex flex-col items-center justify-center space-y-4">
                              <Link href="/">
                                <a>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-slate-400 opacity-100"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                    />
                                  </svg>
                                </a>
                              </Link>
                              <Link href="/">
                                <a>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-rose-500 opacity-100"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                  </svg>
                                </a>
                              </Link>
                            </div>
                          </div>
                          <Link href="/">
                            <a className="w-full h-full flex items-center justify-center">
                              <span className="text-slate-400 text-xs fon-semibold ml-3">
                                بارگذاری نمونه امضا
                              </span>
                              <span className="text-slate-500 text-xs fon-semibold bg-slate-100 p-2.5 rounded-tr-lg absolute top-0 right-0">
                                تایید شده
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 text-slate-400"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                />
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="lg:col-span-4 md:col-span-4 col-span-12 lg:pr-6">
                        <div className="flex flex-col space-y-4 mt-4">
                          <button
                            type="button"
                            className="text-white bg-slate-400 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex items-center justify-center alls-input-group"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 text-white"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-xs font-semibold mr-1.5">
                              دریافت کد تایید
                            </span>
                          </button>
                          <div>
                            <input
                              type="text"
                              id="small-input"
                              placeholder="کد تایید را وارد کنید"
                              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                          <button
                            type="button"
                            className="text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex items-center justify-center dark:bg-blue-600"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                              />
                            </svg>

                            <span className="text-xs font-semibold mr-1.5">
                              ثبت نمونه امضا
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="w-full border border-b border-slate-200 my-4"></span>
                  <div className="sample-stamp">
                    <div className="sample-stamp-sub-title mb-2">
                      <p className="text-sm font-semibold text-slate-600">
                        نمونه مهر کسب و کار
                      </p>
                    </div>
                    <div className="sample-stamp-cols grid grid-cols-12 lg:gap-0 gap-3">
                      <div className="lg:col-span-4 md:col-span-4 col-span-12 lg:pl-6">
                        <div className="signature-select w-full h-full flex flex-col justify-center">
                          <label className="text-sm text-slate-600 px-2 mb-2">
                            شخص دریافت کننده کد تایید
                          </label>
                          <select
                            class="form-select form-select-text-style py-[0.575rem]"
                            aria-label="Default select example"
                          >
                            <option selected className="">
                              انتخاب کنید
                            </option>
                            <option
                              className="text-slate-600 text-sm"
                              value="1"
                            >
                              فاکتور
                            </option>
                            <option
                              className="text-slate-600 text-sm"
                              value="1"
                            >
                              قرارداد
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="lg:col-span-4 md:col-span-4 col-span-12">
                        <lable className="text-sm text-slate-600 mb-2">
                          نمونه مهر
                        </lable>
                        <div className="w-full h-32 border border-slate-200 rounded-md relative">
                          <div className="image-col-bg bg-slate-200 px-1 py-9 absolute left-0 opacity-60 z-[999] rounded-md rounded-r-none">
                            <div className="image-col-icons w-full h-full flex flex-col items-center justify-center space-y-4">
                              <Link href="/">
                                <a>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-slate-400 opacity-100"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                    />
                                  </svg>
                                </a>
                              </Link>
                              <Link href="/">
                                <a>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-rose-500 opacity-100"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                  </svg>
                                </a>
                              </Link>
                            </div>
                          </div>
                          <Link href="/">
                            <a className="w-full h-full flex items-center justify-center">
                              <span className="text-slate-400 text-xs fon-semibold ml-3">
                                بارگذاری نمونه مهر
                              </span>
                              <span className="text-slate-500 text-xs fon-semibold bg-slate-100 p-2.5 rounded-tr-lg absolute top-0 right-0">
                                تایید شده
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 text-slate-400"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                />
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="lg:col-span-4 md:col-span-4 col-span-12 lg:pr-6">
                        <div className="flex flex-col space-y-4 mt-4">
                          <button
                            type="button"
                            className="text-white bg-slate-400 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex items-center justify-center alls-input-group"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5 text-white"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-xs font-semibold mr-1.5">
                              دریافت کد تایید
                            </span>
                          </button>
                          <div>
                            <input
                              type="text"
                              id="small-input"
                              placeholder="کد تایید را وارد کنید"
                              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                          <button
                            type="button"
                            className="text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex items-center justify-center dark:bg-blue-600"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                              />
                            </svg>

                            <span className="text-xs font-semibold mr-1.5">
                              ثبت نمونه مهر
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="sample-stamp-text">
                      <ul class="space-y-2 my-5">
                        <span className="text-slate-600 text-sm font-semibold">
                          نکات مهم :
                        </span>
                        <li className="text-slate-600 text-xs">
                          <p className="lg:leading-none leading-6">
                            ۱ - در صورت حضور نفر دوم جهت امضا مدارک می بایست نفر
                            دوم را نیز به همراه نام و نام خانوادگی ، امضا و محل
                            استفاده از آن مشخص نمایید.
                          </p>
                        </li>
                        <li className="text-slate-600 text-xs">
                          <p className="lg:leading-none leading-6">
                            ۲ - امضا و مهر کسب و کار می بایست در یک کاغذ سفید با
                            خودکار آبی یا مشکی آماده و سپس در قسمت تعیین شده
                            بارگذاری گردد.
                          </p>
                        </li>
                        <li className="text-slate-600 text-xs">
                          <p className="lg:leading-none leading-6">
                            ۳ - پس از بارگذاری امضا و مهر ، یک کد به همره لینک
                            نمایش آن برای صاحبان امضا ارسال گردد.{" "}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="next-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                  <Link href="/">
                    <a className="px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6">
                      <span className="text-white text-xs font-semibold">
                        ثبت و مرحله بعد
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signature;
