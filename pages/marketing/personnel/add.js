import React from "react";
import Link from "next/link";
import Image from "next/image";

const add = () => {
  return (
    <div>
      <section
        className="max-w-screen-lg mx-auto px-3 relative z-[9999] lg:mt-[85px] mt-[42px] overflow-hidden"
        dir="rtl"
      >
        <div className="px-3 overflow-hidden bg-white rounded-lg shadow-md ">
          <div className="flex flex-col my-4 add-personnel-title">
            <h5 className="font-semibold md:text-base taxt-sm">افزودن پرسنل</h5>
            <small className="text-slate-600 text-xs mt-0.5">
              اطلاعات عمومی صاحب کسب و کارها را وارد نمایید .
            </small>
          </div>
          <div className="">
            <div className="flex flex-col my-4 add-personnel-title">
              <h5 className="font-semibold md:text-base taxt-sm">
                اطلاعات شخصی
              </h5>
            </div>
            <div className="grid grid-cols-3 gap-2 p-3 bg-blue-100 rounded-md">
              <div className="col-span-3 md:col-span-1">
                <label className="px-2 mb-2 text-sm text-slate-700">نام</label>
                <div class="all-input-group input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="نام"
                  />
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <label className="px-2 mb-2 text-sm text-slate-700">
                  نام خانوادگی
                </label>
                <div class="all-input-group input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="نام خانوادگی"
                  />
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <label className="px-2 mb-2 text-sm text-slate-700">
                  کد ملی
                </label>
                <div class="all-input-group input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="کدملی"
                  />
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <label className="px-2 mb-2 text-sm text-slate-700">
                  تاریخ تولد
                </label>
                <div className="mb-3 all-input-group input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="تاریخ تولد "
                  />
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <label className="px-2 mb-2 text-sm text-slate-700">
                  استان محل تولد
                </label>
                <select
                  class="form-select form-select-text-style py-[0.575rem] pr-2"
                  aria-label="Default select example"
                >
                  <option selected> انتخاب کنید</option>
                  <option className="text-sm text-slate-400" value="1"></option>
                  <option className="text-sm text-slate-400" value="2"></option>
                  <option className="text-sm text-slate-400" value="3"></option>
                </select>
              </div>
              <div className="col-span-3 md:col-span-1">
                <label className="px-2 mb-2 text-sm text-slate-700">
                  شهر محل تولد
                </label>
                <select
                  class="form-select form-select-text-style py-[0.575rem] pr-2"
                  aria-label="Default select example"
                >
                  <option selected> انتخاب کنید</option>
                  <option className="text-sm text-slate-400" value="1"></option>
                  <option className="text-sm text-slate-400" value="2"></option>
                  <option className="text-sm text-slate-400" value="3"></option>
                </select>
              </div>
              <div className="col-span-3 md:col-span-1">
                <label className="px-2 mb-2 text-sm text-slate-700">
                  تلفن همراه
                </label>
                <div class="all-input-group input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="تلفن همراه"
                  />
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <label className="px-2 mb-2 text-sm text-slate-700">
                  تلفن ثابت
                </label>
                <div class="all-input-group input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="تلفن ثابت"
                  />
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <label className="px-2 mb-2 text-sm text-slate-700">
                  ایمیل
                </label>
                <div class="all-input-group input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ایمیل"
                  />
                </div>
              </div>
              <div className="col-span-3">
                <label className="px-2 text-base text-slate-700 ">آدرس</label>
              </div>
              <div className="col-span-3 md:col-span-1">
                <label className="px-2 mb-2 text-sm text-slate-700">
                  استان
                </label>
                <select
                  class="form-select form-select-text-style py-[0.575rem] pr-2"
                  aria-label="Default select example"
                >
                  <option selected> انتخاب کنید</option>
                  <option className="text-sm text-slate-400" value="1"></option>
                  <option className="text-sm text-slate-400" value="2"></option>
                  <option className="text-sm text-slate-400" value="3"></option>
                </select>
              </div>
              <div className="col-span-3 md:col-span-1">
                <label className="px-2 mb-2 text-sm text-slate-700">شهر</label>
                <select
                  class="form-select form-select-text-style py-[0.575rem] pr-2"
                  aria-label="Default select example"
                >
                  <option selected> انتخاب کنید</option>
                  <option className="text-sm text-slate-400" value="1"></option>
                  <option className="text-sm text-slate-400" value="2"></option>
                  <option className="text-sm text-slate-400" value="3"></option>
                </select>
              </div>
              <div className="col-span-3 md:col-span-1">
                <label className="px-2 mb-2 text-sm text-slate-700">
                  کدپستی
                </label>
                <div class="all-input-group input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="کدپستی"
                  />
                </div>
              </div>
              <div className="col-span-3">
                <textarea
                  id="message"
                  rows="1"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-blue-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="آدرس خود را وارد کنید ..."
                ></textarea>
              </div>
            </div>
            <h5 className="my-3 font-semibold md:text-base taxt-sm">
              اطلاعات سازمانی
            </h5>
            <div className="grid grid-cols-3 gap-2 p-3 bg-blue-100 rounded-md">
              <div className="col-span-3 md:col-span-2 ">
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="md:col-span-1 col-spa-2">
                    <label className="px-2 mb-2 text-sm text-slate-700">
                      کدپرسنلی
                    </label>
                    <div class="all-input-group input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=" کدپرسنلی"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-1 col-spa-2">
                    <label className="px-2 mb-2 text-sm text-slate-700">
                      رمز عبور
                    </label>
                    <div class="all-input-group input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=" رمز عبور"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-1 col-spa-2">
                    <label className="px-2 mb-2 text-sm text-slate-700">
                      نام کاربری
                    </label>
                    <div class="all-input-group input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="نام کاربری"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-1 col-spa-2">
                    <label className="px-2 mb-2 text-sm text-slate-700">
                      رمز عبور
                    </label>
                    <div class="all-input-group input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="رمز عبور"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-around w-full col-span-3 mt-3 md:col-span-1">
                <Link href="/">
                  <a className="h-[138px] ml-4 bg-white w-28 rounded-md border border-slate-100 flex flex-col items-center justify-center space-y-2">
                    <span className="text-xs text-slate-500 md:text-sm">
                      عکس پرسنلی
                    </span>
                    <i class="bi bi-cloud-upload text-lg text-slate-500"></i>
                  </a>
                </Link>
                <Link href="/">
                  <a className="h-[138px] ml-4 bg-white w-28 rounded-md border border-slate-100 flex flex-col items-center justify-center space-y-2">
                    <span className="text-xs text-slate-500 md:text-sm">
                      امضا
                    </span>
                    <i class="bi bi-cloud-upload text-lg text-slate-500"></i>
                  </a>
                </Link>
              </div>
            </div>
            <h5 className="my-3 font-semibold md:text-base taxt-sm">
              سطوح دسترسی
            </h5>
            <div className="flex flex-col bg-blue-100 rounded-md p-3">
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-3 md:col-span-1">
                  <label className="px-2 mb-2 text-sm text-slate-700">
                    سمت
                  </label>
                  <div class="all-input-group input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="صاحب کسب و کار"
                    />
                  </div>
                </div>
                <div className="col-span-3 md:col-span-2 flex items-center mt-3">
                  <label
                    for=""
                    class="ml-2 text-xs text-gray-900 dark:text-gray-300"
                  >
                    کلیه دسترسی ها
                  </label>
                  <input
                    id=""
                    type="checkbox"
                    class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                    value=""
                  />
                </div>
              </div>
              <div className="p-3 bg-white rounded-md border border-slate-300">
                <div className="w-full grid grid-cols-12 md:gap-3 gap-6 bg-white">
                  <div className="md:col-span-4 col-span-12 md:border-l md:border-slate-300">
                    <h5 className="my-3 md:text-base taxt-sm flex md:justify-center">
                      دسترسی پایه
                    </h5>
                    <div className="grid grid-cols-2">
                      <div className="chechbox-one md:col-span-1 col-span-2">
                        <ul class="md:w-full w-48 text-slate-600 space-y-2">
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                اطلاعات کاربری
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                بارگذاری
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                محصولات
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                مالی
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                پیام ها
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                ارتباط با ما
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="checkbox-two md:col-span-1 col-span-2">
                        <ul class="md:w-full w-48  text-slate-600 space-y-2">
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                دیدگاه ها
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                علاقه مندی ها
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                مقالات
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                مدیریت پرسنل
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full  text-xs text-gray-900 dark:text-gray-300"
                              >
                                شکایات
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                تنظیمات
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2 col-span-12 md:border-l md:border-slate-300">
                    <h5 className="w-full my-3 md:text-base taxt-sm flex md:justify-center">
                      ابزارها
                    </h5>
                    <ul class="md:w-full w-48 text-slate-600 space-y-2">
                      <li class="w-full">
                        <div class="flex items-center pl-3">
                          <label
                            for=""
                            class="w-full text-xs text-gray-900 dark:text-gray-300"
                          >
                            SMS
                          </label>
                          <input
                            id=""
                            type="checkbox"
                            class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                            value=""
                          />
                        </div>
                      </li>
                      <li class="w-full">
                        <div class="flex items-center pl-3">
                          <label
                            for=""
                            class="w-full text-xs text-gray-900 dark:text-gray-300"
                          >
                            CRM
                          </label>
                          <input
                            id=""
                            type="checkbox"
                            class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                            value=""
                          />
                        </div>
                      </li>
                      <li class="w-full">
                        <div class="flex items-center pl-3">
                          <label
                            for=""
                            class="w-full text-xs text-gray-900 dark:text-gray-300"
                          >
                            اتوماسیون
                          </label>
                          <input
                            id=""
                            type="checkbox"
                            class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                            value=""
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="md:col-span-4 col-span-12 md:border-l md:border-slate-300">
                    <h5 className="my-3 md:text-base taxt-sm flex md:justify-center">
                      دسترسی پایه
                    </h5>
                    <div className="grid grid-cols-2">
                      <div className="chechbox-four md:col-span-1 col-span-2">
                        <ul class="md:w-full w-48  text-slate-600 space-y-2">
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                حقوقی و قراردادی
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                مالیات
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                بازرسی فنی
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                دستیار کسب و کار
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                بیمه
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                تبلیغات
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="checkbox-five md:col-span-1 col-span-2">
                        <ul class="md:w-full w-48  text-slate-600 space-y-3">
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                گردشگری تجاری
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                          <li class="w-full">
                            <div class="flex items-center pl-3">
                              <label
                                for=""
                                class="w-full text-xs text-gray-900 dark:text-gray-300"
                              >
                                آموزش و توانمند سازی
                              </label>
                              <input
                                id=""
                                type="checkbox"
                                class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                                value=""
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2 col-span-12">
                    <h5 className="w-full my-3 md:text-base taxt-sm flex md:justify-center">
                      سفارشات
                    </h5>
                    <ul class="md:w-full w-48 text-slate-600 space-y-4">
                      <li class="w-full">
                        <div class="flex items-center pl-3">
                          <div className="flex flex-col w-full">
                            <label
                              for=""
                              class="w-full text-xs text-gray-900 dark:text-gray-300"
                            >
                              خرید
                            </label>
                            <small className="text-slate-500 text-[10px]">
                              سفارش های من از بازار
                            </small>
                          </div>
                          <input
                            id=""
                            type="checkbox"
                            class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                            value=""
                          />
                        </div>
                      </li>
                      <li class="w-full">
                        <div class="flex items-center pl-3">
                          <div className="flex flex-col w-full">
                            <label
                              for=""
                              class="w-full text-xs text-gray-900 dark:text-gray-300"
                            >
                              فروش
                            </label>
                            <small className="text-slate-500 text-[10px]">
                              در خواست های مشتریان
                            </small>
                          </div>
                          <input
                            id=""
                            type="checkbox"
                            class="w-5 h-5 text-slate-100 bg-white rounded border-gray-100 focus:ring-slate-100 dark:focus:ring-slate-200 focus:ring-1"
                            value=""
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h5 className="my-3 md:text-sm taxt-xs">نمایش سطوح دسترسی</h5>
                <div className="md:space-x-3 space-x-0.5 rtl:space-x-reverse">
                  <span className="md:px-6 px-3 md:py-2 py-1 bg-white border border-slate-300 md:text-sm text-[10px] rounded-md overflow-hidden">
                    اطلاعات کاربری
                  </span>
                  <span className="md:px-6 px-3 md:py-2 py-1 bg-white border border-slate-300 md:text-sm text-[10px] rounded-md overflow-hidden">
                    علاقه مندی ها
                  </span>
                  <span className="md:px-6 px-3 md:py-2 py-1 bg-white border border-slate-300 md:text-sm text-[10px] rounded-md overflow-hidden">
                    آموزش و توانمند سازی
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full end-save my-2 flex justify-end">
            <Link href="/">
              <a className="px-2 py-1 my-6 bg-blue-500 rounded-md hover:bg-blue-400">
                <span className="text-xs text-white">ثبت نهایی</span>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default add;
