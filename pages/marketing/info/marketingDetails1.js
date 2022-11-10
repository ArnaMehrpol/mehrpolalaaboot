import Link from "next/link";
import Image from "next/image";
import React from "react";
import MarketingInfoSide from "../../../components/marketing/layout/MarketingInfoSide";
import MarketingInfoHeader from "../../../components/marketing/marketingHeader/MarketingInfoHeader";

const info = () => {
  return (
    <div className="mx-auto">
      <div className="business-panel-container">
        <div className="business-panel-cols flex bg-slate-100 ">
          <div>
            <MarketingInfoSide/>
          </div>
          <div className="business-panel-mainbar w-100 lg:col-span-9 col-span-12 shadow-lg shadow-slate-100 relative">
            <MarketingInfoHeader/>
            
            <section className="info-container max-w-screen-md mx-auto flex justify-center items-center relative z-[] my-5">
              <div className="info-form bg-white overflow-hidden roundde-lg shadow-md px-5">
                <div className="info-title flex flex-col my-4">
                  <h5 className="text-base font-semibold text-slate-600">
                    اطلاعات کسب و کار
                  </h5>
                  <small className="text-slate-500 text-xs mt-0.5">
                    اطلاعات کسب و کار خود را در این قسمت وارد کنید{" "}
                  </small>
                </div>
                <div className="info">
                  <div className="info-grid grid grid-cols-12 gap-3">
                    <div className="info-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        نام کسب و کار
                      </label>
                      <div class="all-input-group input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="نام کسب و کار"
                        />
                      </div>
                    </div>
                    <div className="info-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        سال تاسیس
                      </label>
                      <div class="all-input-group input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="سال تاسیس"
                        />
                      </div>
                    </div>
                    <div className="info-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        بارگذاری لوگو
                      </label>
                      <div class="all-input-group input-group">
                        <input
                          type="file"
                          id="formFile"
                          className="form-control info-form-control"
                          lang="fa"
                          placeholder="بارگذاری لوگو"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="info-grid grid grid-cols-12 gap-3">
                    <div className="info-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        دسته کسب و کار
                      </label>
                      <select
                        class="form-select form-select-text-style py-[0.675rem]"
                        aria-label="Default select example"
                      >
                        <option selected>دسته را انتخاب کنید</option>
                        <option className="text-slate-400 text-sm" value="1">
                          کشاورزی
                        </option>
                        <option className="text-slate-400 text-sm" value="2">
                          کالای دیجیتال
                        </option>
                        <option className="text-slate-400 text-sm" value="3">
                          آرایشی و بهداشتی
                        </option>
                      </select>
                    </div>
                    <div className="info-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        حوزه کسب و کار
                      </label>
                      <select
                        class="form-select form-select-text-style py-[0.675rem]"
                        aria-label="Default select example"
                      >
                        <option selected>حوزه را انتخاب کنید</option>
                        <option className="text-slate-400 text-sm" value="1">
                          تاسیسات
                        </option>
                        <option className="text-slate-400 text-sm" value="2">
                          لوازم خانگی
                        </option>
                        <option className="text-slate-400 text-sm" value="3">
                          صنایع چوبی
                        </option>
                      </select>
                    </div>
                    <div className="info-input lg:col-span-4 col-span-12">
                      <label className="text-sm text-slate-700 px-2 mb-2">
                        شاخه کسب و کار
                      </label>
                      <select
                        class="form-select form-select-text-style py-[0.675rem]"
                        aria-label="Default select example"
                      >
                        <option selected>شاخه را انتخاب کنید</option>
                        <option className="text-slate-400 text-sm" value="1">
                          گوشی موبایل
                        </option>
                        <option className="text-slate-400 text-sm" value="2">
                          کابینت
                        </option>
                        <option className="text-slate-400 text-sm" value="3">
                          کفش ورزشی زنانه
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="domain mt-4">
                  <div className="domain-title flex flex-col mb-2">
                    <h5 className="text-base font-semibold">دامنه</h5>
                    <span className="bg-blue-500 w-7 h-4 rounded-tl rounded-br absolute right-[83px]"></span>
                    <div className="grid grid-cols-6 gap-3">
                      <div className="lg:col-span-3 col-span-6">
                        <small className="text-xs text-slate-400">
                          الف - اگردارای دامنه اختصاصی می باشید ،دامنه خود را
                          ثبت کنید.
                        </small>
                      </div>
                      <div className="lg:col-span-3 col-span-6">
                        <small className="text-xs text-slate-400">
                          ب - استفاده از پیشوند دامنه مهرپل
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="domain-grid grid grid-cols-12 gap-3">
                    <div className="domain-input lg:col-span-6 col-span-12">
                      <div class="alls-input-group input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="-------------------.WWW"
                        />
                      </div>
                    </div>
                    <div className="domain-input lg:col-span-6 col-span-12">
                      <div class="alls-input-group input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="/----WWW.MEHRPOL.COM"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="email mt-2">
                  <div className="email-title flex flex-col mb-2">
                    <h5 className="text-base font-semibold">ایمیل</h5>
                  </div>
                  <div className="email-grid grid grid-cols-12 gap-3">
                    <div className="email-input lg:col-span-6 col-span-12">
                      <div class="alls-input-group input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="------------------- info@"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-address mt-2">
                  <div className="panel-address-title flex flex-col mb-2">
                    <h5 className="text-base font-semibold">آدرس</h5>
                  </div>
                  <div className="panel-address-grid grid grid-cols-12 gap-3 mb-3">
                    <div className="panel-address-input lg:col-span-4 col-span-12">
                      <select
                        class="form-select form-select-text-style py-[0.675rem]"
                        aria-label="Default select example"
                      >
                        <option selected>کارخانه ، دفتر مرکزی ...</option>
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
                    <div className="panel-address-input lg:col-span-2 col-span-12">
                      <select
                        class="form-select form-select-text-style py-[0.675rem]"
                        aria-label="Default select example"
                      >
                        <option selected>استان</option>
                        <option className="text-slate-400 text-sm" value="1">
                          تاسیسات
                        </option>
                        <option className="text-slate-400 text-sm" value="2">
                          لوازم خانگی
                        </option>
                        <option className="text-slate-400 text-sm" value="3">
                          صنایع چوبی
                        </option>
                      </select>
                    </div>
                    <div className="panel-address-input lg:col-span-2 col-span-12">
                      <select
                        class="form-select form-select-text-style py-[0.675rem]"
                        aria-label="Default select example"
                      >
                        <option selected>شهر</option>
                        <option className="text-slate-400 text-xs" value="1">
                          تهران
                        </option>
                        <option className="text-slate-400 text-xs" value="2">
                          اصفهان
                        </option>
                        <option className="text-slate-400 text-xs" value="3">
                          یزد{" "}
                        </option>
                      </select>
                    </div>
                    <div className="panel-address-btn lg:col-span-4 col-span-12 border border-slate-500 overflow-hidden rounded-md">
                      <Link href="/">
                        <a
                          className="h-full panel-address-link rounded-md flex items-center justify-center"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          <span className="text-xs text-slate-400">
                            ثبت موقعیت مکانی روی نقشه
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-slate-400 mx-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </a>
                      </Link>

                      <div
                        class="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="staticBackdropLabel">
                                Modal title
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">...</div>
                            <div class="modal-footer">
                              <button
                                className="btn btn-danger px-4 py-2 text-xs"
                                data-bs-dismiss="modal"
                              >
                                بستن
                              </button>
                              <button className="btn btn-primary px-4 py-2 text-xs">
                                ثبت
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="modal" tabindex="-1">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title">Modal title</h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <p>Modal body text goes here.</p>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel-address-grid grid grid-cols-12 gap-3">
                    <div className="panel-address-input lg:col-span-9 col-span-12">
                      <div class="panel-address-input-group input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="آدرس پستی"
                        />
                      </div>
                    </div>
                    <div className="panel-code-input lg:col-span-3 col-span-12">
                      <div class="panel-code-input-group input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="کدپستی"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-phone mt-2">
                  <div className="panel-phone-title flex flex-col mb-4">
                    <h5 className="text-base font-semibold">تلفن</h5>
                  </div>
                  <div className="panel-phone-grid grid grid-cols-12 gap-5 mb-3">
                    <div className="lg:col-span-5 col-span-12 gap-3 flex">
                      <div className="panel-phone-input lg:col-span-3 col-span-5">
                        <div class="all-input-group input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="------------ کدشهر"
                          />
                        </div>
                      </div>
                      <div className="group panel-phone-btn lg:col-span-2 col-span-5 ">
                        <Link href="/">
                          <a className="panel-phone-link w-24 h-full bg-amber-500 hover:bg-amber-400 rounded-md inline-flex items-center justify-center border border-slate-500 overflow-hidden px-2 group-hover:border-none group-hover:bg-blue-500">
                            <span className="text-xs text-white font-semibold group-hover:text-white">
                              افزودن
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-white font-semibold group-hover:text-white mx-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-span-7 flex lg:mr-auto lg:mt-0 -mt-8">
                      <div className="lg:col-span-2 col-span-3 ml-3">
                        <div className="save-btn flex justify-end items-end mt-2">
                          <Link href="/">
                            <a className="px-3.5 py-1 bg-blue-500 hover:bg-blue-400 rounded-md">
                              <span className="text-white text-xs">
                                ثبت آدرس
                              </span>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="lg:col-span-2 col-span-3 ">
                        <div className="save-btn flex justify-end items-end mt-2">
                          <Link href="/">
                            <a className="px-3.5 py-1 bg-blue-500 hover:bg-blue-400 rounded-md">
                              <span className="text-white text-xs">
                                نمایش آدرس
                              </span>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="lg:col-span-3 col-span-1"></div>
                    </div>
                  </div>
                </div>
                <div className="next-btn w-full h-full border-t-2 border-dotted border-slate-100 flex justify-end items-center">
                  <Link href="/aa/user-info/about">
                    <a className="px-2 py-1 bg-blue-500 hover:bg-blue-400 rounded-md my-6">
                      <span className="text-white text-xs">
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

export default info;
