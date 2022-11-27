import Link from "next/link";
import Image from "next/image";
import React from "react";
import MarketingUploadSide from "../../../components/marketing/layout/MarketingUploadSide";
import MarketingInfoHeader from "../../../components/marketing/marketingHeader/MarketingInfoHeader";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const signature = () => {
  const [url, seturl] = useState("https://dfgsdfgsdfgj32gsdg.mehrpol.com/");
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [rootFilesAddress, setrootFilesAddress] = useState();
  const [chooseFiles, setChooseFiles] = useState([]);
  const [slideId, setSlideId] = useState();
  const [Type, setType] = useState("slider");
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeLeteLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [allSlide, setAllSlide] = useState([]);
  const [dbSlideId, setDbSlideId] = useState(null);
  const [softDeleteModal, setSoftDeleteModal] = useState(false);
  const [managerAllInfos, setManagerAllInfos] = useState([]);

  const cookies = new Cookies();

  useEffect(() => {}, []);

  return (
    <div>
      <div className="business-panel-container">
        <div className="business-panel-cols flex grid-cols-12 bg-slate-100 ">
          <div>
            <MarketingUploadSide />
          </div>
          <div className="business-panel-mainbar w-100 lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative overflow-hidden">
            <MarketingInfoHeader />
            <section className="signature-container max-w-screen-md mx-auto lg:px-0 px-3 relative z-0 my-5">
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
                          <input
                            type="text"
                            name="managerName"
                            id="managerName"
                            placeholder="نام و نام خانوادگی..."
                            className="form-control text-sm text-slate-600 px-2 mb-2"
                          />
                        </div>
                        <div className="signature-select lg:col-span-3 col-span-12 mt-[21px]">
                          <label className="text-sm text-slate-600 px-2 mb-2">
                            محل استفاده از امضا
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
                      {/* ************************ */}
                      <div className="lg:col-span-4 md:col-span-4 col-span-12">
                        <lable className="text-sm text-slate-600 mb-2">
                          نمونه امضا
                        </lable>
                        <div className="w-full h-32 border border-slate-200 rounded-md relative">
                          <div className="image-col-bg  px-1 py-1 absolute left-0 opacity-60 z-0 rounded-md rounded-r-none">
                            <div className="image-col-icons w-full h-full flex flex-col items-center justify-center space-y-4">
                              <i class="bi bi-trash text-danger"></i>
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              alert("hi");
                            }}
                            className="text-slate-400 mt-14 mr-2 text-xs fon-semibold ml-3"
                          >
                            بارگذاری نمونه امضا
                            <i className="bi bi-cloud-arrow-up fs-5 mr-2"></i>
                          </button>
                          <span className="text-slate-500 text-xs fon-semibold bg-slate-100 p-2.5 rounded-tr-lg absolute top-0 right-0">
                            تایید شده
                          </span>
                        </div>
                      </div>
                      {/* ********************************** */}
                      <div className="lg:col-span-4 md:col-span-4 col-span-12 lg:lg:pr-6">
                        <div className="flex flex-col space-y-4 mt-4">
                          <div
                            type="button"
                            className="text-white bg-sky-600 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex items-center justify-center alls-input-group"
                          >
                            <i class="bi bi-check-circle"></i>
                            <button className="text-xs font-semibold mr-1.5">
                              دریافت کد تایید
                            </button>
                          </div>
                          <div>
                            <input
                              type="text"
                              id="small-input"
                              placeholder="کد تایید را وارد کنید"
                              className="block p-1.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                          <div
                            type="button"
                            className="text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex items-center justify-center dark:bg-blue-600"
                          >
                            <i class="bi bi-file-earmark-arrow-up"></i>

                            <button className="text-xs font-semibold mr-1.5">
                              ثبت نمونه امضا
                            </button>
                          </div>
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
                            {managerAllInfos.map(function (allinfo) {
                              return (
                                <option
                                  // key={allinfo.id}
                                  className="text-slate-600 text-sm"
                                  value={allinfo.id}
                                >
                                  {allinfo.first_name} {allinfo.last_name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="signature-select lg:col-span-3 col-span-12 mt-[21px]">
                          <label className="text-sm text-slate-600 px-2 mb-2">
                            محل استفاده از امضا
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
                      {/* ************************ */}
                      <div className="lg:col-span-4 md:col-span-4 col-span-12">
                        <lable className="text-sm text-slate-600 mb-2">
                          نمونه امضا
                        </lable>
                        <div className="w-full h-32 border border-slate-200 rounded-md relative">
                          <div className="image-col-bg  px-1 py-1 absolute left-0 opacity-60 z-0 rounded-md rounded-r-none">
                            <div className="image-col-icons w-full h-full flex flex-col items-center justify-center space-y-4">
                              <i class="bi bi-trash text-danger"></i>
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              alert("hi");
                            }}
                            className="text-slate-400 mt-14 mr-2 text-xs fon-semibold ml-3"
                          >
                            بارگذاری نمونه امضا
                            <i className="bi bi-cloud-arrow-up fs-5 mr-2"></i>
                          </button>
                          <span className="text-slate-500 text-xs fon-semibold bg-slate-100 p-2.5 rounded-tr-lg absolute top-0 right-0">
                            تایید شده
                          </span>
                        </div>
                      </div>
                      <div className="lg:col-span-4 md:col-span-4 col-span-12 lg:pr-6">
                        <div className="flex flex-col space-y-4 mt-4">
                          <button
                            type="button"
                            className="text-white bg-sky-600 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex items-center justify-center alls-input-group"
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
                            <i class="bi bi-file-earmark-arrow-up"></i>

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
                            {managerAllInfos.map(function (allinfo) {
                              return (
                                <option
                                  // key={allinfo.id}
                                  className="text-slate-600 text-sm"
                                  value={allinfo.id}
                                >
                                  {allinfo.first_name} {allinfo.last_name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      {/* ******************************* */}
                      {/* ************************ */}
                      <div className="lg:col-span-4 md:col-span-4 col-span-12">
                        <lable className="text-sm text-slate-600 mb-2">
                          نمونه مهر
                        </lable>
                        <div className="w-full h-32 border border-slate-200 rounded-md relative">
                          <div className="image-col-bg px-1 py-1 absolute left-0 opacity-60 z-0 rounded-md rounded-r-none">
                            <div className="image-col-icons w-full h-full flex flex-col items-center justify-center space-y-4">
                              {/* <Link href="#">
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
                              </Link> */}
                              <i class="bi bi-trash text-danger"></i>
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              alert("hi");
                            }}
                            className="text-slate-400 mt-14 mr-2 text-xs fon-semibold ml-3"
                          >
                            بارگذاری نمونه امضا
                            <i className="bi bi-cloud-arrow-up fs-5 mr-2"></i>
                          </button>
                          <span className="text-slate-500 text-xs fon-semibold bg-slate-100 p-2.5 rounded-tr-lg absolute top-0 right-0">
                            تایید شده
                          </span>
                        </div>
                      </div>
                      {/* *********************** */}
                      <div className="lg:col-span-4 md:col-span-4 col-span-12 lg:pr-6">
                        <div className="flex flex-col space-y-4 mt-4">
                          <button
                            type="button"
                            className="text-white bg-sky-600 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center inline-flex items-center justify-center alls-input-group"
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
                            <i class="bi bi-file-earmark-arrow-up"></i>

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
                <div className="next-btn mb-2 w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center ">
                  {loading && (
                    <>
                      <span className="ml-2 text-primary">...Loading</span>
                      <div
                        className="spinner-grow text-primary ml-2"
                        role="status"
                      ></div>
                    </>
                  )}
                  <button
                    // onClick={InsertIntoPermission}
                    className="text-white bg-blue-600 btn btn-primary  hover:bg-blue-700 rounded-md IranSanse  font-bold ml-2 "
                    type="submit"
                  >
                    ثبت
                  </button>
                  <button className="text-white bg-blue-600 btn btn-primary  hover:bg-blue-700 rounded-md IranSanse  font-bold ml-2">
                    مرحله بعد
                  </button>
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
