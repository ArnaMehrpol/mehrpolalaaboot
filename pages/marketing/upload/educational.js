import Link from "next/link";
import Image from "next/image";
import React from "react";
import oneImage from "/public/assets/img/products/11.png";
import soundImage from "/public/assets/img/pic/sound.png";
import pdfImage from "/public/assets/img/pic/pdf.png";
import MarketingUploadSide from "../../../components/marketing/layout/MarketingUploadSide";
import MarketingInfoHeader from "../../../components/marketing/marketingHeader/MarketingInfoHeader";

const educational = () => {
  return (
    <div>
      <div className="business-panel-container">
        <div className="business-panel-cols flex grid-cols- bg-slate-100 ">
          <div>
            <MarketingUploadSide/>
          </div>
          <div className="business-panel-mainbar w-100 lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative overflow-hidden">
            <MarketingInfoHeader/>
            <section className="max-w-screen-lg mx-auto flex justify-center items-center relative z-10 mt-[85px] px-3">
              <div className="w-full border border-slate-200 rounded-md p-2 bg-white flex flex-col">
                <div className="educational-title flex flex-col my-2">
                  <h5 className="text-slate-600 text-base font-semibold">
                    فایل آموزشی
                  </h5>
                  <small className="text-slate-400 text-xs mt-0.5">
                    فایل های آموزشی خود را در این قسمت وارد کنید.
                  </small>
                </div>
                <div className="grid grid-cols-6 gap-3">
                  <div className="lg:col-span-2 col-span-6 flex flex-col">
                    <div className="educatinal-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        نام فایل
                      </label>
                      <div class="all-input-group input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="نام فایل را وارد کنید"
                        />
                      </div>
                    </div>
                    <div className="btn-add">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        بارگذاری فایل
                      </label>
                      <Link href="/">
                        <a className="link-add-slide w-full  px-4 py-1.5 border border-[#ced4da] rounded-md flex items-center justify-between">
                          <span className="text-xs text-slate-400 mr-2">
                            بارگذاری فایل
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-slate-400"
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
                  <div className="lg:col-span-3 col-span-6">
                    <label className="text-sm text-slate-700 px-2 mb-2">
                      توضیحات
                    </label>
                    <textarea
                      class="form-control pt-[17px]"
                      id="exampleFormControlTextarea1"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="lg:col-span-1 col-span-6">
                    <div className="save-btn w-full h-full flex md:justify-center justify-end items-end md:mt-0 mt-2">
                      <Link href="/panel/user-info/management">
                        <a className="px-4 py-1 bg-blue-500 hover:bg-blue-400 rounded-md">
                          <span className="text-white text-xs">ثبت</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="video-grid grid grid-cols-5 border border-slate-200 rounded-md p-2 mt-4">
                  <div className="w-full h-full lg:col-span-1 md:col-span-2 col-span-5 flex flex-col items-center justify-evenly md:pb-0 pb-4">
                    <i class="bi bi-webcam text-9xl text-slate-500 md:-mt-9"></i>
                    <h5 className="text-slate-600 text-lg font-semibold text-center md:-mt-9 mt-0 overflow-hidden -mt-5">
                      ویدئو ها
                    </h5>
                    <p className="text-slate-600 text-xs text-center px-6">
                      فایل MP4 حجم باقیمانده ۱۲۰۰ کیلوبایت
                    </p>
                  </div>
                  <div className="w-full lg:col-span-1 md:col-span-2 col-span-5 flex-col space-y-2 p-2">
                    <div className="bg-slate-100 rounded-sm relative bg-slate-100 ">
                      <div class="w-full image-col-bg bg-slate-500 absolute bottom-0 opacity-60 z-10 rounded-md rounded-t-none">
                        <div class="image-col-icons w-full h-full flex justify-center space-x-6 space-x-reverse">
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <Image
                        src={oneImage}
                        className="rounded-sm w-full flex items-center justify-center overflow-hidden"
                        width="100"
                        height="100"
                        layout="responsive"
                      />
                    </div>
                    <h4 className="font-semibold md:text-sm text-xs text-slate-500">
                      آموزش دستگاه چوب بری x
                    </h4>
                    <p className="text-xs text-slate-500">
                      نحوه تعمیر و راه اندازی و تنظیمات اولیه دستگاه
                    </p>
                    <div className="w-full flex justify-between items-center ">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>

                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:col-span-1 md:col-span-2 col-span-5 flex-col space-y-2 p-2">
                    <div className="bg-slate-100 rounded-sm relative bg-slate-100 ">
                      <div class="w-full image-col-bg bg-slate-500 absolute bottom-0 opacity-60 z-10 rounded-md rounded-t-none">
                        <div class="image-col-icons w-full h-full flex justify-center space-x-6 space-x-reverse">
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <Image
                        src={oneImage}
                        className="rounded-sm w-full flex items-center justify-center overflow-hidden"
                        width="100"
                        height="100"
                        layout="responsive"
                      />
                    </div>
                    <h4 className="font-semibold md:text-sm text-xs text-slate-500">
                      آموزش دستگاه چوب بری x
                    </h4>
                    <p className="text-xs text-slate-500">
                      نحوه تعمیر و راه اندازی و تنظیمات اولیه دستگاه
                    </p>
                    <div className="w-full flex justify-between items-center ">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>

                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:col-span-1 md:col-span-2 col-span-5 flex-col space-y-2 p-2">
                    <div className="bg-slate-100 rounded-sm relative bg-slate-100 ">
                      <div class="w-full image-col-bg bg-slate-500 absolute bottom-0 opacity-60 z-10 rounded-md rounded-t-none">
                        <div class="image-col-icons w-full h-full flex justify-center space-x-6 space-x-reverse">
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <Image
                        src={oneImage}
                        className="rounded-sm w-full flex items-center justify-center overflow-hidden"
                        width="100"
                        height="100"
                        layout="responsive"
                      />
                    </div>
                    <h4 className="font-semibold md:text-sm text-xs text-slate-500">
                      آموزش دستگاه چوب بری x
                    </h4>
                    <p className="text-xs text-slate-500">
                      نحوه تعمیر و راه اندازی و تنظیمات اولیه دستگاه
                    </p>
                    <div className="w-full flex justify-between items-center ">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>

                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:col-span-1 md:col-span-2 col-span-5 flex-col space-y-2 p-2">
                    <div className="bg-slate-100 rounded-sm relative bg-slate-100 ">
                      <div class="w-full image-col-bg bg-slate-500 absolute bottom-0 opacity-60 z-10 rounded-md rounded-t-none">
                        <div class="image-col-icons w-full h-full flex justify-center space-x-6 space-x-reverse">
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <Image
                        src={oneImage}
                        className="rounded-sm w-full flex items-center justify-center overflow-hidden"
                        width="100"
                        height="100"
                        layout="responsive"
                      />
                    </div>
                    <h4 className="font-semibold md:text-sm text-xs text-slate-500">
                      آموزش دستگاه چوب بری x
                    </h4>
                    <p className="text-xs text-slate-500">
                      نحوه تعمیر و راه اندازی و تنظیمات اولیه دستگاه
                    </p>
                    <div className="w-full flex justify-between items-center ">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>

                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sound-grid grid grid-cols-5 border border-slate-200 rounded-md p-2 mt-4">
                  <div className="w-full h-full lg:col-span-1 md:col-span-2 col-span-5 flex flex-col items-center justify-evenly ">
                    <i class="bi bi-mic text-7xl text-slate-500 md:-mt-9 mt-0"></i>
                    <h5 className="text-slate-600 text-lg font-semibold text-center md:-mt-12 mt-0 overflow-hidden -mt-5">
                      پادکست ها
                    </h5>
                    <p className="text-slate-600 text-xs text-center px-6">
                      فایل MP3 حجم باقیمانده ۸۰۰۰ کیلوبایت
                    </p>
                  </div>
                  <div className="w-full lg:col-span-1 md:col-span-2 col-span-5 flex-col space-y-2 p-2">
                    <div className="w-full flex justify-center  rounded-sm relative bg-slate-100 ">
                      <div class="w-full image-col-bg bg-slate-500 absolute bottom-0 opacity-60 z-10 rounded-md rounded-t-none">
                        <div class="image-col-icons w-full h-full flex justify-center space-x-6 space-x-reverse">
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <Image
                        src={soundImage}
                        className="rounded-sm w-full flex items-center justify-center overflow-hidden"
                        width="100"
                        height="100"
                      />
                    </div>
                    <h4 className="font-semibold md:text-sm text-xs text-slate-500">
                      آموزش دستگاه چوب بری x
                    </h4>
                    <p className="text-xs text-slate-500">
                      نحوه تعمیر و راه اندازی و تنظیمات اولیه دستگاه
                    </p>
                    <div className="w-full flex justify-between items-center ">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>

                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:col-span-1 md:col-span-2 col-span-5 flex-col space-y-2 p-2">
                    <div className="w-full flex justify-center  rounded-sm relative bg-slate-100 ">
                      <div class="w-full image-col-bg bg-slate-500 absolute bottom-0 opacity-60 z-10 rounded-md rounded-t-none">
                        <div class="image-col-icons w-full h-full flex justify-center space-x-6 space-x-reverse">
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <Image
                        src={soundImage}
                        className="rounded-sm w-full flex items-center justify-center overflow-hidden"
                        width="100"
                        height="100"
                      />
                    </div>
                    <h4 className="font-semibold md:text-sm text-xs text-slate-500">
                      آموزش دستگاه چوب بری x
                    </h4>
                    <p className="text-xs text-slate-500">
                      نحوه تعمیر و راه اندازی و تنظیمات اولیه دستگاه
                    </p>
                    <div className="w-full flex justify-between items-center ">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>

                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:col-span-1 md:col-span-2 col-span-5 flex-col space-y-2 p-2">
                    <div className="w-full flex justify-center  rounded-sm relative bg-slate-100 ">
                      <div class="w-full image-col-bg bg-slate-500 absolute bottom-0 opacity-60 z-10 rounded-md rounded-t-none">
                        <div class="image-col-icons w-full h-full flex justify-center space-x-6 space-x-reverse">
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <Image
                        src={soundImage}
                        className="rounded-sm w-full flex items-center justify-center overflow-hidden"
                        width="100"
                        height="100"
                      />
                    </div>
                    <h4 className="font-semibold md:text-sm text-xs text-slate-500">
                      آموزش دستگاه چوب بری x
                    </h4>
                    <p className="text-xs text-slate-500">
                      نحوه تعمیر و راه اندازی و تنظیمات اولیه دستگاه
                    </p>
                    <div className="w-full flex justify-between items-center ">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>

                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:col-span-1 md:col-span-2 col-span-5 flex-col space-y-2 p-2">
                    <div className="w-full flex justify-center  rounded-sm relative bg-slate-100 ">
                      <div class="w-full image-col-bg bg-slate-500 absolute bottom-0 opacity-60 z-10 rounded-md rounded-t-none">
                        <div class="image-col-icons w-full h-full flex justify-center space-x-6 space-x-reverse">
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <Image
                        src={soundImage}
                        className="rounded-sm w-full flex items-center justify-center overflow-hidden"
                        width="100"
                        height="100"
                      />
                    </div>
                    <h4 className="font-semibold md:text-sm text-xs text-slate-500">
                      آموزش دستگاه چوب بری x
                    </h4>
                    <p className="text-xs text-slate-500">
                      نحوه تعمیر و راه اندازی و تنظیمات اولیه دستگاه
                    </p>
                    <div className="w-full flex justify-between items-center ">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>

                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="file-grid grid grid-cols-5 border border-slate-200 rounded-md p-2 mt-4">
                  <div className="w-full h-full lg:col-span-1 md:col-span-2 col-span-5 flex flex-col items-center justify-evenly ">
                    <i class="bi bi-filetype-pdf text-7xl text-slate-500 md:-mt-9 mt-0"></i>
                    <h5 className="text-slate-600 text-lg font-semibold text-center md:-mt-12 mt-0 overflow-hidden -mt-5">
                      فایل ها
                    </h5>
                    <p className="text-slate-600 text-xs text-center px-6">
                      فایل MP3 حجم باقیمانده ۱۲۰ کیلوبایت
                    </p>
                  </div>
                  <div className="w-full lg:col-span-1 md:col-span-2 col-span-5 flex-col space-y-2 p-2">
                    <div className="w-full flex justify-center  rounded-sm relative bg-slate-100 ">
                      <div class="w-full image-col-bg bg-slate-500 absolute bottom-0 opacity-60 z-10 rounded-md rounded-t-none">
                        <div class="image-col-icons w-full h-full flex justify-center space-x-6 space-x-reverse">
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <Image
                        src={pdfImage}
                        className="rounded-sm w-full flex items-center justify-center overflow-hidden"
                        width="100"
                        height="100"
                      />
                    </div>
                    <h4 className="font-semibold md:text-sm text-xs text-slate-500">
                      آموزش دستگاه چوب بری x
                    </h4>
                    <p className="text-xs text-slate-500">
                      نحوه تعمیر و راه اندازی و تنظیمات اولیه دستگاه
                    </p>
                    <div className="w-full flex justify-between items-center ">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>

                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:col-span-1 md:col-span-2 col-span-5 flex-col space-y-2 p-2">
                    <div className="w-full flex justify-center  rounded-sm relative bg-slate-100 ">
                      <div class="w-full image-col-bg bg-slate-500 absolute bottom-0 opacity-60 z-10 rounded-md rounded-t-none">
                        <div class="image-col-icons w-full h-full flex justify-center space-x-6 space-x-reverse">
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <Image
                        src={pdfImage}
                        className="rounded-sm w-full flex items-center justify-center overflow-hidden"
                        width="100"
                        height="100"
                      />
                    </div>
                    <h4 className="font-semibold md:text-sm text-xs text-slate-500">
                      آموزش دستگاه چوب بری x
                    </h4>
                    <p className="text-xs text-slate-500">
                      نحوه تعمیر و راه اندازی و تنظیمات اولیه دستگاه
                    </p>
                    <div className="w-full flex justify-between items-center ">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>

                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:col-span-1 md:col-span-2 col-span-5 flex-col space-y-2 p-2">
                    <div className="w-full flex justify-center  rounded-sm relative bg-slate-100 ">
                      <div class="w-full image-col-bg bg-slate-500 absolute bottom-0 opacity-60 z-10 rounded-md rounded-t-none">
                        <div class="image-col-icons w-full h-full flex justify-center space-x-6 space-x-reverse">
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <Image
                        src={pdfImage}
                        className="rounded-sm w-full flex items-center justify-center overflow-hidden"
                        width="100"
                        height="100"
                      />
                    </div>
                    <h4 className="font-semibold md:text-sm text-xs text-slate-500">
                      آموزش دستگاه چوب بری x
                    </h4>
                    <p className="text-xs text-slate-500">
                      نحوه تعمیر و راه اندازی و تنظیمات اولیه دستگاه
                    </p>
                    <div className="w-full flex justify-between items-center ">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>

                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:col-span-1 md:col-span-2 col-span-5 flex-col space-y-2 p-2">
                    <div className="w-full flex justify-center  rounded-sm relative bg-slate-100 ">
                      <div class="w-full image-col-bg bg-slate-500 absolute bottom-0 opacity-60 z-10 rounded-md rounded-t-none">
                        <div class="image-col-icons w-full h-full flex justify-center space-x-6 space-x-reverse">
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                          <Link href="/">
                            <a>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 text-white opacity-100"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                ></path>
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <Image
                        src={pdfImage}
                        className="rounded-sm w-full flex items-center justify-center overflow-hidden"
                        width="100"
                        height="100"
                      />
                    </div>
                    <h4 className="font-semibold md:text-sm text-xs text-slate-500">
                      آموزش دستگاه چوب بری x
                    </h4>
                    <p className="text-xs text-slate-500">
                      نحوه تعمیر و راه اندازی و تنظیمات اولیه دستگاه
                    </p>
                    <div className="w-full flex justify-between items-center ">
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                      <div className="flex space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>

                        <span className="text-slate-500 text-xs">۱۲۰۰ </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default educational;
