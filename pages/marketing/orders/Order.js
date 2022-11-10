import React, { useState } from "react";
import Link from "next/link";
import style from "./Order.module.css";
import OrderTable from "./OrderTable";
import MarketingLayout from '../../../components/marketing/layout/MarketingLayout'
import MarketingMainHeader from '../../../components/marketing/marketingHeader/MarketingMainHeader'

const Order = () => {
  const [showOne, setShowOne] = useState(true);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);
  const [showFive, setShowFive] = useState(false);

  return (
    <>
      <div>
        <div className="business-panel-container">
          <div className="grid grid-cols-12 business-panel-cols bg-slate-100">
            <MarketingLayout/>
            <div className="relative col-span-12 overflow-hidden shadow-lg business-panel-mainbar md:col-span-10 shadow-slate-100">
              <MarketingMainHeader/>
              <div className="mainbar-content mt-10 md:col-span-9 col-span-12 md:pb-20 md:mr-3 md:px-0 px-4">
                <div className="max-w-screen-lg mx-auto mt-4">
                  <div id={style.gh_mainbar}>
                    <div className={style.gh_mainbarTitr}>
                      <h6 className="md:text-sm font-semibold text-[11px] text-slate-600">
                        سفارش مشتریان
                      </h6>
                      <p className="text-xs text-slate-500">
                        لیست سفارش های مشتریان به من (من یک فروشنده هستم)
                      </p>
                    </div>
                    <div className="flex md:flex-row flex-col md:justify-between mb-4 md:space-y-0 space-y-2">
                      <div class="md:w-[75%] w-full  input-group flex flex-row-reverse">
                        <input
                          type="text"
                          className="form-control placeholder:text-slate-500 text-xs"
                          aria-label="Text input with 2 dropdown buttons"
                          placeholder="جستجو نمایید"
                        />
                        <i className="bi bi-search absolute left-5 bottom-1 text-slate-500"></i>
                        <button
                          className="dropdown-toggle border border-gray-600 rounded-md rounded-l-none flex items-center"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="px-2 text-xs text-slate-600">انتخاب کنید</span>
                        </button>
                        <ul class="dropdown-menu text-right text-xs">
                          <li>
                            <a class="dropdown-item" href="#">
                              شماره سفارش
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              تاریخ ثبت سفارش{" "}
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              وضعیت پرداخت
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              سفارش دهنده{" "}
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              روش ارسال
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="filter-btn pr-4 flex justify-end ">
                        <Link href="/">
                          <a
                            className="md:px-6 px-4 py-1.5 bg-blue-500 hover:bg-blue-500 rounded-md flex items-center justify-center"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span className="md:text-xs text-[11px] text-white ">
                              فیلتر
                            </span>
                          </a>
                        </Link>
                        <div className="dropdown-menu p-2">
                          <div className="w-full h-full flex lg:flex-row flex-col items-center p-1 md:space-y-0 space-y-3">
                            <div className="md:w-[470px] md:mx-2">
                              <label className="flex text-xs text-right text-slate-600 lg:pr-2.5 mb-2">
                                تاریخ
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
                              </div>
                            </div>
                            <div className="w-full grid grid-cols-3 gap-2">
                              <div className="md:col-span-1 col-span-3">
                                <label className="flex text-xs text-right text-slate-700 px-2 mb-2">
                                  روش ارسال
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
                              <div className="md:col-span-1 col-span-3">
                                <label className="flex text-xs text-right text-slate-700 px-2 mb-2">
                                  تاخیر
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
                              <div className="w-full h-full search-btn flex items-center md:justify-end mt-2">
                                <Link href="/">
                                  <a className="px-4 py-1 bg-blue-500 hover:bg-blue-400 rounded-md">
                                    <span className="text-white text-xs">جستجو</span>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={style.gh_mobile}>
                      <div className={style.gh_container}>
                        <div className={style.gh_accordions}>
                          <div className={style.gh_accordion}>
                            <input
                              className={style.gh_inputCardsQuestion}
                              type="checkbox"
                              id="theTitrQAA"
                            />
                            <label className={style.gh_accLabel} htmlFor="theTitrQAA">
                              جاری
                            </label>
                            <div className={style.gh_accContent}>
                              <div>
                                <OrderTable />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={style.gh_container}>
                        <div className={style.gh_accordions}>
                          <div className={style.gh_accordion}>
                            <input
                              className={style.gh_inputCardsQuestion}
                              type="checkbox"
                              id="theTitrProduct"
                            />
                            <label className={style.gh_accLabel} htmlFor="theTitrProduct">
                              ارسال شده
                            </label>
                            <div className={style.gh_accContent}>
                              <div>
                                <OrderTable />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={style.gh_container}>
                        <div className={style.gh_accordions}>
                          <div className={style.gh_accordion}>
                            <input
                              className={style.gh_inputCardsQuestion}
                              type="checkbox"
                              id="theTitrMarketing"
                            />
                            <label
                              className={style.gh_accLabel}
                              htmlFor="theTitrMarketing"
                            >
                              تحویل شده
                            </label>
                            <div className={style.gh_accContent}>
                              <div>
                                <OrderTable />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={style.gh_container}>
                        <div className={style.gh_accordions}>
                          <div className={style.gh_accordion}>
                            <input
                              className={style.gh_inputCardsQuestion}
                              type="checkbox"
                              id="theTitrMarketing"
                            />
                            <label
                              className={style.gh_accLabel}
                              htmlFor="theTitrMarketing"
                            >
                              مرحوعی
                            </label>
                            <div className={style.gh_accContent}>
                              <div>
                                <OrderTable />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={style.gh_container}>
                        <div className={style.gh_accordions}>
                          <div className={style.gh_accordion}>
                            <input
                              className={style.gh_inputCardsQuestion}
                              type="checkbox"
                              id="theTitrMarketing"
                            />
                            <label
                              className={style.gh_accLabel}
                              htmlFor="theTitrMarketing"
                            >
                              لغو سفارش
                            </label>
                            <div className={style.gh_accContent}>
                              <div>
                                <OrderTable />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={style.gh_Computer}>
                      <div>
                        <nav id={style.gh_tabs}>
                          <ul className={style.gh_tabs}>
                            <li
                              style={{
                                backgroundColor: !showOne ? "#a0c4f6" : "#d6e6ff",
                                zIndex: !showOne ? 0 : 2,
                              }}
                              className={style.gh_tab}
                              onClick={() => {
                                setShowFive(false);
                                setShowFour(false);
                                setShowThree(false);
                                setShowTwo(false);
                                setShowOne(true);
                              }}
                            >
                              جاری
                            </li>
                            <li
                              style={{
                                backgroundColor: !showTwo ? "#a0c4f6" : "#d6e6ff",
                                zIndex: !showTwo ? 0 : 2,
                              }}
                              className={style.gh_tab}
                              onClick={() => {
                                setShowFive(false);
                                setShowFour(false);
                                setShowThree(false);
                                setShowTwo(true);
                                setShowOne(false);
                              }}
                            >
                              ارسال شده
                            </li>
                            <li
                              style={{
                                backgroundColor: !showThree ? "#a0c4f6" : "#d6e6ff",
                                zIndex: !showThree ? 0 : 2,
                              }}
                              className={style.gh_tab}
                              onClick={() => {
                                setShowFive(false);
                                setShowFour(false);
                                setShowThree(true);
                                setShowTwo(false);
                                setShowOne(false);
                              }}
                            >
                              تحویل شده
                            </li>
                            <li
                              style={{
                                backgroundColor: !showFour ? "#a0c4f6" : "#d6e6ff",
                                zIndex: !showFour ? 0 : 2,
                              }}
                              className={style.gh_tab}
                              onClick={() => {
                                setShowFive(false);
                                setShowFour(true);
                                setShowThree(false);
                                setShowTwo(false);
                                setShowOne(false);
                              }}
                            >
                              مرجوعی
                            </li>
                            <li
                              style={{
                                backgroundColor: !showFive ? "#a0c4f6" : "#d6e6ff",
                              }}
                              className={style.gh_tab}
                              onClick={() => {
                                setShowFive(true);
                                setShowFour(false);
                                setShowThree(false);
                                setShowTwo(false);
                                setShowOne(false);
                              }}
                            >
                              لغو سفارش
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div
                        className={style.gh_mainContent}
                        style={{ backgroundColor: "#d6e6ff" }}
                      >
                        {showOne ? (
                          <div>
                            <OrderTable />
                          </div>
                        ) : showTwo ? (
                          <div>
                            <OrderTable />
                          </div>
                        ) : showThree ? (
                          <div>
                            <OrderTable />
                          </div>
                        ) : showFour ? (
                          <div>
                            <OrderTable />
                          </div>
                        ) : showFive ? (
                          <div>
                            <OrderTable />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
